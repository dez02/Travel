import React from 'react';
import HomePublic from'./HomePublic/General/HomePublic.js';
import UsersHome from './UsersHome/GeneralUsersHome/UsersHome.jsx';
import Header from './UsersHome/Header/Header.jsx';
import AddComponent from './UsersHome/AddComponent/AddComponent.jsx';
import Cards from './UsersHome/Cards/Cards.jsx';
import Footer from './Footer/Footer.jsx';



class Index extends React.Component {
    render(){
        return(
            <div>
                <HomePublic/>
                <UsersHome/>
				<Footer/>


            </div>
        )
    }
}

export default Index;
