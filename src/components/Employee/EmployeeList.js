import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EmployeeCard from './EmployeeCard';

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const fetchEmployees = async () => {
            const { data } = await axios.get('/api/employees');
            setEmployees(data);
        };
        fetchEmployees();
    }, []);

    return (
        <div className="container mt-4">
            <h1>Employee List</h1>
            <div className="row">
                {employees.map(employee => (
                    <div className="col-md-4" key={employee._id}>
                        <EmployeeCard employee={employee} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EmployeeList;
