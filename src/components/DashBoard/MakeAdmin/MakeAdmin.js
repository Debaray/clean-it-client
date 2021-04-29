import React, { useState } from 'react';
import NavBar from '../../Shared/NavBar/NavBar';
import SideBar from '../SideBar/SideBar';
import Button from 'react-bootstrap/Button';
const MakeAdmin = () => {
    const [adminData, setAdminData] = useState({});
    const handleSubmit = e => {
        console.log(adminData);
        const url = `https://whispering-shore-80941.herokuapp.com/addAdmin`;

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(adminData)
        })
            .then(res => {
                console.log('server side response', res)
                alert('Congratulations!Admin added successfully.');
            })
            .catch(error => {
                console.error(error)
            })
            e.preventDefault();
            document.getElementById('formId').reset();
    }
    const handleServicePropertyChange = event => {
        const newAdminData = { ...adminData };
        newAdminData[event.target.name] = event.target.value.trim();
        newAdminData.role = 'Admin';
        setAdminData(newAdminData);
    }
    return (
        <div>
            <NavBar></NavBar>
            <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-12">
                    <SideBar></SideBar>
                </div>
                <div className="col-lg-8 col-md-8 col-sm-12 offset-lg-1 offset-md-1 offset-sm-0">
                    <h3 className="mt-2">Make Admin</h3>
                    <form id="formId" className="mt-3 form-style" onSubmit={handleSubmit}>
                        <div className="row">
                            <label className="col-sm-12 col-md-9 col-lg-9">
                                Email
                                <hr></hr>
                                <div className="row">
                                    <input className="col-sm-12 col-md-12 col-lg-7" name="email" placeholder="abc@example.com" required type="email" onChange={handleServicePropertyChange} />
                                    <Button className="col-sm-12 col-md-12 col-lg-4 ml-lg-2 mt-md-2 mt-sm-2 mt-lg-0" variant="primary" as="input" type="submit" value="Save" onClick={handleSubmit} />
                                </div>

                            </label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;