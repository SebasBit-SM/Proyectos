// src/Pages/PQRS.js
import React, { useState } from 'react';

const PQRS = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Mensaje de PQRS enviado: ${message}`);
    setMessage('');
  };

  return (
    <div>
      <h1>PQRS</h1>
      <form onSubmit={handleSubmit}>
        <label>Escriba su mensaje:</label>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default PQRS;
