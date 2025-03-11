import { React, useState } from 'react';
import { Link } from 'react-scroll';
import './index.scss'

import DarkLightMode from '../light-darkMode/index.js';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header className="header">
            <div className="test">

                {/* Ícone do menu hambúrguer */}
                <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                {/* Menu de navegação */}
                <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
                    <Link smooth={true} duration={500} className="nav-link" to="Home" onClick={closeMenu}>Home</Link>
                    <Link smooth={true} duration={500} className="nav-link" to="SobreMim" onClick={closeMenu}>Sobre Mim</Link>
                    <Link smooth={true} duration={500} className="nav-link" to="Projetos" onClick={closeMenu}>Projetos</Link>
                    <Link smooth={true} duration={500} className="nav-link" to="Contato" onClick={closeMenu}>Contato</Link>
                </nav>

                <DarkLightMode />
            </div>
        </header>
    );
};


export default Header;
