import React from 'react';

import About from './List/About';
import Experience from './List/Experience';
import Projects from './List/Projects';
import Interests from './List/Interests';
import Education from './List/Education';

export default function List() {
    return (
        <div id="List">
            <About />
            <Experience />
            <Projects />
            <Education />
            <Interests />
            <p className="quote">
                Fear is the mind-killer. Fear is the little-death that brings
                total obliteration.
                {/* I will face my fear. I will permit it to
                pass over me and through me. And when it has gone past I will
                turn the inner eye to see its path. Where the fear has gone
                there will be nothing. Only I will remain. */}
                <a
                    href="https://en.wikipedia.org/wiki/Bene_Gesserit#Litany_against_fear"
                    target="_blank"
                    className="quote-desc"
                >
                    &nbsp;&nbsp;&nbsp;Litany Against Fear, <em>Dune</em>, 1965.
                </a>
            </p>
        </div>
    );
}
