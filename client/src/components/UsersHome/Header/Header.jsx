import React from 'react';
import image from'./../../../image/headerPublicHome.jpg';

class Header extends React.Component{
	render(){
		return(
			<div className="header">
				<img src={image} alt=""/>
				<button className="ticket">ACHETE TON TICKET POUR PARTIR A L AVENTURE</button>
			</div>
		);
	}
}

export default Header;