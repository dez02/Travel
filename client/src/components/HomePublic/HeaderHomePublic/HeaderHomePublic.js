import React, { Component } from 'react';
// import { Parallax, Background } from 'react-parallax';
import './headerhomepublic.css';
import BackgroundHome from './../../Images/headerPublicHome.jpg';
import LogoBet from './../../Images/logo.png';
// import FxScroll from './../FX/FxScroll.js';

class HeaderHomePublic extends Component {

    // inserer fonction js avec syntaxe REACT
  render() {

    return (

        <div className="HeaderHomePublic">
          <img className="logoBet" src={LogoBet} alt="BetandGo"/>
		      <h1 className="HomeH1">PRET POUR L'AVENTURE?</h1>
        </div>

    );
  }
}


export default HeaderHomePublic;
