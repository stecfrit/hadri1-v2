import React from 'react';
import ProjectContainer from './components/ProjectContainer';
import { Link } from 'react-router-dom';
import { projects } from '../../data/projects';
import ArrowIcon from '../../assets/icons/arrow-diag.svg?react';

export default function Projects() {
    return (
        <div id="Projects" className="section">
            <h3>Projects</h3>
            <div className="projects">
                {projects.map((project, key) => {
                    return <ProjectContainer project={project} key={key} />;
                })}
                <ArrowLink to="/projects" className="projects-link">
                    Complete List of Projects (WIP)
                </ArrowLink>
            </div>
        </div>
    );
}

function ArrowLink({ to, className, children }) {
    return (
        <Link className={`arrow-link ${className}`} to={to}>
            {children}
            <ArrowIcon />
        </Link>
    );
}
