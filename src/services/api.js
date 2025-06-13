
// import axios from 'axios';

// // Use environment variables properly for client-side code
// const API_URL = import.meta.env?.VITE_API_URL ||
//                window.env?.REACT_APP_API_URL ||
//                'http://localhost:5000/api';

// const API = axios.create({
//   baseURL: API_URL,
//   withCredentials: true
// });

// // Request interceptor to add auth token
// API.interceptors.request.use((config) => {
//   const token = localStorage.getItem('adminToken');
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// // Services API functions
// export const fetchServices = () => API.get('/services');
// export const createService = (serviceData) => API.post('/services', serviceData);
// export const updateService = (id, serviceData) => API.put(`/services/${id}`, serviceData);
// export const deleteService = (id) => API.delete(`/services/${id}`);

// // Proposal API functions
// export const createProposal = (proposalData) => API.post('/proposals', proposalData);
// export const fetchProposals = (search, page) => API.get('/proposals', { params: { search, page } });
// export const downloadProposal = (quoteId) => API.get(`/proposals/${quoteId}/download`, { responseType: 'blob' });

// // Admin API functions
// export const adminLogin = (credentials) => API.post('/admin/login', credentials);
// export const adminLogout = () => API.post('/admin/logout');

// // Settings API functions - ADD THESE NEW FUNCTIONS
// export const getCommissionRate = () => API.get('/settings/commission');
// export const updateCommissionRate = (commissionRate) => API.post('/settings/commission', { commissionRate });

// export default API;
import axios from 'axios';

// Use environment variables properly for client-side code
const API_URL = import.meta.env?.VITE_API_URL ||
               window.env?.REACT_APP_API_URL ||
               'https://tsbi-proposal-backend.onrender.com/api';

const API = axios.create({
  baseURL: API_URL,
  withCredentials: true
});

// Request interceptor to add auth token
API.interceptors.request.use((config) => {
  // Check for both admin and user tokens
  const adminToken = localStorage.getItem('adminToken');
  const userToken = localStorage.getItem('userToken');
  
  if (adminToken) {
    config.headers.Authorization = `Bearer ${adminToken}`;
  } else if (userToken) {
    config.headers.Authorization = `Bearer ${userToken}`;
  }
  
  return config;
});

// Services API functions
export const fetchServices = () => API.get('/services');
export const createService = (serviceData) => API.post('/services', serviceData);
export const updateService = (id, serviceData) => API.put(`/services/${id}`, serviceData);
export const deleteService = (id) => API.delete(`/services/${id}`);

// Proposal API functions
export const createProposal = (proposalData) => API.post('/proposals', proposalData);
export const fetchProposals = (search, page) => API.get('/proposals', { params: { search, page } });
export const downloadProposal = (quoteId) => API.get(`/proposals/${quoteId}/download`, { responseType: 'blob' });
export const updateProposal = (id, proposalData) => API.put(`/proposals/${id}`, proposalData);
export const deleteProposal = (id) => API.delete(`/proposals/${id}`);

// Admin API functions
export const adminLogin = (credentials) => API.post('/admin/login', credentials);
export const adminLogout = () => API.post('/admin/logout');

// User API functions
export const userRegister = (userData) => API.post('/users/register', userData);
export const userLogin = (credentials) => API.post('/users/login', credentials);
export const userLogout = () => API.post('/users/logout');
export const getUserProfile = () => API.get('/users/profile');
export const updateUserProfile = (profileData) => API.put('/users/profile', profileData);
export const changeUserPassword = (passwordData) => API.post('/users/change-password', passwordData);
export const getUserProposals = (search, page) => API.get('/users/proposals', { params: { search, page } });
export const getUserProposal = (proposalId) => API.get(`/users/proposals/${proposalId}`);

// Settings API functions
export const getCommissionRate = () => API.get('/settings/commission');
export const updateCommissionRate = (commissionRate) => API.post('/settings/commission', { commissionRate });

// Initialize database (run once)
export const initDatabase = () => API.get('/init');

// Helper functions for token management
export const getStoredToken = () => {
  return localStorage.getItem('userToken') || localStorage.getItem('adminToken');
};

export const getUserType = () => {
  if (localStorage.getItem('adminToken')) {
    return 'admin';
  } else if (localStorage.getItem('userToken')) {
    return 'user';
  }
  return null;
};

export const clearAllTokens = () => {
  localStorage.removeItem('userToken');
  localStorage.removeItem('adminToken');
};

export const setUserToken = (token) => {
  localStorage.setItem('userToken', token);
  localStorage.removeItem('adminToken'); // Clear admin token
};

export const setAdminToken = (token) => {
  localStorage.setItem('adminToken', token);
  localStorage.removeItem('userToken'); // Clear user token
};

export default API;