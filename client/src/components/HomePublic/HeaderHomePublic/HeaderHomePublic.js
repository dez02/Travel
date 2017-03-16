import React, { Component } from 'react';
import './headerhomepublic.css';
import BackgroundHome from './../../Images/headerPublicHome.jpg';
import LogoBet from './../../Images/logo.png'

class HeaderHomePublic extends Component {

    // inserer fonction js avec syntaxe REACT
  render() {

    return (
    <div className="HeaderHomePublic">
    <img className="logoBet" src={LogoBet} alt="BetandGo"/>
		<h1>Prêt pour l'aventure?</h1>
      </div>
    );
  }


}


export default HeaderHomePublic;
