import React from "react";
import Header from "../components/Header";
import CommonHero from "../components/CommonHero";
import Footer from "../components/Footer";
import OurCount from "../components/OurCount";
import OurCauses from "../components/OurCauses";
import Team from "../components/Team";
import ServicesButtons from "../components/ServicesButtons";

const Blog = () => {
  return (
    <div>
      <Header />
      <CommonHero title="Donate As Much As Possible" />
      <ServicesButtons />
      <OurCauses />
      <OurCount />
      <Team />
      <Footer />
    </div>
  );
};

export default Blog;
