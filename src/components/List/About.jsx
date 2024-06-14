import React from "react";
import Twemoji from "../Twemoji";

export default function About() {
  return (
    <div id="About" className="section">
      <h3>About</h3>
      {/* <p>
                Hi! I’m Hadrien Develay, an Aerospace Engineering graduate with
                a passion for merging computer science with spacecraft
                engineering. My journey began at the University of Southampton,
                where I honed my skills in engineering principles,
                problem-solving, and critical thinking. During my time there, I
                led several projects, including designing a passive magnetic
                axial thrust bearing and an unmanned
                Downwind-Faster-Than-the-Wind vehicle. These experiences have
                equipped me with a strong foundation in engineering and a keen
                interest in space exploration.
            </p>
            <p>
                After graduation, I joined Luminance as a Web Software Engineer.
                There, I led the overhaul of the company website and developed
                front-end components for a single-page app. I also had the
                opportunity to mentor new team members, sharing insights into
                the codebase and best practices. This experience has further
                solidified my expertise in web development technologies and my
                ability to work in a team-oriented environment.
            </p>
            <p>
                Outside of my professional life, I’m an avid sports enthusiast.
                I’ve been the Vice-President and Public Relations Officer of the
                University of Southampton Skydive Club. I enjoy skydiving,
                tennis, sailing, bouldering, and scuba diving. I’m also a BASI
                Level 1 Ski Instructor and enjoy alpine skiing and ski touring.
                In my spare time, I love to engage in DIY projects, 3D design
                and printing, and video production and photography. I’m fluent
                in French and English, and I have intermediate proficiency in
                Spanish and Norwegian. I’m excited to bring my diverse set of
                skills and experiences to future endeavors.
            </p> */}

      <p>
        Hi! I’m Hadrien Develay <Twemoji emoji="👋" />, an Aerospace Engineering
        graduate from the University of Southampton with a passion for
        integrating computer science with spacecraft engineering. My academic
        projects included designing a passive magnetic axial thrust bearing and
        an unmanned vehicle, forming a solid foundation in engineering and space
        exploration.
      </p>
      <p>
        Professionally, I started as a Web Software Engineer at Luminance, where
        I led the overhaul of the company website and developed key front-end
        components. My role also involved mentoring, enhancing my skills in team
        collaboration and web technology.
      </p>
      <p>
        Outside work, I'm an enthusiastic sportsman involved in skydiving,
        sailing, and bouldering, and a BASI Level 1 Ski Instructor. I enjoy DIY
        projects, 3D printing, and multimedia production. Fluent in French{" "}
        <Twemoji emoji="🇫🇷" /> and English <Twemoji emoji="🇬🇧" /> with knowledge
        of Spanish and Norwegian <Twemoji emoji="🇳🇴" />, I'm eager to apply my
        diverse skills in new challenges.
      </p>
    </div>
  );
}
