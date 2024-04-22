import React, { useEffect, useRef } from 'react';

import Title from './components/Title';
import List from './components/List';
import Theme from './components/Theme';
import Cursor from './components/Cursor';
import PageNotFound from './components/PageNotFound';
import ProjectPage from './components/ProjectPage';
import { Route, Routes } from 'react-router-dom';

function App() {
    // Some code to have a custom cursor (also see cursor.scss)
    const cursor = useRef(null);
    const changePosition = (e) => {
        cursor.current.style.top = `${e.clientY}px`;
        cursor.current.style.left = `${e.clientX}px`;
    };

    // hides the cursor on mobiles and tablets
    const supportsTouch =
        'ontouchstart' in window || navigator.msMaxTouchPoints;

    useEffect(() => {
        if (supportsTouch) {
            cursor.current.classList.add('hidden');
        }
    }, []);

    return (
        <div id="App" onMouseMove={changePosition}>
            <div id="Cursor" ref={cursor}></div>
            <Theme />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<ProjectPage />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </div>
    );
}

function Home() {
    return (
        <div id="Home" className="content">
            <Title />
            <List />
        </div>
    );
}

export default App;
