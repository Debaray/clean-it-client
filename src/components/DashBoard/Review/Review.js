import React, { useState } from 'react';
import NavBar from '../../Shared/NavBar/NavBar';
import SideBar from '../SideBar/SideBar';
import Button from 'react-bootstrap/Button';
const Review = () => {
    const [reviewData, setReviewData] = useState({
        email: 'debaray17@gmail.com'
    });
    const handleSubmit = e => {
        console.log(reviewData);
        const url = `http://localhost:5000/addReview`;

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
            .then(res => {
                console.log('server side response', res)
                alert('Congratulations!Review added successfully.');
            })
            .catch(error => {
                console.error(error)
            })
            e.preventDefault();
            document.getElementById('formId').reset();
    }
    const handleServicePropertyChange = event => {
        const newReviewData = { ...reviewData };
        newReviewData[event.target.name] = event.target.value.trim();
        setReviewData(newReviewData);
    }
    return (
        <div>
            <NavBar></NavBar>
            <div className="row">
                <div className="col-lg-3">
                    <SideBar></SideBar>
                </div>
                <div className="col-lg-9">
                    <h3 className="mt-2">Add Review</h3>
                    <form id="formId" className="mt-3 form-style" onSubmit={handleSubmit}>
                        <div>
                            <div className="row">
                                <label className="col-sm-12 col-md-6 col-lg-6 text-thickness">
                                    Name
                                <hr></hr>
                                    <input className="col-sm-12 col-md-10 col-lg-10" name="yourName" required placeholder="Your Name" type="text" onChange={handleServicePropertyChange} />
                                </label>
                                <label className="col-sm-12 col-md-6 col-lg-6 text-thickness">
                                    Designation,Company Name
                                <hr></hr>
                                    <input className="col-sm-12 col-md-10 col-lg-10" name="companyNameDesignation" required placeholder="Designation,Company Name" type="text" onChange={handleServicePropertyChange} />
                                </label>
                            </div>
                            <div className="row mt-2">
                                <label className="col-sm-12 col-md-6 col-lg-6  text-thickness">
                                    Description
                                    <hr></hr>
                                    <textarea className="col-sm-12 col-md-10 col-lg-10" name="description" required placeholder="Description" rows="4" type="text" onChange={handleServicePropertyChange} />
                                </label>
                            </div>
                        </div>
                        <Button className="pt-2 pb-2 mt-1" variant="primary" as="input" type="submit" value="Save" block  />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Review;