import React, { useEffect, useState } from 'react';
import ServiceInfo from '../ServiceInfo/ServiceInfo';
import Spinner from '../../Shared/Spinner/Spinner';
const Service = () => {
    const [servicesData, setServiceData] = useState([]);
    const [showSpin, setShowSpin] = useState(false);
    useEffect(() => {
        const url = `http://localhost:5000/services`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setServiceData(data);
                setShowSpin(true);
            })
    }, [showSpin])
    return (
        <div className="mt-5">
            <h5 className="text-color text-center">We Clean Everything</h5>
            <h1 className="text-color text-center"><span className=" text-color text-style">Always the </span>Best Service</h1>
            {!showSpin && <Spinner></Spinner>}
            {showSpin && <div >
                <div className="mt-5 row d-flex justify-content-center">
                    {
                        servicesData.map(sData => <ServiceInfo key={sData._id} service={sData}></ServiceInfo>)
                    }
                </div>
            </div>}
        </div>
    );
};

export default Service;