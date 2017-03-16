import React, { Component } from 'react';
import './ficheproduit.css';
import ImgRome from './../Images/rome.jpg';

class FicheProduit extends Component {

    render(){
        return (
            <div className="ficheContainer">
                <div className="ficheProduit">
                    <h3 className="FicheChampTitle"> Vatican, Colisée, Capitole : À la rencontre de Rôme</h3>
                    <div className="ficheContenu">
                        <div className="ficheImage">
                            <img className="fichePropImage" src={ImgRome} alt="Rome c'est beau"/>
                        </div>
                        <div className="ficheContenuTexte">
                            <div className="contenuCity"></div>
                            <div className="contenuCountry"></div>
                            <div className="ficheText">Rome est une destination exceptionnelle, où les voyageurs pourront allier le dépaysement et la détente pour la découverte historique, culturelle et artistique.</div>
                             
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FicheProduit;