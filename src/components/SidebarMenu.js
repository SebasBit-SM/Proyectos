// src/components/SidebarMenu.js
import React from 'react';
import './SidebarMenu.css';

const SidebarMenu = ({ isOpen, onClose }) => {
  return (
    <div className={`sidebar-menu ${isOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={onClose}>×</button>
      <ul>
        <li><a href="/">Inicio</a></li>
        <li><a href="/profile">Perfil</a></li>
        <li><a href="/contact-us">Contactenos</a></li>
        <li><a href="/settings">Configuración</a></li>
        <li><a href="/pqrs">PQRS</a></li>
        <li><a href="/notifications">Notificaciones</a></li>
        <li><a href="/languages">Idiomas</a></li>
        <li><a href="/about-us">Sobre Nosotros</a></li>
        <li><a href="/privacy-policy">Política de Datos</a></li>
        <li><a href="/help">Ayuda</a></li>
      </ul>
    </div>
  );
};

export default SidebarMenu;
