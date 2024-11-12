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
import sectionbg1 from "../assets/img/gallery/section_bg01.png";

const JoinUs = () => {
  return (
    <section className="wantToWork-area ">
      <div className="container">
        <div
          className="wants-wrapper w-padding2  section-bg"
          data-background={sectionbg1}
        >
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-5 col-lg-9 col-md-8">
              <div className="wantToWork-caption wantToWork-caption2">
                <h2>Lets Chenge The World With Humanity</h2>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4">
              <a href="/services" className="btn white-btn f-right sm-left">
                Become A Volunteer
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
