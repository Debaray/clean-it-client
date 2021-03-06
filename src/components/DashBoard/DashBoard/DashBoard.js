import React, { useContext, useEffect, useState } from 'react';
import NavBar from '../../Shared/NavBar/NavBar';
import SideBar from '../SideBar/SideBar';
import { UserContext } from '../../../App';
const DashBoard = () => {
    const { loggedUser, selectedService } = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = loggedUser;
    const [selectService, setSelectService] = selectedService;
    const [isAdmin, setIsAdmin] = useState(false);
    useEffect(() => {
        fetch('https://whispering-shore-80941.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])
    return (
        <div>
            <NavBar></NavBar>
            <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-12">
                    <SideBar></SideBar>
                </div>
                <div className="col-lg-8 col-md-8 col-sm-12 offset-lg-1 offset-md-1 offset-sm-0">
                    <h1>Welcome to Dashboard</h1>
                    <h1>Hello , {loggedInUser.name}</h1>
                    <h1>Please Select Your Any Operation From SideBar</h1>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;