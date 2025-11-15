import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem('token') || null);
  const [user, setUser] = useState(() => {
    const u = localStorage.getItem('user');
    return u ? JSON.parse(u) : null;
  });

  useEffect(() => {
    if (token) localStorage.setItem('token', token); else localStorage.removeItem('token');
  }, [token]);

  useEffect(() => {
    if (user) localStorage.setItem('user', JSON.stringify(user)); else localStorage.removeItem('user');
  }, [user]);

  const signin = async (email, password) => {
    const res = await fetch('http://localhost:3000/api/auth/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({ message: 'Signin failed' }));
      throw new Error(err.message || 'Signin failed');
    }
    const data = await res.json();
    setToken(data.token);
    setUser(data.user || null);
    return data;
  };

  const signup = async (name, email, password) => {
    const res = await fetch('http://localhost:3000/api/user/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password })
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({ message: 'Signup failed' }));
      throw new Error(err.message || 'Signup failed');
    }
    // Auto sign-in after successful signup
    await signin(email, password);
  };

  const signout = async () => {
    try { await fetch('http://localhost:3000/api/auth/signout'); } catch {}
    setToken(null);
    setUser(null);
  };

  const value = useMemo(() => ({ token, user, signin, signup, signout, isAuthenticated: !!token }), [token, user]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
