import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../css/style.css';
import logo from '../../assets/logo.png';
import { auth } from '../../firebase';  // Import firebase auth instance

const Sidebar = () => {
  
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };

    const handleLogout = async () => {
      try {
        await auth.signOut(); // Sign the user out of Firebase
        console.log("User logged out successfully");
        window.location.href = '/admin/login'; 
      } catch (error) {
        console.error("Error signing out: ", error);
      }
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
          {/* Logout Link */}
          <li><Link to="#" onClick={handleLogout}>Logout</Link></li>
        </ul>
      </div>
    </div>

    {/* Overlay that appears when sidebar is open */}
    {isSidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}
  </div>
);
};

export default Sidebar;
