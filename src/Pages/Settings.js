// src/Pages/Settings.js
import React, { useState, useEffect } from 'react';
import './Settings.css';

const Settings = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const handleThemeChange = (e) => {
    const selectedTheme = e.target.value;
    setTheme(selectedTheme);
    localStorage.setItem('theme', selectedTheme);
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="settings-container">
      <h1>Configuración</h1>
      <div className="theme-selection">
        <label htmlFor="theme-select">Elige un tema:</label>
        <select id="theme-select" value={theme} onChange={handleThemeChange}>
          <option value="light">Claro</option>
          <option value="dark">Oscuro</option>
        </select>
      </div>
      <div className={`preview ${theme}`}>
        <p>Vista previa del tema: {theme === 'light' ? 'Claro' : 'Oscuro'}</p>
      </div>
    </div>
  );
};

export default Settings;
