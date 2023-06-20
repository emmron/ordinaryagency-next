import React from 'react';
import Link from 'next/link';

const FullScreenMenu = ({ isOpen, onClose }) => {
  return isOpen ? (
    <div className="fixed top-0 left-0 w-full min-h-screen z-20 bg-black bg-opacity-90 flex justify-center items-center font-poppins">
      <div className="text-center text-white text-4xl">
        <ul className="space-y-4">
          <li>
            <Link href="/about">
              <a onClick={onClose} className="hover:text-gray-300">
                About
              </a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a onClick={onClose} className="hover:text-gray-300">
                Contact
              </a>
            </Link>
          </li>
          <li className="relative">
            <p>Services</p>
            <div className="absolute top-0 left-0 mt-12">
              <ul className="space-y-2">
                <li>
                  <Link href="/seo-perth">
                    <a onClick={onClose} className="text-2xl hover:text-gray-300">
                      SEO Perth
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  ) : null;
};

export default FullScreenMenu;
