import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const InternalHero = ({ title }) => {
  const shouldReduceMotion = useReducedMotion();
  const [isLoaded, setIsLoaded] = useState(false);
  const [imgSrc, setImgSrc] = useState('');

  useEffect(() => {
    const img = new Image();
    img.src = '/images/frest2.png';
    img.onload = () => {
      setIsLoaded(true);
      setImgSrc(img.src);
    };
    img.onerror = () => {
      console.error('Failed to load image');
    };
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
        backgroundImage: `url(${imgSrc})`,
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
      <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}></div> 
      <motion.span
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-black text-center" // Adjusted font size for mobile view
        style={{ fontFamily: "'Poppins', sans-serif", position: 'relative' }} // Added relative position to make it on top of the overlay
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