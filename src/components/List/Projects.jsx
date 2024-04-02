import React from 'react';

import ProjectContainer from './components/ProjectContainer';

import { projects } from '../../data/projects';

export default function Projects() {
    return (
        <div id="Projects" className="section">
            <h3>Projects</h3>
            <div className="projects">
                {projects.map((project, key) => {
                    return (
                        <ProjectContainer
                            project={project}
                            key={key}
                        />
                    );
                })}
            </div>
        </div>
    );
}
