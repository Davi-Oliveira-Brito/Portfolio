import "./index.scss";
import { useState } from "react";

export default function SetIdiom() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("PT");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectLanguage = (lang) => {
    setSelectedLanguage(lang);
    setIsOpen(false);
    // Aqui você pode adicionar lógica para mudar o idioma do site
    localStorage.setItem("language", lang);
  };

  return (
    <div className="SetIdiom">
      <button className="idiom-button" onClick={toggleDropdown}>
        <img src="/Assets/images/Global.png" alt="Idioma" className="global-icon" />
        <span className="current-language">{selectedLanguage}</span>
        <img 
          src="/Assets/images/Arrow.png" 
          alt="Seta" 
          className={`arrow-icon ${isOpen ? 'open' : ''}`} 
        />
      </button>

      {isOpen && (
        <div className="idiom-dropdown">
          <button 
            className={`idiom-option ${selectedLanguage === 'PT' ? 'active' : ''}`}
            onClick={() => selectLanguage('PT')}
          >
            PT
          </button>
          <button 
            className={`idiom-option ${selectedLanguage === 'EN' ? 'active' : ''}`}
            onClick={() => selectLanguage('EN')}
          >
            EN
          </button>
        </div>
      )}
    </div>
  );
}