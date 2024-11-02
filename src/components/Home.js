// src/components/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const { auth } = useAuth();

  return (
    <div className="home-container">
      <div className="header">
        {auth ? (
          <h2>Bienvenido, {auth.firstName}</h2>
        ) : (
          <div className="auth-buttons">
            <button className="auth-button" onClick={() => navigate('/login')}>Iniciar Sesión</button>
            <button className="auth-button" onClick={() => navigate('/register')}>Registrarse</button>
          </div>
        )}
        <h1>Find Me</h1>
        <p>Encuentra los mejores centros comerciales y locales cerca de ti</p>
      </div>
      <div className="categories">
        <div onClick={() => navigate('/malls?filter=discounts')} className="category-card">
          <h2>Ofertas Especiales</h2>
        </div>
        <div onClick={() => navigate('/malls?filter=events')} className="category-card">
          <h2>Eventos Populares</h2>
        </div>
        <div onClick={() => navigate('/malls/new')} className="category-card">
          <h2>Nuevos Centros Comerciales</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
