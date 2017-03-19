import React from 'react';
import ReactDOM from 'react-dom';
import HomePublic from './components/HomePublic/General/HomePublic.js';
import UsersHome from './components/UsersHome/GeneralUsersHome/UsersHome.jsx';
import NavBar from './components/HomePublic/NavBar/NavBar';
import FicheProduit from './components/FicheProduit/FicheProduit.jsx';

import {Router, Route, hashHistory} from 'react-router';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={HomePublic}></Route>
    {/* <Route path="/home" component={UsersHome}></Route> */}
    <Route path="/home/:user_id" component={UsersHome}></Route>
    {/* <Route path="/product" component={FicheProduit}></Route> */}
    <Route path="/product/:user_id/:travel_category" component={FicheProduit}></Route>
  </Router>
), document.getElementById('react-app'))
