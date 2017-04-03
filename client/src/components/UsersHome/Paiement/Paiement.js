import React, { Component } from'react';
import './paiement.css';
import Carte1 from './../../Images/mastercard.png';
import Carte2 from './../../Images/visa.png';
import Carte3 from './../../Images/americanex.png';

class Paiement extends React.Component {


        render(){
            return(

        <form className="PaymentForm">
          <h1>Payment</h1>
          <div className="paymentCarte">
                <img src={Carte1}/>
                <img src={Carte2}/>
                <img src={Carte3}/>
          </div>
          <div className="formName">
            <label>
                <p>Nom:</p>
                <input type="text"
                required
                name="prenom"
                type="string"
                value=""
                onChange=""
                />
            </label>
            <label>
                <p>Nbre de tickets:</p>
                <input type="text"
                required
                name="nom"
                type="string"
                />
            </label>
            <label>
                <p>Numéro de carte:</p>
                <input type="text"
                required
                name="mail"
                type="string"
                />
            </label>
            <label>
                <p>Code de vérification:</p>
                <input type="text"
                required
                name="motdepasse"
                type="string"
                />
            </label>
          </div>
            <input className="loginButton" type="submit" value="Payer"/>
        </form>

            )
        }

}

export default Paiement;