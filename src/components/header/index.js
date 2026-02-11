import './index.scss';
import SetIdiom from '../SetIdiom';
import DarkLightMode from '../light-darkMode';
import { useState } from 'react';

export default function Header() {
    const [activeLink, setActiveLink] = useState('Inicio');

    return (
        <header className='Header'>
            <nav className='nav-links'>
                <a 
                    href="#Home" 
                    className={activeLink === 'Inicio' ? 'active' : ''}
                    onClick={() => setActiveLink('Inicio')}
                >
                    Inicio
                </a>
                <a 
                    href="#Sobre" 
                    className={activeLink === 'Sobre' ? 'active' : ''}
                    onClick={() => setActiveLink('Sobre')}
                >
                    Sobre
                </a>
                <a 
                    href="#Projetos" 
                    className={activeLink === 'Projetos' ? 'active' : ''}
                    onClick={() => setActiveLink('Projetos')}
                >
                    Projetos
                </a>
            </nav>
            
            <div className='header-controls'>
                <SetIdiom />
                <DarkLightMode />
            </div>
        </header>
    );
}