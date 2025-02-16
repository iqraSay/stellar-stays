import {React, useEffect} from 'react'
import rbg from '../../assets/02.jpg'
import r1 from '../../assets/07.jpg'
import r2 from '../../assets/03.jpg'
import r3 from '../../assets/04.jpg'
import r4 from '../../assets/05.jpg'
import r5 from '../../assets/06.jpg'
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "owl.carousel";



const King = () => {
    useEffect(() => {
      const owl = $(".owl-carousel");
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
            items: 2,
            nav: true,
          },
          1000: {
            items: 3,
            nav: true,
          },
        },
      });
  
      return () => {
        owl.trigger("destroy.owl.carousel");
      };
    }, []);
    return (
      <div>
        <Header />
        <section
          class="banner-header full-height valign bg-img"
          data-overlay-dark="5"
          style={{
            backgroundImage: `url(${rbg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-8 col-md-12 text-center">
                <h5>Laid-back places</h5>
                <h1>King Room</h1>
                <div class="details">
                  <i class="fa-solid fa-bed mr-5"></i>1 Bed
                  <i class="fa-solid fa-expand mr-5"></i>400 Sqm
                  <i class="fa-solid fa-bath mr-5"></i>1 Bathroom
                  <i class="fa-solid fa-mug-saucer mr-5"></i>Breakfast
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="page-details section-padding">
          <div class="container">
            <div class="row">
              <div class="col-lg-7 col-md-12 mb-30">
                <div class="row mb-30">
                  <div class="col-md-12">
                    <div class="section-subtitle">Laid-back places</div>
                    <div class="section-title">King Room</div>
  
                    <p>
                    A luxurious 1-bedroom, 1-bath king room with 400 sqft of space, perfect for solo travelers or couples. The room boasts a king-size bed, elegant décor, and modern amenities, ensuring maximum comfort and relaxation. Ideal for those looking for a private, intimate retreat, the king room offers a perfect blend of style, comfort, and a quiet environment to unwind after a busy day.
                    </p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-6 col-md-12 mb-30">
                    <h5>Check-in</h5>
                    <ul class="list-unstyled page-list">
                      <li>
                        <div class="page-list-icon">
                          {" "}
                          <span class="ti-check"></span>{" "}
                        </div>
                        <div class="page-list-text">
                          <p>Check-in from 9:00 AM - anytime</p>
                        </div>
                      </li>
                      <li>
                        <div class="page-list-icon">
                          {" "}
                          <span class="ti-check"></span>{" "}
                        </div>
                        <div class="page-list-text">
                          <p>Early check-in subject to availability</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="col-lg-6 col-md-12 mb-30">
                    <h5>Check-out</h5>
                    <ul class="list-unstyled page-list mb-30">
                      <li>
                        <div class="page-list-icon">
                          {" "}
                          <span class="ti-check"></span>{" "}
                        </div>
                        <div class="page-list-text">
                          <p>Check-out before noon</p>
                        </div>
                      </li>
                      <li>
                        <div class="page-list-icon">
                          {" "}
                          <span class="ti-check"></span>{" "}
                        </div>
                        <div class="page-list-text">
                          <p>Express check-out</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="row mb-30">
                  <div class="col-md-12">
                    <h5>Special check-in instructions</h5>
                    <p>
                      Guests will receive an email 5 days before arrival with
                      check-in instructions; front desk staff will greet guests on
                      arrival For more details, please contact the property using
                      the information on the booking confirmation.
                    </p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <h5>Children and extra beds</h5>
                    <p>
                      Children are welcome Kids stay free! Children stay free when
                      using existing bedding; children may not be eligible for
                      complimentary breakfast Rollaway/extra beds are available
                      for ₹ 700 per day.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 offset-lg-1 col-md-12">
                <div class="cont">
                  <h5>Room Equipment</h5>
                  <ul class="list">
                    <li>
                      <span>
                        <i class="fa-solid fa-water-ladder"></i>
                      </span>
                      <span>Free Swimming Pool</span>
                    </li>
                    <li>
                      <span>
                        <i class="fa-solid fa-wifi"></i>
                      </span>
                      <span>Free Wi-Fi</span>
                    </li>
                    <li>
                      <span>
                        <i class="fa-solid fa-tv"></i>
                      </span>
                      <span>Cable TV</span>
                    </li>
                    <li>
                      <span>
                        <i class="fa-solid fa-baby-carriage"></i>
                      </span>
                      <span>Free Baby Bed</span>
                    </li>
                    <li>
                      <span>
                        <i class="fa-solid fa-bed"></i>
                      </span>
                      <span>Comfortable Beds</span>
                    </li>
                    <li>
                      <span>
                        <i class="fa-solid fa-martini-glass"></i>
                      </span>
                      <span>Mini-bar</span>
                    </li>
                    <li>
                      <span>
                        <i class="fa-solid fa-fan"></i>
                      </span>
                      <span>Conditioner</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div class="row">
          <div class="col-md-12">
            <div class="owl-carousel owl-theme">
              <div class="item">
                <div class="img">
                  {" "}
                  <img src={r1} class="img-fluid mx-auto d-block" alt="" />{" "}
                </div>
              </div>
              <div class="item">
                <div class="img">
                  {" "}
                  <img src={r2} class="img-fluid mx-auto d-block" alt="" />{" "}
                </div>
              </div>
              <div class="item">
                <div class="img">
                  {" "}
                  <img src={r3} class="img-fluid mx-auto d-block" alt="" />{" "}
                </div>
              </div>
              <div class="item">
                <div class="img">
                  {" "}
                  <img src={r4} class="img-fluid mx-auto d-block" alt="" />{" "}
                </div>
              </div>
              <div class="item">
                <div class="img">
                  {" "}
                  <img src={r5} class="img-fluid mx-auto d-block" alt="" />{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  };

export default King