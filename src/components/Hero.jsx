// src/components/Hero.jsx

import React from "react";
import Nep from "../assets/NepoLepo.jpg";

const Hero = () => {
  return (
    <div className="w-full">
      <img src={Nep} alt="Hero" className="w-full h-auto" />
      <h1 className="font-futura text-4xl">Hello</h1>
    </div>
  );
};

export default Hero;
