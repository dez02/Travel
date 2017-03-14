const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./server/app/models/user');
const Travel = require('./server/app/models/travel');
const port = process.env.PORT || 8080; // Define server PORT

// Link To Database
mongoose.connect('mongodb://admin:simplonco@ds129720.mlab.com:29720/travel');


// tell the app to look for static files in these directories
app.use(express.static('./server/static/'));
app.use(express.static('./client/dist/'));

// App config
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type,Authorization');
	next();
});


// =============================================================
// ===================     API ROUTER    ======================
// =============================================================

// Create mini app for API
apiRouter = express.Router();

// Define static route to API
app.use('/api', apiRouter);

// Access to /api/
apiRouter.get('/', (req, res) => {
  res.json('Hello in my great API');
});

// Route to /api/users
apiRouter.route('user').get((req, res) => {
  User.find({}, (err, users) => {
    if (err) {
      res.send(err);
    }

    res.json(users);
  });
}).post((req, res) => {
  var user = new User;
  user.name = req.body.name;
  user.username = req.body.username;
  user.password = req.body.password;
  user.admin = false;
});

// Route tu /api/travels
apiRouter.get('/travels', (req, res) => {
  Travel.find({}, (err, travels) => {
    if (err) {
      res.send(err);
    }

    res.json(travels);
  });
});



// start the server
app.listen(port, err => {
  if (err) {
    return console.error(err);
  }

  console.log('Server is running on http://localhost:8080 or http://127.0.0.1:8080');
});
