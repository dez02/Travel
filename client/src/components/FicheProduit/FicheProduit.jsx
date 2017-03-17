import React, { Component } from 'react';
import './ficheproduit.css';
import ImgRome from './../Images/rome.jpg';

class FicheProduit extends Component {

    render(){
        return (
            <div className="ficheContainer">
                <h1>BetnGo a choisi pour vous ce fantastique voyage en Italie !</h1>
                <div className="ficheProduit">
                    <h3 className="FicheChampTitle contenuPadd"> Vatican, Colisée, Capitole : À la rencontre de Rôme</h3>
                    <div className="ficheContenu">
                        <div className="ficheImage contenuPadd ">
                            <img className="fichePropImage" src={ImgRome} alt="Rome c'est beau"/>
                        </div>
                        <div className="ficheContenuTexte">
                            <div className="contenuPadd contenuCity">Ville: Rome</div>
                            <div className="contenuPadd contenuCountry">Pays: Italie</div>
                            <div className="contenuPadd contenuCategorie">Catégorie: Détente</div>
                            <div className="contenuPadd ficheText">Rome est une destination exceptionnelle, où les voyageurs pourront allier le dépaysement et la détente pour la découverte historique, culturelle et artistique.</div>
                            <div className="ficheDate contenuPadd">
                                <p>Départ : 15/02/207</p>
                                <p>Retour : 22/02/207</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FicheProduit;