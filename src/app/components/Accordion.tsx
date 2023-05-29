"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

interface AccordionProps {
  question: string;
  answer: string;
}

const Accordion: React.FC<AccordionProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const variants = {
    open: { opacity: 1, maxHeight: 2000 }, // Use a large number for maxHeight to simulate 'auto'
    closed: { opacity: 0, maxHeight: 0 }
  };

  return (
    <motion.div
      className="border-2 rounded-lg shadow-lg my-4 overflow-hidden bg-white"
      whileHover={{ scale: 1.02, boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.2)" }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="p-6 flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        <motion.h2
          className="font-bold text-lg"
          initial={false}
          animate={{ fontSize: isOpen ? "1.2em" : "1em" }}
          transition={{ duration: 0.3 }}
        >
          {question}
        </motion.h2>
        <motion.div
          className="transition-transform duration-500"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <FiChevronDown size={24} />
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.section
            variants={variants}
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            exit="closed"
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="p-6 bg-white text-black border-t text-lg overflow-hidden"
          >
            {answer}
          </motion.section>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Accordion;
