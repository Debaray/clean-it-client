import React  from 'react';
import { Card } from 'react-bootstrap';
const BookingListDetails = ({booking}) => {
    
    return (
        <Card className="text-center col-lg-5 col-md-5 col-sm-12 border-0 mr-4 mb-5">
            <Card.Body>
            <Card.Text>Booking Date : {(new Date(booking.orderTime)).toDateString('dd/MM/yyyy')}</Card.Text>
                <Card.Title>{booking.selectServiceTitle}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Total Paid Amount: ${booking.totalPayment.totalPrice}</Card.Subtitle>
                <Card.Text >
                   Status : {booking.status}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default BookingListDetails;