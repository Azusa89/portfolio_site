import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Fx from "./components/fx/Fx";
import Footer from "./components/footer/Footer";

import "animate.css/animate.min.css";

const app = () => {
  return (
    <>
      {/* <Fx /> */}
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

export default app;
