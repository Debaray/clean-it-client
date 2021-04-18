import React, { useContext, useEffect, useState, useHistory } from 'react';
import NavBar from '../../Shared/NavBar/NavBar';
import SideBar from '../SideBar/SideBar';
import { UserContext } from '../../../App';
import BookService from '../BookService/BookService';
import OrderList from '../OrderList/OrderList';
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
            {!isAdmin && <BookService></BookService>}
            {isAdmin && <OrderList></OrderList>}
        </div>
    );
};

export default DashBoard;