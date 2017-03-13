import React from 'react';
import HomePublic from'./HomePublic/HomePublic.js'
import Header from './UsersHome/Header/Header.jsx';
import Header from './UsersHome/Cards/Cards.jsx';



class Index extends React.Component {
    render(){
        return(
            <div>
                <HomePublic/>
                <Header/>
                <Cards/>

            </div>
        )
    }
}

export default Index;
