import React, {Component} from 'react';
import './NavBarUser.css';

class NavBar extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   user: []
    // };
  }

  componentDidMount() {
    //   console.log('hello navbar mount');
    // console.log(this.props.user_id);
    // const userID = this.props.user_id.substr(1);
    // console.log(userID);
    // return fetch('http://localhost:8080/api/user/' + userID, {method: 'get'}).then(result => result.json()).then(user => {
    //   return this.setState({user});
    // }).catch(err => {
    //   console.log(err);
    // });
  }

  // inserer fonction js avec syntaxe REACT
  render() {
    return (
      <div className="navbar">
        <div className="navbar-right">
          <button>
            <i className="fa fa-user-circle-o fa-2x" aria-hidden="true"></i>
            <div>
              {/* <p className="NavBarUser-username">{this.state.user.firstName}</p> */}
            </div>
          </button>
        </div>

      </div>

    );
  }

}

export default NavBar;
