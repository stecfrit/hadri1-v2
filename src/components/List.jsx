import React from 'react';

import About from './List/About';
import Experience from './List/Experience';
import Projects from './List/Projects';
import Interests from './List/Interests';

export default function List() {
    return (
        <div id="List">
            <About />
            <Experience />
            <Projects />
            <Interests />
        </div>
    );
}
