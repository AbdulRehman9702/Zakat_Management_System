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
import team1 from '../assets/img/gallery/team1.png';
import team2 from '../assets/img/gallery/team2.png';
import team3 from '../assets/img/gallery/team3.png';
import team4 from '../assets/img/gallery/team4.png';

const Team = () => {
  return (
    <div className="team-area pt-160 pb-160">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7 col-md-10 col-sm-10">
                <div className="section-tittle section-tittle2 text-center mb-70">
                    <span>What we are doing</span>
                    <h2>Our Expert Volunteer Alwyes ready</h2>
                </div> 
            </div>
        </div>
        <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="single-team mb-30">
                    <div className="team-img">
                        <img src={team1} alt=""/>
                        <ul className="team-social">
                            <li><a href="/"><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href="/"><i className="fab fa-twitter"></i></a></li>
                            <li><a href="/"><i className="fas fa-globe"></i></a></li>
                        </ul>
                    </div>
                    <div className="team-caption">
                        <h3><a href="instructor.html">Bruce Roberts</a></h3>
                        <p>Volunteer leader</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="single-team mb-30">
                    <div className="team-img">
                        <img src={team2} alt=""/>
                        <ul className="team-social">
                            <li><a href="/"><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href="/"><i className="fab fa-twitter"></i></a></li>
                            <li><a href="/"><i className="fas fa-globe"></i></a></li>
                        </ul>
                    </div>
                    <div className="team-caption">
                        <h3><a href="instructor.html">Robart Rechard</a></h3>
                        <p>Volunteer leader</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="single-team mb-30">
                    <div className="team-img">
                        <img src={team3} alt=""/>
                        <ul className="team-social">
                            <li><a href="/"><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href="/"><i className="fab fa-twitter"></i></a></li>
                            <li><a href="/"><i className="fas fa-globe"></i></a></li>
                        </ul>
                    </div>
                    <div className="team-caption">
                        <h3><a href="instructor.html">Brendon Tailor</a></h3>
                        <p>Volunteer leader</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="single-team mb-30">
                    <div className="team-img">
                        <img src={team4} alt=""/>
                        <ul className="team-social">
                            <li><a href="/"><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href="/"><i className="fab fa-twitter"></i></a></li>
                            <li><a href="/"><i className="fas fa-globe"></i></a></li>
                        </ul>
                    </div>
                    <div className="team-caption">
                        <h3><a href="instructor.html">Walshr Hasgt</a></h3>
                        <p>Volunteer leader</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Team
