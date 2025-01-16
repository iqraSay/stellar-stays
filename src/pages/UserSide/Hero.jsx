import React from "react";
import bg from "../../assets/01.jpg";

const Hero = () => {
  return (
    <div>
      <section
        class="parallax-header valign bg-img bg-fixed"
        data-overlay-dark="5"
        style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
      >
        <div class="container">
          <div class="row justify-content-center align-items-center">
            <div class="col-lg-7 col-md-12">
              <h5>Stellar Stays Luxury Hotel</h5>
              <h1>Enjoy a luxury experience</h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
