import React from 'react';
import'./cards.css';

class Cards extends React.Component{
	render(){
		return(

			<div className="SectionMainTheme">
	        <div className="SectionTheme">
						<div className="GroupTheme">
	            <div className="Theme aventurier">
								<div className='description'>
								<h2>Aventurier : </h2>
								<p>Aller vivre une expérience dans laquelle on ne sait pas précisément ce qui nous attend. </p>
								<button className="validation">Go !</button>
							</div>
	            </div>
	            <div className="Theme blingbling">
								<div className='description'>
									<h2>Bling-Bling :</h2>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
									<button className="validation">Go !</button>
								</div>
	            </div>
						</div>
						<div className='GroupTheme'>
	            <div className="Theme flemmard">
								<div className='description'>
									<h2>Flemmard :</h2>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
									<button className="validation">Go !</button>
								</div>
	            </div>
							<div className="Theme insolite">
								<div className='description'>
									<h2>Insolite </h2>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
									<button className="validation">Go !</button>
								</div>
							</div>
						</div>
	        </div>
     </div>

		);
	}
}

export default Cards;
