import { Link } from "react-router-dom";
import React from "react";
import o1 from "../assets/offer1.jpg";
import o2 from "../assets/offer2.jpg";
import o3 from "../assets/offer3.jpg";
import o4 from "../assets/offer4.jpg";

const Offers = () => {
  return (
    <div>
      <section class="offers1 section-padding">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-12 text-center mb-20">
              <div class="section-subtitle">Comfort & Relax</div>
              <div class="section-title">Exclusive Offers</div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-3 col-md-6">
              <div class="item">
                <div class="img">
                  {" "}
                  <img src={o1} alt="" />{" "}
                </div>
                <div class="con">
                  <div class="title">Stay</div>
                  <div class="arrow">
                    {" "}
                    <Link to="/rooms">
                      <span class="fa-solid fa-arrow-right"></span>
                    </Link>{" "}
                  </div>
                </div>
                <div class="price">25% off</div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="item">
                <div class="img">
                  {" "}
                  <img src={o2} alt="" />{" "}
                </div>
                <div class="con">
                  <div class="title">Dine</div>
                  <div class="arrow">
                    {" "}
                    <Link to="/facilities">
                      <span class="fa-solid fa-arrow-right"></span>
                    </Link>{" "}
                  </div>
                </div>
                <div class="price">10% off</div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="item">
                <div class="img">
                  {" "}
                  <img src={o3} alt="" />{" "}
                </div>
                <div class="con">
                  <div class="title">Relax</div>
                  <div class="arrow">
                    {" "}
                    <Link to="/facilities">
                      <span class="fa-solid fa-arrow-right"></span>
                    </Link>{" "}
                  </div>
                </div>
                <div class="price">20% off</div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="item">
                <div class="img">
                  {" "}
                  <img src={o4} alt="" />{" "}
                </div>
                <div class="con">
                  <div class="title">Weddings & Events</div>
                  <div class="arrow">
                    {" "}
                    <Link to="/eventvenue">
                      <span class="fa-solid fa-arrow-right"></span>
                    </Link>{" "}
                  </div>
                </div>
                <div class="price">35% off</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Offers;
