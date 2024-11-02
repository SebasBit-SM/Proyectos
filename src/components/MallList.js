// src/components/MallList.js
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Map from './Map'; // Importamos el componente Map
import './MallList.css';

const apiKey = 'AIzaSyAnxxI_KN225ncswfGmegGB7sOBUxVSBIE';

const mallData = [
  {
    id: 1,
    name: 'Centro Comercial Chipichape',
    location: 'Cali, Valle del Cauca',
    hasEvents: true,
    hasDiscounts: true,
    isNew: false,
    position: { lat: 3.4516, lng: -76.5319 },
  },
  {
    id: 2,
    name: 'Unicentro Cali',
    location: 'Cali, Valle del Cauca',
    hasEvents: true,
    hasDiscounts: false,
    isNew: true,
    position: { lat: 3.3848, lng: -76.5412 },
  },
  {
    id: 3,
    name: 'Palmetto Plaza',
    location: 'Cali, Valle del Cauca',
    hasEvents: false,
    hasDiscounts: true,
    isNew: false,
    position: { lat: 3.3994, lng: -76.5523 },
  },
];

const MallList = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredMalls, setFilteredMalls] = useState(mallData);

  // Extrae los parámetros de consulta de la URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const filterEvents = params.get('filter') === 'events';
    const filterDiscounts = params.get('filter') === 'discounts';
    const filterNew = params.get('filter') === 'new';

    // Filtra los centros comerciales en función de los filtros en los parámetros de consulta
    const filteredData = mallData.filter((mall) => {
      const matchesEvents = !filterEvents || mall.hasEvents;
      const matchesDiscounts = !filterDiscounts || mall.hasDiscounts;
      const matchesNew = !filterNew || mall.isNew;
      return matchesEvents && matchesDiscounts && matchesNew;
    });

    setFilteredMalls(filteredData);
  }, [location.search]);

  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  const handleFilterClick = (filter) => {
    navigate(`/malls?filter=${filter}`);
  };

  // Extraemos las posiciones de los centros comerciales para los marcadores en el mapa
  const markers = filteredMalls.map((mall) => ({
    position: mall.position,
  }));

  return (
    <div className="mall-list-container">
      <h1>Centros Comerciales en Cali</h1>
      
      {/* Mapa */}
      <Map apiKey={apiKey} markers={markers} />

      {/* Buscador y filtros */}
      <div className="search-and-filters">
        <input
          type="text"
          placeholder="Buscar centros comerciales..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />

        <div className="filters">
          <button className="filter-button" onClick={() => handleFilterClick('events')}>
            Eventos
          </button>
          <button className="filter-button" onClick={() => handleFilterClick('discounts')}>
            Descuentos
          </button>
          <button className="filter-button" onClick={() => handleFilterClick('new')}>
            Nuevos
          </button>
        </div>
      </div>

      {/* Lista de centros comerciales */}
      <div className="mall-list">
        {filteredMalls.map((mall) => (
          <div key={mall.id} className="mall-card" onClick={() => navigate(`/malls/${mall.id}`)}>
            <h2>{mall.name}</h2>
            <p>{mall.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MallList;
