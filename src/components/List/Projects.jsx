import React from 'react';
import ProjectContainer from './components/ProjectContainer';
import { Link } from 'react-router-dom';
import { projects } from '../../data/projects';
import ArrowIcon from '../../assets/icons/arrow-right.svg?react';
import IconLink from '../IconLink';

export default function Projects() {
    return (
        <div id="Projects" className="section">
            <h3>Projects</h3>
            <div className="projects">
                {projects.map((project, key) => {
                    return <ProjectContainer project={project} key={key} />;
                })}
                <IconLink
                    to="/projects"
                    className="right projects-link"
                    icon={<ArrowIcon />}
                >
                    Complete List of Projects (WIP)
                </IconLink>
            </div>
        </div>
    );
}
