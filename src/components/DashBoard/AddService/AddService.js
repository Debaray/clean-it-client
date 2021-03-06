import React, { useState } from 'react';
import NavBar from '../../Shared/NavBar/NavBar';
import SideBar from '../SideBar/SideBar';
import Button from 'react-bootstrap/Button';
import './AddService.css';
const AddService = () => {
    const [serviceData, setServiceData] = useState({
        serviceTitle: 'Dry Cleaning',
        description: 'Oil stains are stubborn and may not be entirely possible to remove by water.  Synthetic fibers like polyester respond well to only dry cleaning.',
        allShirts: 1.50,
        pantsJeansSkirts: 2.50,
        sweaters: 6.50,
        tieScarf: 5.50,
        coatHeavyJacketDress: 10.50,
        silkSuedeLeathers: 20.50,
        curtainsDrapery: 40.50
    });
    const [file, setFile] = useState(null);
    const handleSubmit = e => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('serviceTitle', serviceData.serviceTitle);
        formData.append('description', serviceData.description);
        formData.append('allShirts', serviceData.allShirts);
        formData.append('pantsJeansSkirts', serviceData.pantsJeansSkirts);
        formData.append('sweaters', serviceData.sweaters);
        formData.append('tieScarf', serviceData.tieScarf);
        formData.append('coatHeavyJacketDress', serviceData.coatHeavyJacketDress);
        formData.append('silkSuedeLeathers', serviceData.silkSuedeLeathers);
        formData.append('curtainsDrapery', serviceData.curtainsDrapery);

        const url = `https://whispering-shore-80941.herokuapp.com/addAService`;

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                alert('Congratulations!Your Service added successfully.');
            })
            .catch(error => {
                console.error(error)
            })

        e.preventDefault();
        document.getElementById('formId').reset();

    }
    const handleProductImageChange = event => {

        const newFile = event.target.files[0];
        setFile(newFile);
    }
    const handleServicePropertyChange = event => {
        const newServiceData = { ...serviceData };
        if (event.target.name === 'allShirts') {
            newServiceData[event.target.name] = Number(event.target.value.trim()) || 1.50;
        }
        else if (event.target.name === 'pantsJeansSkirts') {
            newServiceData[event.target.name] = Number(event.target.value.trim()) || 2.50;
        }
        else if (event.target.name === 'sweaters') {
            newServiceData[event.target.name] = Number(event.target.value.trim()) || 6.50;
        }
        else if (event.target.name === 'tieScarf') {
            newServiceData[event.target.name] = Number(event.target.value.trim()) || 5.50;
        }
        else if (event.target.name === 'coatHeavyJacketDress') {
            newServiceData[event.target.name] = Number(event.target.value.trim()) || 10.50;
        }
        else if (event.target.name === 'silkSuedeLeathers') {
            newServiceData[event.target.name] = Number(event.target.value.trim()) || 20.50;
        }
        else if (event.target.name === 'curtainsDrapery') {
            newServiceData[event.target.name] = Number(event.target.value.trim()) || 40.50;
        }
        else {
            newServiceData[event.target.name] = event.target.value.trim();
        }
        setServiceData(newServiceData);
        console.log(newServiceData);
    }
    return (
        <div>
            <NavBar></NavBar>
            <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-12">
                    <SideBar></SideBar>
                </div>
                <div className="col-lg-8 col-md-8 col-sm-12 offset-lg-1 offset-md-1 offset-sm-0">
                    <h3 className="mt-2">Add Service</h3>
                    <form id="formId" className="mt-3 form-style mb-5" onSubmit={handleSubmit}>
                        <div>
                            <div className="row">
                                <label className="col-sm-12 col-md-6 col-lg-6 text-thickness">
                                    Service Title
                                <hr></hr>
                                    <input className="col-sm-12 col-md-10 col-lg-10" name="serviceTitle" required placeholder="Dry Cleaning" type="text" onChange={handleServicePropertyChange} />
                                </label>
                                <label className="col-sm-12 col-md-6 col-lg-6  text-thickness">
                                    Upload Image
                                    <hr></hr>
                                    <input className="col-sm-12 col-md-10 col-lg-10" required type="file" onChange={handleProductImageChange} />
                                </label>
                            </div>
                            <div className="row mt-2">
                                <label className="col-sm-12 col-md-6 col-lg-6  text-thickness">
                                    Description
                                    <hr></hr>
                                    <textarea className="col-sm-12 col-md-10 col-lg-10" name="description" required placeholder="Oil stains are stubborn and may not be entirely possible to remove by water.  Synthetic fibers like polyester respond well to only dry cleaning." rows="4" type="text" onChange={handleServicePropertyChange} />
                                </label>
                            </div>
                        </div>
                        <div>
                            <h3 className="mt-2">Pricing for Service</h3>
                            <div className="row">
                                <label className="col-sm-12 col-md-6 col-lg-6  text-thickness">
                                    All Shirts
                                <hr></hr>
                                    <input className="col-sm-12 col-md-10 col-lg-10" name="allShirts" required placeholder="1.50$" step=".01" min="1" type="number" onChange={handleServicePropertyChange} />
                                </label>
                                <label className="col-sm-12 col-md-6 col-lg-6  text-thickness">
                                    Pants, Jeans, Skirts
                                <hr></hr>
                                    <input className="col-sm-12 col-md-10 col-lg-10" name="pantsJeansSkirts" required placeholder="2.50$" min="1" step=".01" type="number" onChange={handleServicePropertyChange} />
                                </label>
                                <label className="col-sm-12 col-md-6 col-lg-6  text-thickness">
                                    Sweaters
                                <hr></hr>
                                    <input className="col-sm-12 col-md-10 col-lg-10" name="sweaters" required placeholder="6.50$" min="1" step=".01" type="number" onChange={handleServicePropertyChange} />
                                </label>
                                <label className="col-sm-12 col-md-6 col-lg-6  text-thickness">
                                    Tie, Scarf
                                <hr></hr>
                                    <input className="col-sm-12 col-md-10 col-lg-10" name="tieScarf" required placeholder="5.50$" min="1" step=".01" type="number" onChange={handleServicePropertyChange} />
                                </label>
                                <label className="col-sm-12 col-md-6 col-lg-6  text-thickness">
                                    Coat, Heavy Jacket, Dress
                                <hr></hr>
                                    <input className="col-sm-12 col-md-10 col-lg-10" name="coatHeavyJacketDress" placeholder="10.50$" required min="1" step=".01" type="number" onChange={handleServicePropertyChange} />
                                </label>
                                <label className="col-sm-12 col-md-6 col-lg-6  text-thickness">
                                    Silk, Suede ,Leathers
                                <hr></hr>
                                    <input className="col-sm-12 col-md-10 col-lg-10" name="silkSuedeLeathers" placeholder="20.50$" required min="1" step=".01" type="number" onChange={handleServicePropertyChange} />
                                </label>
                                <label className="col-sm-12 col-md-6 col-lg-6  text-thickness">
                                    Curtains and Drapery
                                <hr></hr>
                                    <input className="col-sm-12 col-md-10 col-lg-10" name="curtainsDrapery" placeholder="40.50$" required min="1" step=".01" type="number" onChange={handleServicePropertyChange} />
                                </label>
                            </div>
                        </div>
                        <Button variant="primary" as="input" type="submit" value="Save" className="pt-2 pb-2 mt-1" block />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;