import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <div className="footer">
            <h1 className="footer__header">JWB</h1>
            <div className="footer__body">
                <p><FontAwesomeIcon className="hero-card__icon" icon="fa-solid fa-phone" /> 405.535.6145</p>
                <p><FontAwesomeIcon className="hero-card__icon" icon="fa-solid fa-envelope" /> Jacobbowlware@gmail.com</p>
                <p><FontAwesomeIcon className="hero-card__icon" icon="fa-solid fa-map-location-dot" /> Norman, Oklahoma</p>
            </div>
        </div>
    );
}

export default Footer;