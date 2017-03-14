const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./server/app/models/user');
const Travel = require('./server/app/models/travel');

// Create mini app for API
apiRouter = express.Router();

// Define static route to API
app.use('/api', apiRouter);

// Access to /api/
apiRouter.get('/', (req, res) => {
	res.json({'Hello in my great API'});
});

// Route to /api/users
apiRouter.route('user')
	.get((req, res) => {
	  User.find({}, (err, users) => {
	    if (err)
	      throw err;

	    res.json(users);
	  });
	})
	.post((req, res) => {
		var user = new User;
		user.name = req.body.name;
		user.username = req.body.username;
		user.password = req.body.password;
		user.admin = false;
	});

// Route tu /api/travels
apiRouter.get('/travels', (req, res) => {
  Travel.find({}, (err, travels) => {
    if (err)
      throw err;

    res.json(travels);
  });
});

module.exports = Routes;
