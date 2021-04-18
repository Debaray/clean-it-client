import React, { useContext, useState } from 'react';
import NavBar from '../../Shared/NavBar/NavBar';
import SideBar from '../SideBar/SideBar';
import { UserContext } from '../../../App';
import Button from 'react-bootstrap/Button';
import { Table } from 'react-bootstrap';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
const BookService = () => {
    const { loggedUser, selectedService } = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = loggedUser;
    const [selectService, setSelectService] = selectedService;
    const [bookServiceData, setBookServiceData] = useState({});
    const [totalBookingServicePrice, setTotalBookingServicePrice] = useState({});
    const [displayPayment, setDisplayPayment] = useState(false);


    const handleSubmit = e => {
        e.preventDefault();
        const totalPrice = bookServiceData.totalShirtPrice +
            bookServiceData.totalPantJeanSkirtPrice +
            bookServiceData.totalSweaterPrice +
            bookServiceData.totalTieScarfPrice +
            bookServiceData.totalCoatHeavyJacketDressPrice +
            bookServiceData.totalSilkSuedeLeathersPrice +
            bookServiceData.totalCurtainsDraperyPrice;
        setTotalBookingServicePrice({ totalPrice });
        console.log(totalBookingServicePrice);
        document.getElementById('formId').reset();
        setDisplayPayment(true);

    }
    const handlePaymentSuccess = paymentId => {
        const orderDetails = {
            ...loggedInUser,
            bookings: bookServiceData,
            totalPayment: totalBookingServicePrice,
            selectServiceTitle: selectService.title,
            paymentId,
            status:"Pending",
            orderTime: new Date()
        };
        fetch('http://localhost:5000/addBooking', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    console.log(data);
                    setDisplayPayment(false);
                    setTotalBookingServicePrice({});
                    setBookServiceData({});
                    alert('your Booking Placed Successfully');
                }
                
            })
            .catch(error =>{console.log(error)})
    }
    const handleQtyChange = event => {
        const newBookServiceData = { ...bookServiceData };
        if (event.target.name === 'shirtQty') {
            const shirtQty = Number(event.target.value.trim()) || 0;
            const shirtPrice = Number(document.getElementById('shirtPriceInv').value);
            const totalShirtPrice = shirtQty * shirtPrice;

            newBookServiceData[event.target.name] = Number(event.target.value.trim());
            newBookServiceData.shirtPrice = shirtPrice;
            newBookServiceData.totalShirtPrice = Number(totalShirtPrice.toFixed(2));
        }
        else if (event.target.name === 'pantJeanSkirtQty') {
            const pantJeanSkirtQty = Number(event.target.value.trim()) || 0;
            const pantJeanSkirtPrice = Number(document.getElementById('pantJeanSkirtPriceInv').value);
            const totalPantJeanSkirtPrice = pantJeanSkirtQty * pantJeanSkirtPrice;

            newBookServiceData[event.target.name] = Number(event.target.value.trim());
            newBookServiceData.pantJeanSkirtPrice = pantJeanSkirtPrice;
            newBookServiceData.totalPantJeanSkirtPrice = Number(totalPantJeanSkirtPrice.toFixed(2));
        }
        else if (event.target.name === 'sweaterQty') {
            const sweaterQty = Number(event.target.value.trim()) || 0;
            const sweaterPrice = Number(document.getElementById('sweaterPriceInv').value);
            const totalSweaterPrice = sweaterQty * sweaterPrice;

            newBookServiceData[event.target.name] = Number(event.target.value.trim());
            newBookServiceData.sweaterPrice = sweaterPrice;
            newBookServiceData.totalSweaterPrice = Number(totalSweaterPrice.toFixed(2));
        }
        else if (event.target.name === 'tieScarfQty') {
            const tieScarfQty = Number(event.target.value.trim()) || 0;
            const tieScarfPrice = Number(document.getElementById('tieScarfPriceInv').value);
            const totalTieScarfPrice = tieScarfQty * tieScarfPrice;

            newBookServiceData[event.target.name] = Number(event.target.value.trim());
            newBookServiceData.tieScarfPrice = tieScarfPrice;
            newBookServiceData.totalTieScarfPrice = Number(totalTieScarfPrice.toFixed(2));
        }
        else if (event.target.name === 'coatHeavyJacketDressQty') {
            const coatHeavyJacketDressQty = Number(event.target.value.trim()) || 0;
            const coatHeavyJacketDressPrice = Number(document.getElementById('coatHeavyJacketDressPriceInv').value);
            const totalCoatHeavyJacketDressPrice = coatHeavyJacketDressQty * coatHeavyJacketDressPrice;

            newBookServiceData[event.target.name] = Number(event.target.value.trim());
            newBookServiceData.coatHeavyJacketDressPrice = coatHeavyJacketDressPrice;
            newBookServiceData.totalCoatHeavyJacketDressPrice = Number(totalCoatHeavyJacketDressPrice.toFixed(2));
        }
        else if (event.target.name === 'silkSuedeLeathersQty') {
            const silkSuedeLeathersQty = Number(event.target.value.trim()) || 0;
            const silkSuedeLeathersPrice = Number(document.getElementById('silkSuedeLeathersPriceInv').value);
            const totalSilkSuedeLeathersPrice = silkSuedeLeathersQty * silkSuedeLeathersPrice;

            newBookServiceData[event.target.name] = Number(event.target.value.trim());
            newBookServiceData.silkSuedeLeathersPrice = silkSuedeLeathersPrice;
            newBookServiceData.totalSilkSuedeLeathersPrice = Number(totalSilkSuedeLeathersPrice.toFixed(2));
        }
        else if (event.target.name === 'curtainsDraperyQty') {
            const curtainsDraperyQty = Number(event.target.value.trim()) || 0;
            const curtainsDraperyPrice = Number(document.getElementById('curtainsDraperyPriceInv').value);
            const totalCurtainsDraperyPrice = curtainsDraperyQty * curtainsDraperyPrice;

            newBookServiceData[event.target.name] = Number(event.target.value.trim());
            newBookServiceData.curtainsDraperyPrice = curtainsDraperyPrice;
            newBookServiceData.totalCurtainsDraperyPrice = Number(totalCurtainsDraperyPrice.toFixed(2));
        }
        setBookServiceData(newBookServiceData);
    }

    return (
        <div>
            {console.log(bookServiceData, totalBookingServicePrice)
            }
            <NavBar></NavBar>
            <div className="row">
                <div className="col-lg-3">
                    <SideBar></SideBar>
                </div>
                <div className="col-lg-9">
                    <h3 className="mt-2">Book Service</h3>
                    <div>
                        <div className="row">
                            <input className="col-sm-12 col-md-10 col-lg-10  form-control" name="name" required placeholder="Your Name" defaultValue="Debashis Ray" type="text" readOnly />
                        </div>
                        <div className="row mt-2">
                            <input className="col-sm-12 col-md-10 col-lg-10  form-control" name="email" required placeholder="Your Email Address" defaultValue="debaray17@gmail.com" type="email" readOnly />
                        </div>
                        <div className="row mt-2">
                            <input className="col-sm-12 col-md-10 col-lg-10 form-control" name="serviceTitle" required placeholder="Your Selected Service" defaultValue={selectService.title} type="text" readOnly />
                        </div>
                    </div>

                    {!displayPayment && <form id="formId" className="mt-3 form-style mb-5" onSubmit={handleSubmit}>
                        <div>
                            <h3 className="mt-2">Estimated Price for this Service</h3>
                            <div className="row mt-5 d-flex align-items-center">
                                <Table className="mt-3" bordered responsive hover size="sm">
                                    <thead>
                                        <tr>
                                            <th className="text-center">Name</th>
                                            <th className="text-center">Qty</th>
                                            <th className="text-center">Per Price</th>
                                            <th className="text-center">Total Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><p className="mr-1">Shirts : </p></td>

                                            <td> <input className="form-control" name="shirtQty" required placeholder="0" min="0" type="number" onChange={handleQtyChange} /></td>

                                            <td><input id="shirtPriceInv" className="form-control" name="shirtPrice" defaultValue={Number(selectService.allShirtsPrice)} type="number" readOnly /></td>

                                            <td> <input id="shirtTotalAmount" className="form-control" name="shirtTotalPrice" defaultValue={bookServiceData.totalShirtPrice} type="number" readOnly /></td>
                                        </tr>

                                        <tr>
                                            <td><p className="mr-1">Pants, Jeans, Skirts : </p></td>

                                            <td> <input className="form-control" name="pantJeanSkirtQty" required placeholder="0" min="0" type="number" onChange={handleQtyChange} /></td>

                                            <td><input id="pantJeanSkirtPriceInv" className="form-control" name="pantJeanSkirtPrice" defaultValue={Number(selectService.pantsJeansSkirtsPrice)} type="number" readOnly /></td>

                                            <td> <input id="pantJeanSkirtTotalAmount" className="form-control" name="pantJeanSkirtTotalPrice" defaultValue={bookServiceData.totalPantJeanSkirtPrice} type="number" readOnly /></td>
                                        </tr>

                                        <tr>
                                            <td><p className="mr-1">Sweaters : </p></td>

                                            <td> <input className="form-control" name="sweaterQty" required placeholder="0" min="0" type="number" onChange={handleQtyChange} /></td>

                                            <td><input id="sweaterPriceInv" className="form-control" name="sweaterPrice" defaultValue={Number(selectService.sweatersPrice)} type="number" readOnly /></td>

                                            <td> <input id="sweaterTotalAmount" className="form-control" name="sweaterTotalPrice" defaultValue={bookServiceData.totalSweaterPrice} type="number" readOnly /></td>
                                        </tr>

                                        <tr>
                                            <td><p className="mr-1">Tie, Scarf : </p></td>

                                            <td> <input className="form-control" name="tieScarfQty" required placeholder="0" min="0" type="number" onChange={handleQtyChange} /></td>

                                            <td><input id="tieScarfPriceInv" className="form-control" name="tieScarfPrice" defaultValue={Number(selectService.tieScarfPrice)} type="number" readOnly /></td>

                                            <td> <input id="tieScarfTotalAmount" className="form-control" name="tieScarfTotalPrice" defaultValue={bookServiceData.totalTieScarfPrice} type="number" readOnly /></td>
                                        </tr>

                                        <tr>
                                            <td><p className="mr-1">Coat, Heavy Jacket, Dress : </p></td>

                                            <td> <input className="form-control" name="coatHeavyJacketDressQty" required placeholder="0" min="0" type="number" onChange={handleQtyChange} /></td>

                                            <td><input id="coatHeavyJacketDressPriceInv" className="form-control" name="coatHeavyJacketDressPrice" defaultValue={Number(selectService.coatHeavyJacketDressPrice)} type="number" readOnly /></td>

                                            <td> <input id="coatHeavyJacketDressTotalAmount" className="form-control" name="coatHeavyJacketDressTotalPrice" defaultValue={bookServiceData.totalCoatHeavyJacketDressPrice} type="number" readOnly /></td>
                                        </tr>

                                        <tr>
                                            <td><p className="mr-1">Silk, Suede ,Leathers : </p></td>

                                            <td> <input className="form-control" name="silkSuedeLeathersQty" required placeholder="0" min="0" type="number" onChange={handleQtyChange} /></td>

                                            <td><input id="silkSuedeLeathersPriceInv" className="form-control" name="silkSuedeLeathersPrice" defaultValue={Number(selectService.silkSuedeLeathersPrice)} type="number" readOnly /></td>

                                            <td> <input id="silkSuedeLeathersTotalAmount" className="form-control" name="silkSuedeLeathersTotalPrice" defaultValue={bookServiceData.totalSilkSuedeLeathersPrice} type="number" readOnly /></td>
                                        </tr>

                                        <tr>
                                            <td><p className="mr-1">Curtains and Drapery : </p></td>

                                            <td> <input className="form-control" name="curtainsDraperyQty" required placeholder="0" min="0" type="number" onChange={handleQtyChange} /></td>

                                            <td><input id="curtainsDraperyPriceInv" className="form-control" name="curtainsDraperyPrice" defaultValue={Number(selectService.curtainsDraperyPrice)} type="number" readOnly /></td>

                                            <td> <input id="curtainsDraperyTotalAmount" className="form-control" name="curtainsDraperyTotalPrice" defaultValue={bookServiceData.totalCurtainsDraperyPrice} type="number" readOnly /></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </div>

                        <Button variant="primary" as="input" type="submit" value="Submit" className="pt-2 pb-2 mt-1" block />
                    </form>}
                    {displayPayment && <div className="mt-3 mb-5">
                        <h3 className="mt-2 mb-3">Your <span className="text-primary">{selectService.title}</span> Service charged will be <span className="text-primary">${totalBookingServicePrice.totalPrice}</span></h3>
                        <ProcessPayment handlePaymentSuccess={handlePaymentSuccess}></ProcessPayment>
                    </div>}
                </div>
            </div>
        </div >
    );
};

export default BookService;