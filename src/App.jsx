

// // import React from 'react';
// // import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// // import { ToastContainer } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';
// // import 'bootstrap/dist/css/bootstrap.min.css';

// // import HomePage from './pages/HomePage';
// // import ProposalPage from './pages/ProposalPage';
// // import AdminPage from './pages/AdminPage';

// // function App() {
// //   return (
// //     <BrowserRouter>
// //       <ToastContainer position="top-right" autoClose={3000} />
// //       <Routes>
// //         <Route path="/" element={<HomePage />} />
// //         <Route path="/proposal" element={<ProposalPage />} />
// //         <Route path="/admin/*" element={<AdminPage />} />
// //         <Route path="*" element={<Navigate to="/" replace />} />
// //       </Routes>
// //     </BrowserRouter>
// //   );
// // }

// // export default App;
// import React from 'react';
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

// // Context Providers
// import { UserAuthProvider } from './contexts/UserAuthContext';

// // Components
// import ProtectedRoute from './components/Auth/ProtectedRoute';

// // Pages
// import HomePage from './pages/HomePage';
// import ProposalPage from './pages/ProposalPage';
// import AdminPage from './pages/AdminPage';

// // User Auth Components
// import UserLogin from './components/Auth/UserLogin';
// import UserRegister from './components/Auth/UserRegister';

// function App() {
//   return (
//     <UserAuthProvider>
//       <BrowserRouter>
//         <ToastContainer position="top-right" autoClose={3000} />
//         <Routes>
//           {/* Public Routes */}
//           <Route path="/" element={<HomePage />} />
          
//           {/* User Authentication Routes */}
//           <Route 
//             path="/login" 
//             element={
//               <ProtectedRoute requireAuth={false}>
//                 <UserLogin />
//               </ProtectedRoute>
//             } 
//           />
//           <Route 
//             path="/register" 
//             element={
//               <ProtectedRoute requireAuth={false}>
//                 <UserRegister />
//               </ProtectedRoute>
//             } 
//           />
          
//           {/* Protected Proposal Route */}
//           <Route 
//             path="/proposal" 
//             element={
//               <ProtectedRoute requireAuth={true}>
//                 <ProposalPage />
//               </ProtectedRoute>
//             } 
//           />
          
//           {/* Admin Routes */}
//           <Route path="/admin/*" element={<AdminPage />} />
          
//           {/* Catch all route */}
//           <Route path="*" element={<Navigate to="/" replace />} />
//         </Routes>
//       </BrowserRouter>
//     </UserAuthProvider>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Context Providers
import { UserAuthProvider } from './contexts/UserAuthContext';

// Components
import ProtectedRoute from './components/Auth/ProtectedRoute';

// Pages
import HomePage from './pages/HomePage';
import ProposalPage from './pages/ProposalPage';
import AdminPage from './pages/AdminPage';
import UserDashboard from './pages/UserDashboard';

// User Auth Components
import UserLogin from './components/Auth/UserLogin';
import UserRegister from './components/Auth/UserRegister';

function App() {
  return (
    <UserAuthProvider>
      <BrowserRouter>
        <ToastContainer position="top-right" autoClose={3000} />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          
          {/* User Authentication Routes */}
          <Route 
            path="/login" 
            element={
              <ProtectedRoute requireAuth={false}>
                <UserLogin />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/register" 
            element={
              <ProtectedRoute requireAuth={false}>
                <UserRegister />
              </ProtectedRoute>
            } 
          />
          
          {/* Protected User Routes */}
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute requireAuth={true} requiredRole="user">
                <UserDashboard />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/proposal" 
            element={
              <ProtectedRoute requireAuth={true}>
                <ProposalPage />
              </ProtectedRoute>
            } 
          />
          
          {/* Admin Routes */}
          <Route path="/admin/*" element={<AdminPage />} />
          
          {/* Catch all route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </UserAuthProvider>
  );
}

export default App;