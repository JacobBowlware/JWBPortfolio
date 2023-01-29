import React from 'react';

const SkillsCard = ({ skillName, skillBody, icon }) => {

    return (
        <div className="skills-card skills-card-bg ">
            <div className="skills-card_header-container">
                <h4 className="skills-card__header">{skillName}</h4>
                <div className="skills-card__icon">{icon}</div>
            </div>
            <div className="skills-card__body">
                {skillBody}
            </div>
        </div>
    );
}

export default SkillsCard;