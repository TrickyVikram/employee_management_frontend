import React from 'react';
import EmployeeList from './EmployeeList';
import AttendanceList from './AttendanceList';

const AdminDashboard = () => {
    return (
        <div className="container">
            <h2>Admin Dashboard</h2>
            <EmployeeList />
            <AttendanceList />
        </div>
    );
};

export default AdminDashboard;
