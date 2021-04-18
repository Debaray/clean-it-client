import React from 'react';
import { Link } from 'react-router-dom';
import './FooterCol.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDotCircle} from '@fortawesome/free-solid-svg-icons';
const FooterCol = (props) => {
    return (
        <div className="col-md-4 mt-3">
            <h6 className="text-style-footer text-white mb-3">{props.menuTitle}</h6>
            <ul className="list-unstyled mt-4">
                {
                    props.menuItems.map((item, index) => <li key={index}>
                      {item.link?<Link to={item.link} className="text-white"><FontAwesomeIcon icon={faDotCircle} /> {item.name}</Link> : <p className="text-white">
                      {item.name}
                      </p>}
                        </li>)
                }
            </ul>
            {props.children && props.children}
        </div>
    );
};

export default FooterCol;