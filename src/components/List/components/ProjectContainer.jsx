import React from 'react'

export default function ProjectContainer({ project }) {
  return (
    <a href={project.link} target='_blank' className="project-container">
        <div className="background"></div>
        <div className="image">
            <img src={`./preview/${project.preview_image}`} alt="" />
        </div>
        <div className="card-right">
            <h4 className='title'> { project.name } </h4>
            <div className="description">{ project.description }</div>
            <div className="techs">
                    {project.tech.map((tech, key) => {
                        return (
                            <div className="tech" key={key}>
                                { tech }
                            </div>
                        );
                    })}
                </div>
        </div>
    </a>
  )
}
