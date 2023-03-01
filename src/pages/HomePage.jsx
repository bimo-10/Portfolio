import React from "react";
import Navbar from "../components/layouts/Navbar/Navbar";
import TitleHome from "../components/home/Title/TitleHome";
import HeroHome from "../components/home/hero/HeroHome";
import Portofolio from "../components/portofolio/Portofolio";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import SuccessModal from "../components/layouts/modal/SuccessModal";

function HomePage() {
  return (
    <div className="mb-2">
      <Navbar />
      <TitleHome />
      <HeroHome />
      <Portofolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default HomePage;
