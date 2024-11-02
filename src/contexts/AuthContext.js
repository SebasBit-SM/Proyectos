// src/contexts/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    // Cargar datos del usuario desde Local Storage al cargar la app
    const storedAuth = JSON.parse(localStorage.getItem("auth"));
    if (storedAuth) {
      setAuth(storedAuth);
    }
  }, []);

  const login = (userData) => {
    // Guardar los datos de autenticación en el estado y en Local Storage
    setAuth(userData);
    localStorage.setItem("auth", JSON.stringify(userData));
  };

  const logout = () => {
    // Eliminar datos de autenticación del estado y de Local Storage
    setAuth(null);
    localStorage.removeItem("auth");
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
