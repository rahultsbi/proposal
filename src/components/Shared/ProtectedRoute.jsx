// // // import React from 'react';
// // // import { Route, Redirect } from 'react-router-dom';
// // // import { isAuthenticated } from '../../services/auth';

// // // function ProtectedRoute({ component: Component, ...rest }) {
// // //   return (
// // //     <Route
// // //       {...rest}
// // //       render={(props) =>
// // //         isAuthenticated() ? (
// // //           <Component {...props} />
// // //         ) : (
// // //           <Redirect to="/admin/login" />
// // //         )
// // //       }
// // //     />
// // //   );
// // // }

// // // export default ProtectedRoute;
// // import { Navigate, Outlet } from 'react-router-dom';
// // import { isAuthenticated } from '../../services/auth';

// // function ProtectedRoute() {
// //   return isAuthenticated() ? <Outlet /> : <Navigate to="/admin/login" />;
// // }

// // export default ProtectedRoute;
// import { Navigate } from 'react-router-dom';
// import { isAuthenticated } from '../../services/auth';

// function ProtectedRoute({ children }) {
//   return isAuthenticated() ? children : <Navigate to="/admin/login" replace />;
// }

// export default ProtectedRoute;
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../../services/auth';

function ProtectedRoute({ children }) {
  return isAuthenticated() ? children : <Navigate to="/admin/login" replace />;
}

export default ProtectedRoute;