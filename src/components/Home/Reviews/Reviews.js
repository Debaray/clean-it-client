import React, { useEffect, useState } from 'react';
import Spinner from '../../Shared/Spinner/Spinner';
import ReviewInfo from '../ReviewInfo/ReviewInfo';
import './Reviews.css'
const Reviews = () => {
    const [reviewsData, setReviewsData] = useState([]);
    const [showSpin, setShowSpin] = useState(false);
    useEffect(() => {
        const url = `https://whispering-shore-80941.herokuapp.com/reviews`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setReviewsData(data);
                setShowSpin(true);
            })
    }, [showSpin])
    return (
        <div className="mt-5 bg-light">
            <h5 className="text-color text-center margin-style">We Clean Everything</h5>
            <h1 className="text-color text-center mt-5"><span className=" text-color text-style">We Value </span>Your Opinion</h1>
            {!showSpin && <Spinner></Spinner>}
            {showSpin && <div >
                <div className="mt-5 row d-flex justify-content-center">
                    {
                        reviewsData.map(reviewData => <ReviewInfo key={reviewData._id} review={reviewData}></ReviewInfo>)
                    }
                </div>
            </div>}
        </div>
    );
};

export default Reviews;