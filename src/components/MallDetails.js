// src/components/MallDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './MallDetails.css';

const mallData = {
  1: {
    name: 'Centro Comercial Aventura',
    location: 'Ciudad A',
    hours: '10:00 AM - 8:00 PM',
    events: ['Festival de Verano'],
    discounts: ['20% en Electrónica'],
  },
  2: {
    name: 'Mall Paseo del Sol',
    location: 'Ciudad B',
    hours: '9:00 AM - 10:00 PM',
    events: ['Semana de Moda'],
    discounts: ['15% en Ropa'],
  },
  3: {
    name: 'Plaza Central',
    location: 'Ciudad C',
    hours: '10:00 AM - 9:00 PM',
    events: [],
    discounts: ['50% en Restaurantes'],
  }
};

const MallDetails = () => {
  const { id } = useParams();
  const [mall, setMall] = useState(null);

  useEffect(() => {
    // Simulamos una llamada a la base de datos con los datos simulados
    setMall(mallData[id]);
  }, [id]);

  if (!mall) {
    return <p>Cargando detalles del centro comercial...</p>;
  }

  return (
    <div className="mall-details-container">
      <h1>{mall.name}</h1>
      <p><strong>Ubicación:</strong> {mall.location}</p>
      <p><strong>Horarios:</strong> {mall.hours}</p>

      <h2>Eventos</h2>
      {mall.events.length > 0 ? (
        <ul>
          {mall.events.map((event, index) => (
            <li key={index}>{event}</li>
          ))}
        </ul>
      ) : (
        <p>No hay eventos disponibles en este momento.</p>
      )}

      <h2>Descuentos</h2>
      {mall.discounts.length > 0 ? (
        <ul>
          {mall.discounts.map((discount, index) => (
            <li key={index}>{discount}</li>
          ))}
        </ul>
      ) : (
        <p>No hay descuentos disponibles en este momento.</p>
      )}
    </div>
  );
};

export default MallDetails;
