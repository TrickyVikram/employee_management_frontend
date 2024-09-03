import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function Body() {
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card mt-5">
                        <div className="card-body">
                            <h2 className="card-title mb-4 text-center">
                                Welcome to the Employee Management System
                            </h2>
                            <p className="text-center mb-4">
                                Please login or register to continue
                            </p>
                            <div className="d-flex justify-content-center">
                                <button 
                                    className="btn btn-primary me-2" 
                                    onClick={() => handleNavigate('/login')}
                                >
                                    Login
                                </button>
                                <button 
                                    className="btn btn-secondary" 
                                    onClick={() => handleNavigate('/register')}
                                >
                                    Register
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Body;
