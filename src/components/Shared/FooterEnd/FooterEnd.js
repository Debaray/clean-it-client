import React from 'react';
import './FooterEnd.css';
const FooterEnd = () => {
    return (
        <div className="copyRight text-center">
                <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
            </div>
    );
};

export default FooterEnd;