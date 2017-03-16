import React, {Component} from 'react';
import './NavBar.css';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: []
    };
	// console.log('hello navbar');
  }

  componentDidMount() {
	//   console.log('hello navbar mount');
    return fetch('http://localhost:8080/api/users', {method: 'get'})
	.then(result => result.json())
	.then(users => {
      const user = users[0];
      return this.setState({user});
    }).catch(err => {
      console.log(err);
    });
  }

  // inserer fonction js avec syntaxe REACT
  render() {
  //   const userName = this.state.users.map((item, i) => {
  //     return <div>
  //       <p>firstname : {item.firstName}</p>
  //     </div>
  //   });
  // console.log(this.state.users[0]);
console.log('hello navbar render');
    return (
    <div className="navbar">
      <div className="navbar-right">
          <button>
          <i className="fa fa-user-circle-o fa-2x" aria-hidden="true"></i>
          <div><p>Sign-up</p></div>
          </button>
          <p>{this.state.user.firstName}</p>
      </div>
       
    </div>


    );
  }

}

export default NavBar;
