import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faGripHorizontal, faUserPlus, faList, faThLarge, faPlus, faArrowCircleLeft, faListAlt, faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';
import './SideBar.css'
const SideBar = () => {
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
        <div className="sidebar d-flex flex-column justify-content-between col-md-12 py-5 px-5" style={{ height: "150vh" }}>
            <ul className="list-unstyled">
                {!isAdmin && <div>
                    <li>
                        <Link to="/bookService" className="text-white">
                            <FontAwesomeIcon icon={faGripHorizontal} /> <span>Book Service</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/bookingList" className="text-white">
                            <FontAwesomeIcon icon={faList} /> <span>Booking List</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/review" className="text-white">
                            <FontAwesomeIcon icon={faCommentAlt} /> <span>Review</span>
                        </Link>
                    </li></div>}
                {isAdmin && <div> <li>
                    <Link to="/orderList" className="text-white">
                        <FontAwesomeIcon icon={faListAlt} /> <span>Order List</span>
                    </Link>
                </li>
                    <li>
                        <Link to="/addService" className="text-white">
                            <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/makeAdmin" className="text-white" >
                            <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/manageServices" className="text-white" >
                            <FontAwesomeIcon icon={faThLarge} /> <span>Manage Services</span>
                        </Link>
                    </li></div>}

            </ul>
            <div className="">
                {!isAdmin && <Link to="/home" className="text-white"><FontAwesomeIcon icon={faArrowCircleLeft} /> <span>Back to Home</span></Link>}
                <br />
                { isAdmin && <Link to="/home" onClick={() => setLoggedInUser({})} className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>}
            </div>
        </div>
    );
};

export default SideBar;