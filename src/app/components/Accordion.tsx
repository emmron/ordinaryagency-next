"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

const Accordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div
      className="border-2 rounded-lg shadow-lg my-4 overflow-hidden bg-white"
      whileHover={{ boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.2)" }}
      transition={{ duration: 0.3 }}
      animate={{ borderColor: isOpen ? '#000' : '#ddd', borderWidth: isOpen ? '3px' : '2px' }}
    >
      <motion.div
        className="p-6 flex justify-between items-center cursor-pointer"
        onClick={handleClick}
        initial={false}
        animate={{ backgroundColor: isOpen ? '#000' : '#fff' }}
        transition={{ duration: 0.5, delay: 0.1 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <motion.div
          className="font-bold text-lg"
          initial={false}
          animate={{ color: isOpen ? '#fff' : '#000', fontSize: isOpen ? "1.1em" : "1em", letterSpacing: isOpen ? "0.05em" : "0em" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {question}
        </motion.div>
        <motion.div
          className={`transition-transform duration-500 ${isOpen ? 'text-white' : 'text-black'}`}
          animate={{ rotate: isOpen ? 180 : 0, scale: isOpen ? 1.2 : 1 }}
          whileHover={{ rotate: isOpen ? 180 : 90 }}
          transition={{ duration: 0.5 }}
        >
          <FiChevronDown size={24} />
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 bg-white text-black border-t text-lg"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Accordion;
