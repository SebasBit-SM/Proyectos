// src/components/MallList.js
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './MallList.css';

const mallData = [
  {
    id: 1,
    name: 'Centro Comercial Aventura',
    location: 'Ciudad A',
    hasEvents: true,
    hasDiscounts: true,
    isNew: false,
  },
  {
    id: 2,
    name: 'Mall Paseo del Sol',
    location: 'Ciudad B',
    hasEvents: true,
    hasDiscounts: false,
    isNew: true,
  },
  {
    id: 3,
    name: 'Plaza Central',
    location: 'Ciudad C',
    hasEvents: false,
    hasDiscounts: true,
    isNew: false,
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

  return (
    <div className="mall-list-container">
      <h1>Lista de Centros Comerciales</h1>

      <div className="search-and-filters">
        <input
          type="text"
          placeholder="Buscar centros comerciales..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />

        <div className="filters">
          <button
            className="filter-button"
            onClick={() => handleFilterClick('events')}
          >
            Eventos
          </button>
          <button
            className="filter-button"
            onClick={() => handleFilterClick('discounts')}
          >
            Descuentos
          </button>
          <button
            className="filter-button"
            onClick={() => handleFilterClick('new')}
          >
            Nuevos
          </button>
        </div>
      </div>

      <div className="mall-list">
        {filteredMalls.map((mall) => (
          <div
            key={mall.id}
            className="mall-card"
            onClick={() => navigate(`/malls/${mall.id}`)}
          >
            <h2>{mall.name}</h2>
            <p>{mall.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MallList;
