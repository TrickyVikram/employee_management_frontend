import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const EmployeeCard = ({ employee }) => (
    <Card className="mb-3">
        <Card.Body>
            <Card.Title>{employee.name}</Card.Title>
            <Card.Text>Email: {employee.email}</Card.Text>
            <Link to={`/employees/${employee._id}`} className="btn btn-primary">View Profile</Link>
        </Card.Body>
    </Card>
);

export default EmployeeCard;
