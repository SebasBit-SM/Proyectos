// src/Pages/Languages.js
import React, { useState } from 'react';

const Languages = () => {
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'es');

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
    localStorage.setItem('language', e.target.value);
    alert(`Idioma cambiado a: ${e.target.value}`);
  };

  return (
    <div>
      <h1>Idiomas</h1>
      <label>Seleccione su idioma preferido:</label>
      <select value={language} onChange={handleLanguageChange}>
        <option value="es">Español</option>
        <option value="en">Inglés</option>
        <option value="fr">Francés</option>
      </select>
    </div>
  );
};

export default Languages;
