import React, { useState, ReactElement, MouseEvent } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { FiArrowRight, FiChevronDown } from 'react-icons/fi';

const FullScreenMenu = ({ isOpen, onClose }) => {
  const [showSubmenu, setShowSubmenu] = useState(false);

  const toggleSubmenu = () => {
    setShowSubmenu(!showSubmenu);
  };

  const menuVariants = {
    open: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeInOut' } },
    closed: { y: "-100%", opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }
  };

  const submenuVariants = {
    open: { height: 'auto', opacity: 1, transition: { duration: 0.3 } },
    closed: { height: 0, opacity: 0, transition: { duration: 0.3 } },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
          className="fixed inset-0 z-50 flex items-center justify-center transition-all duration-500 ease-in-out"
        >
          <div className="w-full max-w-4xl p-8 mx-auto bg-white rounded-lg shadow-2xl">
            <motion.button
              onClick={onClose}
              className="absolute top-0 right-0 mt-4 mr-4 text-4xl text-black hover:text-gray-600 transition-all duration-300 ease-in-out"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              &times;
            </motion.button>
            <ul className="space-y-4">
              <li className="relative">
                <Link href="/contact">
                  <motion.a
                    onClick={onClose}
                    className="block px-6 py-3 text-3xl font-medium text-center text-black bg-white border-2 border-black rounded-full hover:bg-gray-100 transition-all duration-300 ease-in-out"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    Contact
                  </motion.a>
                </Link>
              </li>
              <li className="relative">
                <button
                  onClick={toggleSubmenu}
                  className="w-full px-6 py-3 text-3xl font-medium text-center text-black bg-white border-2 border-black rounded-full focus:outline-none hover:bg-gray-100 transition-all duration-300 ease-in-out"
                >
                  Services
                  <FiChevronDown
                    className={`inline-block w-5 h-5 ml-2 transform transition-transform duration-300 ease-in-out ${
                      showSubmenu ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                </button>
                <motion.div
                  initial="closed"
                  animate={showSubmenu ? 'open' : 'closed'}
                  variants={submenuVariants}
                  className="mt-2 overflow-hidden"
                >
                  <ul className="space-y-2">
                    <li className="flex items-center justify-center">
                      <FiArrowRight className="w-5 h-5 text-black" />
                      <Link href="/seo-perth">
                        <motion.a
                          onClick={onClose}
                          className="block ml-2 text-xl text-black hover:text-gray-800 transition duration-300 ease-in-out"
                          whileHover={{ scale: 1.03 }}
                          transition={{ duration: 0.3 }}
                        >
                          SEO Perth
                        </motion.a>
                      </Link>
                    </li>
                    <li className="flex items-center justify-center">
                      <FiArrowRight className="w-5 h-5 text-black" />
                      <Link href="/play-hq-integration-perth">
                        <motion.a
                          onClick={onClose}
                          className="block ml-2 text-xl text-black hover:text-gray-800 transition duration-300 ease-in-out"
                          whileHover={{ scale: 1.03 }}
                          transition={{ duration: 0.3 }}
                        >
                          Play HQ Integration 
                        </motion.a>
                      </Link>
                    </li>
                    <li className="flex items-center justify-center">
                      <FiArrowRight className="w-5 h-5 text-black" />
                      <Link href="/shopify-perth">
                        <motion.a
                          onClick={onClose}
                          className="block ml-2 text-xl text-black hover:text-gray-800 transition duration-300 ease-in-out"
                          whileHover={{ scale: 1.03 }}
                          transition={{ duration: 0.3 }}
                        >
                          Shopify Perth
                        </motion.a>
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