import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <div className="footer">
            <h1 className="footer__header">JWB</h1>
            <div className="footer__body">
                <a className="footer__body-text" href="tel:4055356145"><FontAwesomeIcon className="hero-card__icon" icon="fa-solid fa-phone" /> 405.535.6145</a>
                <a className="footer__body-text" href="mailto:Jacobbowlware@gmail.com"><FontAwesomeIcon className="hero-card__icon" icon="fa-solid fa-envelope" /> Jacobbowlware@gmail.com</a>
                <a className="footer__body-text" href="https://en.wikipedia.org/wiki/Norman,_Oklahoma" target='_blank' rel="noreferrer"><FontAwesomeIcon className="hero-card__icon" icon="fa-solid fa-map-location-dot" /> Norman, Oklahoma</a>
            </div>
        </div>
    );
}

export default Footer;