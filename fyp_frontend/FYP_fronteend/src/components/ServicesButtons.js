import React from "react";
import { Link } from "react-router-dom";

const ServicesButtons = () => {
  return (
    <div className="main-container">
      <div className="inner-div">
        <div className="intro-content">
          <p>
            Zakat is one of the Five Pillars of Islam and is an obligatory act
            of worship for Muslims. It's a form of almsgiving and charitable
            contribution, but with specific rules and calculations.The
            obligation of Zakat entails giving a portion of one's wealth,
            typically 2.5% of certain assets, to those in need. This includes
            wealth accumulated over the course of a lunar year, known as the
            Nisab threshold. Assets subject to Zakat include savings, gold,
            silver, business inventory, and agricultural products, among others.
            Use our system to ensure your zakat goes to actually deserving
            people that are verified by us.
          </p>
        </div>
        <Link to="/zakat-donations">
          <button>Pay Your Zakat & Donations</button>
        </Link>
      </div>
    </div>
  );
};

export default ServicesButtons;
