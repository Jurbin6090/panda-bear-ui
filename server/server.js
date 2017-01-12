// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const request = require('request');
const bodyParser = require('body-parser');
const fs = require('fs');
const passport = require('passport')
const BamboohrStrategy = require('passport-bamboohr').Strategy

const app = express();

const staticRoot = path.join(__dirname, '/../dist')






// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//TODO: Get api key and test this
app.use(passport.initialize());passport.use(new BamboohrStrategy({
    apiKey: ""
  },
  (username, done) => {
    //TODO: Look up roles here

    console.log("Authenticated user: ", username)

    done(null, {})
  }
));
app.use(passport.session());

//TODO: Use auth when we have the api key
const auth = passport.authenticate('bamboohr')


// Set our api routes
app.use('/api/employee/', (req, res) => {
  const url = 'http://localhost:8080/employee' + req.url;
  req.pipe(request(url)).pipe(res);
});

app.use('/api/deployment/',(req, res) => {
  const url = 'http://localhost:8088/deployment' + req.url;
  req.pipe(request(url)).pipe(res);
});

app.use('/api/project/', (req, res) => {
  const url = 'http://localhost:8085/project' + req.url;
  req.pipe(request(url)).pipe(res);
});

app.use('/api/client/', (req, res) => {
  const url = 'http://localhost:8085/client' + req.url;
  req.pipe(request(url)).pipe(res);
});


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













