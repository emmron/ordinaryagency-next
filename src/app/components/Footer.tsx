import React from 'react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="w-full bg-white text-black py-6">
      <div className="flex justify-between items-center">
        <Logo className="w-12 h-12 md:w-16 md:h-16 object-contain" />
        <div className="text-sm">
          <a href="/terms" className="mr-4 hover:text-gray-500">Terms</a>
          <a href="/privacy" className="hover:text-gray-500">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
