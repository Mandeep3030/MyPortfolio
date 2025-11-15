import React, { useEffect, useMemo, useState } from 'react';
import './Projects.css';
import { useAuth } from '../../context/AuthContext';

const initialForm = {
  title: '',
  firstname: '',
  lastname: '',
  email: '',
  completion: '',
  description: ''
};

const Projects = () => {
  const { token, user } = useAuth();
  const isAdmin = useMemo(() => user?.role === 'admin', [user]);

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const res = await fetch('http://localhost:3000/api/projects');
      if (!res.ok) throw new Error('Failed to load projects');
      const data = await res.json();
      setProjects(Array.isArray(data) ? data : []);
      setError('');
    } catch (e) {
      setError(e.message || 'Error fetching projects');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
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
      const res = await fetch('http://localhost:3000/api/projects', {
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
        const msg = (await res.json().catch(() => ({}))).message || 'Failed to create project';
        throw new Error(msg);
      }
      setForm(initialForm);
      await fetchProjects();
    } catch (e) {
      setError(e.message || 'Error creating project');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="projects-page">
      <section className="projects-header section">
        <div className="container">
          <div className="header-content text-center">
            <h1 className="page-title animate-fade-in">Projects</h1>
            <p className="page-subtitle animate-fade-in">
              Browse all projects from the database. Admins can add new items.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {error && <div className="error card mb-3">{error}</div>}
          <div className="card mb-4">
            <h2 className="section-title" style={{ textAlign: 'left' }}>Projects List</h2>
            {loading ? (
              <div className="loading">Loading projects…</div>
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
                    {projects.length === 0 ? (
                      <tr>
                        <td colSpan="6" style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>No projects found</td>
                      </tr>
                    ) : (
                      projects.map((p) => (
                        <tr key={p._id}>
                          <td>{p.title}</td>
                          <td>{p.firstname || '-'}</td>
                          <td>{p.lastname || '-'}</td>
                          <td>{p.email || '-'}</td>
                          <td>{p.completion ? new Date(p.completion).toLocaleDateString() : '-'}</td>
                          <td>{p.description || '-'}</td>
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
              <h2 className="section-title" style={{ textAlign: 'left' }}>Add New Project</h2>
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
                    {submitting ? 'Saving…' : 'Create Project'}
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

export default Projects;