import React from "react";
import bg from "../assets/hero-bg.jpg";
import Header from './Header'
import Footer from './Footer'

const Error = () => {
  return (
    <div>
        <Header/>
      <section
        class="banner-header bg-img bg-fixed"
        data-overlay-dark="5"
        style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
      >
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-center">
              <div class="subtitle">404 Error Page</div>
              <div class="title">Page not found!</div>
            </div>
          </div>
        </div>
      </section>
      <section class="not-found section-padding bg-darkgray">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-5 col-md-12 text-center">
              <h1>404</h1>
              <h3>Sorry, We can't find that page!</h3>
              <p>
                The page you are looking for was moved, removed, renamed or
                never existed.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Error;
