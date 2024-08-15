import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styles from './Login.module.css'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const loginData = {
      username,
      password,
    };

    try {
      const response = await fetch('http://localhost:8000/user/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        alert('Login successful!');
        navigate('/home');
      } else {
        throw new Error('Invalid username or password');
      }
    } catch (error) {
      alert(error.message);
    }
  };
  
  const handleLogout = async () => {
    console.log('Logging out...');
  
    try {
      const response = await fetch('http://localhost:8000/user/logout/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        console.log('Logout successful!');
        localStorage.removeItem('token');
        navigate('/'); // Redirect to the landing page
      } else {
        console.error('Logout failed:', response.status);
        alert('Logout failed. Please try again later.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
      alert('An unexpected error occurred. Please try again later.');
    }
  };

  return (
    <div className={styles.loginctn}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {error && <p className={styles.error}>{error}</p>}
      <button className={styles.logoutButton} onClick={handleLogout}>Logout</button>
      <p className={styles.register}>
        Don’t have an account? <Link to="/register" className={styles.registerLink}>Register here</Link>
      </p>
    </div>
  );
};

export default Login;
