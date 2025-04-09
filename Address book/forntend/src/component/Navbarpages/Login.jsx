import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:3001/login', { email, password })
      .then(result => {
        console.log(result);
        if (result.data === "Success") {
          navigate('/home');
        } else {
          alert("Invalid email or password");
        }
      })
      .catch(err => {
        console.error("Login Error:", err);
        alert("An error occurred. Please try again.");
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: '#5d6d7e' }}>
      <div className="p-5 bg-white shadow rounded" style={{ width: '350px' }}>
        <h2 className="mb-4">LOGIN</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" placeholder="Enter Email" 
              value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" placeholder="Enter Password" 
              value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>

          <button type="submit" className="btn btn-success w-100 mb-3">Login</button>
        </form>
        
        <p className="text-center">Don't have an account?</p>
        <Link to="/register" className="btn btn-secondary w-100">Singup</Link>
      </div>
    </div>
  );
};

export default Login;
