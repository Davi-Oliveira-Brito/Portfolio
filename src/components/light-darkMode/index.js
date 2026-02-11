import './index.scss';
import React, { useEffect, useState } from 'react';

function DarkLightMode() {
    const [isLight, setIsLight] = useState(() => {
        return localStorage.getItem('theme') === 'light';
    });

    useEffect(() => {
        if (isLight) {
            document.body.className = 'light';
        } else {
            document.body.className = 'dark';
        }
    }, [isLight]);

    const toggleTheme = () => {
        const newTheme = !isLight ? 'light' : 'dark'; 
        setIsLight(!isLight); 
        localStorage.setItem('theme', newTheme);
    };

    return (
        <div className="theme-toggle-container">
            <button 
                className="theme-toggle-button" 
                onClick={toggleTheme}
                aria-label="Alternar tema"
            >
                <img 
                    src={isLight ? "/Assets/images/Moon.png" : "/Assets/images/Sun.png"}
                    alt={isLight ? "Sol" : "Lua"} 
                    className="theme-icon"
                />
            </button>
        </div>
    );
}

export default DarkLightMode;