import React from 'react';
import NavBar from '../../Shared/NavBar/NavBar';
import SideBar from '../SideBar/SideBar';

const BookService = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="row">
                <div className="col-lg-3">
                    <SideBar></SideBar>
                </div>
                <div className="col-lg-9">
                    <h1>This is BookService</h1>
                </div>
            </div>
        </div>
    );
};

export default BookService;