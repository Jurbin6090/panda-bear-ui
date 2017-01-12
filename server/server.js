// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const request = require('request');
const bodyParser = require('body-parser');
const fs = require('fs');
const passport = require('passport')
const proxy = require('express-http-proxy')
const BamboohrStrategy = require('passport-bamboohr').Strategy
const urlParser = require('url')

const app = express();

const staticRoot = path.join(__dirname, '/../dist')


//If something happens, log an error before we crash.
process.on('uncaughtException', function(err){
  console.error('uncaughtException: ' + err.message);
  console.error(err.stack);
  process.exit(1);
});

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//TODO: Get api key and test this
app.use(passport.initialize());
app.use(passport.session());

passport.use(new BamboohrStrategy({
    apiKey: "ApiKeyGoesHere"
  },
  (username, done) => {
    //TODO: Look up roles here

    console.log("Authenticated user: ", username)

    done(null, {})
  }
));

//TODO: Use auth when we have the api key
const auth = passport.authenticate('bamboohr')

const env = process.env.NODE_ENV || 'dev';
const prod = env === 'production'

console.log('Env: ', env, ' Is prod: ', prod)

// Set our api routes
app.use('/api/employee/', proxy(prod ? 'panda-bear:8080' : 'localhost:8080', {
  forwardPath: function(req, res) {
    return '/employee' + urlParser.parse(req.url).path;
  }
}));

app.use('/api/deployment/',  proxy(prod ? 'polar-bear:8088' : 'localhost:8088', {
  forwardPath: function(req, res) {
    return '/deployment' + urlParser.parse(req.url).path;
  }
}));

app.use('/api/project/', proxy(prod ? 'grizzly-bear:8085' : 'localhost:8085', {
  forwardPath: function(req, res) {
    return '/project' + urlParser.parse(req.url).path;
  }
}));

app.use('/api/client/', proxy(prod ? 'grizzly-bear:8085' : 'localhost:8085', {
  forwardPath: function(req, res) {
    return '/client' + urlParser.parse(req.url).path;
  }
}));


app.use(express.static(staticRoot));

app.use(function(req, res, next){
  // if the request is not html then move along
  const accept = req.accepts('html', 'json', 'xml');
  if(accept !== 'html'){
    return next();
  }

  // if the request has a '.' assume that it's for a file, move along
  const ext = path.extname(req.path);
  if (ext !== ''){
    return next();
  }
  fs.createReadStream(staticRoot + '/index.html').pipe(res);
});


/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));













