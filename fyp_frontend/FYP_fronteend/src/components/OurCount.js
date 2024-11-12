import React from 'react';
import '../assets/css/animate.min.css';
import '../assets/css/animated-headline.css';
import '../assets/css/bootstrap.min.css';
import '../assets/css/flaticon.css';
import '../assets/css/fontawesome-all.min.css';
import '../assets/css/gijgo.css';
import '../assets/css/hamburgers.min.css';
import '../assets/css/magnific-popup.css';
import '../assets/css/nice-select.css';
import '../assets/css/price_rangs.css';
import '../assets/css/progressbar_barfiller.css';
import '../assets/css/responsive.css';
import '../assets/css/slick.css';
import '../assets/css/slicknav.css';
import '../assets/css/style.css';

const OurCount = () => {
  return (
    <div className="count-down-area pt-25 section-bg">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-12 col-md-12">
                    <div className="count-down-wrapper" >
                        <div className="row justify-content-between">
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="single-counter text-center">
                                    <span className="counter color-green">6,200</span>
                                    <span className="plus">+</span>
                                    <p className="color-green">Donation</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="single-counter text-center">
                                    <span className="counter color-green">80</span>
                                    <span className="plus">+</span>
                                    <p className="color-green">Fund Raised</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="single-counter text-center">
                                    <span className="counter color-green">256</span>
                                    <span className="plus">+</span>
                                    <p className="color-green">Donation</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="single-counter text-center">
                                    <span className="counter color-green">256</span>
                                    <span className="plus">+</span>
                                    <p className="color-green">Donation</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurCount
