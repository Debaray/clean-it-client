import React from 'react';
import { Card } from 'react-bootstrap';
const ReviewInfo = ({review}) => {
    return (
        <Card className="text-center col-lg-3 col-md-4 col-sm-12 border-0 mr-4 mb-5">
            <Card.Body>
                <Card.Title>{review.yourName}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{review.companyNameDesignation}</Card.Subtitle>
                <Card.Text>
                    {review.description}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default ReviewInfo;