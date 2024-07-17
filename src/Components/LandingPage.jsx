import React from 'react'
import { Link } from 'react-router-dom';
import './LandingPage.css';


const LandingPage = () => {
  return (
    <div className="L-container">
      <h2>Hi, Welcome to your Personal Expense Tracker</h2>
      <p><Link to="/login">Log in</Link> if you already have an account.</p>
      <p><Link to="/register">Register</Link> if you are new here.</p>
    </div>
  );
};

export default LandingPage