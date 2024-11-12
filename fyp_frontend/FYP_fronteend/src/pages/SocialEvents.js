import React from "react";
import Header from "../components/Header";
import CommonHero from "../components/CommonHero";
import Footer from "../components/Footer";
import Team from "../components/Team";
import OurCount from "../components/OurCount";
import Events from "../components/Events";

const SocialEvents = () => {
  return (
    <div>
      <Header />
      <CommonHero title="Social Events" />
      <OurCount />
      <Events />
      <Team />
      <Footer />
    </div>
  );
};

export default SocialEvents;
