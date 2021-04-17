import React, { useState } from 'react';
import NavBar from '../../Shared/NavBar/NavBar';
import SideBar from '../SideBar/SideBar';
import Button from 'react-bootstrap/Button';
const AddService = () => {
    const [serviceData, setServiceData] = useState({});
    const [file, setFile] = useState(null);
    const handleSubmit = e => {
        console.log(serviceData);

        const formData = new FormData()
        console.log(serviceData);
        formData.append('file', file);
        formData.append('serviceTitle', serviceData.serviceTitle);
        formData.append('description', serviceData.description);
        console.log(formData);
        const url = `http://localhost:5000/addAService`;

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })

    }
    const handleProductImageChange = event => {
        //setShowSpin(false);
        const newFile = event.target.files[0];
        setFile(newFile);
    }
    const handleServicePropertyChange = event => {
        const newServiceData = { ...serviceData };
        newServiceData[event.target.name] = event.target.value.trim();
        setServiceData(newServiceData);
    }
    return (
        <div>
            <NavBar></NavBar>
            <div className="row">
                <div className="col-lg-3">
                    <SideBar></SideBar>
                </div>
                <div className="col-lg-9">
                    <h3 className="mt-2">Add Service</h3>
                    <form className="mt-3 form-style">
                        <div className="row">
                            <label htmlFor="productName" className="col-sm-12 col-md-6 col-lg-6">
                                Service Title
                                <hr></hr>
                                <input className="col-sm-12 col-md-10 col-lg-10" name="serviceTitle" placeholder="Dry Cleaning" type="text" onChange={handleServicePropertyChange} />
                            </label>

                            <label className="col-sm-12 col-md-6 col-lg-6">
                                Upload Image
                             <hr></hr>
                                <input className="col-sm-12 col-md-10 col-lg-10" type="file" onChange={handleProductImageChange} />
                            </label>
                        </div>
                        <div className="row mt-2">
                            <label className="col-sm-12 col-md-6 col-lg-6">
                                Description
                             <hr></hr>
                                <textarea className="col-sm-12 col-md-10 col-lg-10" name="description" placeholder="Oil stains are stubborn and may not be entirely possible to remove by water.  Synthetic fibers like polyester respond well to only dry cleaning." rows="4" type="text" onChange={handleServicePropertyChange} />
                            </label>
                        </div>
                        <Button variant="primary" as="input" type="reset" value="Save" className="pt-2 pb-2" block onClick={handleSubmit} />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;