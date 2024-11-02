// src/Pages/ContactUs.js
import React, { useState } from 'react';
import './ContactUs.css';

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
    <div className="contact-us-container">
      <h1>Contáctenos</h1>
      <p>Si tienes alguna pregunta o necesitas asistencia, no dudes en contactarnos. Nuestro equipo está aquí para ayudarte.</p>

      <h2>Equipo de Find Me</h2>
      <div className="team-contacts">
        <div className="team-member">
          <h3>Sebastian Sañudo Mamian</h3>
          <p>Teléfono: {Math.floor(3000000000 + Math.random() * 1000000000)}</p>
          <p>Email: sebastiansanudo@gmail.com</p>
        </div>
        <div className="team-member">
          <h3>Miguel Ángel Serrano</h3>
          <p>Teléfono: {Math.floor(3000000000 + Math.random() * 1000000000)}</p>
          <p>Email: miguelangelserrano@gmail.com</p>
        </div>
        <div className="team-member">
          <h3>Jairo Andrés Becerra</h3>
          <p>Teléfono: {Math.floor(3000000000 + Math.random() * 1000000000)}</p>
          <p>Email: jairoandresbecerra@gmail.com</p>
        </div>
        <div className="team-member">
          <h3>Santiago Home</h3>
          <p>Teléfono: {Math.floor(3000000000 + Math.random() * 1000000000)}</p>
          <p>Email: santiagohome@gmail.com</p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <h2>Envíanos un Mensaje</h2>
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
