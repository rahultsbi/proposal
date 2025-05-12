// // // import React from 'react';
// // // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // // import Form from './components/Form';

// // // function App() {
// // //   return (
// // //     <Router>
// // //       <Routes>
// // //         <Route path="/" element={<Form />} />
// // //       </Routes>
// // //     </Router>
// // //   );
// // // }

// // // export default App;

// // import React from 'react';
// // import { BrowserRouter as Router, Route, Switch,useNavigate } from 'react-router-dom';
// // import { ToastContainer } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';
// // import 'bootstrap/dist/css/bootstrap.min.css';

// // import HomePage from './pages/HomePage';
// // import ProposalPage from './pages/ProposalPage';
// // import AdminPage from './pages/AdminPage';
// // import ProtectedRoute from './components/Shared/ProtectedRoute';

// // function App() {

// // const navigate = useNavigate();
// //   return (
// //     <Router>
// //       <ToastContainer position="top-right" autoClose={3000} />
// //       <Switch>
// //         <Route exact path="/" component={HomePage} />
// //         <Route path="/proposal" component={ProposalPage} />
// //         <Route path="/admin/login" component={AdminPage} />
// //         <ProtectedRoute path="/admin/dashboard" component={AdminPage} />
// //         <navigate to="/" />
// //       </Switch>
// //     </Router>
// //   );
// // }

// // export default App;
// import React from 'react';
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

// import HomePage from './pages/HomePage';
// import ProposalPage from './pages/ProposalPage';
// import AdminPage from './pages/AdminPage';
// import ProtectedRoute from './components/Shared/ProtectedRoute';

// function App() {
//   return (
//     <BrowserRouter>
//       <ToastContainer position="top-right" autoClose={3000} />
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/proposal" element={<ProposalPage />} />
//         <Route path="/admin/login" element={<AdminPage />} />
//         <Route
//           path="/admin/dashboard"
//           element={
//             <ProtectedRoute>
//               <AdminPage />
//             </ProtectedRoute>
//           }
//         />
//         <Route path="*" element={<Navigate to="/" replace />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from './pages/HomePage';
import ProposalPage from './pages/ProposalPage';
import AdminPage from './pages/AdminPage';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/proposal" element={<ProposalPage />} />
        <Route path="/admin/*" element={<AdminPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;