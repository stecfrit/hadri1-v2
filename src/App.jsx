import React, { useRef } from 'react';

import Title from './components/Title';
import List from './components/List';
import Theme from './components/Theme';
import Cursor from './components/Cursor';

function App() {
    const cursor = useRef(null);
    const changePosition = (e) => {
        cursor.current.style.top = `${e.clientY}px`;
        cursor.current.style.left = `${e.clientX}px`;
    };
    return (
        <div id="App" onMouseMove={changePosition}>
            <div id="Cursor" ref={cursor}></div>
            <Theme />
            <div className="content">
                <Title />
                <List />
            </div>
        </div>
    );
}

export default App;
