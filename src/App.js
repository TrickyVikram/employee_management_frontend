import React from 'react';
import { AuthProvider } from './contexts/AuthContext';
import Routes from './routes/AppRouter';
import { jwtDecode } from 'jwt-decode'; // Corrected import
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    const token = localStorage.getItem('token');
    let role = null;

    // Decode token to get the role
    if (token) {
        const decodedToken = jwtDecode(token);
        role = decodedToken.role; // Assuming role is stored in 'role' field in the token
    }

    return (
        <>
            <div>
                {role === 'user' ? (
                    <div className="container">
                        <h2>Employee Dashboard</h2>
                        <p>Token: {token}</p>
                    </div>
                ) : role === 'admin' ? (
                    <div className="container">
                        <h2>Admin Dashboard</h2>
                        <p>Token: {token}</p>
                    </div>
                ) : (
                    <div className="container">
                        <h2>No Role Found</h2>
                    </div>
                )}
            </div>
            <AuthProvider>
                <Routes />
            </AuthProvider>
        </>
    );
};

export default App;
