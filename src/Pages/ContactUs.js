// src/Pages/ContactUs.js
import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Mensaje enviado: ${formData.message}`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div>
      <h1>Contáctenos</h1>
      <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        <label>Correo Electrónico:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        <label>Mensaje:</label>
        <textarea name="message" value={formData.message} onChange={handleChange} />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default ContactUs;
