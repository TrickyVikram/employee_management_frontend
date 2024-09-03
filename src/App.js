import React from 'react';
import { AuthProvider } from './contexts/AuthContext';
import Routes from './routes/AppRouter';
import 'bootstrap/dist/css/bootstrap.min.css';



const App = () => {
    const token = localStorage.getItem('token');
    return (
        <>
       
        <AuthProvider>
           
            <Routes />
        </AuthProvider>
      
        </>
    );
};

export default App;
