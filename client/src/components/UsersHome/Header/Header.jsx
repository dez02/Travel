import React from 'react';
import './header.css';
import dé from './../../Images/dé.png';

class Header extends React.Component{
	render(){
		return(
			<div className="UserHeader">
				<div className='buttonHeader'>
				<button className="validation">ACHETE TON TICKET POUR PARTIR A L AVENTURE</button>
				</div>
		</div>
		);
	}
}

export default Header;
