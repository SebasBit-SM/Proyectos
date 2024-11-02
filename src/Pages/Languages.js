// src/Pages/Languages.js
import React, { useState } from 'react';
import './Languages.css';

const Languages = () => {
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'es');

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
    localStorage.setItem('language', e.target.value);
    alert(`Idioma cambiado a: ${e.target.options[e.target.selectedIndex].text}`);
  };

  return (
    <div className="languages-container">
      <h1>Idiomas</h1>
      <p>Seleccione su idioma preferido para navegar en Find Me:</p>
      <div className="language-selection">
        <label htmlFor="language-select">Idioma:</label>
        <select id="language-select" value={language} onChange={handleLanguageChange}>
          <option value="es">Español</option>
          <option value="en">Inglés</option>
          <option value="fr">Francés</option>
        </select>
      </div>
    </div>
  );
};

export default Languages;
