// src/App.js
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import Profile from './components/Profile';
import { AuthProvider } from './contexts/AuthContext';
import SidebarMenu from './components/SidebarMenu';
import ContactUs from './Pages/ContactUs';
import Settings from './Pages/Settings';
import PQRS from './Pages/PQRS';
import Notifications from './Pages/Notifications';
import Languages from './Pages/Languages';
import AboutUs from './Pages/AboutUs';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import Help from './Pages/Help';
import MallList from './components/MallList';
import NewDiscount from './components/NewDiscount';
import UserDashboard from './components/UserDashboard';

// Componente para permitir acceso sin autenticación en todas las rutas
function ProtectedRoute({ children }) {
  return children; // Permitir acceso sin verificación de autenticación
}

// Componente para permitir acceso sin autenticación a rutas de administrador
function AdminProtectedRoute({ children }) {
  return children; // Permitir acceso sin verificación de rol
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <AuthProvider>
        <div className="app-container">
          <button className="menu-btn" onClick={() => setIsMenuOpen(true)}>☰ Menú</button>
          <SidebarMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
            <Route path="/contact-us" element={<ProtectedRoute><ContactUs /></ProtectedRoute>} />
            <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
            <Route path="/pqrs" element={<ProtectedRoute><PQRS /></ProtectedRoute>} />
            <Route path="/notifications" element={<ProtectedRoute><Notifications /></ProtectedRoute>} />
            <Route path="/languages" element={<ProtectedRoute><Languages /></ProtectedRoute>} />
            <Route path="/about-us" element={<ProtectedRoute><AboutUs /></ProtectedRoute>} />
            <Route path="/privacy-policy" element={<ProtectedRoute><PrivacyPolicy /></ProtectedRoute>} />
            <Route path="/help" element={<ProtectedRoute><Help /></ProtectedRoute>} />
            <Route path="/malls" element={<ProtectedRoute><MallList /></ProtectedRoute>} />
            <Route path="/malls/new-discount" element={<AdminProtectedRoute><NewDiscount /></AdminProtectedRoute>} />
            <Route path="/user-dashboard" element={<ProtectedRoute><UserDashboard /></ProtectedRoute>} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
