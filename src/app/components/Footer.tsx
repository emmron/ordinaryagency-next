import React, { useEffect, useRef } from 'react';
import Logo from './Logo';

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          } else {
            entry.target.classList.remove('fade-in');
          }
        });
      }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={footerRef} className="w-full bg-white text-black py-6 opacity-0">
      <div className="flex justify-between items-center">
        <Logo className="w-12 h-12 md:w-16 md:h-16 object-contain" />
        <div className="text-sm">
          <a href="/terms" className="mr-4 bg-white border border-black text-black hover:bg-black hover:text-white rounded-full px-4 py-2 transition-colors duration-200 ease-in-out font-poppins hover:animate-bop">Terms</a>
          <a href="/privacy" className="bg-white border border-black text-black hover:bg-black hover:text-white rounded-full px-4 py-2 transition-colors duration-200 ease-in-out font-poppins hover:animate-bop">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
