import React from 'react'
import logo from '../assets/logo.png'


const Footer = () => {
  return (
    <div>
        <footer class="footer">
        <div class="top">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 mb-30">
                        <div class="item">
                            <div class="logo"><img src={logo} alt=""/></div>
                            <p>Lorem ipsum is simply dummy text of the printe and type setting industry in the fermen.</p>
                            <div class="social-icons">
                                <ul class="list-inline">
                                    <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                                    <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                                    <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 offset-md-1 mb-30">
                        <div class="item">
                            <h3>Contact us</h3>
                            <p>0665 Broadway st.
                                <br/>10234 NY, USA
                            </p>
                            <div class="phone"><a href="tel:+410315520900">+1 123 567 8910</a></div>
                            <div class="mail"><a href="mailto:hi@rixoshotel.com">hi@rixoshotel.com</a></div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-30">
                        <div class="item">
                            <h3>Subscribe</h3>
                            <p>Want to be notified about our services. Just sign up and we'll send you a notification by email.</p>
                            <div class="newsletter">
                                <form action="#">
                                    <input type="email" placeholder="Email Address" required />
                                    <button type="submit"><i class="fa-light fa-arrow-right"></i></button>
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
                                <li><a href="index.html">Home</a></li>
                                <li><a href="about.html">About</a></li>
                                <li><a href="services.html">Services</a></li>
                                <li><a href="portfolio.html">Portfolio</a></li>
                                <li><a href="blog1.html">Blog</a></li>
                                <li><a href="contact.html">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-12 text-end">
                        <p>Copyright 2025 by <a href="#">Stellar Stays</a></p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </div>
  )
}

export default Footer