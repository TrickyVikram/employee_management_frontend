import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EmployeeProfile = ({ match }) => {
    const [employee, setEmployee] = useState(null);

    useEffect(() => {
        const fetchEmployee = async () => {
            const { data } = await axios.get(`/api/employees/${match.params.id}`);
            setEmployee(data);
        };
        fetchEmployee();
    }, [match.params.id]);

    if (!employee) return <div>Loading...</div>;

    return (
        <div className="container mt-4">
            <h1>{employee.name}</h1>
            <p>Email: {employee.email}</p>
            <img src={`/uploads/${employee.profileImage}`} alt={employee.name} className="img-fluid" />
            {/* Add edit option and other details here */}
        </div>
    );
};

export default EmployeeProfile;
