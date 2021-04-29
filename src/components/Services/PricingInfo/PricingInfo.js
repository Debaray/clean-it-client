import React from 'react';
import { Table } from 'react-bootstrap';

const PricingInfo = ({ service }) => {
    return (
        <div className="col-lg-5 col-md-5 col-sm-12 offset-md-1 offset-lg-1 offset-sm-0">
            <h3 className="text-primary">{service.title}</h3>
            <Table className="border-0" size="sm">
                <thead>
                </thead>
                <tbody>
                    <tr>
                        <td>All Shirts</td>
                        <td>${service.allShirtsPrice}</td>
                    </tr>
                    <tr>

                        <td>Pants, Jeans, Skirts </td>
                        <td>${service.pantsJeansSkirtsPrice}</td>
                    </tr>
                    <tr>
                        <td>Sweaters </td>
                        <td>${service.sweatersPrice}</td>
                    </tr>
                    <tr>
                        <td>Tie, Scarf </td>
                        <td>${service.tieScarfPrice}</td>
                    </tr>
                    <tr>

                        <td>Coat, Heavy Jacket, Dress</td>
                        <td>${service.coatHeavyJacketDressPrice}</td>
                    </tr>
                    <tr>

                        <td>Silk, Suede, Leathers</td>
                        <td>${service.silkSuedeLeathersPrice}</td>
                    </tr>
                    <tr>

                        <td>Curtains Drapery</td>
                        <td>${service.curtainsDraperyPrice}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default PricingInfo;