import React from "react";
import Header from "../components/Header";
import CommonHero from "../components/CommonHero";
import Footer from "../components/Footer";
import OurCauses from "../components/OurCauses";
import Team from "../components/Team";

const LatestCauses = () => {
  return (
    <div>
      <Header />
      <CommonHero title="Latest Causes" />
      <OurCauses />
      <Team />
      <Footer />
    </div>
  );
};

export default LatestCauses;
