/**
 * Main App Component - Portfolio Application
 * React Router for navigation between pages
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import global styles
import './styles/global.css';

// Import components
import Layout from './components/Layout/Layout';

// Import pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Education from './pages/Education/Education';
import Services from './pages/Services/Services';
import Contact from './pages/Contact/Contact';
import Signin from './pages/Auth/Signin';
import Signup from './pages/Auth/Signup';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <Routes>
            <Route path="/" element={<Layout />}>
            {/* Home page route */}
            <Route index element={<Home />} />
            
            {/* Main navigation routes */}
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="education" element={<Education />} />
            <Route path="services" element={<Services />} />
            <Route path="contact" element={<Contact />} />
            <Route path="signin" element={<Signin />} />
            <Route path="signup" element={<Signup />} />
            
            {/* Fallback route for 404 pages */}
            <Route path="*" element={
              <div className="container section text-center">
                <h1>404 - Page Not Found</h1>
                <p>The page you're looking for doesn't exist.</p>
                <a href="/" className="btn btn-primary">Go Home</a>
              </div>
            } />
            </Route>
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
