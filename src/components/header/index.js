import "./index.scss";
import SetIdiom from "../SetIdiom";
import DarkLightMode from "../light-darkMode";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  return (
    <header className="Header">
      <nav className="nav-links">
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          Inicio
        </Link>
        <Link
          to="/About"
          className={location.pathname === "/sobre" ? "active" : ""}
        >
          Sobre
        </Link>
        <Link
          to="/Projects"
          className={location.pathname === "/projetos" ? "active" : ""}
        >
          Projetos
        </Link>
      </nav>

      <div className="header-controls">
        <SetIdiom />
        <DarkLightMode />
      </div>
    </header>
  );
}
