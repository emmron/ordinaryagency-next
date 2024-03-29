import React, { useEffect, useRef } from 'react';
import Logo from './Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const borderLine = entry.target.querySelector('.border-line');
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            if (borderLine) borderLine.classList.add('expand');
          } else {
            entry.target.classList.remove('fade-in');
            if (borderLine) borderLine.classList.remove('expand');
          }
        });
      },
      {
        threshold: 0.1
      }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white">
      <footer ref={footerRef} className="w-full opacity-1 bg-white text-black py-6 opacity-0 transition-opacity duration-500 transform -translate-y-5 transition-all duration-500">
        <div className="flex justify-between items-center px-4 md:px-8">
          <Logo className="w-12 h-12 md:w-16 md:h-16 object-contain" />
          <div className="text-sm">
            <Link href="/terms" className="link mr-2 md:mr-4 bg-white border border-black text-black hover:bg-black hover:text-white rounded-full px-2 md:px-4 py-1 md:py-2 transition-all duration-200 ease-in-out font-poppins hover:animate-bounce">
              Terms
            </Link>
            <Link href="/pages/terms" as="/privacy" className="link mr-2 md:mr-4 bg-white border border-black text-black hover:bg-black hover:text-white rounded-full px-2 md:px-4 py-1 md:py-2 transition-all duration-200 ease-in-out font-poppins hover:animate-bounce">
              Privacy
            </Link>
            <Link href="https://au.linkedin.com/company/ordinaryagencyseo?trk=public_profile_experience-item_profile-section-card_subtitle-click" passHref className="link mr-2 md:mr-4 bg-white border border-black text-black hover:bg-black hover:text-white rounded-full px-2 md:px-4 py-1 md:py-2 transition-all duration-200 ease-in-out font-poppins hover:animate-bounce">
                <FontAwesomeIcon icon={faLinkedin} />
            </Link>
            <Link href="https://www.instagram.com/ordinaryagency/" passHref className="link bg-white border border-black text-black hover:bg-black hover:text-white rounded-full px-2 md:px-4 py-1 md:py-2 transition-all duration-200 ease-in-out font-poppins hover:animate-bounce">
                <FontAwesomeIcon icon={faInstagram} />
            </Link>
          </div>
        </div>
        <div className="border-line h-1 border-black transition-all duration-500 ease-in-out w-0 mx-auto mt-4"></div>
      </footer>
    </div>
  );
};

export default Footer;
