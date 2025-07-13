
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useUserAuth } from '../../contexts/UserAuthContext';
import { Spinner, Container } from 'react-bootstrap';

const ProtectedRoute = ({ children, requireAuth = true, requiredRole = null }) => {
  const { isAuthenticated, userType, isLoading } = useUserAuth();
  const location = useLocation();

  // Show loading spinner while checking authentication
  if (isLoading) {
    return (
      <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '50vh' }}>
        <div className="text-center">
          <Spinner animation="border" variant="primary" />
          <div className="mt-2">Loading...</div>
        </div>
      </Container>
    );
  }

  // If authentication is NOT required (login/register pages)
  if (!requireAuth) {
    // If user is already authenticated, redirect them away from login/register
    if (isAuthenticated) {
      if (userType === 'admin') {
        return <Navigate to="/admin/dashboard" replace />;
      } else if (userType === 'user') {
        return <Navigate to="/dashboard" replace />;
      }
    }
    // User is not authenticated, allow access to login/register pages
    return children;
  }

  // If authentication IS required
  if (requireAuth) {
    // If user is not authenticated, redirect to login
    if (!isAuthenticated) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }

    // If a specific role is required
    if (requiredRole && userType !== requiredRole) {
      // Redirect based on current user type
      if (userType === 'admin') {
        return <Navigate to="/admin/dashboard" replace />;
      } else if (userType === 'user') {
        return <Navigate to="/dashboard" replace />;
      } else {
        return <Navigate to="/login" replace />;
      }
    }

    // User is authenticated and has correct role (or no specific role required)
    return children;
  }

  return children;
};

export default ProtectedRoute;