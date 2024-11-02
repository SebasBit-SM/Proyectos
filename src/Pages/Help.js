// src/Pages/Help.js
import React from 'react';

const Help = () => {
  const faqs = [
    { question: '¿Cómo registro una cuenta?', answer: 'Puede registrarse en la página de inicio.' },
    { question: '¿Cómo cambio mi contraseña?', answer: 'Puede cambiar su contraseña en la sección de perfil.' },
  ];

  return (
    <div>
      <h1>Ayuda</h1>
      <ul>
        {faqs.map((faq, index) => (
          <li key={index}>
            <strong>{faq.question}</strong>
            <p>{faq.answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Help;
