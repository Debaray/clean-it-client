import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import WorkMotto from '../WorkMotto/WorkMotto';
import './Header.css';
const Header = () => {
    return (
        <div className="header-container">
            <HeaderMain></HeaderMain>
            <WorkMotto></WorkMotto>
        </div>
    );
};

export default Header;