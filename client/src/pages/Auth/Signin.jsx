import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './Signin.css';

const Signin = () => {
  const navigate = useNavigate();
  const { signin } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await signin(email, password);
      navigate('/');
    } catch (err) {
      setError(err.message || 'Signin failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <header className="auth-header">
        <div className="container">
          <h1 className="page-title">Welcome Back</h1>
          <p className="page-subtitle">Sign in to manage your portfolio content.</p>
        </div>
      </header>

      <section className="auth-content">
        <div className="container">
          <div className="auth-card card animate-fade-in">
            <h2 className="text-center mb-3">Sign In</h2>
            <form onSubmit={handleSubmit} className="signin-form">
              <div className="form-group">
                <label className="form-label" htmlFor="email">Email</label>
                <input className="form-input" id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="password">Password</label>
                <input className="form-input" id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </div>
              {error && <div className="error-message status">{error}</div>}
              <button className="btn btn-primary mt-3" type="submit" disabled={loading}>
                {loading ? 'Signing in...' : 'Sign In'}
              </button>
              <p className="form-note mt-2">Don't have an account? <a href="/signup">Sign up</a>.</p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signin;
