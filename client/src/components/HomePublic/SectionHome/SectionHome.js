import React, {Component} from 'react';
import './sectionhome.css';

class SectionHome extends Component {

  // inserer fonction js avec syntaxe REACT
  render() {

    return (
      <div className="SectionHome">
        <div className="SectionHome-description">
          <h2 className="SectionHome-title">Es-tu vraiment joueur quand il s'agit de partir en vacances?</h2>
          <p>Ici on te propose de <span>choisir à ta place</span> !</p>
          <p>C'est simple, tu t'enregistres, tu achètes un ticket en nous précisant si tu préfère passer tes vacances à te faire masser, faire la fête à <span>Vegas</span>, te glisser dans la peau d' <span>Indiana Jones</span> ou t'immerger dans la vie des berger de la <span>Cordière des Andes</span>...Et tu nous laisse faire le reste !</p>
        </div>
        <p className="SectionHome-subtitle">Tu pourrais tomber sur des voyages de ce type :</p>
        <div className="GroupHomeItem">
          <div className="HomeItem">
            <div className="HomeCard"></div>
            <div>
              <h2>La tournée des bars à Bragh !</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique voluptatem architecto saepe sit suscipit omnis natus officia.</p>
            </div>
          </div>
          <div className="HomeItem">
            <div className="HomeCard"></div>
            <div>
              <h2>Nager à Boston !</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique voluptatem architecto saepe sit suscipit omnis natus officia.</p>
            </div>
          </div>
          <div className="HomeItem">
            <div className="HomeCard"></div>
            <div>
              <h2>Se prélasser à Rome !</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique voluptatem architecto saepe sit suscipit omnis natus officia.</p>
            </div>
          </div>
        </div>
        <button>Rejoins-nous</button>
      </div>
    );
  }

}

export default SectionHome;
