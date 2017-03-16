import React, { Component } from 'react';
import Header from './../Header/Header.jsx';
import AddComponent from './../AddComponent/AddComponent.jsx';
import Cards from './../Cards/Cards.jsx';
import NavBarUser from './../NavBarUser/NavBarUser';



class UsersHome extends React.Component {
    render(){
        return(
            <div>
				<NavBarUser />
				{/* <NavBarUser user_id={ this.props.params.user_id }/> */}
                <Header/>
                <AddComponent/>
                <Cards/>
            </div>
        )
    }
}

export default UsersHome;
