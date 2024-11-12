import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CommonHero from "../components/CommonHero";
import Services from "../components/Services";
import JoinUs from "../components/JoinUs";
import OurCount from "../components/OurCount";
import CommonAbout from "../components/CommonAbout";
import Team from "../components/Team";

const About = (props) => {
  return (
    <div>
      <Header />
      <CommonHero title="About The Organization" />
      <CommonAbout />
      <Team />
      <Services />
      <JoinUs />
      <OurCount />
      <Footer />
    </div>
  );
};

export default About;
