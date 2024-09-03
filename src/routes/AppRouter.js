import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../components/Auth/Login';
import Register from '../components/Auth/Register';
import EmployeeDashboard from '../components/Employee/EmployeeDashboard';
import ProfileEdit from '../components/Employee/ProfileEdit';
import AdminDashboard from '../components/Admin/AdminDashboard';
import PrivateRoute from '../components/Common/PrivateRoute';
import Navbar from '../components/Layout/Navbar';
// import Sidebar from '../components/Layout/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Body from '../components/Body';


const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Body />} />
        <Route
          path="/employee/dashboard"
          element={<PrivateRoute element={<EmployeeDashboard />} roleRequired="employee" />}
        />
        <Route
          path="/employee/profile/edit"
          element={<PrivateRoute element={<ProfileEdit />} roleRequired="employee" />}
        />
        <Route
          path="/admin/dashboard"
          element={<PrivateRoute element={<AdminDashboard />} roleRequired="admin" />}
        />
        {/* Add additional routes here */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
