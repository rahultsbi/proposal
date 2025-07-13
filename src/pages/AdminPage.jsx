
// import React, { useState } from 'react';
// import { Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
// import Login from '../components/Admin/Login';
// import Dashboard from '../components/Admin/Dashboard';
// import { isAuthenticated } from '../services/auth';

// function AdminPage() {
//   const [authenticated, setAuthenticated] = useState(isAuthenticated());
//   const location = useLocation();

//   const navigate = useNavigate();
//   const handleLoginSuccess = () => {
//     setAuthenticated(true);
//   };

//   const handleLogout = () => {
//     setAuthenticated(false);
//     navigate('/');
//   };

//   return (
//     <Routes>
//       <Route 
//         path="login" 
//         element={
//           authenticated ? (
//             <Navigate to="/admin/dashboard" replace />
//           ) : (
//             <Login onLoginSuccess={handleLoginSuccess} />
//           )
//         } 
//       />
//       <Route 
//         path="dashboard" 
//         element={
//           authenticated ? (
//             <Dashboard onLogout={handleLogout} />
//           ) : (
//             <Navigate to="/" replace state={{ from: location }} />
//           )
//         } 
//       />
//       <Route 
//         path="*" 
//         element={
//           <Navigate to={authenticated ? "/admin/dashboard" : "/admin/login"} replace />
//         } 
//       />
//     </Routes>
//   );
// }

// export default AdminPage;
import React from 'react';
import { Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import Login from '../components/Admin/Login';
import Dashboard from '../components/Admin/Dashboard';
import { useUserAuth } from '../contexts/UserAuthContext';

function AdminPage() {
  const { isAuthenticated, userType, logout } = useUserAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    // Login success is handled by the context
    // You might want to trigger a re-render or redirect here
  };

  const handleLogout = () => {
    logout(); // This will update the global auth state
    navigate('/');
  };

  // Check if user is authenticated AND is an admin
  const isAdminAuthenticated = isAuthenticated && userType === 'admin';

  return (
    <Routes>
      <Route
        path="login"
        element={
          isAdminAuthenticated ? (
            <Navigate to="/admin/dashboard" replace />
          ) : (
            <Login onLoginSuccess={handleLoginSuccess} />
          )
        }
      />
      <Route
        path="dashboard"
        element={
          isAdminAuthenticated ? (
            <Dashboard onLogout={handleLogout} />
          ) : (
            <Navigate to="/" replace state={{ from: location }} />
          )
        }
      />
      <Route
        path="*"
        element={
          <Navigate to={isAdminAuthenticated ? "/admin/dashboard" : "/admin/login"} replace />
        }
      />
    </Routes>
  );
}

export default AdminPage;