import React, { useEffect } from "react";
import Headers from "../components/Header";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import AboutMe from "../components/home/AboutMe";
import Skill from "../components/home/Skill";
import Certificate from "../components/home/Certificate";
import School from "../components/home/School";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { SocialProfileJsonLd, NextSeo } from 'next-seo';
import Projects from "../components/home/Projects";

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
      <NextSeo
        title="benirabbany"
        description="hellow i'm ben."
      />
      <SocialProfileJsonLd
        type="Person"
        name="Kusindra Aji Rabbany"
        url="https://itsben.space"
        sameAs={[
          'https://instagram.com/kusindr_',
        ]}
      />
      <Navbar />
      <AboutMe />
      <Skill />
      <Certificate />
      <Projects />
      <School />
      <Footer />
    </React.Fragment>
  )
}

export default Home