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
  user.name = req.body.name;
  user.username = req.body.username;
  user.password = req.body.password;
  user.admin = false;

  user.save(err => {
    if (err) {
      if (err.code == 11000) {
        return res.json({success: false, message: "L'utilisateur existe déjà"});
      } else {
        return res.send(err);
      }
    }
    res.json({message: "GG ! L'utilisateur est ajouté !"});
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

// Define static route to API
app.use('/api', apiRouter);

// start the server
app.listen(port, err => {
  if (err) {
    return console.error(err);
  }

  console.log('Server is running on http://localhost:8080 or http://127.0.0.1:8080');
});
