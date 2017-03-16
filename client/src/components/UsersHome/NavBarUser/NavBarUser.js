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
    //   console.log('hello navbar mount');
    return fetch('http://localhost:8080/api/users', {method: 'get'}).then(result => result.json()).then(users => {
      const user = users[6];
      return this.setState({user});
    }).catch(err => {
      console.log(err);
    });
  }

  // inserer fonction js avec syntaxe REACT
  render() {
    return (
      <div className="navbar">
        <div className="navbar-right">
          <button>
            <i className="fa fa-user-circle-o fa-2x" aria-hidden="true"></i>
            <div>
			  <p className="NavBarUser-username">{this.state.user.firstName}</p>
            </div>
          </button>
        </div>

      </div>

    );
  }

}

export default NavBar;
