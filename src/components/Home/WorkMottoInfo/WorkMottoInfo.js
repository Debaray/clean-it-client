import React from 'react';
import { Card } from 'react-bootstrap';

const WorkMottoInfo = ({ workMotto }) => {
    return (
        <Card className="text-center col-lg-3 col-md-3 col-sm-12 border-0">
            <Card.Img className="w-50 mx-auto" src={workMotto.img} />
            <Card.Body>
                <Card.Title>{workMotto.title}</Card.Title>
                <Card.Text>
                    {workMotto.description}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default WorkMottoInfo;