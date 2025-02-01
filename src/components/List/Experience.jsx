import React from "react";
import ExperienceContainer from "./components/ExperienceContainer";
import { experiences } from "../../data/experiences";
import IconLink from "../IconLink";
import ArrowIcon from "../../assets/icons/arrow-diag.svg?react";

export default function Experience() {
  return (
    <div id="Experience" className="section">
      <div className="timeline"></div>
      <h3>Experience</h3>
      <div className="experiences">
        {experiences.map((experience, key) => {
          return <ExperienceContainer experience={experience} key={key} />;
        })}
        <IconLink
          to="/files/Hadrien_Develay_Resume.pdf"
          className="diagonal experience-link"
          icon={<ArrowIcon />}
          external={true}
        >
          View PDF Résumé
        </IconLink>
      </div>
    </div>
  );
}
