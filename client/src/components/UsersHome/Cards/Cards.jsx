import React from 'react';
import'./cards.css';
import backgroundAventurier from './../../Images/aventure.jpg';
import backgroundBlingbling from './../../Images/blingbling.jpg';
import backgroundInsolite   from './../../Images/insolite.jpg';
import backgroundFlemmard from './../../Images/flemmard.jpg';


class Cards extends React.Component{
	render(){
		return(

			<div className="SectionMainTheme">
	        <div className="SectionTheme">
						<div className="GroupTheme">
	            <div className="Theme">
	              <img src={ backgroundAventurier} className="ThemeCard" alt="ImgTheme"/>
	            </div>
	            <div className="Theme">
	              <img src={backgroundBlingbling} className="ThemeCard" alt="ImgTheme"/>
	            </div>
						</div>
						<div className='GroupTheme'>
	            <div className="Theme">
	              <img src={backgroundFlemmard} className="ThemeCard" alt="ImgTheme"/>
	            </div>
							<div className="Theme">
								<img src={backgroundInsolite} className="ThemeCard" alt="ImgTheme"/>
							</div>
						</div>
	        </div>
     </div>

		);
	}
}

export default Cards;
