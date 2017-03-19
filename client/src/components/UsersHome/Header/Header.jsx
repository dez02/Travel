import React from 'react';
import './header.css';
import dé from './../../Images/dé.png';
import logoBet from './../../Images/logo.png';

class Header extends React.Component{
	render(){
		return(
			<div className="UserHeader">
				<a href="" method="post" action="/api/users">
					<img className="Homelogoleft" src={logoBet} alt="logoBetnGo"/>
				</a>
				<div className='buttonHeader'>
				<button className="validation">ACHETE TON TICKET POUR PARTIR A L AVENTURE</button>
				</div>
		</div>
		);
	}
}

export default Header;
