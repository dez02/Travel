import React, {Component} from 'react';
import './NavBar.css';

class NavBar extends Component {
    // inserer fonction js avec syntaxe REACT
    render() {
        return (
            <div className="navbar">
                <button className="navbar-right">
                        <i className="fa fa-user-circle-o fa-2x" aria-hidden="true"></i>
                        <span>Sign-up</span>
                </button>
            </div>

        );
    }

}

export default NavBar;
