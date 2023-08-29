import React from 'react';
import { motion } from 'framer-motion';

const InternalHero = ({ title }) => {
  return (
    <div
      className="flex items-center justify-center h-96 w-full bg-white text-white"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url('/images/frest2.png')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'scroll',
        width: '100vw',
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden',
        perspective: 1000,
      }}
    >
      <motion.span
        className="text-3xl sm:text-4xl md:text-6xl font-bold text-black text-center"
        style={{ fontFamily: "'Poppins', sans-serif" }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {title}
      </motion.span>
    </div>
  );
};

export default InternalHero;