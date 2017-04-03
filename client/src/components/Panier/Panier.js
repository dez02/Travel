import React, { Component } from 'react';
import './panier.css';

class Panier extends React.Component {
	// constructor(props) {
	//   super(props);
	//   this.state = {
	// 	reservations: [],
	//   };
	// }
	//
	//
	// componentDidMount() {
	//   console.log(this.props.user_id);
	//   // Recuperation de la props user_id en retirant le ":"
	//   const userID = this.props.user_id.substr(1);
	//   console.log(userID);
	//   // Appel API à partir de l'user_id pour récupérer les infos sur le user
	//   return fetch('/reservation/' + userID, {method: 'get'}).then(result => result.json()).then(reservations => {
	// 	// Enregistrement des infos récupérées dans le state du component
	// 	return this.setState({user});
	//   }).catch(err => {
	// 	console.log(err);
	//   });
	// }

  render() {

    return (
        <div className="PanierContainer">
			<p>Tes achats :</p>
			<p className="Panier-tickets">
				Nombre de tickets à miser : <span>3 <i className="fa fa-ticket"></i></span>
			</p>
			<ul className="Panier-travels">
				<li>
					<p>Les voyages que tu a joué et remporté :</p>
				</li>
					<li className="Panier-travel">
					<a href="#">Rome, Italie du 04/07 au 11/07</a>
				</li>
				<li className="Panier-travel">
					<a href="#">Rome, Italie du 04/07 au 11/07</a>
				</li>
				<li className="Panier-travel">
					<a href="#">Rome, Italie du 04/07 au 11/07</a>
				</li>
			</ul>
		</div>
    );
  }
}


export default Panier;
