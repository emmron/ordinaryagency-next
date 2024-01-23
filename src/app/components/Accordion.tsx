"use client";

import { useState, isValidElement, ReactNode } from "react";
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
    open: { opacity: 1, maxHeight: 1000 },
    closed: { opacity: 0, maxHeight: 0 }
  };

  const transition = {
    duration: 1,
    ease: [0.25, 0.1, 0.25, 1],
  };

  return (
    <motion.div
      className="my-0.5 overflow-hidden"
      whileHover={{ scale: 1.02 }}
      transition={transition}
    >
      <motion.div
        className="p-4 flex items-center cursor-pointer"
        onClick={handleClick}
        initial={false}
        animate={{ justifyContent: isOpen ? 'space-between' : 'flex-start' }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      >
        <motion.span
          className="text-black mr-3"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          {isOpen ? <IoIosArrowUp size={24} /> : <IoIosArrowDown size={24} />}
        </motion.span>
        <motion.h2
          className="font-semibold text-lg text-gray-800"
          animate={{ fontSize: isOpen ? 'text-xl' : 'text-lg' }}
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
            className="p-4 pt-2 text-black text-lg overflow-hidden"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: "500", fontSize: "1.5em" }}
          >
            {documentToReactComponents(answer)}
          </motion.section>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Accordion;
