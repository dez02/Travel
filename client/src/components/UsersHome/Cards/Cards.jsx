import React from 'react';
import'./cards.css';

class Cards extends React.Component{
	render(){
		return(
			<div className="cards">
			<div className="grid">
				<div className="item img">card1</div>
				<div className="item">card2</div>
				<div className="item">card3</div>			
				<div className="item">card4</div>
				<div className="item">card5</div>
				<div className="item">card6</div>
			</div>				

			</div>
		);
	}
}

export default Cards;
