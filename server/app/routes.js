'use strict';

const {Router} = require('express');
const bodyParser = require('body-parser');

// Schemas
const User = require('./models/user');
const Travel = require('./models/travel');

// Create mini app for API
const apiRouter = new Router();

// App config
apiRouter.use(bodyParser.urlencoded({extended: true}));
apiRouter.use(bodyParser.json());

// Access to /api/
apiRouter.get('/', (req, res) => {
  res.json('Hello in my great API');
});

// Route to /api/users
apiRouter.route('/users')
// See all users
  .get((req, res) => {
  User.find({}, (err, users) => {
    if (err) {
      throw err;

    }
    res.json(users);
  });
})
// Add new user
  .post((req, res) => {
  var user = new User;
  user.firstName = req.body.prenom;
  user.lastName = req.body.nom;
  user.mail = req.body.mail;
  user.password = req.body.motdepasse;
  user.admin = false;

  user.save(err => {
    if (err) {
      if (err.code == 11000) {
        return res.json({success: false, message: "L'utilisateur existe déjà"});
      } else {
        return res.send(err);
      }
    }
    // Redirige vers Home Public quand utilisateur validé.
	// res.send(this.password);
	res.redirect('/#/home');
  });
});

// See user profile, update or delete
apiRouter.route('/user/:user_id').get((req, res) => {
  User.findById(req.params.user_id, (err, user) => {
    if (err) {
      throw err;
    }
    res.json(user);
  });
});

// Route tu /api/travels
apiRouter.get('/travels', (req, res) => {
  Travel.find({}, (err, travels) => {
    if (err) {
      throw err;
    }
    res.json(travels);
  });
});

module.exports = apiRouter;
