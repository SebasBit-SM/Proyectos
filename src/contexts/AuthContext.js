// src/contexts/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);

  // Cargar el usuario desde Local Storage al cargar el contexto
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('auth'));
    if (storedUser) {
      setAuth(storedUser);
    }
  }, []);

  const login = (user) => {
    // Guardar el usuario en el estado y en Local Storage
    setAuth(user);
    localStorage.setItem('auth', JSON.stringify(user));
  };

  const logout = () => {
    // Eliminar el usuario del estado y de Local Storage
    setAuth(null);
    localStorage.removeItem('auth');
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
