import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import NavBar from '../../Shared/NavBar/NavBar';
import Header from '../Header/Header';
import Reviews from '../Reviews/Reviews';
import Service from '../Service/Service';
import WorkMotto from '../WorkMotto/WorkMotto';
const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Header></Header>
            <WorkMotto></WorkMotto>
            <Service></Service>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;