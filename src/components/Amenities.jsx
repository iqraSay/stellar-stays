import React from 'react'
import bg from '../assets/bg2.jpg'

const Amenities = () => {
  return (
    <div>
        <section class="amenities section-padding parallax-header valign bg-img bg-fixed bg-img" data-overlay-dark="5"
        style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}>
        <div class="container">
            <div class="row justify-content-center align-items-center">
                <div class="col-lg-4 col-md-12 mb-30">
                    <div class="section-subtitle">Hotel Services</div>
                    <div class="section-title">Amenities</div>
                    <p class="mb-25">The experience elementum sesue in the miss aucantion alesun in sapien fermen the miss caleustion in the sapien.</p> <a href="amenities.html" class="button-3">All Amenities</a>
                </div>
                <div class="col-lg-8 col-md-12">
                    <div class="row">
                        <div class="col-lg-4 col-md-6">
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
                        <div class="col-lg-4 col-md-6">
                            <div class="item hover-box mb-25">
                                <div class="cont up">
                                    <div class="icon"> <i class="fa-solid fa-square-parking"></i> </div>
                                    <div class="text">
                                        <h5>Parking Space</h5>
                                        <p>Lorem ipsum is simply dummy fermen.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
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
                        <div class="col-lg-4 col-md-6">
                            <div class="item hover-box mb-25">
                                <div class="cont up">
                                    <div class="icon"> <i class="fa-solid fa-water-ladder"></i> </div>
                                    <div class="text">
                                        <h5>Swimming Pool</h5>
                                        <p>Lorem ipsum is simply dummy fermen.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="item hover-box mb-25">
                                <div class="cont up">
                                    <div class="icon"> <i class="fa-solid fa-wifi"></i> </div>
                                    <div class="text">
                                        <h5>Fibre Internet</h5>
                                        <p>Lorem ipsum is simply dummy fermen.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
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
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Amenities