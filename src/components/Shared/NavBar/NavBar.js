import React, { useContext,useState ,useEffect} from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { UserContext } from '../../../App';
import {
    Link
} from "react-router-dom";
import './NavBar.css';
const NavBar = () => {
    const { loggedUser, selectedService } = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = loggedUser;
    const [selectService, setSelectService] = selectedService;
    const [isAdmin, setIsAdmin] = useState(false);
    useEffect(() => {
        fetch('http://localhost:5000/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])
    return (
        <div>
           {!isAdmin && <Navbar className="m-0" collapseOnSelect expand="lg" bg="light" variant="light">
                    <Navbar.Brand className="header-style">Clean It</Navbar.Brand>
                    {
                        loggedInUser.email ? <h4 className="text-center mt-2 ml-5">{loggedInUser.name}</h4> :
                            <></>
                    }
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto align-items-lg-center">
                            <Link className="mr-5 text-style" to="/home">Home</Link>
                            <Link className="mr-5 text-style" to="/aboutUs">About Us</Link>
                            <Link className="mr-5 text-style" to="/services">Services</Link>
                            <Link className="mr-5 text-style" to="/pricing">Pricing</Link>
                            <Link className="mr-5 text-style" to="/userDashBoard">User DashBoard</Link>
                            <Link className="mr-5 text-style" to="/admin">Admin</Link>
                            <Link className="mr-5 text-style" to="/contactUs">Contact Us</Link>
                            {
                                loggedInUser.email ? <Button onClick={() => setLoggedInUser({})} variant="danger">Log Out</Button> :
                                    <Link className="mr-auto" to="/login"><Button variant="success">Login</Button></Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>}
        </div>
    );
};

export default NavBar;