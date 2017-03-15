import React from 'react';
import image from'./../../Images/headerPublicHome.jpg';
import './header.css';

class Header extends React.Component{
	render(){
		return(
			<div className="UserHeader">
				<img src={image} alt=""/>
				<div>
				<button className="validation">ACHETE TON TICKET POUR PARTIR A L AVENTURE</button>
				</div>
			</div>
		);
	}
}

export default Header;