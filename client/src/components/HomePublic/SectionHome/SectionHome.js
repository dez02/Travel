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
          <p>C'est simple, tu t'enregistres, tu achètes un ticket en nous précisant si tu préfères passer tes vacances à te faire masser, faire la fête à <span>Vegas</span>, te glisser dans la peau d' <span>Indiana Jones</span> ou t'immerger dans la vie des bergers de la <span>Cordière des Andes</span>...Et tu nous laisses faire le reste !</p>
        </div>
        <div className="SectionHome-Etapes">
          <div className="HomeEtape">
            <h2 className="EtapeTitre">Etape 1</h2>
            <hr/>
            <div className="EtapeContenu">
                <p>Pour nous rejoindre et accèder à nos offres de <span>voyages mystères</span>, tu dois t'inscire à notre plateforme. Ton prénom, ton nom, ton mail, un mot de passe et le tour est joué! 
                  Ensuite tu accèdes à notre page adhérent ou tu peux directement acheter le nombre de tickets que tu désires. <span>1 ticket = 1 voyage mystère</span>. Chaque ticket possède un numéro unique que tu peux utiliser pour toi ou offrir à tes proches. Nos voyages sont proposés au prix fixe de <span>600 euros</span>, d'une durée d'<span>une semaine</span> (du samedi au samedi), <span>hotel et transport compris.</span>Maintenant place au jeu !</p>
                <div className="EtapeImage"></div>
            </div>
          </div>
          <div className="HomeEtape">
            <h2 className="EtapeTitre EtapeRight">Etape 2</h2>
            <hr/>
            <div className="EtapeContenu">
                <p>On te propose <span>4 catégories</span> de voyages: Aventure, Bling-Bling, Insolite et Flemmard. Tout nos voyages mystères sont séléctionnés rigoureusement par notre équipe de Globetrotters, nous nous engagons à vous procurer des <span>surprises agréables</span> et des <span>émotions fortes</span> dans des conditions optimales.
                   Maintenent, tu peux choisir la catégorie qui te correspond le mieux et cliquer pour lancer <span>la roulette Bet'n'Go !</span> Notre algorythme maison se met en marche, pas de marche arrière possible, les jeux sont faits!
                   </p>
                <div className="EtapeImage"></div>
            </div>
          </div>
         <div className="HomeEtape">
            <h2 className="EtapeTitre">Etape 3</h2>
            <hr/>
            <div className="EtapeContenu">
                <p>La roulette est lancée. Découvre ton voyage, tu n'as plus qu'à te laisser guider, <span>on s'occupe de tout</span>. Surveille ta boite mail, toutes les informations te seront envoyés et <span>heureux tu seras!</span> Pour toute demande d'informations complémentaires, nos agents sont disponibles par mail ou téléphone, n'hésites pas à nous contacter ! Bon voyage :)</p>
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
