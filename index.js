const express = require('express');
const mongoose = require('mongoose');
const User = require('./server/app/models/user');
const Travel = require('./server/app/models/travel');

// Link To Database
mongoose.connect('mongodb://admin:simplonco@ds129720.mlab.com:29720/travel');

const app = express();
// tell the app to look for static files in these directories
app.use(express.static('./server/static/'));
app.use(express.static('./client/dist/'));


// Create mini app for API
apiRouter = express.Router();

apiRouter.get('/users', (req, res) => {
	User.find({}, (err, users) => {
		if (err) throw err;

		res.json(users);
	});
});

apiRouter.get('/travels', (req, res) => {
	Travel.find({}, (err, travels) => {
		if (err) throw err;

		res.json(travels);
	});
});

app.use('/api', apiRouter);

// start the server
app.listen(process.env.PORT || 8080, () => {
  console.log('Server is running on http://localhost:8080 or http://127.0.0.1:8080');
});
