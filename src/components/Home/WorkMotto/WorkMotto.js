import React from 'react';
import './WorkMotto.css';
import dirtyShirt from '../../../images/icon/dirty-shirt.png';
import deliveryTruck from '../../../images/icon/delivery-truck.png';
import doorStep from '../../../images/icon/doorstep.png';
import telephone from '../../../images/icon/telephone.png';
import WorkMottoInfo from '../WorkMottoInfo/WorkMottoInfo';
const workMottoData = [
    {
        id: 1,
        title: 'WE PICK YOUR CLOTHES',
        description: 'The automated process starts as soon as your clothes go into the machine. The outcome is gleaming clothes!',
        img: dirtyShirt
    },
    {
        id: 2,
        title: 'QUICKER DELIVERY',
        description: 'We ensure delivery in the quickest of the turnaround time in the industry. Superior quality of service with speed!',
        img: deliveryTruck
    },
    {
        id: 3,
        title: 'DELIVERY AT THE DOORSTEP!',
        description: 'We have pioneered the concept of pickup and delivery in the shortest possible time. We intend keeping it that way!',
        img: doorStep
    }
]
const WorkMotto = () => {
    return (
        <div className="mt-5">
            <h5 className="text-color text-center">Clean Job Always</h5>
            <h1 className="text-color text-center"><span className=" text-color text-style">This is</span> How we Work</h1>
            <div className="mt-5 row d-flex justify-content-center">
                {
                    workMottoData.map(workMotto => <WorkMottoInfo key={workMotto.id} workMotto={workMotto}></WorkMottoInfo>)
                }
            </div>
            <div className="mt-5">
                <div className="row d-flex justify-content-center">
                    <div className="bg-call text-center">
                        <div>
                            <img className="w-25 image-style" src={telephone} alt="" />
                            <h2 className="text-color">Call Us @ 223 334 6667</h2>
                            <p className="text-secondary">We deliver the goods to the most complicated places on earth</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkMotto;