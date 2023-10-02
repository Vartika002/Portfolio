import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <h1>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <SocialLinks />
      <Experience />
      <Contact />
    </h1>
  );
}

export default App;
