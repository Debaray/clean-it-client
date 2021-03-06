import React from 'react';
import { Link } from 'react-router-dom';
import laundryPicture from '../../../images/laundryServiceHeader.jpg';
import './HeaderMain.css';
const HeaderMain = () => {
    return (
        <main className=" bg-light row d-flex align-items-center justify-content-center headerMain-container mb-5">
            <div className="col-lg-5 col-md-5 col-sm-12 offset-lg-1 offset-md-1 offset-sm-0">
                <h1 className="text-black">Want to get your <br /> Cloth Cleaned? <span className="text-primary">Quickly</span></h1>
                <hr/>
                <h2 className="text-black">Call Us @ <span className="text-primary">223 334 6667</span></h2>
                <p className="text-secondary">We deliver the goods to the most complicated places on earth</p>
                <Link to="/services" className="btn btn-primary">Booking Now</Link>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12 offset-lg-1 offset-md-1 offset-sm-0">
                <img src={laundryPicture} alt="" className="img-fluid" />
            </div>

        </main>
    );
};

export default HeaderMain;