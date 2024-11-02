// src/components/SidebarMenu.js
import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import './SidebarMenu.css';

const SidebarMenu = ({ isOpen, onClose }) => {
  const { auth, logout } = useAuth(); // Obtener los datos de autenticación y logout
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    onClose(); // Cerrar el menú después de la navegación
  };

  return (
    <div className={`mini-sidebar-menu ${isOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={onClose}>×</button>
      <h2>{auth?.firstName || 'Usuario'}</h2>
      <div className="menu-buttons">
        <button onClick={() => handleNavigate('/profile')}>Perfil</button>
        <button onClick={() => handleNavigate('/settings')}>Configuración</button>
        <button onClick={() => handleNavigate('/help')}>Ayuda</button>
        <button onClick={() => { logout(); handleNavigate('/login'); }}>Cerrar Sesión</button>
      </div>
    </div>
  );
};

export default SidebarMenu;
