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
          <p>C'est simple, tu t'enregistres, tu achètes un ticket en nous précisant si tu préfères passer tes vacances à te faire masser, faire la fête à <span>Vegas</span>, te glisser dans la peau d' <span>Indiana Jones</span> ou t'immerger dans la vie des berger de la <span>Cordière des Andes</span>...Et tu nous laisses faire le reste !</p>
        </div>
        <div className="SectionHome-Etapes">
          <div className="HomeEtape">
            <h2 className="EtapeTitre">Etape 1</h2>
            <hr/>
            <div className="EtapeContenu">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam rerum nihil aliquid officiis perferendis eaque nam perspiciatis tempora!</p>
                <div className="EtapeImage"></div>
            </div>
          </div>
          <div className="HomeEtape">
            <h2 className="EtapeTitre EtapeRight">Etape 2</h2>
            <hr/>
            <div className="EtapeContenu">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam rerum nihil aliquid officiis perferendis eaque nam perspiciatis tempora!</p>
                <div className="EtapeImage"></div>
            </div>
          </div>
         <div className="HomeEtape">
            <h2 className="EtapeTitre">Etape 3</h2>
            <hr/>
            <div className="EtapeContenu">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam rerum nihil aliquid officiis perferendis eaque nam perspiciatis tempora!</p>
                <div className="EtapeImage"></div>
            </div>
          </div>
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
        {/*<button>Rejoins-nous</button>*/}
      </div>
    );
  }

}

export default SectionHome;
