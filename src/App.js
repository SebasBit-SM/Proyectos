// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import Profile from './components/Profile';
import UserDashboard from './components/UserDashboard';
import AdminDashboard from './components/AdminDashboard';
import ForgotPassword from './components/ForgotPassword';
import MallList from './components/MallList';
import MallDetails from './components/MallDetails';
import SidebarMenu from './components/SidebarMenu';
import { AuthProvider, useAuth } from './contexts/AuthContext';
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Router>
      <AuthProvider>
        <div className="app-container">
          <button onClick={toggleMenu} className="menu-toggle-btn">☰ Menú</button>
          <SidebarMenu isOpen={isMenuOpen} onClose={toggleMenu} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route
              path="/user-dashboard"
              element={
                <ProtectedRoute role="user">
                  <UserDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin-dashboard"
              element={
                <ProtectedRoute role="admin">
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            <Route path="/malls" element={<MallList />} />
            <Route path="/malls/:id" element={<MallDetails />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
