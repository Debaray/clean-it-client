import React from 'react';
import { Card } from 'react-bootstrap';
import './ServiceInfo.css';
const ServiceInfo = ({service}) => {
    return (
        <Card className="text-center col-3 mr-5 mt-3">
            <Card.Img variant="top" className="img-fluid" style={{height:'250px'}} src={`data:image/png;base64,${service.image.img}`} />
            <Card.Body>
                <Card.Title><span className="title-style">{service.title}</span></Card.Title>
                <Card.Text>
                    {service.description}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default ServiceInfo;