import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import './ServiceInfo.css';
import { UserContext } from '../../../App';
import {
    Link
} from "react-router-dom";

const ServiceInfo = ({ service }) => {
    const { loggedUser, selectedService } = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = loggedUser;
    const [selectService, setSelectService] = selectedService;
    return (
        <Card className="text-center col-3 mr-5 mt-3 card-style">
            <Link to="/bookService" className="text-dark  link-style" onClick={() =>{
            setSelectService(service)
            }}><Card.Img variant="top" className="img-fluid" style={{ height: '250px' }} src={`data:image/png;base64,${service.image.img}`} />
                <Card.Body>
                    <Card.Title><span className="title-style">{service.title}</span></Card.Title>
                    <Card.Text>
                        {service.description}
                    </Card.Text>
                </Card.Body></Link>
        </Card>
    );
};

export default ServiceInfo;