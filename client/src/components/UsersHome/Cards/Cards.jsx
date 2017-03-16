import React from 'react';
import'./cards.css';
import imageflemmard from './../../Images/flemmard.jpg';


class Cards extends React.Component{
	render(){
		return(
			
			<div className="grid">
				<div className="item">
					<img src={imageflemmard} className="userscard" alt="travelBetnGo"/>

					
				</div>
				<div className="item"></div>
				<div className="item"></div>							
				<div className="item"></div>
			</div>
		);
	}
}

export default Cards;
