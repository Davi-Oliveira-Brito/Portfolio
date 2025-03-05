import './index.scss';
import React from 'react';

function DarkLightMode() {
    return (
        < div className="toggle-switch">
            <label className="switch-label">
                <input type="checkbox" className="checkbox"/>
                    <span className="slider"></span>
            </label>
        </div>
    );
}

export default DarkLightMode;