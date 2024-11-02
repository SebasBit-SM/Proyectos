// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import Profile from './components/Profile';
import { AuthProvider, useAuth } from './contexts/AuthContext';
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
import UserDashboard from './components/UserDashboard';
import './App.css';

function ProtectedRoute({ children, role }) {
  const { auth } = useAuth();

  if (!auth) {
    return <Navigate to="/login" />;
  }

  if (role && auth.role !== role) {
    return <Navigate to="/" />;
  }

  return children;
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
            <Route path="/user-dashboard" element={<ProtectedRoute><UserDashboard /></ProtectedRoute>} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
