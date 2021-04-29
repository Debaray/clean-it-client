import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import NavBar from '../../Shared/NavBar/NavBar';
import SideBar from '../SideBar/SideBar';
import Spinner from '../../Shared/Spinner/Spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const ManageServices = () => {
    const [servicesData, setServiceData] = useState([]);
    const [showSpin, setShowSpin] = useState(false);
    useEffect(() => {
        const url = `https://whispering-shore-80941.herokuapp.com/services`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setServiceData(data);
                setShowSpin(true);
            })
    }, [showSpin])
    const deleteService = id => {
        fetch(`https://whispering-shore-80941.herokuapp.com/deleteService/${id}`, {
            method: 'DELETE'
        })
            .then(res => console.log(res))
            .then(data => {
                console.log('delete done');
                alert('Delete This Service Successfully');
            })
            .catch(err => { console.log(err) })
        setShowSpin(false)
    }
    return (
        <div>
            <NavBar></NavBar>
            <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-12">
                    <SideBar></SideBar>
                </div>
                <div className="col-lg-8 col-md-8 col-sm-12 offset-lg-1 offset-md-1 offset-sm-0">
                    <h3 className="mt-2">Manage Services</h3>
                    {!showSpin && <Spinner></Spinner>}
                    {showSpin && <Table className="mt-3" bordered responsive hover size="sm">
                        <thead>
                            <tr>
                                <th className="text-center">#</th>
                                <th className="text-center">Service Name</th>
                                <th className="text-center">Service Description</th>
                                <th className="text-center">Image</th>
                                <th className="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {servicesData.map((service, index) =>

                                <tr>
                                    <td style={{ width: '3%' }}>{index + 1}</td>
                                    <td style={{ width: '20%' }}>{service.title}</td>
                                    <td style={{ width: '45%' }}>{service.description}</td>
                                    <td style={{ width: '20%' }}>
                                        <img style={{ height: '150px' }} className="img-fluid border" src={`data:image/png;base64,${service.image.img}`} alt="" /></td>
                                    <td style={{ width: '12%' }} className="text-end"><Button variant="danger" onClick={() => deleteService(`${service._id}`)}><FontAwesomeIcon icon={faTrash} /> Delete</Button></td>
                                </tr>)}
                        </tbody>
                    </Table>}
                </div>
            </div>
        </div>
    );
};

export default ManageServices;