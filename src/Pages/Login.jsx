import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import Footer from '../Components/Footer';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const   
 [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    if (username === 'admin' && password==='admin123') {
      navigate('/dashboard');// Navigate to dashboard on successful login
      setErrorMessage(''); // Clear error message
    } else {
      setErrorMessage('Incorrect username or password'); //Set error message
    }
  };

  return (
    <div className="login-page">
      <div className="login-image">
        <img src="/tree.png" alt="TreeImage" />
      </div>
      <div className="login-form">
        <h2>Please login to your account</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Display error message if present */}
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
      <Footer />
    </div>
    
  );
}

export default Login;
