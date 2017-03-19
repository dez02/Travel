import React, {Component} from 'react';
import './ficheproduit.css';
import ImgRome from './../Images/rome.jpg';

class FicheProduit extends Component {
   constructor(props) {
     super(props);
     this.state = {
       travel: []
     };
   }

   componentDidMount() {

     // Appel API pour récupérer un voyage choisi au hasard
     return fetch('http://localhost:8080/api/travels/', {method: 'get'})
     .then(result => result.json())
     .then(travel => {
       // Enregistrement des infos récupérées dans le state du component
       return this.setState({travel : travel[0]});
     })
     .catch(err => {
       console.log(err);
     });
   }

    render () {

      const bgImgStyle = {
         backgroundImage: `url(${ImgRome})`
      };

        return (
            <div className="ficheContainer">
                <h1>BetnGo a choisi pour vous ce fantastique voyage en Italie !</h1>
                <div className="ficheProduit">
                    <div className="ficheImage" style={bgImgStyle}>
                    </div>
                    <div className="ficheContenu">
                        <h3 className="FicheChampTitle">
                            {this.state.travel.title}</h3>
                        <div className="ficheContenuTexte">
                           <div className="ficheDate">
                              <p className="contenuCity"><span>Ville: </span>
                               {this.state.travel.city}</p>
                              <p className="contenuCountry"><span>Pays: </span>
                               {this.state.travel.country}</p>
                              <p className="contenuCategorie"><span>Catégorie: </span> {this.state.travel.category}</p>
                           </div>
                            <div className="ficheText">{this.state.travel.description_long}</div>
                            <div className="ficheDate contenuPadd">
                                <p><span>Départ :</span> 15/02/2017</p>
                                <p><span>Retour :</span> 22/02/2017</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FicheProduit;
