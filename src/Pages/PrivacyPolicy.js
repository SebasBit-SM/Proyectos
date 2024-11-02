// src/Pages/PrivacyPolicy.js
import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <h1>Política de Datos</h1>
      <p>En Find Me, valoramos su privacidad. A continuación, encontrará nuestra política de privacidad:</p>

      <h2>Recopilación de Datos</h2>
      <p><strong>Datos de Usuario:</strong> Find Me recopila información personal como el nombre, correo electrónico, ubicación y preferencias del usuario, solo cuando este decide registrarse en la app. Esta información es utilizada para personalizar la experiencia del usuario, proporcionar recomendaciones de centros comerciales, locales, productos, y notificar sobre descuentos y eventos.</p>
      <p><strong>Datos de Ubicación:</strong> Find Me recopila datos de ubicación en tiempo real para proporcionar información precisa sobre centros comerciales cercanos. La ubicación se utiliza solo para ofrecer estos servicios y no se compartirá con terceros sin el consentimiento del usuario.</p>
      <p><strong>Mejora del Servicio:</strong> Los datos recopilados se utilizan para mejorar los servicios ofrecidos, personalizar las recomendaciones y optimizar la experiencia del usuario.</p>
      <p><strong>Análisis de Datos:</strong> Se pueden utilizar datos agregados y anónimos para analizar tendencias de uso y mejorar la aplicación.</p>

      <h2>Uso de Datos</h2>
      <p><strong>Comunicaciones:</strong> Find Me podrá utilizar el correo electrónico o la información de contacto del usuario para enviar notificaciones sobre actualizaciones, ofertas, eventos y otros asuntos relevantes, siempre que el usuario haya dado su consentimiento para recibir dichas comunicaciones.</p>

      <h2>Almacenamiento de Datos</h2>
      <p><strong>Seguridad:</strong> Los datos personales se almacenan en servidores seguros y se emplean medidas de seguridad adecuadas para protegerlos contra el acceso no autorizado, la alteración o divulgación.</p>
      <p><strong>Duración:</strong> Los datos se conservarán mientras el usuario mantenga su cuenta activa o según sea necesario para cumplir con nuestras obligaciones legales.</p>

      <h2>Compartición de Datos</h2>
      <p><strong>Terceros:</strong> Find Me no compartirá los datos personales de los usuarios con terceros sin su consentimiento, a menos que sea necesario para cumplir con obligaciones legales o para prestar servicios específicos a través de la aplicación.</p>

      <h2>Derechos de Usuario</h2>
      <p><strong>Acceso y Rectificación:</strong> El usuario tiene derecho a acceder, rectificar y eliminar sus datos personales en cualquier momento.</p>
      <p><strong>Retiro de Consentimiento:</strong> El usuario puede retirar su consentimiento para el procesamiento de datos en cualquier momento, lo que puede afectar la capacidad de Find Me para prestar ciertos servicios.</p>
    </div>
  );
};

export default PrivacyPolicy;
