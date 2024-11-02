// src/Pages/Notifications.js
import React from 'react';
import './Notifications.css';

const Notifications = () => {
  const notifications = [
    { id: 1, message: 'Nueva oferta en centros comerciales cercanos', date: '2024-11-01' },
    { id: 2, message: 'Evento especial este fin de semana', date: '2024-11-02' },
    { id: 3, message: 'Actualización de política de privacidad', date: '2024-11-02' },
    { id: 4, message: 'Descubre nuevos descuentos en tus tiendas favoritas', date: '2024-11-03' },
    { id: 5, message: 'Encuentra eventos de temporada en tu zona', date: '2024-11-04' },
  ];

  return (
    <div className="notifications-container">
      <h1>Notificaciones</h1>
      <p>Revisa las últimas actualizaciones y anuncios de Find Me:</p>
      <ul className="notifications-list">
        {notifications.map((notification) => (
          <li key={notification.id} className="notification-item">
            <span className="notification-date">{notification.date}</span>
            <p className="notification-message">{notification.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
