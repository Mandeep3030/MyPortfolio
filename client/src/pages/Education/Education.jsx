import React, { useEffect, useMemo, useState } from 'react';
import './Education.css';
import { useAuth } from '../../context/AuthContext';

const initialForm = {
  title: '',
  firstname: '',
  lastname: '',
  email: '',
  completion: '',
  description: ''
};

const Education = () => {
  const { token, user } = useAuth();
  const isAdmin = useMemo(() => user?.role === 'admin', [user]);

  const [qualifications, setQualifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);

  const fetchQualifications = async () => {
    try {
      setLoading(true);
      const res = await fetch('http://localhost:3000/api/qualifications');
      if (!res.ok) throw new Error('Failed to load education records');
      const data = await res.json();
      setQualifications(Array.isArray(data) ? data : []);
      setError('');
    } catch (e) {
      setError(e.message || 'Error fetching education');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQualifications();
  }, []);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isAdmin) return;
    setSubmitting(true);
    try {
      const res = await fetch('http://localhost:3000/api/qualifications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token ? `Bearer ${token}` : ''
        },
        body: JSON.stringify({
          ...form,
          completion: form.completion ? new Date(form.completion).toISOString() : null
        })
      });
      if (!res.ok) {
        const msg = (await res.json().catch(() => ({}))).message || 'Failed to create education record';
        throw new Error(msg);
      }
      setForm(initialForm);
      await fetchQualifications();
    } catch (e) {
      setError(e.message || 'Error creating education');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="education-page">
      <section className="education-header section">
        <div className="container">
          <div className="header-content text-center">
            <h1 className="page-title animate-fade-in">Education</h1>
            <p className="page-subtitle animate-fade-in">
              Database-backed education records. Admins can add new entries.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {error && <div className="error card mb-3">{error}</div>}
          <div className="card mb-4">
            <h2 className="section-title" style={{ textAlign: 'left' }}>Education List</h2>
            {loading ? (
              <div className="loading">Loading education…</div>
            ) : (
              <div className="responsive-table">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Email</th>
                      <th>Completion</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {qualifications.length === 0 ? (
                      <tr>
                        <td colSpan="6" style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>No records found</td>
                      </tr>
                    ) : (
                      qualifications.map((q) => (
                        <tr key={q._id}>
                          <td>{q.title}</td>
                          <td>{q.firstname || '-'}</td>
                          <td>{q.lastname || '-'}</td>
                          <td>{q.email || '-'}</td>
                          <td>{q.completion ? new Date(q.completion).toLocaleDateString() : '-'}</td>
                          <td>{q.description || '-'}</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {isAdmin && (
            <div className="card">
              <h2 className="section-title" style={{ textAlign: 'left' }}>Add New Education</h2>
              <form onSubmit={onSubmit} className="form-grid">
                <div className="form-row">
                  <label htmlFor="title">Title</label>
                  <input id="title" name="title" value={form.title} onChange={onChange} required />
                </div>
                <div className="form-row-2">
                  <div>
                    <label htmlFor="firstname">First Name</label>
                    <input id="firstname" name="firstname" value={form.firstname} onChange={onChange} />
                  </div>
                  <div>
                    <label htmlFor="lastname">Last Name</label>
                    <input id="lastname" name="lastname" value={form.lastname} onChange={onChange} />
                  </div>
                </div>
                <div className="form-row-2">
                  <div>
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" name="email" value={form.email} onChange={onChange} />
                  </div>
                  <div>
                    <label htmlFor="completion">Completion</label>
                    <input id="completion" type="date" name="completion" value={form.completion} onChange={onChange} />
                  </div>
                </div>
                <div className="form-row">
                  <label htmlFor="description">Description</label>
                  <textarea id="description" name="description" value={form.description} onChange={onChange} rows="3" />
                </div>
                <div className="form-actions">
                  <button className="btn btn-primary" type="submit" disabled={submitting}>
                    {submitting ? 'Saving…' : 'Create Education'}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Education;