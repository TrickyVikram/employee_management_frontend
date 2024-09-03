import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getEmployees } from '../../api/api'; // Ensure this is correctly exported


const EmployeeDashboard = () => {
    const token = localStorage.getItem('token');
    const [employees, setEmployees] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const response = await getEmployees(token);  // Assuming token is needed
                setEmployees(response.data);
            } catch (error) {
     
                setError('Failed to fetch employees data.');
            } finally {

                setLoading(false);
            }
        };

        fetchEmployees();
    }, [token]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="container">
            <h2>Employee Dashboard</h2>
            {employees ? (
                <div>
                    <h3>Profile Information</h3>
                    <p><strong>Name:</strong> {employees.name}</p>
                    <p><strong>Email:</strong> {employees.email}</p>
                    {/* Add more profile fields as needed */}
                    <Link to="/employee/profile/edit">Edit Profile</Link>
                </div>
            ) : (
                <div>No employee data available.</div>
            )}
        </div>
    );
};

export default EmployeeDashboard;
