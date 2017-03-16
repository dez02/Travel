import React, { Component } from 'react';
import ScrollToTop from 'react-scroll-up';
import NavBar from '.././NavBar/NavBar.js';
import homepublic from './homepublic.css';
import HeaderHomePublic from '.././HeaderHomePublic/HeaderHomePublic.js';
import SectionHome from '.././SectionHome/SectionHome.js';
import ButtonHomePublic from '.././ButtonHomePublic/ButtonHomePublic.js';
import Login from '.././Login/Login.js';
import Footer from '../../Footer/Footer.jsx';

class HomePublic extends Component {

 constructor(props) {
    super(props);
    this.state = {isToggleOn: false};
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    this.handleClickBottom = this.handleClickBottom.bind(this);
    // this.preventDefault();
  }

  handleClick() { 
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  handleClickBottom() { 
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
        <div onClick={this.handleClickBottom}>
          <ScrollToTop style="position: fixed; bottom: 150px; right: 30px; cursor: pointer; transition: opacity 0.2s linear 0s, visibility; opacity: 1; visibility: visible;" showUnder={160}>
          <ButtonHomePublic/>
          </ScrollToTop>
        </div>
        <Footer/>
        <div className="loginDiv" style={{display:this.state.isToggleOn ? 'block' : 'none'}}>
          <Login/>
        </div>
      </div>
     
    );
  }
}

export default HomePublic;
