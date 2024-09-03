import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:4500/api',
    headers: { 'Content-Type': 'application/json' },
});

export const register = (data) => api.post('/auth/register', data);
// Adjust your backend to include role in the response
export const login = (data) => api.post('/auth/login', data);
export const getProfile = () => api.get('/employee/profile');
export const updateProfile = (data) => api.put('/employee/profile', data);
export const getEmployees = (token) => api.get('/employees');
export const createEmployee = (data) => api.post('/admin/employees', data);
export const updateEmployee = (id, data) => api.put(`/admin/employees/${id}`, data);
export const deleteEmployee = (id) => api.delete(`/admin/employees/${id}`);
export const getAttendance = () => api.get('/admin/attendance');

