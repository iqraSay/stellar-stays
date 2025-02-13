import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../css/style.css';
import logo from '../../assets/logo.png'

const Sidebar = () => {
  
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };
  return (
    <div>
    {/* Hamburger Menu */}
    <button className="hamburger" onClick={toggleSidebar}>
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </button>

    {/* Sidebar - Modal */}
    <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
      <div className="sidebar-header">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="sidebar-links">
        <ul>
        <li><Link to="/admin/dashboard">Dashboard</Link></li>
            <li><Link to="/admin/room-management">Room Management</Link></li>
            <li><Link to="/admin/room-type-management">Room Type Management</Link></li>
            <li><Link to="/admin/reservation-management">Reservation Management</Link></li>
            <li><Link to="/admin/revenue-reports">Revenue and Reports</Link></li>
            <li><Link to="/admin/customer-management">Customer Management</Link></li>
            <li><Link to="/admin/admin-management">Admin Management</Link></li>
            <li><Link to="/">Logout</Link></li>
        </ul>
      </div>
    </div>

    {/* Overlay that appears when sidebar is open */}
    {isSidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}
  </div>
);
};

export default Sidebar;