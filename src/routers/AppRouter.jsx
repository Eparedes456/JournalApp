import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,

  } from "react-router-dom";
import { LoginPage } from '../components/auth/LoginPage';
import { JournalPage } from '../components/journal/JournalPage';
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/auth/*" element={<AuthRouter />} />
                    <Route exact path="/" element={<JournalPage />} />
                        
                    
                </Routes>
            </div>
        </Router>
    )
}
