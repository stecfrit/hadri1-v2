import React from 'react';

import Nav from './Nav';

export default function Title() {
    return (
        <div id="Title">
            <h1>Hadrien Develay</h1>
            <h2>Software Engineer</h2>
            <p>
                Fear is the mind-killer. Fear is the little-death that brings
                total obliteration. I will face my fear. I will permit it to
                pass over me and through me. And when it has gone past I will
                turn the inner eye to see its path. Where the fear has gone
                there will be nothing. Only I will remain.
            </p>
            <Nav />
            <div className="links">
                <a href="https://github.com/hadri12velay" target="_blank">
                    github
                </a>
                <div className="separating-dot">·</div>

                <a
                    href="https://www.linkedin.com/in/hbed-develay/"
                    target="_blank"
                >
                    linkedin
                </a>
                <div className="separating-dot">·</div>

                <a
                    href="https://www.instagram.com/hadri1.2velay/"
                    target="_blank"
                >
                    instagram
                </a>
                <div className="separating-dot">·</div>

                <a href="mailto:hadrien@develay.uk" target="_blank">
                    email
                </a>
                <div className="separating-dot">·</div>

                <a href="https://resume.hadri1.com/pdf/resume.pdf" target="_blank">
                    resume
                </a>
            </div>
        </div>
    );
}
