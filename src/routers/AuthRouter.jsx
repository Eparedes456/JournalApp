import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
  } from "react-router-dom";
import { LoginPage } from '../components/auth/LoginPage';
import { RegisterPage } from '../components/auth/RegisterPage';

export const AuthRouter = () => {
    return (
        <div className='auth__main'>
            <div className='auth__box-container'>
                <Routes>
                    <Route exact path="/login" element= { <LoginPage /> } />
                    <Route exact path="/register" element ={ <RegisterPage /> } />
                    <Route path="*"element={<Navigate to="/auth/login" />} />
                </Routes>

            </div>
            
        </div>
    )
}
