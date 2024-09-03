import React, { createContext, useState, useEffect } from 'react';
import { login as loginApi, register as registerApi } from '../api/api';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        const role = localStorage.getItem('role');
        if (token && role) {
            setAuth({ token, role });
        }
    }, []);

    const registerUser = async (userData) => {
        try {
            const { data } = await registerApi(userData);
            localStorage.setItem('token', data.token);
            localStorage.setItem('role', data.role); // Store role
            setAuth({ token: data.token, role: data.role });
        } catch (error) {
            console.error('Registration failed', error);
        }
    };

    const loginUser = async (email, password) => {
        try {
            const { data } = await loginApi({ email, password });
            localStorage.setItem('token', data.token);
            localStorage.setItem('role', data.role); // Store role
            setAuth({ token: data.token, role: data.role });
            alert(`Login successful. Token: ${data.token}`);
        } catch (error) {
            console.error('Login failed', error);
            alert('Login failed. Please try again.');
        }
    };

    const logoutUser = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        setAuth(null);
    };

    return (
        <AuthContext.Provider value={{ auth, registerUser, loginUser, logoutUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
