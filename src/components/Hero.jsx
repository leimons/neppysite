// src/components/Hero.jsx

import Nep from "../assets/NepoLepo.jpg";

const Hero = () => {
  return (
    <div className="w-full flex justify-center">
      <img
        src={Nep}
        alt="Hero"
        className="w-full h-auto object-contain max-h-[300px] sm:max-h-[400px] md:max-h-[500px] lg:max-h-[600px]"
      />
    </div>
  );
};

export default Hero;
