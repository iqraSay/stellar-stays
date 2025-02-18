import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../css/style.css";
import logo from "../../assets/logo.png";
import { auth } from "../../firebase"; // Import Firebase auth instance

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [user, setUser] = useState(null); // State to store the logged-in user

  // Fetch the current user on component mount
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in
        setUser(user);
      } else {
        // User is signed out
        setUser(null);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Handle logout
  const handleLogout = async () => {
    try {
      await auth.signOut(); // Sign the user out of Firebase
      console.log("User logged out successfully");
      window.location.href = "/admin/login"; // Redirect to login page
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
        <div className="">
        <div >
          <img src={logo} alt="Logo" className="logo" />
        </div><br />
          {/* Welcome Message */}
          {user && (
            <div className="welcome-message">
              Welcome, {user.displayName || user.email}
            </div>
          )}
        </div>
        <div className="sidebar-links">
          <ul>
            <li>
              <Link to="/admin/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/admin/rooms">Room Management</Link>
            </li>
            <li>
              <Link to="/admin/room-types">Room Type Management</Link>
            </li>
            <li>
              <Link to="/admin/reservation-management">Reservation Management</Link>
            </li>
            <li>
              <Link to="/admin/feedbacks">Feedbacks Received </Link>
            </li>
            <li>
              <Link to="/admin/payments">Payments Received</Link>
            </li>
            <li>
              <Link to="/admin/customer-management">Customer Management</Link>
            </li>
            <li>
              <Link to="/admin/admin-management">Admin Management</Link>
            </li>
            {/* Logout Link */}
            <li>
              <Link to="#" onClick={handleLogout}>
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Overlay that appears when sidebar is open */}
      {isSidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </div>
  );
};

export default Sidebar;