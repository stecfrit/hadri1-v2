import React from 'react';

export default function EducationContainer({ education }) {
    return (
        <div className="education-container">
            <div className="background"></div>
            <span className="date">
                {education.start} - {education.end}
            </span>
            <div className="card-right">
                <h4 className="degree">{education.degree}</h4>
                <span className="location">{education.location}</span>
                <p className="grade">{education.grade}</p>
                <div className="modules">
                    { education.modules.length > 0 &&
                        <span>Notable modules:</span>
                    }
                    {education.modules.map((module, key) => {
                        const url = education.module_links[key];
                        return (
                            <a href={url} target='_blank' className="module" key={key}>
                                {module}
                            </a>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}