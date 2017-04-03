import React, {Component} from 'react';
import './ficheproduit.css';
import ImgRome from './../Images/rome.jpg';
import Footer from './../Footer/Footer.jsx';
import NavBarUser from './../NavBarUser/NavBarUser';

class FicheProduit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            travel: []
        };
    }

    componentDidMount() {
        const travelCategory = this.props.params.travel_category.substr(1);
        console.log(travelCategory);
        // Appel API pour récupérer un voyage choisi au hasard
        return fetch('/api/travels/' + travelCategory, {method: 'get'}).then(result => result.json()).then(travel => {
            // Enregistrement des infos récupérées dans le state du component
            return this.setState({travel: travel[0]});
        }).catch(err => {
            console.log(err);
        });
    }

    render() {
        console.log(this.state.travel);
        const bgImgStyle = {
            backgroundImage: `url(${ImgRome})`
        };

        return (
            <div className="ficheContainer">
                <NavBarUser user_id={this.props.params.user_id}/>
                <h1>BetnGo a choisi pour vous ce fantastique voyage en {this.state.travel.country}
                    !</h1>
                <div className="ficheProduit">
                    <div className="ficheImage" style={bgImgStyle}></div>
                    <div className="ficheContenu">
                        <h3 className="FicheChampTitle">
                            {this.state.travel.title}</h3>
                        <div className="ficheContenuTexte">
                            <div className="ficheDate">
                                <p className="contenuCity">
                                    <span>Ville:
                                    </span>
                                    {this.state.travel.city}
                                </p>
                                <p className="contenuCountry">
                                    <span>Pays:
                                    </span>
                                    {this.state.travel.country}
                                </p>
                                <p className="contenuCategorie">
                                    <span>Catégorie:
                                    </span>
                                    {this.state.travel.category}
                                </p>
                            </div>
                            <div className="ficheText">{this.state.travel.description_long}</div>
                            <div className="ficheDate contenuPadd">
                                <p>
                                    <span>Départ :</span>
                                    15/02/2017</p>
                                <p>
                                    <span>Retour :</span>
                                    22/02/2017</p>
                            </div>
                            <form className="confirmBtn-container" method="post" action={"/api/reservation/" + this.props.params.user_id.substr(1) + "/" + this.state.travel._id}>
                                <input type="submit"  value="Confirmer reservation de ce voyage !"/>

                            </form>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default FicheProduit;
