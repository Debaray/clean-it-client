import React from 'react';
import { Table } from 'react-bootstrap';
import NavBar from '../../Shared/NavBar/NavBar';
import SideBar from '../SideBar/SideBar';
const OrderList = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="row">
                <div className="col-lg-3">
                    <SideBar></SideBar>
                </div>
                <div className="col-lg-9">
                    <h3 className="mt-2">Order List</h3>
                    <Table className="mt-3" bordered responsive hover size="sm">
                        <thead>
                            <tr>
                                <th className="text-center">Name</th>
                                <th  className="text-center">Email Id</th>
                                <th  className="text-center">Service</th>
                                <th  className="text-center">Pay With</th>
                                <th  className="text-center">Status</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td><select className="form-control" name="gender">
                                <option style={{color:"red"}} value="Pending">Pending</option>
                                <option style={{color:"yellow"}} value="On Going">On Going</option>
                                <option style={{color:"green"}} value="Done">Done</option>
                            </select></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Larry the Bird</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default OrderList;