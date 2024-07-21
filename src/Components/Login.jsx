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
      const response = await fetch('http://localhost:8000/users/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (!response.ok) {
        throw new Error('Failed to login');
      }

      navigate('/dashboard');
    } catch (error) {
      setError('Login failed. Please try again.');
    }
  };

  const handleLogout = async () => {
    try {
      const response = await fetch('http://your-django-backend-url/api/logout/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to logout');
      }

      navigate('/'); // Redirect to the landing page
    } catch (error) {
      setError('Logout failed. Please try again.');
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
