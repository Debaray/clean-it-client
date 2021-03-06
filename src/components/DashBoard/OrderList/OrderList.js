import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import NavBar from '../../Shared/NavBar/NavBar';
import SideBar from '../SideBar/SideBar';
import Spinner from '../../Shared/Spinner/Spinner';
const OrderList = () => {
    const [bookingsData, setBookingsData] = useState([]);
    const [showSpin, setShowSpin] = useState(false);
    const [bookingId, setId] = useState('');
    useEffect(() => {
        const url = `https://whispering-shore-80941.herokuapp.com/bookings`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setBookingsData(data);
                setShowSpin(true);
            })
    }, [showSpin])
    const handleChange = e => {
        const status = e.target.value;
        fetch(`https://whispering-shore-80941.herokuapp.com/update/${bookingId}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ bookingId, status })
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    setShowSpin(false);
                }
            })
    }
    const handleClick = id => {
        setId(id);
        console.log(bookingId);
    }
    return (
        <div>
            <NavBar></NavBar>
            <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-12">
                    <SideBar></SideBar>
                </div>
                <div className="col-lg-8 col-md-8 col-sm-12 offset-lg-1 offset-md-1 offset-sm-0">
                    <h3 className="mt-2">Order List</h3>
                    {!showSpin && <Spinner></Spinner>}
                    {showSpin && <Table className="mt-3" bordered responsive hover size="sm">
                        <thead>
                            <tr>
                                <th className="text-center">#</th>
                                <th className="text-center">Name</th>
                                <th className="text-center">Email Id</th>
                                <th className="text-center">Service</th>
                                <th className="text-center">Pay With</th>
                                <th className="text-center">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookingsData.map((booking, index) =>

                                <tr>
                                    <td>{index + 1}</td>
                                    <td >{booking.name}</td>
                                    <td >{booking.email}</td>
                                    <td >{booking.selectServiceTitle}</td>
                                    <td >Credit Card</td>
                                    <td>
                                        <select className="form-control" value={booking.status} name="status" onClick={() => handleClick(booking._id)} onChange={handleChange}>
                                            <option style={{ color: "red" }} value="Pending">Pending</option>
                                            <option style={{ color: "yellow" }} value="On Going">On Going</option>
                                            <option style={{ color: "green" }} value="Done">Done</option>
                                        </select>
                                    </td>
                                </tr>)}
                        </tbody>
                    </Table>}
                </div>
            </div>
        </div>
    );
};

export default OrderList;