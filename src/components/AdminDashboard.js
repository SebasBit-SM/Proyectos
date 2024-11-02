// src/components/AdminDashboard.js
import React, { useState } from 'react';
import './AdminDashboard.css';

const initialMallData = [
  {
    id: 1,
    name: 'Centro Comercial Aventura',
    location: 'Ciudad A',
    events: ['Festival de Verano'],
    discounts: ['20% en Electrónica'],
  },
  {
    id: 2,
    name: 'Mall Paseo del Sol',
    location: 'Ciudad B',
    events: ['Semana de Moda'],
    discounts: ['15% en Ropa'],
  },
];

const AdminDashboard = () => {
  const [malls, setMalls] = useState(initialMallData);
  const [newMall, setNewMall] = useState({
    name: '',
    location: '',
    events: '',
    discounts: '',
  });

  const handleChange = (e) => {
    setNewMall({
      ...newMall,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddMall = () => {
    const newMallData = {
      id: malls.length + 1,
      name: newMall.name,
      location: newMall.location,
      events: newMall.events.split(',').map((e) => e.trim()),
      discounts: newMall.discounts.split(',').map((d) => d.trim()),
    };
    setMalls([...malls, newMallData]);
    setNewMall({ name: '', location: '', events: '', discounts: '' });
    alert('Centro comercial agregado exitosamente');
  };

  const handleDeleteMall = (id) => {
    setMalls(malls.filter((mall) => mall.id !== id));
    alert('Centro comercial eliminado exitosamente');
  };

  return (
    <div className="admin-dashboard">
      <h2>Panel de Administración</h2>
      
      <div className="add-mall-form">
        <h3>Agregar Nuevo Centro Comercial</h3>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={newMall.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="location"
          placeholder="Ubicación"
          value={newMall.location}
          onChange={handleChange}
        />
        <input
          type="text"
          name="events"
          placeholder="Eventos (separados por comas)"
          value={newMall.events}
          onChange={handleChange}
        />
        <input
          type="text"
          name="discounts"
          placeholder="Descuentos (separados por comas)"
          value={newMall.discounts}
          onChange={handleChange}
        />
        <button onClick={handleAddMall}>Agregar Centro Comercial</button>
      </div>

      <div className="mall-list">
        <h3>Lista de Centros Comerciales</h3>
        {malls.map((mall) => (
          <div key={mall.id} className="mall-item">
            <h4>{mall.name}</h4>
            <p><strong>Ubicación:</strong> {mall.location}</p>
            <p><strong>Eventos:</strong> {mall.events.join(', ')}</p>
            <p><strong>Descuentos:</strong> {mall.discounts.join(', ')}</p>
            <button onClick={() => handleDeleteMall(mall.id)}>Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
