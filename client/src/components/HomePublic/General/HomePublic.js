import React, { Component } from 'react';
import NavBar from '.././NavBar/NavBar.js';
import homepublic from './homepublic.css';
import HeaderHomePublic from '.././HeaderHomePublic/HeaderHomePublic.js';
import SectionHome from '.././SectionHome/SectionHome.js';
import Login from '.././Login/Login.js';
import Footer from '../../Footer/Footer.jsx';

class HomePublic extends Component {


  render() {
    console.log('start app');
    return (
      <div className="">
        <NavBar/>
        <HeaderHomePublic/>
        <SectionHome/>
        <div className="loginDiv">
        <Login/>
        <Footer/>
        </div>
      </div>
     
    );
  }
}

export default HomePublic;
