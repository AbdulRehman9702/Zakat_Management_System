import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/CommonAbout";
import OurCauses from "../components/OurCauses";
import Team from "../components/Team";
import JoinUs from "../components/JoinUs";
import OurCount from "../components/OurCount";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      {/* <OurCount /> */}
      <Services />
      <About />
      {/* <OurCauses /> */}
      {/* <Team /> */}
      <JoinUs />
      <Footer />
    </>
  );
};

export default Home;
