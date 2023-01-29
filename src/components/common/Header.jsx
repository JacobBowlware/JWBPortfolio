import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
    return (
        <nav id="navbar" className="navbar navbar-expand-lg navbar-light">
            <a id="nav-brand" className="navbar-brand" href="/">Jacob Bowlware</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span id="navbar-toggler-icon" className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a id="nav-item" className="nav-item nav-link" href="/#about">About</a>
                </div>
                <div className="navbar-nav">
                    <a id="nav-item" className="nav-item nav-link" href="/#skills">Skills</a>
                </div>
                <div className="navbar-nav">
                    <a id="nav-item" className="nav-item nav-link" href="/#projects">Projects</a>
                </div>
                <div className="navbar-nav">
                    <a id="nav-item" className="nav-item nav-link" href="/#contact">Contact</a>
                </div>
                <div className="navbar-nav">
                    <a
                        id="nav-item"
                        className="nav-item nav-link"
                        href="https://docs.google.com/document/d/e/2PACX-1vRJSAdEHJIZ07awtZvEvpUbaOieYg1l0-IJhBLUR-we8CO08mu4iQ-Wyl2-mE--Rh3AesTmwERsHl8d/pub"
                        target="_blank"
                        rel="noreferrer"
                    ><FontAwesomeIcon className="hero-card__icon" icon="fa-solid fa-file" />Resume</a>
                </div>
            </div>
        </nav>
    );
}

export default Header;