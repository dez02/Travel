import React from 'react';
import ReactDOM from 'react-dom';
import HomePublic from './components/HomePublic/General/HomePublic.js';
import UsersHome from './components/UsersHome/GeneralUsersHome/UsersHome.jsx';
import NavBar from './components/HomePublic/NavBar/NavBar';

import {Router, Route, hashHistory} from 'react-router';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={HomePublic}></Route>
    <Route path="/home" component={UsersHome}></Route>
  </Router>
), document.getElementById('react-app'))