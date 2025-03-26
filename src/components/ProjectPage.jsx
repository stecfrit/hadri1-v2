import React from "react";
import IconLink from "./IconLink";
import ArrowIcon from "../assets/icons/arrow-left.svg?react";

import { projects } from "../data/projects";

export default function ProjectPage() {
  return (
    <div id="ProjectPage" className="content">
      <div className="project-page-container">
        <IconLink
          to="../"
          className="left back-link"
          icon={<ArrowIcon />}
          icon_first={true}
        >
          View PDF Résumé
        </IconLink>
        <h1>Project Archive</h1>
        <table className="projects-table">
          <thead>
            <tr>
              <td>Year</td>
              <td>Name</td>
              <td>Built with</td>
              <td>Link</td>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, key) => {
              return (
                <tr
                  className={`${project.featured ? "featured" : ""}`}
                  key={key}
                >
                  <td className="year">{project.year}</td>
                  <td className="name">{project.name}</td>
                  <td className="tech">
                    {project.tech.map((tech, key) => {
                      return <span key={key}>{tech}</span>;
                    })}
                  </td>
                  <td className="link">
                    <a href={project.link} target="_blank">
                      {project.link}
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
