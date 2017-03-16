const express = require('express');
const app = express();
const apiRouter = require('./server/app/routes');
const mongoose = require('mongoose');
const morgan = require('morgan');
const port = process.env.PORT || 8080; // Define server PORT

// Link To Database
// mLab database
mongoose.connect('mongodb://admin:simplonco@ds129720.mlab.com:29720/travel');
// Local database just for dev
// mongoose.connect('mongodb://localhost:27017/test2');

// tell the app to look for static files in these directories
app.use(express.static('./server/static/'));
app.use(express.static('./client/dist/'));


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type,Authorization');
  next();
});

// Log all requests to the console
app.use(morgan('dev'));

// API ROUTER
app.use('/api', apiRouter);

// start the server
app.listen(port, err => {
  console.log('Server is running on http://localhost:8080 or http://127.0.0.1:8080');
});
