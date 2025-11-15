/**
 * Layout Component - Main style for all pages
 * consistent navigation, footer, and page structure
 */

import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Layout.css';

const Layout = () => {
  return (
    <div className="layout">
      {/* Main navigation header */}
      <Navbar />
      
      {/* Main content area - renders current page */}
      <main className="main-content" role="main">
        <Outlet />
      </main>
      
      {/* Global footer */}
      <Footer />
    </div>
  );
};

export default Layout;