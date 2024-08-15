import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import LandingPage from './Pages/LandingPage';
import Home from './Pages/Home';

const App = () => {
  const token = localStorage.getItem('token');

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={!token ? <Login /> : <Navigate to="/home" />} />
        <Route path="/register" element={<Register />} />
        <Route 
          path="/home" 
          element={token ? <Home /> : <Navigate to="/login" />} 
        />
      </Routes>
    </Router>
  );
};

export default App;