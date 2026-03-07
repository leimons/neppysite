import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

import carou1 from "../assets/carou1.jpg";
import carou2 from "../assets/carou2.png";
import carou3 from "../assets/carou3.png";
import carou4 from "../assets/carou4.png";
import carou5 from "../assets/carou5.png";

const SLIDE_INTERVAL = 5000;
const SWIPE_THRESHOLD = 80;

export default function Carousel() {
  const slides = [carou1, carou2, carou3, carou4, carou5];
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);
  const reduceMotion = useReducedMotion();

  const prevSlide = () =>
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  const nextSlide = () => setIndex((i) => (i + 1) % slides.length);

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(nextSlide, SLIDE_INTERVAL);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoSlide();
    return stopAutoSlide;
  }, []);

  const handleDragEnd = (_, info) => {
    const { offset, velocity } = info;
    const swipePower = Math.abs(offset.x) * velocity.x;

    if (offset.x > SWIPE_THRESHOLD || swipePower > 500) {
      prevSlide();
    } else if (offset.x < -SWIPE_THRESHOLD || swipePower < -500) {
      nextSlide();
    }
  };

  return (
    <section
      onMouseEnter={stopAutoSlide}
      onMouseLeave={startAutoSlide}
      className="relative left-1/2 -translate-x-1/2 w-screen
                 h-[40vh] sm:h-[45vh] md:h-[50vh] lg:h-[55vh]
                 overflow-hidden group scroll-mt-20"
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={index}
          drag={reduceMotion ? false : "x"}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.8}
          onDragStart={stopAutoSlide}
          onDragEnd={handleDragEnd}
          initial={reduceMotion ? false : { opacity: 0, scale: 1.03 }}
          animate={reduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 1.01 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0 cursor-grab active:cursor-grabbing"
        >
          <img
            src={slides[index]}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
      </AnimatePresence>

      {/* Hero Intro */}
      <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={reduceMotion ? false : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center px-6 max-w-3xl"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-secondary tracking-tight">
            Hi, I’m Neppo
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-white/80">
            Me make good art.
          </p>
        </motion.div>
      </div>

      {/* Buttons */}
      <button
        onClick={prevSlide}
        className="absolute z-30 left-2 sm:left-5 top-1/2 -translate-y-1/2
                   btn btn-circle bg-primary text-base-100 border-none
                   opacity-0 group-hover:opacity-100 transition-all duration-300
                   hover:bg-secondary btn-xs sm:btn-sm md:btn-md"
      >
        ❮
      </button>

      <button
        onClick={nextSlide}
        className="absolute z-30 right-2 sm:right-5 top-1/2 -translate-y-1/2
                   btn btn-circle bg-primary text-base-100 border-none
                   opacity-0 group-hover:opacity-100 transition-all duration-300
                   hover:bg-secondary btn-xs sm:btn-sm md:btn-md"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute z-30 bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
              index === i ? "bg-primary" : "bg-base-100/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
