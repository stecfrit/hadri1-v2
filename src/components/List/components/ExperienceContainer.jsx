import React from 'react'

export default function ExperienceContainer({ experience }) {
  return (
    <div className="experience-container">
        <div className="background"></div>
        <span className='date'>{ experience.start } - { experience.end }</span>
        <h4 className='company'>{ experience.company }</h4>
    </div>
  )
}
