// src/Pages/Notifications.js
import React from 'react';

const Notifications = () => {
  const notifications = [
    { id: 1, message: 'Nueva oferta en centros comerciales cercanos' },
    { id: 2, message: 'Evento especial este fin de semana' },
    { id: 3, message: 'Actualización de política de privacidad' },
  ];

  return (
    <div>
      <h1>Notificaciones</h1>
      <ul>
        {notifications.map((notification) => (
          <li key={notification.id}>{notification.message}</li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
