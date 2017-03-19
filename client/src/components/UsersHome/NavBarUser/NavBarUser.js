import React, {Component} from 'react';
import './NavBarUser.css';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: []
    };
  }

  componentDidMount() {

    console.log(this.props.user_id);
    // Recuperation de la props user_id en retirant le ":"
    const userID = this.props.user_id.substr(1);
    console.log(userID);
    // Appel API à partir de l'user_id pour récupérer les infos sur le user
    return fetch('http://localhost:8080/api/user/' + userID, {method: 'get'})
    .then(result => result.json())
    .then(user => {
      // Enregistrement des infos récupérées dans le state du component
      return this.setState({user});
    })
    .catch(err => {
      console.log(err);
    });
  }

  // inserer fonction js avec syntaxe REACT
  render() {
    return (
      <div className="navbar">
        <div className="navbar-right">
          <button>
              <p className="NavBar-log">
                    <i className="fa fa-user-circle-o fa-2x" aria-hidden="true"></i>
                 {this.state.user.firstName}
              </p>
          </button>
        </div>
      </div>
    );
  }

}

export default NavBar;
