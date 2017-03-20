import React, {Component} from 'react';
import Header from './../Header/Header.jsx';
import AddComponent from './../AddComponent/AddComponent.jsx';
import Cards from './../Cards/Cards.jsx';
import NavBarUser from './../../NavBarUser/NavBarUser';
import Footer from './../../Footer/Footer.jsx';
import Paiement from './../Paiement/Paiement.js';
import ButtonPayment from './../ButtonPayment/ButtonPayment.js';

class UsersHome extends React.Component {

 constructor(props) {
    super(props);
    this.state = {isToggleOn: false};
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    // this.handleClickBottom = this.handleClickBottom.bind(this);
    // this.preventDefault();
  }

  handleClick() { 
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
//   handleClickBottom() { 
//     this.setState(prevState => ({
//       isToggleOn: !prevState.isToggleOn
//     }));
//   }

    render() {
        return (
            <div>
                <NavBarUser user_id={this.props.params.user_id}/>
                <div style={{display:this.state.isToggleOn ? 'block' : 'none'}} >
                <Paiement/>
                </div>
                <Header/>
                <div onClick={this.handleClick} >
                    <ButtonPayment/>
                </div>
                <AddComponent/>
                <Cards user_id={this.props.params.user_id}/>
                <Footer/>
            </div>
        )
    }
}

export default UsersHome;
