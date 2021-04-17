import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import NavBar from '../../Shared/NavBar/NavBar';
import Header from '../Header/Header';
import WorkMotto from '../WorkMotto/WorkMotto';
const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Header></Header>
            <WorkMotto></WorkMotto>
            <Footer></Footer>
        </div>
    );
};

export default Home;