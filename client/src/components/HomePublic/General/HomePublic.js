import React, { Component } from 'react';
import NavBar from '.././NavBar/NavBar.js';
import homepublic from './homepublic.css';
import HeaderHomePublic from '.././HeaderHomePublic/HeaderHomePublic.js';
import SectionHome from '.././SectionHome/SectionHome.js';
import Login from '.././Login/Login.js';

class HomePublic extends Component {

 constructor(props) {
    super(props);
    this.state = {isToggleOn: false};
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    // this.preventDefault();
  }

  handleClick() { 
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }


  render() {
    console.log('start app');




    return (
      <div className="">
        <div onClick={this.handleClick} >
          <NavBar/>
        </div>
        <HeaderHomePublic/>
        <SectionHome/>
        <div className="loginDiv" style={{display:this.state.isToggleOn ? 'block' : 'none'}}>
          <Login/>
        </div>
      </div>
     
    );
  }
}

export default HomePublic;
