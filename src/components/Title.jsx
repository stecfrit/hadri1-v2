import React from "react";

import Nav from "./Nav";
import CreativeZone from "./CreativeZone";
import LinkedinLogo from "../assets/logos/linkedin.svg?react";
import GithubLogo from "../assets/logos/github.svg?react";
import EmailLogo from "../assets/logos/email.svg?react";
import InstagramLogo from "../assets/logos/instagram.svg?react";
import ResumeLogo from "../assets/logos/resume.svg?react";

export default function Title() {
  return (
    <div id="Title">
      <h1>
        Hadrien Develay
        <img src="/profile.jpg" alt="Profile" className="profile-picture" />
      </h1>
      <h2>Fullstack Developer</h2>
      {/* <p>
                Fear is the mind-killer. Fear is the little-death that brings
                total obliteration. I will face my fear. I will permit it to
                pass over me and through me. And when it has gone past I will
                turn the inner eye to see its path. Where the fear has gone
                there will be nothing. Only I will remain. 
                <a href='https://en.wikipedia.org/wiki/Bene_Gesserit#Litany_against_fear' target='_blank' className='quote-desc'>&nbsp;&nbsp;&nbsp;Litany Against Fear, <em>Dune</em>, 1965.</a>
            </p> */}
      <p>
        Dynamic Fullstack Web Developer with robust problem-solving skills and a
        passion for beautiful and functional web applications.
      </p>
      <Nav />
      <CreativeZone />
      <div className="links">
        <a href="https://github.com/stecfrit" target="_blank">
          github
        </a>
        <div className="separating-dot">·</div>

        <a href="https://www.linkedin.com/in/hbed-develay/" target="_blank">
          linkedin
        </a>
        <div className="separating-dot">·</div>

        <a href="https://www.instagram.com/hadri1.2velay/" target="_blank">
          instagram
        </a>
        <div className="separating-dot">·</div>

        <a href="mailto:hadrien@develay.uk" target="_blank">
          email
        </a>
        <div className="separating-dot">·</div>

        <a href="/files/Hadrien_Develay_Resume.pdf" target="_blank">
          resume
        </a>
        {/* <a href="https://resume.hadri1.com/pdf/resume.pdf" target="_blank">
          resume
        </a> */}
      </div>
      <div className="links-mobile">
        <a href="https://github.com/stecfrit" target="_blank">
          <GithubLogo />
        </a>
        {/* <div className="separating-dot">·</div> */}

        <a href="https://www.linkedin.com/in/hbed-develay/" target="_blank">
          <LinkedinLogo />
        </a>
        {/* <div className="separating-dot">·</div> */}

        <a href="https://www.instagram.com/hadri1.2velay/" target="_blank">
          <InstagramLogo />
        </a>
        {/* <div className="separating-dot">·</div> */}

        <a href="mailto:hadrien@develay.uk" target="_blank">
          <EmailLogo />
        </a>
        {/* <div className="separating-dot">·</div> */}

        <a href="/files/Hadrien_Develay_Resume.pdf" target="_blank">
          <ResumeLogo />
          {/* <a href="https://resume.hadri1.com/pdf/resume.pdf" target="_blank">
          <ResumeLogo /> */}
        </a>
      </div>
    </div>
  );
}
