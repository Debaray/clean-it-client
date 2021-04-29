import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import NavBar from '../../Shared/NavBar/NavBar';

import Reviews from '../../Home/Reviews/Reviews';
import Service from '../../Home/Service/Service';
import PricingDetails from '../PricingDetails/PricingDetails';
const Pricing = () => {
    return (
        <div>
           <NavBar></NavBar>
           <PricingDetails></PricingDetails>
            <Service></Service>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Pricing;