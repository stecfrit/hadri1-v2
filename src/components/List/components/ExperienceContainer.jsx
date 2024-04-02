import React from 'react';

export default function ExperienceContainer({ experience }) {
    return (
        <div className="experience-container">
            <div className="background"></div>
            <span className="date">
                {experience.start} - {experience.end}
            </span>
            <div className="card-right">
                <h4 className="company">{experience.company}</h4>
                <span className="role">{experience.role}</span>
                <p className="description">{experience.description}</p>
                <div className="skills">
                    {experience.skills.map((skill, key) => {
                        return (
                            <div className="skill" key={key}>
                                {skill}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
