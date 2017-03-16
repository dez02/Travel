import React from "react";
import {render} from "react-dom";
import './footer.scss';
import payment from "../Images/Paypal_payment_icon.png";

class Footer extends React.Component {
  render () {
    return (
      <div className="footer">
          <div className="menu">
          <div>
              <ul>
                  <li> Text text</li>
                  <li> Text text</li>
                  <li> Text text</li>
              </ul>
</div>
<div>
              <ul>
                  <li> text text </li>
                  <li> text text </li>
                  <li> text text </li>
              </ul>
</div>
              <ul>
                  <li>Contact Info</li>
                  <li>0033 677886544</li>
                  <li>Text text text</li>
              </ul>
          </div>

          <div className="bas">
                  <ul>
                    <li><i className="fa fa-twitter" aria-hidden="true"></i></li>
                      <li><i className="fa fa-facebook" aria-hidden="true"></i></li>
                      <li><i className="fa fa-google" aria-hidden="true"></i></li>
                      <li><i className="fa fa-youtube" aria-hidden="true"></i></li>
                      <li><i className="fa fa-paypal" aria-hidden="true"></i></li>
                      <p>Powerd by simplonco</p>
                      <img src={payment}/>
                  </ul>

          </div>
      </div>


    );
  }
}

export default Footer;
