import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul className="list-group">
                <li className="list-group-item">
                    <Link to="/employee/dashboard">Dashboard</Link>
                </li>
                <li className="list-group-item">
                    <Link to="/employee/profile/edit">Edit Profile</Link>
                </li>
                <li className="list-group-item">
                    <Link to="/admin/employees">Employee List</Link>
                </li>
                <li className="list-group-item">
                    <Link to="/admin/attendance">Attendance List</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
