import React, { useEffect, useState } from 'react';
import Spinner from '../../Shared/Spinner/Spinner';
import PricingInfo from '../PricingInfo/PricingInfo';
const PricingDetails = () => {
    const [servicesData, setServiceData] = useState([]);
    const [showSpin, setShowSpin] = useState(false);
    useEffect(() => {
        const url = `https://whispering-shore-80941.herokuapp.com/services`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setServiceData(data);
                setShowSpin(true);
            })
    }, [showSpin])
    return (
        <div className="mt-5">
            <h5 className="text-color text-center">Dry Cleaning at its best</h5>
            <h1 className="text-color text-center"><span className=" text-color text-style">Classical approach </span>with Modern Execution</h1>
            <h6 className="container text-color text-center mt-5">We treat clothes by their merit and quality.  Whatever the type of clothes such as linen, white’s, upholstery, carpets, and rugs- we treat them separately. Try our services once and we know you will stay with us!</h6>
            <h1 className="text-color text-center mt-5"><span className=" text-color text-style">Details </span>On Pricing</h1>
            {!showSpin && <Spinner></Spinner>}
            {showSpin && <div >
                <div className="mt-5 row d-flex justify-content-center">
                    {
                        servicesData.map(sData => <PricingInfo key={sData._id} service={sData}></PricingInfo>)
                    }
                </div>
            </div>}
        </div>
    );
};

export default PricingDetails;