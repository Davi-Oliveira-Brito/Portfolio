import './index.scss';
import React, { useEffect, useState } from 'react';

function DarkLightMode() {
    // Estado inicial com base no localStorage
    const [isLight, setIsLight] = useState(() => {
        return localStorage.getItem('theme') === 'light';
    });

    // Aplica o tema salvo no localStorage ao carregar a página
    useEffect(() => {
        // Se o tema for "light", adiciona o id "light" ao body, senão adiciona "dark"
        if (isLight) {
            document.body.id = 'light';
        } else {
            document.body.id = 'dark';
        }
    }, [isLight]);

    // Função para alternar o tema
    const toggleTheme = () => {
        const newTheme = !isLight ? 'light' : 'dark'; // Alterna entre "light" e "dark"
        setIsLight(!isLight); // Atualiza o estado
        localStorage.setItem('theme', newTheme); // Salva o tema no localStorage
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


//return (
//    < div className="toggle-switch">
//        <label className="switch-label">
//            <input type="checkbox" className="checkbox"/>
//                <span className="slider"></span>
//        </label>
//    </div>
//);
//
//<div>
//    <input
//        type="checkbox"
//        className="checkbox"
//        id="chk"
//        checked={isLight}
//        onChange={toggleTheme}
//    />
//    <label className="label" htmlFor="chk">
//        <div className="ball"></div>
//    </label>
//</div>