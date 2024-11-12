import React from "react";
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
import about1 from "../assets/img/gallery/about1.png";
import about2 from "../assets/img/gallery/about2.png";

const CommonAbout = () => {
  return (
    <section className="about-low-area section-padding2">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-10">
            <div className="about-caption mb-50">
              <div className="section-tittle mb-35">
                <span>About our foundetion</span>
                <h2>We Are In A Mission To Help Helpless</h2>
              </div>
              <p>
                Welcome to our zakat-paying platform, where compassion meets
                transparency. Our foundation is dedicated to revolutionizing the
                process of giving zakat by providing a secure and efficient way
                for donors to support verified recipients. We believe in the
                transformative power of zakat and strive to ensure that every
                donation reaches those who need it most.
              </p>
              <p>
                Our mission is to connect generous individuals with deserving
                recipients through a thoroughly vetted and transparent process.
                By leveraging technology and a rigorous verification system, we
                guarantee that your contributions are making a real and lasting
                impact on the lives of the less fortunate.
              </p>
            </div>
            <a href="/about" className="btn">
              About US
            </a>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="about-img ">
              <div className="about-font-img d-none d-lg-block">
                <img src={about2} alt="" />
              </div>
              <div className="about-back-img ">
                <img src={about1} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommonAbout;
