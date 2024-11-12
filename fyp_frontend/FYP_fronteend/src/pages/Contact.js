import React from "react";
import Header from "../components/Header";
import CommonHero from "../components/CommonHero";
import Footer from "../components/Footer";
import OurCount from "../components/OurCount";
import Team from "../components/Team";

const Contact = () => {
  return (
    <div>
      <Header />
      <CommonHero title="Contact Us" />
      <OurCount />
      <Team />
      <Footer />
    </div>
  );
};

export default Contact;
