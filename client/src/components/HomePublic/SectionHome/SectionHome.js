import React, { Component } from 'react';
import './sectionhome.css';

class SectionHome extends Component {
 
    // inserer fonction js avec syntaxe REACT
  render() {

    return (
    <div className="SectionHome">
        <h2>Es-tu vraiment joueur quand il s'agit de partir en vacances?</h2>
        <h3>Ici on te propose de choisir à ta place</h3>
        <h3>C'est simple, tu t'enregistres, tu achètes un ticket et tu nous laisse faire le reste</h3>
        <h4>Quelques exemples de notre catalogue</h4>
        <div className="GroupHomeItem">
            <div className="HomeItem"></div>
            <div className="HomeItem"></div>
            <div className="HomeItem"></div>
        </div>
        <button>Rejoins-nous</button>
      </div>
    );
  }


}


export default SectionHome;