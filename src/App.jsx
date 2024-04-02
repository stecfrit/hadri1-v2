import React from 'react';

import Title from './components/Title';
import List from './components/List';
import Theme from './components/Theme';

function App() {
    return (
        <div id="App">
            <Theme />
            <div className="content">
                <Title />
                <List />
            </div>
        </div>
    );
}

export default App;
