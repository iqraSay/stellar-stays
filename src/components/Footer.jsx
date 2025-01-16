import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div>
      <footer class="footer">
        <div class="top">
          <div class="container">
            <div class="row">
              <div class="col-md-4 mb-30">
                <div class="item">
                  <div class="logo d-flex justify-content-center align-items-center">
                    <img src={logo} alt="" />
                  </div>
                  <p>
                  Step into a world of refined elegance and personalized service, where every detail is designed to provide you with an unforgettable, luxury escape.
                  </p>
                  <div class="social-icons">
                    <ul class="list-inline">
                      <li>
                        <a href="#">
                          <i class="fa-brands fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa-brands fa-x-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa-brands fa-facebook-f"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-md-3 offset-md-1 mb-30">
                <div class="item">
                  <h3>Contact us</h3>
                  <p>
                  45 Shanti Hills,Viman Nagar
                    <br />
                    Pune - 411014,
                    Maharashtra, India
                  </p>
                  <div class="phone">
                    <a href="tel:+410315520900">+1 123 567 8910</a>
                  </div>
                  <div class="mail">
                    <a href="mailto:s.shabeehfatima@gmail.com">hi@stellarstays.com</a>
                  </div>
                </div>
              </div>
              <div class="col-md-4 mb-30">
                <div class="item">
                  <h3>Subscribe</h3>
                  <p>
                    Want to be notified about our services. Just sign up and
                    we'll send you a notification by email.
                  </p>
                  <div class="newsletter">
                    <form action="#">
                      <input
                        type="email"
                        placeholder="Email Address"
                        required
                      />
                      <button type="submit">
                        <i class="fa-light fa-arrow-right"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bottom">
          <div class="container">
            <div class="row">
              <div class="col-lg-8 col-md-12">
                <div class="links">
                  <ul>
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <a href="about.html">About</a>
                    </li>
                    <li>
                      <a href="services.html">Services</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-4 col-md-12 text-end">
                <p>
                  Copyright 2025 by <a href="#">Stellar Stays</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
