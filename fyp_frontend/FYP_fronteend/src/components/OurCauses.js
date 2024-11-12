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
import case1 from '../assets/img/gallery/case1.png';
import case2 from '../assets/img/gallery/case2.png';
import case3 from '../assets/img/gallery/case3.png';

const OurCauses = () => {
  return (
    <div className="our-cases-area section-padding30">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7 col-md-10 col-sm-10">
                <div className="section-tittle text-center mb-80">
                    <span>Our Cases you can see</span>
                    <h2>Explore our latest causes that we works </h2>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-cases mb-40">
                    <div className="cases-img">
                        <img src={case1} alt=""/>
                    </div>
                    <div className="cases-caption">
                        <h3><a href="/">Ensure Education For Every Poor Children</a></h3>
                        <div className="single-skill mb-15">
                            <div className="bar-progress">
                                <div id="bar1" className="barfiller">
                                    <div className="tipWrap">
                                        <span className="tip"></span>
                                    </div>
                                    <span className="fill" data-percentage="70"></span>
                                </div>
                            </div>
                        </div>
                        <div className="prices d-flex justify-content-between">
                            <p>Raised:<span> $20,000</span></p>
                            <p>Goal:<span> $35,000</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-cases mb-40">
                    <div className="cases-img">
                        <img src={case2} alt=""/>
                    </div>
                    <div className="cases-caption">
                        <h3><a href="/">Providing Healthy Food For The Children</a></h3>
                        <div className="single-skill mb-15">
                            <div className="bar-progress">
                                <div id="bar2" className="barfiller">
                                    <div className="tipWrap">
                                        <span className="tip"></span>
                                    </div>
                                    <span className="fill" data-percentage="25"></span>
                                </div>
                            </div>
                        </div>
                        <div className="prices d-flex justify-content-between">
                            <p>Raised:<span> $20,000</span></p>
                            <p>Goal:<span> $35,000</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-cases mb-40">
                    <div className="cases-img">
                        <img src={case3} alt=""/>
                    </div>
                    <div className="cases-caption">
                        <h3><a href="/">Supply Drinking Water For  The People</a></h3>
                        <div className="single-skill mb-15">
                            <div className="bar-progress">
                                <div id="bar3" className="barfiller">
                                    <div className="tipWrap">
                                        <span className="tip"></span>
                                    </div>
                                    <span className="fill" data-percentage="50"></span>
                                </div>
                            </div>
                        </div>
                        <div className="prices d-flex justify-content-between">
                            <p>Raised:<span> $20,000</span></p>
                            <p>Goal:<span> $35,000</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default OurCauses
