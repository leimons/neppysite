import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Terms from "./components/Terms";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <div id="home">
        <Hero />
      </div>

      <div id="services">
        <Services />
      </div>
      <div id="terms">
        <Terms />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </>
  );
}
