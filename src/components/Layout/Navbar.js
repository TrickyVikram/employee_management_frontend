import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import EmployeeDashboard from '../Employee/EmployeeDashboard';


const Navbar = () => {
    const { auth, logoutUser } = useContext(AuthContext);

    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Employee Management</Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    {auth ? (
                        <>
                            <li className="nav-item">
                                <Link className="nav-link" to="/employee/dashboard">Dashboard</Link>
                            </li>
                            {auth.role === 'admin' && (
                                <li className="nav-item">
                                    <Link className="nav-link" to="/admin/dashboard">Admin Dashboard</Link>
                                </li>
                            )}
                            <li className="nav-item">
                                <button className="btn" onClick={logoutUser}>Logout</button>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/register">Register</Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
        <div className="container">
            <br />
            <EmployeeDashboard />
        </div>
        </>
    );
};

export default Navbar;
