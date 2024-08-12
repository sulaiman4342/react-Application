import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // You can add authentication logic here
    if (username && password) {
      navigate('/dashboard');
    }
  };

  return (
    <div className="login-page">
      <div className="login-image">
        <img src="/tree.png" alt="TreeImage" />
      </div>
      <div className="login-form">
        <h2>Please login to your account</h2>
        <input 
          type="text" 
          placeholder="Username" 
          className="input-field" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input 
          type="password" 
          placeholder="Password" 
          className="input-field" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login-button" onClick={handleLogin}>Login</button>
        <a href="#" className="forgot-password">Forgot password?</a>
        <div className="signup-container">
          <p>Don't have an account?</p>
          <button className="signup-button">CREATE NEW</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
