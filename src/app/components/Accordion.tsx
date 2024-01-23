"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

interface AccordionProps {
  question: string;
  answer: any;
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
    ease: "easeInOut"
  };

  return (
    <div className="my-1 overflow-hidden transition-all duration-500 ease-in-out">
      <div
        className="p-4 flex items-center justify-between cursor-pointer"
        onClick={handleClick}
      >
        <div className="flex items-center space-x-2">
          <span className="text-black transform transition-transform duration-500 ease-in-out">
            {isOpen ? <IoIosArrowUp size={24} /> : <IoIosArrowDown size={24} />}
          </span>
          <h2 className={`font-semibold text-lg text-gray-800 ${isOpen ? 'text-xl' : 'text-lg'} transition-all duration-500 ease-in-out`}>
            {question}
          </h2>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.section
            variants={variants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={transition}
            className="p-4 pt-2 text-black text-lg"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: "500", fontSize: "1.5em" }}
          >
            {documentToReactComponents(answer)}
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
