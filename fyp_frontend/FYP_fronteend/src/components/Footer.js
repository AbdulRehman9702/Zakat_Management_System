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
import form from "../assets/img/gallery/form.png";
// import logo from "../assets/img/logo/logo2_footer.png";
import logo1 from "../assets/img/logo/7L1mW2JARSWcKJQzJg3NwA.webp";

const Footer = () => {
  return (
    <footer>
      <div
        className="footer-wrapper section-bg2"
        data-background="assets/img/gallery/footer_bg.png"
      >
        <div className="footer-area footer-padding">
          <div className="container">
            <div className="row d-flex justify-content-between">
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                <div className="single-footer-caption mb-50">
                  <div className="single-footer-caption mb-30">
                    <div className="footer-tittle">
                      <div className="footer-logo mb-20">
                        <a href="/">
                          <img
                            src={logo1}
                            alt=""
                            style={{ width: "200px", height: "110px" }}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
                <div className="single-footer-caption mb-50">
                  <div className="footer-tittle">
                    <h4>Contact Info</h4>
                    <ul>
                      <li>
                        <p>
                          Address :Your address goes here, your demo address.
                        </p>
                      </li>
                      <li>
                        <a href="/">Phone : +8880 44338899</a>
                      </li>
                      <li>
                        <a href="/">Email : info@colorlib.com</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
                <div className="single-footer-caption mb-50">
                  <div className="footer-tittle">
                    <h4>Important Link</h4>
                    <ul>
                      <li>
                        <Link to="/"> Home</Link>
                      </li>
                      <li>
                        <Link to="/about">About Us</Link>
                      </li>
                      <li>
                        <Link to="/zakat-calculator">Zakat Calculator</Link>
                      </li>
                      <li>
                        <Link to="/services">Zakat Donations</Link>
                      </li>
                      {/* <li>
                        <a href="/">Support</a>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
                <div className="single-footer-caption mb-50">
                  <div className="footer-tittle">
                    <h4>Newsletter</h4>
                    <div className="footer-pera footer-pera2">
                      <p>
                        Heaven fruitful doesn't over lesser in days. Appear
                        creeping.
                      </p>
                    </div>
                    <div className="footer-form">
                      <div id="mc_embed_signup">
                        <form
                          target="_blank"
                          action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                          method="get"
                          className="subscribe_form relative mail_part"
                        >
                          <input
                            type="email"
                            name="email"
                            id="newsletter-form-email"
                            placeholder="Email Address"
                            className="placeholder hide-on-focus"
                            onfocus="this.placeholder = ''"
                            onblur="this.placeholder = ' Email Address '"
                          />
                          <div className="form-icon">
                            <button
                              type="submit"
                              name="submit"
                              id="newsletter-submit"
                              className="email_icon newsletter-submit button-contactForm"
                            >
                              <img src={form} alt="" />
                            </button>
                          </div>
                          <div className="mt-10 info"></div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom-area">
          <div className="container">
            <div className="footer-border">
              <div className="row d-flex justify-content-between align-items-center">
                <div className="col-xl-10 col-lg-9 ">
                  <div className="footer-copy-right">
                    {/* <p>Copyright &copy;
                      <script>document.write(new Date().getFullYear());</script>{" "}
                      All rights reserved | This template is made with{" "}
                      <i className="fa fa-heart" aria-hidden="true"></i> by{" "}
                      <a href="/" target="_blank">
                        Colorlib
                      </a>
                    </p> */}
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3">
                  <div className="footer-social f-right">
                    <a href="/">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.facebook.com/sai4ull">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="/">
                      <i className="fas fa-globe"></i>
                    </a>
                    <a href="/">
                      <i className="fab fa-behance"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
