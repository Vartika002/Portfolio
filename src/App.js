import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <h1 className="text-gray-400">
      <Navbar />
      <Home />
      <SocialLinks />
    </h1>
  );
}

export default App;
