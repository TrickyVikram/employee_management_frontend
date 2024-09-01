import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmployeeList from './components/Employee/EmployeeList';
import EmployeeProfile from './components/Employee/EmployeeProfile';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import PrivateRoute from './components/Common/PrivateRoute';

const App = () => (
    <Router>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<PrivateRoute><EmployeeList /></PrivateRoute>} />
            <Route path="/employee/:id" element={<PrivateRoute><EmployeeProfile /></PrivateRoute>} />
        </Routes>
    </Router>
);

export default App;
