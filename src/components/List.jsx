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
        </div>
    );
}
