import React from 'react';

import ExperienceContainer from './components/ExperienceContainer';

import { experiences } from '../../data/experiences';

export default function Experience() {
    return (
        <div id="Experience" className="section">
            <div className="timeline"></div>
            <h3>Experience</h3>
            {experiences.map((experience, key) => {
                return(
                    <ExperienceContainer experience = {experience} key = {key}/>
                );
            })}
        </div>
    );
}
