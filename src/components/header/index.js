import "./index.scss";
import SetIdiom from "../SetIdiom";
import DarkLightMode from "../light-darkMode";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export default function Header() {
  const location = useLocation();
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="Header">

      {/* Burger */}
      <button className="burger" onClick={toggleMenu} aria-label="Menu">
        <span className={`burger-line ${menuOpen ? 'open' : ''}`}></span>
        <span className={`burger-line ${menuOpen ? 'open' : ''}`}></span>
        <span className={`burger-line ${menuOpen ? 'open' : ''}`}></span>
      </button>

      {/* Nav dropdown */}
      <nav className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
        <Link to="/" className={location.pathname === "/" ? "active" : ""} onClick={closeMenu}>
          {t("nav.inicio")}
        </Link>
        <Link to="/About" className={location.pathname === "/About" ? "active" : ""} onClick={closeMenu}>
          {t("nav.sobre")}
        </Link>
        <Link to="/Projects" className={location.pathname === "/Projects" ? "active" : ""} onClick={closeMenu}>
          {t("nav.projetos")}
        </Link>
      </nav>

      {/* Sempre visível */}
      <div className="header-controls">
        <SetIdiom />
        <DarkLightMode />
      </div>

    </header>
  );
}