// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const request = require('request');
const bodyParser = require('body-parser');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app.use('/api/employee/', (req, res) => {
  console.log('Url: ', req.url)
  const url = 'http://localhost:8080/employee' + req.url;
  req.pipe(request(url)).pipe(res);
});

app.use(express.static(path.join(__dirname, '/../dist')));

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













