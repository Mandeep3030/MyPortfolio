import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './Signup.css';

const Signup = () => {
  const navigate = useNavigate();
  const { signup } = useAuth();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await signup(name, email, password);
      navigate('/');
    } catch (err) {
      setError(err.message || 'Signup failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <header className="auth-header">
        <div className="container">
          <h1 className="page-title">Create Account</h1>
          <p className="page-subtitle">Join to manage your portfolio content.</p>
        </div>
      </header>

      <section className="auth-content">
        <div className="container">
          <div className="auth-card card animate-fade-in">
            <h2 className="text-center mb-3">Sign Up</h2>
            <form onSubmit={handleSubmit} className="signup-form">
              <div className="form-group">
                <label className="form-label" htmlFor="name">Name</label>
                <input className="form-input" id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} required />
              </div>
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
                {loading ? 'Creating account...' : 'Sign Up'}
              </button>
              <p className="form-note mt-2">Already have an account? <Link to="/signin">Sign in</Link>.</p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
