import React from "react";
import bg from "../../assets/contactBg.jpg";
import t from "../../assets/contact2.jpg";
import l from "../../assets/contact3.jpg";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Faq from "../../components/Faq";

const Contact = () => {
    
    
  return (
    <div>
      <Header />
      {/* <!-- Header Banner --> */}
      <section
        class="banner-header bg-img bg-fixed"
        data-overlay-dark="5"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="subtitle">Get in touch</div>
              <div class="title">Contact us</div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Contact --> */}
      <section class="contact section-padding">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-12">
              <div class="row mb-30">
                <div class="col-lg-6 col-md-12 mb-25">
                  <div class="item">
                    <div class="front">
                      <div class="contents">
                        {" "}
                        <span class="fa-thin fa-location-dot"></span>
                        <h2 class="title">Stellar Stays Luxury Hotel</h2>
                        <p class="text">
                          45 Shanti Hills,Viman Nagar <br />
                          Pune - 411014, Maharashtra, India
                        </p>
                      </div>
                    </div>
                    <div class="back">
                      {" "}
                      <img class="img img-fluid" src={t} />
                      <div class="contents">
                        <div class="btnx">Location map</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-md-12 mb-25">
                  <div class="item">
                    <div class="front">
                      <div class="contents">
                        {" "}
                        <span class="fa-thin fa-phone"></span>
                        <h2 class="title">Let's talk with us</h2>
                        <p class="text">Phone: +1 234 567 8910</p>
                      </div>
                    </div>
                    <div class="back">
                      {" "}
                      <img class="img img-fluid" src={l} />
                      <div class="contents">
                        <div class="btnx">Talk with us</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  {/* <div class="map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1573147.7480448114!2d-74.84628175962355!3d41.04009641088412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25856139b3d33%3A0xb2739f33610a08ee!2s1616%20Broadway%2C%20New%20York%2C%20NY%2010019%2C%20Amerika%20Birle%C5%9Fik%20Devletleri!5e0!3m2!1str!2str!4v1646760525018!5m2!1str!2str" width="100%" height="450" style="border:0; border-radius: 5px" allowfullscreen="" loading="lazy"></iframe>
                            </div> */}
                </div>
              </div>
            </div>
            <div class="col-lg-6  col-md-12">
              <div class="form2-sidebar mt--240">
                <form action="#" class="form2">
                  <div class="head">
                    <div class="row">
                      <div class="col-md-12">
                        <h5>Get in touch!</h5>
                      </div>
                    </div>
                  </div>
                  <div class="cont">
                    <div class="row">
                      <div class="col-lg-12 col-md-12 form-group">
                        <input type="text" placeholder="Name" required />
                      </div>
                      <div class="col-lg-12 col-md-12 form-group">
                        <input type="email" placeholder="Email" required />
                      </div>
                      <div class="col-lg-12 col-md-12 form-group">
                        <input type="text" placeholder="Phone" required />
                      </div>
                      <div class="col-md-12 form-group">
                        <input type="text" placeholder="Subject" />
                      </div>
                      <div class="col-md-12 form-group">
                        <textarea
                          name="message"
                          id="message"
                          cols="30"
                          rows="4"
                          placeholder="Message"
                        ></textarea>
                      </div>
                      <div class="col-md-12">
                        <button class="button-3">
                          <i class="fa-light fa-paper-plane"></i> Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- FAQs --> */}
      <Faq />
      <Footer />
    </div>
  );
};

export default Contact;
