import React from "react";
import Header from "../../layout/Header";
import Hero from "../../components/Hero";
import StartSection from "../../components/StartSection";
import About from "../../components/About";
import Department from "../../components/Department";
import Appointment from "../../components/Appointment";
import DoctorsTeam from "../../components/DoctorsTeam";
import Before_AfterSection from "../../components/Before_AfterSection";
import Gallery from "../../components/Gallery";
import Testimonial from "../../components/Testimonial";
import FunFact from "../../components/FunFact";
import PricingSection from "../../components/PricingSection";
import FAQ from "../../components/FAQ";
import Blog from "../../components/Blog";
import NewsLetter from "../../components/NewsLetter";
import Contact from "../../components/Contact";
import Map from "../../components/Map";
import ClientSection from "../../components/ClientSection";
import Footer from "../../layout/Footer";

const Mainpage = () => {
  return (
    <>
      <Header />
      <Hero />
      <StartSection />
      <About />
      <Department />
      <Appointment />
      <DoctorsTeam />
      <Before_AfterSection />
      <Gallery />
      <Testimonial />
      <FunFact />
      <PricingSection />
      <FAQ />
      <Blog />
      <NewsLetter />
      <Contact />
      <Map />
      <ClientSection />
      <Footer />
    </>
  );
};

export default Mainpage;
