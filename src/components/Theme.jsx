import React, { useContext, useEffect } from 'react';
import { ThemeContext } from './contexts/ThemeContext';

export default function Theme() {
    const { theme, setTheme } = useContext(ThemeContext);

    const localStorage = window.localStorage;

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('globalTheme', theme);
    }, [theme]);

    return (
        <div id="Theme">
            <div onClick={() => setTheme('default')}>default</div>
            <div onClick={() => setTheme('red')}>red</div>
        </div>
    );
}
