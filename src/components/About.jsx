import React from "react";
import i1 from '../assets/about1r.jpg'
import i2 from '../assets/about2r.jpg'


const About = () => {
  return (
    <div>
      <section class="about section-padding">
        <div class="container">
          <div class="row">
            <div class="col-lg-5 col-md-12 mb-15">
              <div class="section-subtitle">About Stellar Stays</div>
              <div class="section-title">
                Laid-back places for kindred spirits
              </div>
              <p>
                Welcome to the <b>best five-star resort hotel</b> in Pune. Our
                hotel has it's own story, tradition and character
                that mark it out as unique. This individuality brings our
                collection together. Our team take cues as to the level of
                service each guest expects. Familiar, chatty or more reserved.
                Our distinct character is reflected both in service levels and
                the environment. 
              </p>
              <p class="mb-40">
              Everything we do is instinctive and insightful,
              creating an emotional connection with each guest.
              </p>
              <a href="about.html" class="button-3 mb-15">
                About Hotel
              </a>
                <a href="tel:+12345678910">
                  <i class="fa-solid fa-phone" style={{margin: '10px',}}></i>+1 234 567 8910
                </a>
            </div>
            <div class="col-lg-3 offset-lg-1 col-md-6 mb-20 mt-120">
              {" "}
              <img
                class="rounded-2 animation-float1"
                src={i1}
                alt=""
              />{" "}
            </div>
            <div class="col-lg-3 col-md-6 mb-20">
              {" "}
              <img
                class="rounded-2 animation-float2"
                src={i2}
                alt=""
              />{" "}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
