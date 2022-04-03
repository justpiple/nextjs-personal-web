import React, { useEffect } from "react";
import Headers from "../components/Header";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import AboutMe from "../components/home/AboutMe";
import Skill from "../components/home/Skill";
import Certificate from "../components/home/Certificate";
import School from "../components/home/School";
import AOS from "aos";

function Home() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 2500,
    });
  }, []);
  return (
    <React.Fragment>
      <Headers />
      <Navbar />
      <AboutMe />
      <Skill />
      <Certificate />
      <School />
      <Footer />
    </React.Fragment>
  )
}

export default Home