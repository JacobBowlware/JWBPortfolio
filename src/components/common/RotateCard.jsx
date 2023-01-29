import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RotateCard = ({ title, body, cName, handleRotate, location }) => {

    let btnClass = 'hero__btn ' + cName + '-btn';
    return (
        <div>
            <div className={cName}>
                <h1 className="hero__card-header">{title}</h1>
                {body}
            </div>
            <div className="hero__rotate-btns">
                <button className={btnClass} onClick={() => { handleRotate(0, location) }} >&nbsp; <FontAwesomeIcon className="hero-card__icon" icon="fa-solid fa-arrow-left" />&nbsp;</button>
                <button className={btnClass} onClick={() => { handleRotate(1, location) }} >&nbsp; <FontAwesomeIcon className="hero-card__icon" icon="fa-solid fa-arrow-right" />&nbsp;</button>
            </div>
        </div>
    );
}


export default RotateCard;