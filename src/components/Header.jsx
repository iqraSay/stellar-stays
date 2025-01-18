import React from 'react'
import '../css/style.css'
import logo from '../assets/logo.png'


const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg">
    <div class="container">
        {/* <!-- Logo --> */}
        <div class="logo-wrapper">
            <a class="logo" href="index.html"> <img src={logo} class="logo-img" alt="" /> </a>
        </div>
        {/* <!-- Button --> */}
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"><i class="fa-solid fa-bars"></i></span> </button>
        {/* <!-- Menu --> */}
        <div class="collapse navbar-collapse" id="navbar">
            <ul class="navbar-nav mx-auto">
                <li class="nav-item dropdown"> <a class="nav-link active dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">Home </a>
                    {/* <ul class="dropdown-menu">
                        <li><a href="/" class="dropdown-item active"><span>Home Image</span></a></li>
                        <li><a href="/" class="dropdown-item"><span>Home Slider</span></a></li>
                        <li><a href="/" class="dropdown-item"><span>Home Video</span></a></li>
                        <li><a href="/" class="dropdown-item"><span>Home Slideshow</span></a></li>
                    </ul> */}
                </li>
                <li class="nav-item"><a class="nav-link" href="about.html">About</a></li>
                <li class="nav-item dropdown"> <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">Rooms <i class="fa-solid fa-angle-down"></i></a>
                    <ul class="dropdown-menu">
                        <li><a href="rooms1.html" class="dropdown-item"><span>Rooms 01</span></a></li>
                        <li><a href="rooms2.html" class="dropdown-item"><span>Rooms 02</span></a></li>
                        <li class="dropdown-submenu dropdown"> <a class="dropdown-item dropdown-toggle" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false" href="#"><span>Room Details <i class="fa-solid fa-angle-right"></i></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="room-details1.html" class="dropdown-item"><span>Details 01</span></a></li>
                                <li><a href="room-details2.html" class="dropdown-item"><span>Details 02</span></a></li>
                                <li><a href="room-details3.html" class="dropdown-item"><span>Details 03</span></a></li>
                                <li><a href="room-details4.html" class="dropdown-item"><span>Details 04</span></a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li class="nav-item dropdown"> <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">Services <i class="fa-solid fa-angle-down"></i></a>
                    <ul class="dropdown-menu">
                        <li><a href="facilities.html" class="dropdown-item"><span>Facilities</span></a></li>
                        
                        <li><a href="amenities.html" class="dropdown-item"><span>Amenities</span></a></li>
                        <li><a href="offers.html" class="dropdown-item"><span>Offers</span></a></li>
                    </ul>
                </li>
                {/* <li class="nav-item dropdown"> <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">Pages <i class="fa-solid fa-angle-down"></i></a>
                    <ul class="dropdown-menu">
                        <li><a href="restaurant.html" class="dropdown-item"><span>Restaurant</span></a></li>
                        <li><a href="spa.html" class="dropdown-item"><span>Spa & Wellness</span></a></li>
                        <li><a href="pricing.html" class="dropdown-item"><span>Pricing</span></a></li>
                        <li><a href="team.html" class="dropdown-item"><span>Team</span></a></li>
                        <li><a href="team-single.html" class="dropdown-item"><span>Team Single</span></a></li>
                        <li><a href="faq.html" class="dropdown-item"><span>FAQs</span></a></li>
                        <li><a href="gallery-image.html" class="dropdown-item"><span>Image Gallery</span></a></li>
                        <li><a href="gallery-video.html" class="dropdown-item"><span>Video Gallery</span></a></li>
                        <li><a href="404.html" class="dropdown-item"><span>404 Page</span></a></li>
                    </ul>
                </li> */}
                <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
            </ul>
            <div class="navbar-right">
                <div class="phonex"><a href="tel:+12345678910"><i class="fa-solid fa-phone"></i> +1 234 567 8910</a></div>
            </div>
        </div>
    </div>
</nav>
</div>
  )
}

export default Header