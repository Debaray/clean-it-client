import React from 'react';
import { Link } from 'react-router-dom';
import laundryPicture from '../../../images/laundryServiceHeader.jpg';
import './HeaderMain.css';
const HeaderMain = () => {
    return (
        <main className=" bg-light row d-flex align-items-center justify-content-center headerMain-container">
            <div className="col-5 offset-1">
                <h1 className="text-black">Want to get your <br /> Cloth Cleaned? <span className="text-primary">Quickly</span></h1>
                <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore eveniet necessitatibus et iusto corrupti minima.</p>
                <Link to="/services" className="btn btn-primary">Booking Now</Link>
            </div>
            <div className="col-5">
                <img src={laundryPicture} alt="" className="img-fluid" />
            </div>

        </main>
    );
};

export default HeaderMain;