// // import React, { useState } from 'react';
// // import { Switch, Route, useRouteMatch, useNavigate, Navigate } from 'react-router-dom';
// // import Login from '../components/Admin/Login';
// // import Dashboard from '../components/Admin/Dashboard';
// // import { isAuthenticated } from '../services/auth';

// // function AdminPage() {
// //   const { path } = useRouteMatch();
// //   const history = useNavigate();
// //   const [authenticated, setAuthenticated] = useState(isAuthenticated());

// //   const handleLoginSuccess = () => {
// //     setAuthenticated(true);
// //     history.push('/admin/dashboard');
// //   };

// //   const handleLogout = () => {
// //     setAuthenticated(false);
// //     history.push('/admin/login');
// //   };

// //   if (!authenticated && !window.location.pathname.includes('/login')) {
// //     return <Navigate to="/admin/login" />;
// //   }

// //   return (
// //     <Switch>
// //       <Route path={`${path}/login`}>
// //         <Login onLoginSuccess={handleLoginSuccess} />
// //       </Route>
// //       <Route path={`${path}/dashboard`}>
// //         <Dashboard onLogout={handleLogout} />
// //       </Route>
// //       <Navigate to={`${path}/dashboard`} />
// //     </Switch>
// //   );
// // }

// // export default AdminPage;

// import React, { useState } from 'react';
// import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
// import Login from '../components/Admin/Login';
// import Dashboard from '../components/Admin/Dashboard';
// import { isAuthenticated } from '../services/auth';

// function AdminPage() {
//   const [authenticated, setAuthenticated] = useState(isAuthenticated());
//   const location = useLocation();

//   const handleLoginSuccess = () => {
//     setAuthenticated(true);
//   };

//   const handleLogout = () => {
//     setAuthenticated(false);
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
//             <Navigate to="/admin/login" replace state={{ from: location }} />
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