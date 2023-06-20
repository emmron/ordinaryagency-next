import React from 'react';
import { motion } from 'framer-motion';

const InternalHero = ({ title }) => {
  return (
    <div
      className="flex items-center justify-center h-96 w-full bg-white text-white"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/frest2.png')",
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
        className="text-3xl md:text-5xl font-bold text-white"
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
