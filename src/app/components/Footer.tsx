import React from 'react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="w-full bg-white text-black py-6">
      <div className="flex justify-between items-center">
        <Logo className="w-12 h-12 md:w-16 md:h-16 object-contain" />
        <div className="text-sm">
          <a href="/terms" className="mr-4 bg-white border border-black text-black hover:bg-black hover:text-white rounded-full px-4 py-2 transition-colors duration-200 ease-in-out font-poppins">Terms</a>
          <a href="/privacy" className="bg-white border border-black text-black hover:bg-black hover:text-white rounded-full px-4 py-2 transition-colors duration-200 ease-in-out font-poppins">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
