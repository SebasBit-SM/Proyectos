// src/Pages/PQRS.js
import React, { useState } from 'react';
import './PQRS.css';

const PQRS = () => {
  const [formData, setFormData] = useState({
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Mensaje de PQRS enviado: ${formData.subject}`);
    setFormData({ subject: '', message: '' });
  };

  return (
    <div className="pqrs-container">
      <h1>PQRS</h1>
      <p>Para preguntas, quejas, reclamos o sugerencias, por favor complete el formulario a continuación:</p>
      <form onSubmit={handleSubmit} className="pqrs-form">
        <label htmlFor="subject">Asunto:</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Escriba el asunto aquí"
        />

        <label htmlFor="message">Mensaje:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Escriba su mensaje aquí"
        />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default PQRS;
