import React, { useState, ReactElement, MouseEvent } from 'react';
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
    open: { height: 'auto', opacity: 1, transition: { duration: 0.2 } },
    closed: { height: 0, opacity: 0, transition: { duration: 0.2 } },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
          className="fixed overlaymenu top-0 left-0 w-full h-screen z-20 bg-white flex justify-center items-center font-poppins"
        >
          <div className="text-center text-black text-4xl font-bold">
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-4xl font-bold text-red-500 hover:text-red-700 transition duration-300 ease-in-out"
            >
              &times;
            </button>
            <ul className="flex flex-col items-center divide-y divide-gray-200">
              <li className="relative py-4">
                <Link href="/contact">
                  <motion.span
                    onClick={onClose}
                    className="block p-4 hover:text-gray-800 cursor-pointer transition duration-300 ease-in-out text-center text-2xl"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    Contact
                  </motion.span>
                </Link>
              </li>
              <li className="relative py-4">
                <button
                  onClick={toggleSubmenu}
                  className="focus:outline-none py-4 flex items-center justify-center text-2xl hover:text-gray-800 transition duration-300 ease-in-out"
                >
                  <span className="text-center">Services</span>
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
                  className="overflow-hidden mt-6"
                >
                  <ul className="flex flex-col items-center divide-y divide-gray-200">
                    <li className="flex items-center justify-center text-2xl py-3">
                      <FiArrowRight />
                      <Link href="/seo-perth">
                        <motion.span
                          onClick={onClose}
                          className="ml-2 text-2xl hover:text-gray-800 cursor-pointer transition duration-300 ease-in-out text-center"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        >
                          SEO Perth
                        </motion.span>
                      </Link>
                    </li>
                    <li className="flex items-center justify-center text-2xl py-3">
                      <FiArrowRight />
                      <Link href="/play-hq-integration-perth">
                        <motion.span
                          onClick={onClose}
                          className="ml-2 text-2xl hover:text-gray-800 cursor-pointer transition duration-300 ease-in-out text-center"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        >
                          Play HQ Integration 
                        </motion.span>
                      </Link>
                    </li>
                    <li className="flex items-center justify-center text-2xl py-3">
                      <FiArrowRight />
                      <Link href="/shopify-perth">
                        <motion.span
                          onClick={onClose}
                          className="ml-2 text-2xl hover:text-gray-800 cursor-pointer transition duration-300 ease-in-out text-center"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        >
                          Shopify Perth
                        </motion.span>
                      </Link>
                    </li>
                  </ul>
                </motion.div>
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FullScreenMenu;