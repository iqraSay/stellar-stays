import React from 'react'
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import bg from '../../assets/indoorpool.jpg'

const Amenities = () => {
  return (
    <div>
        <Header />
        {/* <!-- Header Banner --> */}
    <section class="banner-header bg-img bg-fixed" data-overlay-dark="5" style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}>
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center">
                    <div class="subtitle">Our Services</div>
                    <div class="title">Hotel Amenities</div>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Amenities --> */}
    <section class="amenities section-padding">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-4">
                    <div class="item hover-box mb-25">
                        <div class="cont up">
                            <div class="icon"> <i class="fa-solid fa-truck-plane"></i> </div>
                            <div class="text">
                                <h5>Pick Up & Drop</h5>
                                <p>Lorem ipsum is simply dummy fermen.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4">
                    <div class="item hover-box mb-25">
                        <div class="cont up">
                            <div class="icon"> <i class="fa-solid fa-parking"></i> </div>
                            <div class="text">
                                <h5>Parking Space</h5>
                                <p>Lorem ipsum is simply dummy fermen.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4">
                    <div class="item hover-box mb-25">
                        <div class="cont up">
                            <div class="icon"> <i class="fa-solid fa-broom"></i> </div>
                            <div class="text">
                                <h5>Room Service</h5>
                                <p>Lorem ipsum is simply dummy fermen.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4">
                    <div class="item hover-box mb-25">
                        <div class="cont up">
                            <div class="icon"> <i class="fa-solid fa-water-ladder"></i> </div>
                            <div class="text">
                                <h5>Indoor Pool</h5>
                                <p>Lorem ipsum is simply dummy fermen.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4">
                    <div class="item hover-box mb-25">
                        <div class="cont up">
                            <div class="icon"> <i class="fa-solid fa-wifi"></i> </div>
                            <div class="text">
                                <h5>Free Internet</h5>
                                <p>Lorem ipsum is simply dummy fermen.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4">
                    <div class="item hover-box mb-25">
                        <div class="cont up">
                            <div class="icon"> <i class="fa-solid fa-mug-saucer"></i> </div>
                            <div class="text">
                                <h5>Breakfast</h5>
                                <p>Lorem ipsum is simply dummy fermen.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4">
                    <div class="item hover-box mb-25">
                        <div class="cont up">
                            <div class="icon"> <i class="fa-solid fa-calendar-days"></i> </div>
                            <div class="text">
                                <h5>Meeting Facilities</h5>
                                <p>Lorem ipsum is simply dummy fermen.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4">
                    <div class="item hover-box mb-25">
                        <div class="cont up">
                            <div class="icon"> <i class="fa-solid fa-wheelchair"></i> </div>
                            <div class="text">
                                <h5>Wheelchair Friendly</h5>
                                <p>Lorem ipsum is simply dummy fermen.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer />
    </div>
  )
}

export default Amenities