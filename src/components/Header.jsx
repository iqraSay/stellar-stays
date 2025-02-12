import React from "react";
import { Link } from "react-router-dom";
import "../css/style.css";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg">
        <div class="container">
          {/* <!-- Logo --> */}
          <div class="logo-wrapper">
            <Link class="logo" to="/">
              {" "}
              <img src={logo} class="logo-img" alt="" />{" "}
            </Link>
          </div>
          {/* <!-- Button --> */}
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar"
            aria-controls="navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {" "}
            <span class="navbar-toggler-icon">
              <i class="fa-solid fa-bars"></i>
            </span>{" "}
          </button>
          {/* <!-- Menu --> */}
          <div class="collapse navbar-collapse" id="navbar">
            <ul class="navbar-nav mx-auto">
              <li class="nav-item dropdown">
                {" "}
                <Link to="/" class="nav-link active" role="button">
                  Home{" "}
                </Link>
                {/* <ul class="dropdown-menu">
                        <li><a to="/" class="dropdown-item active"><span>Home Image</span></a></li>
                        <li><a to="/" class="dropdown-item"><span>Home Slider</span></a></li>
                        <li><a to="/" class="dropdown-item"><span>Home Video</span></a></li>
                        <li><a to="/" class="dropdown-item"><span>Home Slideshow</span></a></li>
                    </ul> */}
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item dropdown">
                {" "}
                <Link
                  class="nav-link "
                  to="/rooms"
                  role="button"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                  aria-expanded="false"
                >
                  Rooms{" "}
                </Link>
                {/* <ul class="dropdown-menu">
                        <li><Link to="/" class="dropdown-item"><span>Rooms 01</span></Link></li>
                        <li><Link to="/" class="dropdown-item"><span>Rooms 02</span></Link></li>
                        <li class="dropdown-submenu dropdown"> <Link class="dropdown-item dropdown-toggle" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false" to="#"><span>Room Details <i class="fa-solid fa-angle-right"></i></span></Link>
                            <ul class="dropdown-menu">
                                <li><Link to="room-details1.html" class="dropdown-item"><span>Details 01</span></Link></li>
                                <li><Link to="room-details2.html" class="dropdown-item"><span>Details 02</span></Link></li>
                                <li><Link to="room-details3.html" class="dropdown-item"><span>Details 03</span></Link></li>
                                <li><Link to="room-details4.html" class="dropdown-item"><span>Details 04</span></Link></li>
                            </ul>
                        </li>
                    </ul> */}
              </li>
              <li class="nav-item dropdown">
                {" "}
                <Link
                  class="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                  aria-expanded="false"
                >
                  Services <i class="fa-solid fa-angle-down"></i>
                </Link>
                <ul class="dropdown-menu">
                  <li>
                    <Link to="/facilities" class="dropdown-item">
                      <span>Facilities</span>
                    </Link>
                  </li>

                  <li>
                    <Link to="/amenities" class="dropdown-item">
                      <span>Amenities</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/eventvenue" class="dropdown-item">
                      <span>Event Venues</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/spa" class="dropdown-item">
                      <span>Spa</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/restaurant" class="dropdown-item">
                      <span>Restaurant</span>
                    </Link>
                  </li>
                </ul>
              </li>
              {/* <li class="nav-item dropdown"> <a class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">Pages <i class="fa-solid fa-angle-down"></i></a>
                    <ul class="dropdown-menu">
                        <li><a to="restaurant.html" class="dropdown-item"><span>Restaurant</span></a></li>
                        <li><a to="spa.html" class="dropdown-item"><span>Spa & Wellness</span></a></li>
                        <li><a to="pricing.html" class="dropdown-item"><span>Pricing</span></a></li>
                        <li><a to="team.html" class="dropdown-item"><span>Team</span></a></li>
                        <li><a to="team-single.html" class="dropdown-item"><span>Team Single</span></a></li>
                        <li><a to="faq.html" class="dropdown-item"><span>FAQs</span></a></li>
                        <li><a to="gallery-image.html" class="dropdown-item"><span>Image Gallery</span></a></li>
                        <li><a to="gallery-video.html" class="dropdown-item"><span>Video Gallery</span></a></li>
                        <li><a to="404.html" class="dropdown-item"><span>404 Page</span></a></li>
                    </ul>
                </li> */}
              <li class="nav-item">
                <Link class="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <div class="navbar-right">
              <div class="phonex">
                <Link to="tel:+12345678910">
                  <i class="fa-solid fa-phone"></i> +1 234 567 8910
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
