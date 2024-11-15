import React from "react";

const CommonHero = (props) => {
  return (
    <div className="slider-area2">
      <div className="slider-height2 d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="hero-cap hero-cap2 pt-20 text-center">
                <h2>{props.title}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonHero;
