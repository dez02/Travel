import React, { Component } from 'react';
import Header from './../Header/Header.jsx';
import AddComponent from './../AddComponent/AddComponent.jsx';
import Cards from './../Cards/Cards.jsx';
import NavBarUser from './../NavBarUser/NavBarUser';
import Footer from './../../Footer/Footer.jsx';



class UsersHome extends React.Component {
    render(){
        return(
            <div>
				<NavBarUser />
				{/* <NavBarUser user_id={ this.props.params.user_id }/> */}
                <Header/>
                <AddComponent/>
                <Cards/>
                <Footer/>
            </div>
        )
    }
}

export default UsersHome;
