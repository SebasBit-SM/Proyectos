// src/components/Profile.js
import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import './Profile.css';

const Profile = () => {
  const { auth, login } = useAuth();
  const [formData, setFormData] = useState({
    firstName: auth.firstName,
    lastName: auth.lastName,
    email: auth.email,
    phone: auth.phone,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    // Actualizar los datos en el contexto y en Local Storage
    const updatedUser = { ...auth, ...formData };
    login(updatedUser);
    localStorage.setItem("auth", JSON.stringify(updatedUser));
    alert("Perfil actualizado exitosamente");
  };

  return (
    <div className="profile-container">
      <h2>Perfil del Usuario</h2>
      <div className="profile-form">
        <label>Nombre:</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        <label>Apellido:</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        <label>Correo Electrónico:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <label>Teléfono:</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <button onClick={handleSave}>Guardar Cambios</button>
      </div>

      {/* Sección de Favoritos */}
      <div className="favorites">
        <h2>Favoritos</h2>
        {auth.favorites && auth.favorites.length > 0 ? (
          <ul>
            {auth.favorites.map((mall) => (
              <li key={mall.id}>{mall.name}</li>
            ))}
          </ul>
        ) : (
          <p>No has agregado favoritos aún.</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
