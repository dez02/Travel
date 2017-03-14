import React from 'react';
<<<<<<< HEAD
import HomePublic from'./HomePublic/General/HomePublic.js';
=======
import HomePublic from './HomePublic/HomePublic.js'
import HomePublic from'./HomePublic/General/HomePublic.js'
>>>>>>> 4e4cbff3346fd347a95163b8ceb8f3ce46ca3d97
import Header from './UsersHome/Header/Header.jsx';
import AddComponent from './UsersHome/AddComponent/AddComponent.jsx';
import Cards from './UsersHome/Cards/Cards.jsx';
import Footer from '/Footer/footer.jsx';



class Index extends React.Component {
    render(){
        return(
            <div>
                <HomePublic/>
                <Header/>
                <AddComponent/>
                <Cards/>
                <Footer/>


            </div>
        )
    }
}

export default Index;
