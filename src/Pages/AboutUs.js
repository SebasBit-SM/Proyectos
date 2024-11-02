// src/Pages/AboutUs.js
import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      {/* Imagen destacada */}
      <div className="about-us-image">
        <img src="https://example.com/path_to_your_image.jpg" alt="Centros Comerciales" />
      </div>

      <div className="about-us-header">
        <h1>Sobre Nosotros</h1>
        <p>Find Me - La forma fácil y rápida de descubrir centros comerciales a tu alrededor.</p>
      </div>

      <div className="about-us-content">
        <h2>Nuestra Misión</h2>
        <p>
          En Find Me, estamos comprometidos en ofrecerte la mejor experiencia de búsqueda de centros comerciales.
          Nuestro objetivo es simplificar la forma en que encuentras tiendas, eventos y descuentos, conectándote con los mejores lugares para tus compras y entretenimiento en la ciudad.
        </p>

        <h2>Qué Ofrecemos</h2>
        <ul>
          <li><strong>Ubicación Rápida:</strong> Encuentra centros comerciales cerca de ti con mapas integrados.</li>
          <li><strong>Descuentos y Ofertas:</strong> Descubre las últimas promociones en tus tiendas favoritas.</li>
          <li><strong>Eventos Especiales:</strong> Mantente al día con eventos, ferias y actividades en los centros comerciales.</li>
          <li><strong>Navegación Intuitiva:</strong> Una interfaz fácil de usar para una experiencia de usuario optimizada.</li>
        </ul>

        <h2>Nuestro Compromiso</h2>
        <p>
          Find Me busca ser más que una aplicación de búsqueda. Nos esforzamos por enriquecer tus experiencias de compra
          y ayudar a los centros comerciales a conectarse de manera efectiva con sus visitantes. Ya sea que estés buscando un lugar nuevo para explorar o una oferta imperdible,
          estamos aquí para guiarte.
        </p>

        <h2>Nuestra Visión</h2>
        <p>
          Representamos una respuesta innovadora y oportuna a los desafíos y oportunidades presentes en el sector del comercio minorista.
          La importancia de Find Me radica en su capacidad para mejorar la experiencia del cliente y aumentar las ventas de las tiendas.
          Con un propósito claro y un enfoque en los avances tecnológicos, "Find Me" está en camino de convertirse en una herramienta indispensable para el éxito sostenible
          de los centros comerciales en un entorno competitivo y en constante evolución.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
