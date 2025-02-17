import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import "../css/style.css";
import logo from "../assets/logo.png";

const Header = () => {
  const [user, setUser] = useState(null); // State to store the logged-in user
  const navigate = useNavigate();

  // Listen for authentication state changes
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

  // Handle logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/"); // Redirect to home page after logout
    } catch (error) {
      console.error("Error logging out: ", error);
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          {/* <!-- Logo --> */}
          <div className="logo-wrapper">
            <Link className="logo" to="/">
              {" "}
              <img src={logo} className="logo-img" alt="" />{" "}
            </Link>
          </div>
          {/* <!-- Button --> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar"
            aria-controls="navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {" "}
            <span className="navbar-toggler-icon">
              <i className="fa-solid fa-bars"></i>
            </span>{" "}
          </button>
          {/* <!-- Menu --> */}
          <div className="collapse navbar-collapse" id="navbar">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item dropdown">
                {" "}
                <Link to="/" className="nav-link active" role="button">
                  Home{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/rooms">
                  Rooms
                </Link>
              </li>
              <li className="nav-item dropdown">
                {" "}
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                  aria-expanded="false"
                >
                  Services <i className="fa-solid fa-angle-down"></i>
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/facilities" className="dropdown-item">
                      <span>Facilities</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/amenities" className="dropdown-item">
                      <span>Amenities</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/eventvenue" className="dropdown-item">
                      <span>Event Venues</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="navbar-right">
              <div className="phonex">
                {user ? (
                  <>
                    <span style={{ marginRight: "10px", color: "#fff" }}>
                      Welcome, {user.displayName || user.email}
                    </span>
                    <button
                      onClick={handleLogout}
                      style={{
                        background: "none",
                        border: "none",
                        color: "#fff",
                        cursor: "pointer",
                      }}
                    >
                      <i className="fa-solid fa-sign-out"></i> Logout
                    </button>
                  </>
                ) : (
                  <Link to="/login">
                    <i className="fa-solid fa-user"></i> Login
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;