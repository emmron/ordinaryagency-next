import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const InternalHero = ({ title }) => {
  const shouldReduceMotion = useReducedMotion();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = '/images/frest2.png';
    img.onload = () => setIsLoaded(true);
  }, []);

  const variants = shouldReduceMotion
    ? {}
    : {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
      };

  return (
    <div
      className={`flex items-center justify-center h-96 w-full text-white ${isLoaded ? 'bg-loaded' : 'bg-loading'}`}
      style={{
        backgroundImage: `url(${img.src})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'scroll',
        width: '100vw',
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden',
        perspective: 1000,
        minHeight: '50vh', // Adjusted for mobile view
      }}
    >
      <motion.span
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-black text-center" // Adjusted font size for mobile view
        style={{ fontFamily: "'Poppins', sans-serif" }}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 1 }}
      >
        {title}
      </motion.span>
    </div>
  );
};




export default InternalHero;