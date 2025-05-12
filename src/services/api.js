// // // import axios from 'axios';

// // // const api = axios.create({
// // //   baseURL: 'http://localhost:5000/api', // Backend base URL
// // // });

// // // export default api;

// // import axios from 'axios';

// // const API = axios.create({
// //   baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
// //   withCredentials: true
// // });

// // // Request interceptor to add auth token
// // API.interceptors.request.use((config) => {
// //   const token = localStorage.getItem('adminToken');
// //   if (token) {
// //     config.headers.Authorization = `Bearer ${token}`;
// //   }
// //   return config;
// // });

// // export const fetchServices = () => API.get('/services');
// // export const createService = (serviceData) => API.post('/services', serviceData);
// // export const updateService = (id, serviceData) => API.put(`/services/${id}`, serviceData);
// // export const deleteService = (id) => API.delete(`/services/${id}`);

// // export const createProposal = (proposalData) => API.post('/proposals', proposalData);
// // export const fetchProposals = (search, page) => API.get('/proposals', { params: { search, page } });
// // export const downloadProposal = (quoteId) => API.get(`/proposals/${quoteId}/download`, { responseType: 'blob' });

// // export const adminLogin = (credentials) => API.post('/admin/login', credentials);
// // export const adminLogout = () => API.post('/admin/logout');
// import axios from 'axios';

// // Use environment variables properly for client-side code
// const API_URL = import.meta.env?.VITE_API_URL || 
//                 window.env?.REACT_APP_API_URL || 
//                 'http://localhost:5000/api';

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

// export const fetchServices = () => API.get('/services');
// export const createService = (serviceData) => API.post('/services', serviceData);
// export const updateService = (id, serviceData) => API.put(`/services/${id}`, serviceData);
// export const deleteService = (id) => API.delete(`/services/${id}`);

// export const createProposal = (proposalData) => API.post('/proposals', proposalData);
// export const fetchProposals = (search, page) => API.get('/proposals', { params: { search, page } });
// export const downloadProposal = (quoteId) => API.get(`/proposals/${quoteId}/download`, { responseType: 'blob' });

// export const adminLogin = (credentials) => API.post('/admin/login', credentials);
// export const adminLogout = () => API.post('/admin/logout');
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
  const token = localStorage.getItem('adminToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
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

// Admin API functions
export const adminLogin = (credentials) => API.post('/admin/login', credentials);
export const adminLogout = () => API.post('/admin/logout');

// Settings API functions - ADD THESE NEW FUNCTIONS
export const getCommissionRate = () => API.get('/settings/commission');
export const updateCommissionRate = (commissionRate) => API.post('/settings/commission', { commissionRate });

export default API;