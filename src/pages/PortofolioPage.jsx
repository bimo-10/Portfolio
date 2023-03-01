import React from "react";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import Navbar from "../components/layouts/Navbar/Navbar";
import MainPortofolio from "../components/portofolio/MainPortofolio";

function PortofolioPage() {
  return (
    <div>
      <Navbar />
      <MainPortofolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default PortofolioPage;
