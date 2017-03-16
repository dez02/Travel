import React from "react";
import {render} from "react-dom";
import './footer.scss';

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="menu">
                    <ul>
                        <li>
                            Text text</li>
                        <li>
                            Text text</li>
                        <li>
                            Text text</li>
                    </ul>

                    <ul>
                        <li>
                            text text
                        </li>
                        <li>
                            text text
                        </li>
                        <li>text text
                        </li>
                    </ul>
                </div>

                <ul>
                    <li>Accueil</li>
                    <li>Carte</li>
                    <li>Contact</li>
                </ul>

                <ul>
                    <li>contact
                    </li>
                    <li>
                        number
                    </li>
                    <li>text text text</li>
                </ul>
                <ul>
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                    <i className="fa fa-google" aria-hidden="true"></i>
                    <i className="fa fa-youtube" aria-hidden="true"></i>
                    <i className="fa fa-paypal" aria-hidden="true"></i>

                </ul>

            </div>

        );
    }
}

export default Footer;
