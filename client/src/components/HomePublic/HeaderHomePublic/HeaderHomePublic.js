import React, { Component } from 'react';
import './headerhomepublic.css';
import BackgroundHome from './../../Images/headerPublicHome.jpg';

class HeaderHomePublic extends Component {
 
    // inserer fonction js avec syntaxe REACT
  render() {

    return (
    <div className="HeaderHomePublic">
      <img src={BackgroundHome} className="HeaderHomeBack" alt="BetngoHome"/>
      </div>
    );
  }


}


export default HeaderHomePublic;