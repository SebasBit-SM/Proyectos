// src/Pages/Settings.js
import React, { useState, useEffect } from 'react';

const Settings = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
    localStorage.setItem('theme', e.target.value);
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div>
      <h1>Configuración</h1>
      <label>Elige un tema:</label>
      <select value={theme} onChange={handleThemeChange}>
        <option value="light">Claro</option>
        <option value="dark">Oscuro</option>
      </select>
    </div>
  );
};

export default Settings;
