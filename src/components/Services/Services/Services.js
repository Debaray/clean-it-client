import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import NavBar from '../../Shared/NavBar/NavBar';

import Reviews from '../../Home/Reviews/Reviews';
import Service from '../../Home/Service/Service';
const Services = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Service></Service>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Services;