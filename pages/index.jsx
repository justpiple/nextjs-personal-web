import React, { useEffect } from "react";
import Headers from "../components/Header";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import AboutMe from "../components/home/AboutMe";
import Skill from "../components/home/Skill";
import Certificate from "../components/home/Certificate";
import School from "../components/home/School";
import AOS from "aos";
import "aos/dist/aos.css";
import { SocialProfileJsonLd, NextSeo } from "next-seo";
import Projects from "../components/home/Projects";
import Lenis from "@studio-freight/lenis";

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
      <NextSeo title="benirabbany" description="hellow i'm ben." />
      <SocialProfileJsonLd
        type="Person"
        name="Kusindra Aji Rabbany"
        url="https://benspace.xyz"
        sameAs={["https://instagram.com/kusindr_"]}
      />
      <div data-lenis-prevent>
        <Navbar />
        <AboutMe />
        <Skill />
        <Certificate />
        <Projects />
        <School />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default Home;
