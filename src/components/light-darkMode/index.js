import './index.scss';
import React, { useEffect, useState } from 'react';

function DarkLightMode() {
    const [isLight, setIsLight] = useState(() => {
        return localStorage.getItem('theme') === 'light';
    });

    useEffect(() => {

        if (isLight) {
            document.body.id = 'light';
        } else {
            document.body.id = 'dark';
        }
    }, [isLight]);


    const toggleTheme = () => {
        const newTheme = !isLight ? 'light' : 'dark'; 
        setIsLight(!isLight); 
        localStorage.setItem('theme', newTheme);
    };

    return (

        < div>

            <input type="checkbox"
                className="checkbox" id="chk"
                checked={isLight}
                onChange={toggleTheme} />

            <label className="label" htmlFor="chk">
                <span className="ball"></span>
            </label>
        </div>

    );
}

export default DarkLightMode;
