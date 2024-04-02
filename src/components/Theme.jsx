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
            <div className='theme-button default' onClick={() => setTheme('default')}></div>
            <div className='theme-button red' onClick={() => setTheme('red')}></div>
            <div className='theme-button blue' onClick={() => setTheme('blue')}></div>
            <div className='theme-button blue2' onClick={() => setTheme('blue2')}></div>
            <div className='theme-button brown' onClick={() => setTheme('brown')}></div>
            <div className='theme-button blue3' onClick={() => setTheme('blue3')}></div>
        </div>
    );
}
