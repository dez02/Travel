import React, { Component } from 'react';
import './sectionhome.css';
import imageBragh from './../../Images/bragh.jpg';
import imageBoston from './../../Images/boston.jpg';
import imageRome from './../../Images/rome.jpg';

class SectionHome extends Component {
 
    // inserer fonction js avec syntaxe REACT
  render() {

    return (
    <div className="SectionHome">
        <h2>Es-tu vraiment joueur quand il s'agit de partir en vacances?</h2>
        <h3>Ici on te propose de choisir à ta place</h3>
        <h3>C'est simple, tu t'enregistres, tu achètes un ticket et tu nous laisse faire le reste</h3>
        <h4>Tu pourrais tomber sur des voyages de ce type :</h4>
        <div className="GroupHomeItem">
            <div className="HomeItem">
              <img src={imageBragh} className="HomeCard" alt="travelBetnGo"/>
              <h2>La tournée des bars à Bragh !</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique voluptatem architecto saepe sit suscipit omnis natus officia.</p>
            </div>
            <div className="HomeItem">
              <img src={imageBoston} className="HomeCard" alt="travelBetnGo"/>
              <h2>Nager à Boston !</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique voluptatem architecto saepe sit suscipit omnis natus officia.</p>
            </div>
            <div className="HomeItem">
              <img src={imageRome} className="HomeCard" alt="travelBetnGo"/>
              <h2>Se prélasser à Rome !</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique voluptatem architecto saepe sit suscipit omnis natus officia.</p>
            </div>
        </div>
        <button>Rejoins-nous</button>
      </div>
    );
  }


}


export default SectionHome;