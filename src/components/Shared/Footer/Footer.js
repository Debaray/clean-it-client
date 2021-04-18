import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import FooterEnd from '../FooterEnd/FooterEnd';

const Footer = () => {
    const ceoStatement = [
        { name: "Fashion is not something that exists only in dresses. It exists in people who are well dressed in clean crisp clothes. Therefore, make your fashion statement with Dry Cleaners!"}
        
    ]
    const ourAddress = [
        { name: "New York - 101010 Hudson"},
        { name: "Yards"}
    ]
    
    const services = [
        { name: "Dry Cleaning", link: "/services" },
        { name: "Steam Ironing", link: "/services" },
        { name: "Hot Water Wash", link: "/services" },
        { name: "Premium Wash", link: "/services" },
        { name: "Stain Removal", link: "/services" },
        { name: "Drapery cleaning", link: "/services" }
    ]
    return (
        <footer className="footer-area">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"OUR CEO’s STATEMENT"} menuItems={ceoStatement} />
                    <FooterCol key={2} menuTitle="QUICK LINKS" menuItems={services} />
                    <FooterCol key={3} menuTitle="OUR ADDRESS" menuItems={ourAddress}>
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon active-icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon active-icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5 text-white">
                            <h5>Call Us</h5>
                            <button className="btn btn-primary">223 334 6667</button>
                        </div>
                    </FooterCol>
                </div>
            </div>
            <FooterEnd></FooterEnd>
        </footer>

    );
};

export default Footer;