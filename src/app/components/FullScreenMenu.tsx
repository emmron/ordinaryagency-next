import React, { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { FiArrowRight, FiChevronDown } from 'react-icons/fi';
type FullScreenMenuProps = {
  isOpen: boolean;
  onClose: (event: MouseEvent) => void;
};

const FullScreenMenu: React.FC<FullScreenMenuProps> = ({ isOpen, onClose }): ReactElement => {

    const [showSubmenu, setShowSubmenu] = useState(false);

  const toggleSubmenu = () => {
    setShowSubmenu(!showSubmenu);
  };

  const menuVariants = {
    open: { opacity: 1, display: 'flex', transition: { duration: 0.3, ease: 'easeInOut' } },
    closed: { opacity: 0, transition: { duration: 0.3, ease: 'easeInOut', when: 'afterChildren' }, transitionEnd: { display: 'none' } }
  };

  const submenuVariants = {
    open: { height: 'auto', opacity: 1 },
    closed: { height: 0, opacity: 0 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
          className="fixed overlaymenu top-0 left-0 w-full h-screen z-20 bg-white bg-opacity-60 flex justify-center items-center font-poppins"
        >
          <div className="text-center text-black text-3xl font-bold">
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-3xl font-bold"
            >
              &times;
            </button>
            <ul className="space-y-4">
              <li className="relative pb-2">
                <Link href="/contact">
                  <motion.span
                    onClick={onClose}
                    className="block p-2 hover:text-gray-800 cursor-pointer transition duration-300 ease-in"
                  >
                    Contact
                  </motion.span>
                </Link>

              </li>
              <li className="relative pb-2">
                <button
                  onClick={toggleSubmenu}
                  className="focus:outline-none py-2 flex items-center"
                >
                  <span>Services</span>
                  <FiChevronDown
                    className={`ml-2 transform transition-transform ${
                      showSubmenu ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                </button>
                <motion.div
                  initial="closed"
                  animate={showSubmenu ? 'open' : 'closed'}
                  variants={submenuVariants}
                  className="overflow-hidden mt-4"
                >
                  <ul className="space-y-2 pl-6">
                    <li className="flex items-center">
                      <FiArrowRight />
                      <Link href="/seo-perth">
                        <motion.span
                          onClick={onClose}
                          className="ml-2 text-2xl hover:text-gray-800 cursor-pointer transition duration-300 ease-in"
                        >
                          SEO Perth
                        </motion.span>
                      </Link>
                    </li>
                  </ul>
                </motion.div>
                {showSubmenu}
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FullScreenMenu;
