import React, {Component} from 'react';
import './NavBar.css';

class NavBar extends Component {
  // inserer fonction js avec syntaxe REACT
  render() {
    return (
      <div className="navbar">
        <div className="navbar-right">
          <button>
              <p className="NavBar-log">
                 <i className="fa fa-user-circle-o fa-2x" aria-hidden="true"></i>
                 Sign-up
              </p>
          </button>
        </div>
      </div>

    );
  }

}

export default NavBar;
