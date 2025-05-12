
import React, { useState } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Login from '../components/Admin/Login';
import Dashboard from '../components/Admin/Dashboard';
import { isAuthenticated } from '../services/auth';

function AdminPage() {
  const [authenticated, setAuthenticated] = useState(isAuthenticated());
  const location = useLocation();

  const handleLoginSuccess = () => {
    setAuthenticated(true);
  };

  const handleLogout = () => {
    setAuthenticated(false);
  };

  return (
    <Routes>
      <Route 
        path="login" 
        element={
          authenticated ? (
            <Navigate to="/admin/dashboard" replace />
          ) : (
            <Login onLoginSuccess={handleLoginSuccess} />
          )
        } 
      />
      <Route 
        path="dashboard" 
        element={
          authenticated ? (
            <Dashboard onLogout={handleLogout} />
          ) : (
            <Navigate to="/admin/login" replace state={{ from: location }} />
          )
        } 
      />
      <Route 
        path="*" 
        element={
          <Navigate to={authenticated ? "/admin/dashboard" : "/admin/login"} replace />
        } 
      />
    </Routes>
  );
}

export default AdminPage;