// src/components/ForgotPassword.js
import React, { useState } from 'react';
import './ForgotPassword.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simular envío de solicitud de recuperación
    setMessage(`Se ha enviado un enlace de recuperación a ${email}`);
  };

  return (
    <div className="forgot-password-container">
      <h1>Recuperar Contraseña</h1>
      <form onSubmit={handleSubmit}>
        <label>Correo Electrónico</label>
        <input
          type="email"
          value={email}
          onChange={handleChange}
          placeholder="Ingresa tu correo"
          required
        />
        <button type="submit">Enviar</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default ForgotPassword;
