import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
      alert('Email is required.');
      return;
    }

    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Save user in localStorage with default admin role
    localStorage.setItem('user', JSON.stringify({ email, role: 'admin' }));
    navigate('/');
  };

  return (
    <div className="container mt-5 col-md-4">
      <h3 className="mb-4">Login</h3>
      <input
        type="email"
        className="form-control mb-3"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="btn btn-primary w-100" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;
