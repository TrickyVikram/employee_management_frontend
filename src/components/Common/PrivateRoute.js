import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

const PrivateRoute = ({ element, roleRequired }) => {
    const { auth } = useContext(AuthContext);

    if (!auth) {
        return <Navigate to="/login" />;
    }

    if (roleRequired && auth.role !== roleRequired) {
        return <Navigate to="/" />;
    }

    return element;
};

export default PrivateRoute;
