import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/animate.min.css";
import "../assets/css/animated-headline.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/flaticon.css";
import "../assets/css/fontawesome-all.min.css";
import "../assets/css/gijgo.css";
import "../assets/css/hamburgers.min.css";
import "../assets/css/magnific-popup.css";
import "../assets/css/nice-select.css";
import "../assets/css/price_rangs.css";
import "../assets/css/progressbar_barfiller.css";
import "../assets/css/responsive.css";
import "../assets/css/slick.css";
import "../assets/css/slicknav.css";
import "../assets/css/style.css";

const Hero = () => {
  return (
    <div class="slider-area">
      <div class="slider-active">
        <div class="single-slider slider-height d-flex align-items-center">
          <div class="container">
            <div class="row">
              <div class="col-xl-6 col-lg-6 col-md-8 col-sm-10">
                <div class="hero__caption">
                  <h1
                    data-animation="fadeInUp"
                    data-delay=".6s"
                    style={{ fontSize: "45px" }}
                  >
                    "Transform Lives with Your Zakat Connect
                    <br /> with Verified and Deserving Individuals".
                  </h1>
                  {/* <p data-animation="fadeInUp" data-delay=".8s">
                    Onsectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut bore et dolore magnt, sed do eiusmod.
                  </p> */}
                  <div class="hero__btn">
                    <Link
                      to="/services"
                      class="btn hero-btn mb-10"
                      data-animation="fadeInLeft"
                      data-delay=".8s"
                    >
                      Donate
                    </Link>
                    <a
                      href="industries.html"
                      class="cal-btn ml-15"
                      data-animation="fadeInRight"
                      data-delay="1.0s"
                    >
                      <i class="flaticon-null"></i>
                      <p>+12 1325 41</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
