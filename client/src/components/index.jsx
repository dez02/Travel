import React from 'react';
import HomePublic from'./HomePublic/General/HomePublic.js';
import UsersHome from './UsersHome/GeneralUsersHome/UsersHome.jsx';
import Footer from './Footer/Footer.jsx';



class Index extends React.Component {
    render(){
        return(
            <div>
                <HomePublic/>
                <Header/>
                <AddComponent/>
                <Cards/>
                <Footer/>
                <UsersHome/>
				<Footer/>


            </div>
        )
    }
}

export default Index;
