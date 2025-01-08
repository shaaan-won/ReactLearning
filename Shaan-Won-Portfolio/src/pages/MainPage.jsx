import React from "react";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import About from "../components/About";
import Skill from "../components/Skill";
import Work from "../components/work";
import Contact from "../components/Contact";
import Footer from "../layout/Footer";

const MainPage = () => {
  return <>
    <Navbar />
    <Home />
    <About />
    <Skill />
    <Work />
    <Contact />
  </>;
};

export default MainPage;
