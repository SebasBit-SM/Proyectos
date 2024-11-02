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
    description: 'Un gran centro comercial en el norte de Cali con una variedad de tiendas y entretenimiento.',
    image: 'https://photos.wikimapia.org/p/00/00/80/61/30_big.jpg',
  },
  {
    id: 2,
    name: 'Unicentro Cali',
    location: 'Cali, Valle del Cauca',
    hasEvents: true,
    hasDiscounts: false,
    isNew: true,
    position: { lat: 3.3848, lng: -76.5412 },
    description: 'Unicentro Cali ofrece una gran experiencia de compras con eventos y tiendas exclusivas.',
    image: 'https://pics.nuroa.com/local_comercial_en_centro_comercial_unicentro_cali_2820007716294356452.jpg',
  },
  {
    id: 3,
    name: 'Palmetto Plaza',
    location: 'Cali, Valle del Cauca',
    hasEvents: false,
    hasDiscounts: true,
    isNew: false,
    position: { lat: 3.3994, lng: -76.5523 },
    description: 'Palmetto Plaza es conocido por sus descuentos en una amplia gama de tiendas.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN2TdYH5d1epf6WJp7ZedsyUlFDqar5ozAPQ&s',
  },
];

const MallList = () => {




























  
  const navigate = useNavigate();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredMalls, setFilteredMalls] = useState(mallData);
  const [selectedMall, setSelectedMall] = useState(null); // Estado para el centro comercial seleccionado

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

  const handleMallClick = (mall) => {
    setSelectedMall(mall); // Actualiza el centro comercial seleccionado
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
          <div key={mall.id} className="mall-card" onClick={() => handleMallClick(mall)}>
            <h2>{mall.name}</h2>
            <p>{mall.location}</p>
          </div>
        ))}
      </div>

      {/* Detalle del centro comercial seleccionado */}
      {selectedMall && (
        <div className="mall-details">
          <h2>{selectedMall.name}</h2>
          <p>{selectedMall.description}</p>
          <img src={selectedMall.image} alt={`${selectedMall.name} imagen`} />
        </div>
      )}
    </div>
  );
};

export default MallList;
