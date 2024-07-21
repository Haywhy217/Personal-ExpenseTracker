import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import LandingPage from './Components/LandingPage';
import Login from './Components/Login';
import Register from './Components/Register';
import HomePage from './Pages/HomePage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
            
        </Router>
    );
};

export default App;


