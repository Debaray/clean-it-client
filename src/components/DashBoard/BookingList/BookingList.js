import React, { useState, useEffect } from 'react';
import NavBar from '../../Shared/NavBar/NavBar';
import BookingListDetails from '../BookingListDetails/BookingListDetails';
import SideBar from '../SideBar/SideBar';


const BookingList = () => {
    const [bookingsData, setBookingsData] = useState([]);
    const [showSpin, setShowSpin] = useState(false);

    useEffect(() => {
        const url = `https://whispering-shore-80941.herokuapp.com/bookings`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setBookingsData(data);
                setShowSpin(true);
            })
    }, [showSpin])
    return (
        <div>
            <NavBar></NavBar>
            <div className="row bg-light">
                <div className="col-lg-3 col-md-3 col-sm-12">
                    <SideBar></SideBar>
                </div>
                <div className="col-lg-8 col-md-8 col-sm-12 offset-lg-1 offset-md-1 offset-sm-0">
                    <div className="mt-5 row d-flex justify-content-center">
                        {
                            bookingsData.map(booking => <BookingListDetails key={booking._id} booking={booking}></BookingListDetails>)
                        }
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default BookingList;