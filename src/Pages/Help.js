// src/Pages/Help.js
import React from 'react';
import './Help.css';

const Help = () => {
  const faqs = [
    { question: '¿Cómo registro una cuenta?', answer: 'Puede registrarse en la página de inicio utilizando su correo electrónico y creando una contraseña.' },
    { question: '¿Cómo cambio mi contraseña?', answer: 'Puede cambiar su contraseña en la sección de perfil, en el apartado de configuración.' },
    { question: '¿Cómo busco un centro comercial cercano?', answer: 'Utilice la barra de búsqueda o permita el acceso a su ubicación para ver centros comerciales cercanos en el mapa.' },
    { question: '¿Cómo veo los eventos y descuentos disponibles?', answer: 'En la página principal, puede filtrar por eventos y descuentos para ver las ofertas actuales.' },
    { question: '¿Cómo puedo contactar con el soporte?', answer: 'Puede utilizar la página de Contacto para enviarnos un mensaje con sus consultas o problemas.' },
    { question: '¿Cómo gestiono mis preferencias de notificación?', answer: 'Puede gestionar sus preferencias de notificación en la sección de configuración del perfil.' },
    { question: '¿Qué información recopila Find Me sobre mi ubicación?', answer: 'Find Me recopila datos de ubicación en tiempo real solo si el usuario da su consentimiento para proporcionar recomendaciones personalizadas.' },
  ];

  return (
    <div className="help-container">
      <h1>Ayuda</h1>
      <p>Encuentra respuestas a las preguntas más frecuentes sobre cómo usar la aplicación Find Me.</p>
      <ul className="faq-list">
        {faqs.map((faq, index) => (
          <li key={index} className="faq-item">
            <strong>{faq.question}</strong>
            <p>{faq.answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Help;
