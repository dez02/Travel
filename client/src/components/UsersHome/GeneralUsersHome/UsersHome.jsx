import React, { Component } from 'react';
import Header from '.././Header/Header.jsx';
import AddComponent from '.././AddComponent/AddComponent.jsx';
import Cards from '.././Cards/Cards.jsx';



class UsersHome extends React.Component {
    render(){
        return(
            <div>
                <Header/>
                <AddComponent/>
                <Cards/>
            </div>
        )
    }
}

export default UsersHome;
