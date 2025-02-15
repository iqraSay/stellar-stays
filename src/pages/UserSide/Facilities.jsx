import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Faq from "../../components/Faq";
import Booking from "../../components/Booking";
import bg from "../../assets/FacilitiesBg.jpg";
import dine from "../../assets/f2.jpg";
import pool from "../../assets/pool2.jpg";
import gym from "../../assets/gym.jpg";
import spa from "../../assets/Spa2.jpg";

const Facilities = () => {
  const [activeTab, setActiveTab] = useState("#restaurant");
  const [activeButton, setActiveButton] = useState("#restaurant");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setActiveButton(tab);
  };

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
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="subtitle">Our Services</div>
              <div className="title">Hotel Facilities</div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities 2 */}
      <section className="facilities2">
        <div className="border-bottom">
          <div className="container">
            <ul className="tab-buttons">
              <li
                data-tab="#restaurant"
                className={`tab-btn ${
                  activeButton === "#restaurant" ? "active-btn" : ""
                }`}
                onClick={() => handleTabClick("#restaurant")}
              >
                <span>Restaurant</span>
              </li>
              <li
                data-tab="#spa"
                className={`tab-btn ${
                  activeButton === "#spa" ? "active-btn" : ""
                }`}
                onClick={() => handleTabClick("#spa")}
              >
                <span>Spa & Wellness</span>
              </li>
              <li
                data-tab="#pool"
                className={`tab-btn ${
                  activeButton === "#pool" ? "active-btn" : ""
                }`}
                onClick={() => handleTabClick("#pool")}
              >
                <span>Pool Swimming</span>
              </li>
              <li
                data-tab="#fitness"
                className={`tab-btn ${
                  activeButton === "#fitness" ? "active-btn" : ""
                }`}
                onClick={() => handleTabClick("#fitness")}
              >
                <span>Fitness Center</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="container">
          <div className="tabs-content">
            {/* Dine Tab */}
            <div
              className={`tab ${
                activeTab === "#restaurant" ? "active-tab" : ""
              }`}
              id="restaurant"
            >
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-6 col-md-12">
                  <img
                    src={dine}
                    className="img-fluid"
                    alt=""
                    style={{
                      width: "100%",
                      height: "auto",
                      maxHeight: "400px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="col-lg-5 offset-lg-1 col-md-12">
                  <div className="section-subtitle">Address of taste</div>
                  <div className="section-title">Restaurant</div>
                  <p className="mb-25">
                    Restaurant quisue sodale intion varius estibum miss arman
                    ortiton telus euismod nis the massa fermen.
                  </p>
                  <ul className="list-unstyled list mb-30">
                    <li>
                      <div className="list-icon">
                        {" "}
                        <i className="fa-regular fa-check"></i>{" "}
                      </div>
                      <div className="list-text">
                        <p>Breakfast: 7.00 am – 11.00 am (daily)</p>
                      </div>
                    </li>
                    <li>
                      <div className="list-icon">
                        {" "}
                        <i className="fa-regular fa-check"></i>{" "}
                      </div>
                      <div className="list-text">
                        <p>Lunch: 12.00 pm – 2.00 pm (daily)</p>
                      </div>
                    </li>
                    <li>
                      <div className="list-icon">
                        {" "}
                        <i className="fa-regular fa-check"> </i>{" "}
                      </div>
                      <div className="list-text">
                        <p>Dinner: 6.30 pm – 10.00 pm (daily)</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Spa tab */}
            <div
              className={`tab ${activeTab === "#spa" ? "active-tab" : ""}`}
              id="spa"
            >
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-6 col-md-12">
                  <img
                    src={spa}
                    className="img-fluid"
                    alt=""
                    style={{
                      width: "100%",
                      height: "auto",
                      maxHeight: "400px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="col-lg-5 offset-lg-1 col-md-12">
                  <div className="section-subtitle">So Many Ways to Unwind</div>
                  <div className="section-title">Spa & Wellness</div>
                  <p className="mb-25">
                    Wellness quisque sodales intioni varius estibum miss arman
                    ortiton telus euismod nis the massa nutodio farmention lorem
                    pretium ametis velen fermen.
                  </p>
                  <ul className="list-unstyled list mb-30">
                    <li>
                      <div className="list-icon">
                        {" "}
                        <span className="fa-regular fa-check"></span>{" "}
                      </div>
                      <div className="list-text">
                        <p>Overnight de-stress retreat</p>
                      </div>
                    </li>
                    <li>
                      <div className="list-icon">
                        {" "}
                        <span className="fa-regular fa-check"></span>{" "}
                      </div>
                      <div className="list-text">
                        <p>Wedding spa packages</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Pool Tab */}
            <div
              className={`tab ${activeTab === "#pool" ? "active-tab" : ""}`}
              id="pool"
            >
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-6 col-md-12">
                  <img
                    src={pool}
                    className="img-fluid"
                    alt=""
                    style={{
                      width: "100%",
                      height: "auto",
                      maxHeight: "400px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="col-lg-5 offset-lg-1 col-md-12">
                  <div className="section-subtitle">Indoor & Outdoor</div>
                  <div className="section-title">Pool Swimming</div>
                  <p className="mb-25">
                    Swimming quisque sodales intioni varius estibum miss arman
                    ortiton telus euismod nis the massa nutodio farmention lorem
                    pretium ametis velen fermen.
                  </p>
                  <ul className="list-unstyled list mb-30">
                    <li>
                      <div className="list-icon">
                        {" "}
                        <span className="fa-regular fa-check"></span>{" "}
                      </div>
                      <div className="list-text">
                        <p>Indoor pool swimming</p>
                      </div>
                    </li>
                    <li>
                      <div className="list-icon">
                        {" "}
                        <span className="fa-regular fa-check"></span>{" "}
                      </div>
                      <div className="list-text">
                        <p>Outdoor pool swimming</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* FItness tab */}
            <div
              className={`tab ${activeTab === "#fitness" ? "active-tab" : ""}`}
              id="fitness"
            >
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-6 col-md-12">
                  <img
                    src={gym}
                    className="img-fluid"
                    alt=""
                    style={{
                      width: "100%",
                      height: "auto",
                      maxHeight: "400px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="col-lg-5 offset-lg-1 col-md-12">
                  <div className="section-subtitle">Training Spaces</div>
                  <div className="section-title">Fitness Center</div>
                  <p className="mb-25">
                    Fitness quisque sodales intioni varius estibum miss arman
                    ortiton telus euismod nis the massa nutodio farmention lorem
                    pretium ametis velen fermen.
                  </p>
                  <ul className="list-unstyled list mb-30">
                    <li>
                      <div className="list-icon">
                        {" "}
                        <span className="fa-regular fa-check"></span>{" "}
                      </div>
                      <div className="list-text">
                        <p>Cardiovascular equipment</p>
                      </div>
                    </li>
                    <li>
                      <div className="list-icon">
                        {" "}
                        <span className="fa-regular fa-check"></span>{" "}
                      </div>
                      <div className="list-text">
                        <p>Some dumbells for weight lifting</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Faq />
      {/* Booking form */}
      <section
        class="section-padding bg-img bg-fixed"
        data-overlay-dark="5"
        style={{
          backgroundImage: `url(${spa})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div class="row justify-content-center">
            <div class="col-md-12 text-center mb-20">
              <div class="section-subtitle">Hotel Experience</div>
              <div class="section-title white">Booking Form</div>
            </div>
          </div>
        </div>
        <Booking />
      </section>
      <Footer />
    </div>
  );
};

export default Facilities;
