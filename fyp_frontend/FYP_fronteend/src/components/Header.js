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
// import logo from "../assets/img/logo/logo.png";
import logo1 from "../assets/img/logo/7L1mW2JARSWcKJQzJg3NwA.webp";

const Header = () => {
  return (
    <header>
      <div className="header-area">
        <div className="main-header ">
          <div className="header-bottom  header-sticky">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-xl-2 col-lg-2">
                  <div className="logo">
                    <Link to="/">
                      <img
                        src={logo1}
                        alt=""
                        style={{ width: "150px", height: "120px" }}
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-xl-10 col-lg-10">
                  <div className="menu-wrapper  d-flex align-items-center justify-content-end">
                    <div className="main-menu d-none d-lg-block">
                      <nav>
                        <ul id="navigation">
                          <li>
                            <Link to="/">Home</Link>
                          </li>
                          {/* <li>
                            <Link to="/about">About</Link>
                          </li> */}
                          {/* <li>
                            <Link to="/causes">latest causes</Link>
                          </li> */}
                          <li>
                            <Link to="/zakat-calculator">Zakat Calculator</Link>
                          </li>
                          <li>
                            <Link to="/services">Donate/Zakat</Link>
                            {/* <ul className="submenu">
                              <li>
                                <a href="blog.html">Blog</a>
                              </li>
                              <li>
                                <a href="blog_details.html">Blog Details</a>
                              </li>
                              <li>
                                <a href="elements.html">Element</a>
                              </li>
                            </ul> */}
                          </li>
                          {/* <li>
                            <Link to="/contact">Contact</Link>
                          </li> */}
                        </ul>
                      </nav>
                    </div>
                    <div className="header-right-btn d-none d-lg-block ml-20">
                      <Link to="/signup" className="btn header-btn">
                        SignUp
                      </Link>
                    </div>
                    <div className="header-right-btn d-none d-lg-block ml-20">
                      <Link to="/services" className="btn header-btn">
                        Donate
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="mobile_menu d-block d-lg-none"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
