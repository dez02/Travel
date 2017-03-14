import React from "react";
import {render} from "react-dom";
import './Footer.scss';


class footer extends React.Component {
  render () {
    return (
      <div className="footer">
          <div className="menu">
          <ul>
            <li> Text text</li>
            <li> Text text</li>
            <li> Text text</li>
          </ul>

          <ul>
            <li> text text </li>
            <li> text text </li>
            <li>text text </li>
          </ul>
      </div>

        <ul>
          <li>Accueil</li>
          <li>Carte</li>
          <li>Contact</li>
        </ul>

        <ul>
          <li>contact </li>
          <li> number </li>
          <li>text text text</li>
        </ul>
      <ul>
        <i class="fa fa-twitter" aria-hidden="true"></i>
        <i class="fa fa-facebook" aria-hidden="true"></i>
        <i class="fa fa-google" aria-hidden="true"></i>
        <i class="fa fa-youtube" aria-hidden="true"></i>
        <i class="fa fa-paypal" aria-hidden="true"></i>

      </ul>

        </div>


      </div>
    );
  }
}

export default footer;
