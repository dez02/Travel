import React from 'react';
import'./cards.css';

class Cards extends React.Component{
	render(){
		return(
			<div className="cards">
			<div className="grid">
				<div className="item"></div>
				<div className="item"></div>
				<div className="item"></div>
				<div className="item"></div>
			</div>
			</div>
		);
	}
}

export default Cards;
