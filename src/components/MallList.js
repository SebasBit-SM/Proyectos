// src/components/MallList.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
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
  const { auth, login } = useAuth(); // Obtener el contexto de autenticación
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    events: false,
    discounts: false,
    new: false,
  });

  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  const handleFilterChange = (filter) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filter]: !prevFilters[filter],
    }));
  };

  const handleAddToFavorites = (mall) => {
    const updatedUser = {
      ...auth,
      favorites: auth.favorites ? [...auth.favorites, mall] : [mall],
    };
    login(updatedUser);
    localStorage.setItem("auth", JSON.stringify(updatedUser));
    alert(`${mall.name} agregado a favoritos`);
  };

  const filteredMalls = mallData.filter((mall) => {
    const matchesSearch = mall.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesEvents = !filters.events || mall.hasEvents;
    const matchesDiscounts = !filters.discounts || mall.hasDiscounts;
    const matchesNew = !filters.new || mall.isNew;
    return matchesSearch && matchesEvents && matchesDiscounts && matchesNew;
  });

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
            className={`filter-button ${filters.events ? 'active' : ''}`}
            onClick={() => handleFilterChange('events')}
          >
            Eventos
          </button>
          <button
            className={`filter-button ${filters.discounts ? 'active' : ''}`}
            onClick={() => handleFilterChange('discounts')}
          >
            Descuentos
          </button>
          <button
            className={`filter-button ${filters.new ? 'active' : ''}`}
            onClick={() => handleFilterChange('new')}
          >
            Nuevos
          </button>
        </div>
      </div>

      <div className="mall-list">
        {filteredMalls.map((mall) => (
          <div key={mall.id} className="mall-card">
            <h2>{mall.name}</h2>
            <p>{mall.location}</p>
            <button onClick={() => handleAddToFavorites(mall)}>Agregar a Favoritos</button>
            <button onClick={() => navigate(`/malls/${mall.id}`)}>Ver Detalles</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MallList;
