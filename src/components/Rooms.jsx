import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import r1 from '../assets/01.jpg'
import r2 from '../assets/02.jpg'
import r3 from '../assets/03.jpg'
import r4 from '../assets/04.jpg'
import r5 from '../assets/05.jpg'
import r6 from '../assets/06.jpg'
import 'owl.carousel'
import '@fortawesome/fontawesome-free/css/all.min.css';

const Rooms = () => {
    useEffect(() => {
        const owl = $('.owl-carousel');
        owl.owlCarousel({
          items: 2,
          loop: true,
          dots: false,
          margin: 20,
          autoplay: false,
          autoplayTimeout: 5000,
          nav: true, 
          navText: [
            '<i class="fa-solid fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa-solid fa-angle-right" aria-hidden="true"></i>',
          ],
          responsiveClass: true,
          responsive: {
            0: {
              items: 1,
              nav: true,
            },
            600: {
              items: 1,
              nav: true,
            },
            1000: {
              items: 2, 
              nav: true,
            },
          },
        });
      
      
          return () => {
            owl.trigger('destroy.owl.carousel');
          };
        }, []);
  return (
    <div>
        <section class="rooms1 section-padding bg-darkgray">
        <div class="container">
            <div class="row mb-30 align-items-center">
                <div class="col-md-5 text-left">
                    <div class="section-subtitle">Luxury Resort Hotel</div>
                    <div class="section-title white mb-0">Rooms & Suites</div>
                </div>
                <div class="col-md-5">
                    <p>The experience elementum sesue the aucan vestibulum usto sapien rutrum volutan donec fermen lorem ipsum quisque sodales miss in the varius drana miss.</p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="owl-carousel owl-theme">
                        <div class="item mt-20">
                            <div class="img"> <img src={r2} alt=""/> </div>
                            <div class="wrap">
                            <div class="cont">
                                    <div class="price">₹2000 / night</div>
                                    <h3><Link to="/room-type/family">Family Room</Link></h3>
                                    <div class="details"> <i class="fa-solid fa-bed mr-5 gold"></i>4 Bed <i class="fa-solid fa-expand mr-5 gold"></i>350 sqm <i class="fa-solid fa-bath mr-5 gold"></i>2 Bathroom  </div>
                                </div>
                                <div class="arrow"> <Link to="/room-type/family"><span class="fa-solid fa-arrow-right"></span></Link> </div>
                            </div>
                        </div>
                        <div class="item mt-20">
                            <div class="img"> <img src={r3} alt=""/> </div>
                            <div class="wrap">
                            <div class="cont">
                                    <div class="price">₹3500 / night</div>
                                    <h3><Link to="/room-type/double">Double Room</Link></h3>
                                    <div class="details"> <i class="fa-solid fa-bed mr-5 gold"></i>4 Bed <i class="fa-solid fa-expand mr-5 gold"></i>700 sqm <i class="fa-solid fa-bath mr-5 gold"></i>2 Bathroom  </div>
                                </div>
                                <div class="arrow"> <Link to="/room-type/double"><span class="fa-solid fa-arrow-right"></span></Link> </div>
                            </div>
                        </div>
                        <div class="item mt-20">
                            <div class="img"> <img src={r4} alt=""/> <span class="discount"><i class="fa-solid fa-badge-percent mr-5"></i> 30% Off</span> </div>
                            <div class="wrap">
                            <div class="cont">
                                    <div class="price">₹3000 / night</div>
                                    <h3><Link to="/room-type/superior">Superior Room</Link></h3>
                                    <div class="details"> <i class="fa-solid fa-bed mr-5 gold"></i>3 Bed <i class="fa-solid fa-expand mr-5 gold"></i>600 sqm <i class="fa-solid fa-bath mr-5 gold"></i>2 Bathroom  </div>
                                </div>
                                <div class="arrow"> <Link to="/room-type/superior"><span class="fa-solid fa-arrow-right"></span></Link> </div>
                            </div>
                        </div>
                        <div class="item mt-20">
                            <div class="img"> <img src={r5} alt=""/><span class="discount"><i class="fa-solid fa-badge-percent mr-5"></i> 40% Off</span> </div>
                            <div class="wrap">
                                <div class="cont">
                                    <div class="price">₹3500 / night</div>
                                    <h3><Link to="/room-type/wellness">Wellness Room</Link></h3>
                                    <div class="details"> <i class="fa-solid fa-bed mr-5 gold"></i>4 Bed <i class="fa-solid fa-expand mr-5 gold"></i>550 sqm <i class="fa-solid fa-bath mr-5 gold"></i>2  Bathroom </div>
                                </div>
                                <div class="arrow"> <Link to="/room-type/wellness"><i class="fa-solid fa-arrow-right"></i></Link> </div>
                            </div>
                        </div>
                        <div class="item mt-20">
                            <div class="img"> <img src={r6} alt=""/> </div>
                            <div class="wrap">
                                <div class="cont">
                                    <div class="price">₹4000 / night</div>
                                    <h3><Link to="/room-type/king">King Room</Link></h3>
                                    <div class="details"> <i class="fa-solid fa-bed mr-5 gold"></i>1 Bed <i class="fa-solid fa-expand mr-5 gold"></i>400 Sqm <i class="fa-solid fa-bath mr-5  gold "></i>1 Bathroom </div>
                                </div>
                                <div class="arrow"> <Link to="/room-type/king"><i class="fa-solid fa-arrow-right"></i></Link> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Rooms