// src/components/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const { auth } = useAuth();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="home-container">
      <div className="header">
        {auth ? (
          <h2>Bienvenido, {auth.firstName}</h2>
        ) : (
          <div className="auth-buttons">
            <button className="auth-button" onClick={() => handleNavigate('/login')}>
              Iniciar Sesión
            </button>
            <button className="auth-button" onClick={() => handleNavigate('/register')}>
              Registrarse
            </button>
          </div>
        )}
        <h1>Find Me</h1>
        <p>Encuentra los mejores centros comerciales y locales cerca de ti</p>
      </div>
      <div className="categories">
        <div onClick={() => handleNavigate('/malls?filter=discounts')} className="category-card">
          <h2>Ofertas Especiales</h2>
        </div>
        <div onClick={() => handleNavigate('/malls?filter=events')} className="category-card">
          <h2>Eventos Populares</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
