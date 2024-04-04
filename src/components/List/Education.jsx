import React from 'react';

import EducationContainer from './components/EducationContainer';

import { educations } from '../../data/education';

export default function Education() {
    return (
        <div id="Education" className="section">
            <div className="timeline"></div>
            <h3>Education</h3>
            <div className="educations">
                {educations.map((education, key) => {
                    return (
                        <EducationContainer
                            education={education}
                            key={key}
                        />
                    );
                })}
            </div>
        </div>
    );
}
