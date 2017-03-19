'use strict';

const {Router} = require('express');
const bodyParser = require('body-parser');

// Schemas
const User = require('./models/user');
const Travel = require('./models/travel');
const Reservation = require('./models/reservation');

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
   // res.redirect('/#/home');
	res.redirect(`/#/home/:${user._id}`);
  });
});

// See user profile, update or delete
apiRouter.route('/user/:user_id')
   .get((req, res) => {
     User.findById(req.params.user_id, (err, user) => {
   	// if (user == undefined) {
   	// 	res.redirect('/#/');
   	// } else {
   		if (err) {
   			throw err;
   		}
   		res.json(user);
     });
   });

// Route tu /api/travels
apiRouter.route('/travels/:travel_category')
   .get((req, res) => {
      Travel.count({category : req.params.travel_category}, (err, count) => {
         if (err) return err;
         console.log(count);

         let randomNumb = Math.floor(Math.random() * count);
         console.log(randomNumb);

         Travel.find({category : req.params.travel_category}, (err, rdmTravel) => {
            if (err) {
               throw err;
            }
            res.json(rdmTravel);
            // res.redirect("/#/product");
         })
         .limit(1)
         .skip(randomNumb);
      });
});

apiRouter.route('/reservation/:user_id/:travel_id')
   .post((req, res) => {
   var reservation = new Reservation;
   reservation.userId = req.params.user_id;
   reservation.travelId = req.params.travel_id;

   reservation.save(err => {
     if (err) {
       if (err.code == 11000) {
         return res.json({success: false, message: "La reservation existe déjà"});
       } else {
         return res.send(err);
       }
     }
     // Redirige vers Home Public quand utilisateur validé.
 	// res.send(this.password);
    // res.redirect('/#/home');
 	res.redirect(`/#/home/:${reservation.userId}`);
   });
 });

module.exports = apiRouter;
