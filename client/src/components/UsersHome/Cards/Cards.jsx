import React from 'react';
import './cards.css';

class Cards extends React.Component {
    render() {
      const userID = this.props.user_id;
      console.log("userID",userID);

        return (

            <div className="SectionMainTheme">
                <div className="SectionTheme">
                    <div className="GroupTheme">
                        <div className="Theme ">
                            <div className="theme-img aventurier"></div>
                            <div className="description">
                                <h2>Aventurier :</h2>
                                <p>Les aventuriers sont toujours à la recherche de nouveaux défis. Les uns s’enthousiasment d’un périple en mountain bike dans les bois de Norvège, tandis que d’autres préférent explorer une ville étouffante en Moyen-Orient. Si vous êtes à la recherche d’une destination enrichissante pour un voyage à l’aventure, tentez votre chance ici !
                                </p>
                                <a href={"/#/product/" + userID +"/:aventure"} className="validation">Go !*</a>
                                <div className='msgwarning'>*Attention, ce clique est sans retour !!</div>
                            </div>

                        </div>
                        <div className="Theme ">
                            <div className="theme-img blingbling"></div>
                            <div className='description'>
                                <h2>Bling-Bling :</h2>
                                <p>Osez le bling-bling! Tu seras traité comme un prince dans un hotel à vegas en train de siroter des cocktails dans ton jaccuzzi ou on te réserve de belles surprises dans des endroits les plus Bling de la planète !</p>
                                <a href={"/#/product/" + userID + "/:bling-bling"} className="validation">Go !*</a>
                                <div className='msgwarning'>*Attention, ce clique est sans retour !!</div>
                            </div>
                        </div>
                    </div>
                    <div className='GroupTheme'>
                        <div className="Theme ">
                            <div className="theme-img flemmard"></div>
                            <div className='description'>
                                <h2>Flemmard :</h2>
                                <p>Si tu as la flemme et que tu ne veux rien faire. On s'occupe de tout, t'auras juste à mettre les pieds sous la table, les mains sur le bar et la tête sur ton oreiller!</p>
                                <a href={"/#/product/" + userID + "/:flemmard"} className="validation">Go !*</a>
                                <div className='msgwarning'>*Attention, ce clique est sans retour !!</div>
                            </div>
                        </div>
                        <div className="Theme">
                            <div className="theme-img insolite"></div>
                            <div className='description'>
                                <h2>Insolite :</h2>
                                <p>Partir à la rencontre d'une tribu ancestrale, vivre avec des bergers suisse dans un cadre exceptionnel, dormir dans une chambre d'hotel aquatique, tout est possible ici !</p>
                                <a href={"/#/product/" + userID + "/:insolite"} className="validation">Go !*</a>
                                <div className='msgwarning'>*Attention, ce clique est sans retour !!</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Cards;
