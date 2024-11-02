// src/App.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';

function ProtectedRoute({ children, role }) {
  const { auth } = useAuth();

  if (!auth) {
    // Redirigir a login si no está autenticado
    return <Navigate to="/login" />;
  }

  if (role && auth.role !== role) {
    // Redirigir a inicio si el rol no coincide
    return <Navigate to="/" />;
  }

  // Renderizar el componente protegido si todo está en orden
  return children;
}
