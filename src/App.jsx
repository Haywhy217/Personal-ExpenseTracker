import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import LandingPage from './Components/LandingPage';
import Login from './Components/Login';
import Register from './Components/Register';
import Trackly from './Pages/Trackly';
import Dashboard from './Components/Dashboard';
import LandingPage from './Pages/LandingPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path='/trackly'element={<Trackly/>} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<Dashboard />} />
                
            </Routes>
            
        </Router>
    );
};

export default App;


