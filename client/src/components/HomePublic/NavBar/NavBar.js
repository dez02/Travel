import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {
constructor(props) {
	super(props);
	this.state = {user: []};
}

componentDiMount() {
	this.UserDisplay();
}

UserDisplay() {
	return $.getJSON('localhost:')
}


    // inserer fonction js avec syntaxe REACT
  render() {

    return (
    <div className="navbar">
      <div className="navbar-right">
          <button>
          <i className="fa fa-user-circle-o fa-2x" aria-hidden="true"></i>
          <div><p>Sign-up</p></div>
          </button>
      </div>
       
    </div>

    );
  }


}


export default NavBar;
