import React from 'react';
import './cards.css';

class Cards extends React.Component {
    render() {
        return (

            <div className="SectionMainTheme">
                <div className="SectionTheme">
                    <div className="GroupTheme">
                        <div className="Theme ">
                            <div className="theme-img aventurier"></div>
                            <div className="description">
                                <h2>Aventurier :
                                </h2>
                                <p>Aller vivre une expérience dans laquelle on ne sait pas précisément ce qui nous attend.
                                </p>
                                <a href="/#/product" className="validation">Go !</a>
                            </div>

                        </div>
                        <div className="Theme ">
                            <div className="theme-img blingbling"></div>
                            <div className='description'>
                                <h2>Bling-Bling :</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <a href="/#/product" className="validation">Go !</a>
                            </div>
                        </div>
                    </div>
                    <div className='GroupTheme'>
                        <div className="Theme ">
                            <div className="theme-img flemmard"></div>
                            <div className='description'>
                                <h2>Flemmard :</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <a href="/#/product" className="validation">Go !</a>
                            </div>
                        </div>
                        <div className="Theme">
                            <div className="theme-img insolite"></div>
                            <div className='description'>
                                <h2>Insolite
                                </h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <a href="/#/product" className="validation">Go !</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Cards;
