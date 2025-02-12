import React from "react";
import { Link } from "react-router-dom";
import bg from "../../assets/RoomsBg.jpg";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Amenities from "../../components/Amenities";
import Faq from "../../components/Faq";
import r1 from "../../assets/01.jpg";
import r2 from "../../assets/02.jpg";
import r3 from "../../assets/03.jpg";
import r4 from "../../assets/04.jpg";
import r5 from "../../assets/05.jpg";
import r6 from "../../assets/06.jpg";
import "../../css/style.css";

const Rooms = () => {
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
            <div class="col-md-12 text-center">
              <div class="subtitle">Rixos Luxury Hotel</div>
              <div class="title">
                Rooms <span>&</span> Suites
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="rooms1 section-padding">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-12 mb-30">
              <div class="item">
                <div class="img">
                  <img src={r1} alt="" />
                  <span class="discount">
                    <i class="fa-regular fa-badge-percent"></i> 25% Off
                  </span>
                </div>
                <div class="wrap">
                  <div class="cont">
                    <div class="price">
                      ₹1500 <span>/ night</span>
                    </div>
                    <h3>
                      <Link to="#">Deluxe Room</Link>
                    </h3>
                    <div class="details">
                      {" "}
                      <i class="fa-solid fa-bed mr-5 gold"></i>2 Bed{" "}
                      <i class="fa-solid fa-expand mr-5 gold"></i>350 sqm{" "}
                      <i class="fa-solid fa-bath mr-5 gold"></i>1 Bathroom{" "}
                    </div>
                  </div>
                  <div class="arrow">
                    {" "}
                    <Link href="#">
                      <i class="fa-solid fa-arrow-right"></i>
                    </Link>{" "}
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-12 mb-30">
              <div class="item">
                <div class="img">
                  {" "}
                  <img src={r2} alt="" />{" "}
                </div>
                <div class="wrap">
                  <div class="cont">
                    <div class="price">₹2000 / night</div>
                    <h3>
                      <Link href="#">Family Room</Link>
                    </h3>
                    <div class="details">
                      {" "}
                      <i class="fa-solid fa-bed mr-5 gold"></i>4 Bed{" "}
                      <i class="fa-solid fa-expand mr-5 gold"></i>750 sqm{" "}
                      <i class="fa-solid fa-bath mr-5 gold"></i>2 Bathroom{" "}
                    </div>
                  </div>
                  <div class="arrow">
                    {" "}
                    <Link href="#">
                      <i class="fa-solid fa-arrow-right"></i>
                    </Link>{" "}
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-12 mb-30">
              <div class="item">
                <div class="img">
                  {" "}
                  <img src={r3} alt="" />{" "}
                </div>
                <div class="wrap">
                  <div class="cont">
                    <div class="price">₹3500 / night</div>
                    <h3>
                      <a href="#">Double Room</a>
                    </h3>
                    <div class="details">
                      {" "}
                      <i class="fa-solid fa-bed mr-5 gold"></i>4 Bed{" "}
                      <i class="fa-solid fa-expand mr-5 gold"></i>700 sqm{" "}
                      <i class="fa-solid fa-bath mr-5 gold"></i>2 Bathroom{" "}
                    </div>
                  </div>
                  <div class="arrow">
                    {" "}
                    <Link href="#">
                      <i class="fa-solid fa-arrow-right"></i>
                    </Link>{" "}
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-12 mb-30">
              <div class="item">
                <div class="img">
                  <img src={r4} alt="" />
                  <span class="discount">
                    <i class="fa-light fa-badge-percent"></i> 30% Off
                  </span>
                </div>
                <div class="wrap">
                <div class="cont">
                                    <div class="price">₹3000 / night</div>
                                    <h3><a href="#">Superior Room</a></h3>
                                    <div class="details"> <i class="fa-solid fa-bed mr-5 gold"></i>3 Bed <i class="fa-solid fa-expand mr-5 gold"></i>600 sqm <i class="fa-solid fa-bath mr-5 gold"></i>2 Bathroom  </div>
                                </div>
                  <div class="arrow">
                    {" "}
                    <Link href="#">
                      <i class="fa-solid fa-arrow-right"></i>
                    </Link>{" "}
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-12 mb-30">
              <div class="item">
                <div class="img">
                  <img src={r5} alt="" />
                  <span class="discount">
                    <i class="fa-light fa-badge-percent"></i> 40% Off
                  </span>
                </div>
                <div class="wrap">
                <div class="cont">
                                    <div class="price">₹3500 / night</div>
                                    <h3><a href="#">Wellness Room</a></h3>
                                    <div class="details"> <i class="fa-solid fa-bed mr-5 gold"></i>4 Bed <i class="fa-solid fa-expand mr-5 gold"></i>350 sqm <i class="fa-solid fa-mug-saucer mr-5 gold"></i>Breakfast  </div>
                                
                  </div>
                  <div class="arrow">
                    {" "}
                    <Link href="#">
                      <i class="fa-solid fa-arrow-right"></i>
                    </Link>{" "}
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-12 mb-30">
              <div class="item">
                <div class="img">
                  {" "}
                  <img src={r6} alt="" />{" "}
                </div>
                <div class="wrap">
                <div class="cont">
                                    <div class="price">₹4000 / night</div>
                                    <h3><a href="#">King Room</a></h3>
                                    <div class="details"> <i class="fa-solid fa-bed mr-5 gold"></i>4 Bed <i class="fa-solid fa-expand mr-5 gold"></i>400 Sqm <i class="fa-solid fa-bath mr-5  gold "></i>2 Bathroom </div>
                                </div>
                  <div class="arrow">
                    {" "}
                    <Link href="#">
                      <i class="fa-solid fa-arrow-right"></i>
                    </Link>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Amenities />
      <Faq />
      <Footer />
    </div>
  );
};

export default Rooms;
