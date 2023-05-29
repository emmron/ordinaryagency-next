"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

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
    open: { opacity: 1, height: "auto" },
    closed: { opacity: 0, height: 0 }
  };

  const transition = {
    duration: 0.5,
    ease: [0.04, 0.62, 0.23, 0.98]
  };

  return (
    <motion.div
      className="rounded-none my-2 overflow-hidden bg-white"
      whileHover={{ scale: 1.02 }}
      transition={transition}
    >
      <motion.div
        className="p-4 flex items-center cursor-pointer bg-gray-100 hover:bg-gray-200 transition-colors duration-200 ease-out"
        onClick={handleClick}
        style={{ justifyContent: 'flex-start' }}
      >
        <motion.div
          className="transition-all duration-500 ease-in-out mr-3"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={transition}
        >
          {isOpen ? <FiChevronUp size={24} /> : <FiChevronDown size={24} />}
        </motion.div>
        <motion.h2
          className="font-bold text-lg text-gray-800"
          initial={false}
          animate={{ fontSize: isOpen ? "1.2em" : "1em" }}
          transition={transition}
        >
          {question}
        </motion.h2>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.section
            variants={variants}
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            exit="closed"
            transition={transition}
            className="p-4 bg-white text-black border-t text-lg overflow-hidden"
          >
            {answer}
          </motion.section>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Accordion;
