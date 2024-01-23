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
      className="rounded-none my-0.5 overflow-hidden"
      whileHover={{ scale: 1.02 }}
      transition={transition}
    >
      <motion.div
        className="p-4 flex items-center cursor-pointer transition-colors duration-200 ease-out"
        onClick={handleClick}
        style={{ justifyContent: 'flex-start' }}
      >
        <motion.div
          className="transition-all duration-500 ease-in-out mr-3"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={transition}
        >
          {isOpen ? <IoIosArrowUp size={24} color="black" /> : <IoIosArrowDown size={24} color="black" />}
        </motion.div>
        <motion.h2
      className="font-bold text-lg text-gray-800"
      style={{ fontFamily: "'Poppins', sans-serif", color: 'black', fontWeight: "600" }}
      initial={false}
      animate={{ fontSize: isOpen ? "1.8em" : "1.5em" }}
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
