import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Faq from "../../components/Faq";
import wd from "../../assets/weddingBd.jpeg"; 
import bg from "../../assets/weddingBg.jpg"; 
import bq from "../../assets/banquet.jpg"; 
import cf from "../../assets/conference.webp"; 
import ex from "../../assets/Exhibition.jpg"; 

const EventVenue = () => {
  return (
    <div>
      <Header />
      <section
        className="banner-header bg-img bg-fixed"
        data-overlay-dark="5"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="subtitle">Event Spaces</div>
              <div className="title">Our Event Venues</div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Venues Section */}
      <section className="event-venue">
        <div className="container">

          {/* Wedding Venue Section */}
          <div className="row justify-content-center align-items-center mb-5">
            <div className="col-lg-6 col-md-12">
              <img
                src={wd}
                className="img-fluid"
                alt="Wedding Venue"
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "400px",
                  objectFit: "cover",
                  marginBottom: "30px",
                }}
              />
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="section-subtitle">A Dream Wedding</div>
              <div className="section-title">Wedding Venue</div>
              <p className="mb-25">
                Celebrate your special day in style with our exclusive wedding
                venues, tailored to your preferences.
              </p>
              <ul className="list-unstyled list mb-30">
                <li>
                  <div className="list-icon">
                    <i className="fa-regular fa-check"></i>
                  </div>
                  <div className="list-text">
                    <p>Capacity: 150 people</p>
                  </div>
                </li>
                <li>
                  <div className="list-icon">
                    <i className="fa-regular fa-check"></i>
                  </div>
                  <div className="list-text">
                    <p>Perfect for weddings and receptions</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Conference Room Section */}
          <div className="row justify-content-center align-items-center mb-5">
            <div className="col-lg-6 col-md-12 order-md-2">
              <img
                src={cf}
                className="img-fluid"
                alt="Conference Room"
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "400px",
                  objectFit: "cover",
                  marginBottom: "30px",
                }}
              />
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="section-subtitle">Professional Meetings</div>
              <div className="section-title">Conference Room</div>
              <p className="mb-25">
                The Conference Room is ideal for meetings, seminars, and
                presentations with all the modern amenities.
              </p>
              <ul className="list-unstyled list mb-30">
                <li>
                  <div className="list-icon">
                    <i className="fa-regular fa-check"></i>
                  </div>
                  <div className="list-text">
                    <p>Capacity: 50 people</p>
                  </div>
                </li>
                <li>
                  <div className="list-icon">
                    <i className="fa-regular fa-check"></i>
                  </div>
                  <div className="list-text">
                    <p>Perfect for seminars & meetings</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* Banquet Hall Section */}
          <div className="row justify-content-center align-items-center mb-5">
            <div className="col-lg-6 col-md-12">
              <img
                src={bq}
                className="img-fluid"
                alt="Banquet Hall"
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "400px",
                  objectFit: "cover",
                  marginBottom: "30px",
                }}
              />
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="section-subtitle">Elegant Celebrations</div>
              <div className="section-title">Banquet Hall</div>
              <p className="mb-25">
                Our Banquet Hall is perfect for large events, including
                corporate events, receptions, and special gatherings.
              </p>
              <ul className="list-unstyled list mb-30">
                <li>
                  <div className="list-icon">
                    <i className="fa-regular fa-check"></i>
                  </div>
                  <div className="list-text">
                    <p>Capacity: 200 people</p>
                  </div>
                </li>
                <li>
                  <div className="list-icon">
                    <i className="fa-regular fa-check"></i>
                  </div>
                  <div className="list-text">
                    <p>Perfect for weddings & corporate events</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>


          {/* Exhibition Hall Section */}
          <div className="row justify-content-center align-items-center mb-5">
            <div className="col-lg-6 col-md-12 order-md-2">
              <img
                src={ex}
                className="img-fluid"
                alt="Exhibition Hall"
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "400px",
                  objectFit: "cover",
                  marginBottom: "30px",
                }}
              />
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="section-subtitle">Showcase Your Products</div>
              <div className="section-title">Exhibition Hall</div>
              <p className="mb-25">
                The Exhibition Hall is perfect for showcasing products,
                services, and exhibitions with ample space for attendees.
              </p>
              <ul className="list-unstyled list mb-30">
                <li>
                  <div className="list-icon">
                    <i className="fa-regular fa-check"></i>
                  </div>
                  <div className="list-text">
                    <p>Capacity: 300 people</p>
                  </div>
                </li>
                <li>
                  <div className="list-icon">
                    <i className="fa-regular fa-check"></i>
                  </div>
                  <div className="list-text">
                    <p>Perfect for exhibitions and showcases</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Event Details Section */}
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center mb-5">
              <div className="section-subtitle">Events</div>
              <div className="section-title">Start Planning Your Meetings or Events Here</div>
              <p className="mb-25">
                Tell us about your event, and we'll contact you to plan it
                together. Whether it's a corporate event, wedding, or meeting,
                we're here to help.
              </p>
            </div>
          </div>

          {/* Venue Info Section */}
          <div className="row justify-content-center mb-5">
            <div className="col-md-6 text-center">
              <div className="section-subtitle">Event Rooms</div>
              <div className="section-title">Total Event Space</div>
              <p>2412 SQ MT</p>
              <div className="section-subtitle">Capacity Largest Space</div>
              <p>2000</p>
              <div className="section-subtitle">Breakout Rooms</div>
              <p>8</p>
            </div>
            <div className="col-md-6 text-center">
              <div className="section-subtitle">Meeting and Events</div>
              <p>
                Set the tone for your business event in our banquet hall and
                meeting rooms. Select the venue that suits your needs from our
                various options. Conveniently prepare for your event with our
                work desks and business center.
              </p>
            </div>
          </div>

          {/* Weddings and Occasions Section */}
          <div className="row justify-content-center mb-5">
            <div className="col-md-6 text-center">
              <div className="section-subtitle">Weddings and Occasions</div>
              <div className="section-title">Celebrate Your Special Day</div>
              <p>
                Reserve our elegant reception venues in Pune for a romantic
                backdrop to your wedding. Our certified planners assist with
                venue selection, room blocks, and more.
              </p>
              <div className="section-subtitle">Additional Wedding Services</div>
              <ul className="list-unstyled list">
                <li>
                  <i className="fa-regular fa-check"></i>
                  Grand Ballroom for events with over 720 seated guests
                </li>
                <li>
                  <i className="fa-regular fa-check"></i>
                  Enhance your reception with a custom menu from our culinary team
                </li>
                <li>
                  <i className="fa-regular fa-check"></i>
                  Pamper your wedding party with spa treatments
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Faq />
      <Footer />
    </div>
  );
};

export default EventVenue;
