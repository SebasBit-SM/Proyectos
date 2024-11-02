// src/components/LoginForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para manejar el inicio de sesión
    console.log('Inicio de sesión', formData);
  };

  return (
    <div className="login-form-container">
      <h1>Iniciar Sesión</h1>
      <form onSubmit={handleSubmit}>
        <label>Correo Electrónico:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />

        <label>Contraseña:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} />

        <button type="submit" className="login-button">Iniciar Sesión</button>
      </form>
      <div className="login-options">
        <p onClick={() => navigate('/forgot-password')} className="forgot-password">¿Olvidaste tu contraseña?</p>
        <p>¿No tienes cuenta? <span onClick={() => navigate('/register')} className="create-account">Crea una</span></p>
      </div>
    </div>
  );
};

export default LoginForm;
