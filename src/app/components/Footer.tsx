import React, { useEffect, useRef } from 'react';
import Logo from './Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

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
      <div className="flex justify-between items-center px-4 md:px-10">
        <Logo className="w-12 h-12 md:w-16 md:h-16 object-contain" />
        <div className="text-sm">
          <a href="/terms" className="mr-4 bg-white border border-black text-black hover:bg-black hover:text-white rounded-full px-4 py-2 transition-colors duration-200 ease-in-out font-poppins hover:animate-bounce">Terms</a>
          <a href="/privacy" className="mr-4 bg-white border border-black text-black hover:bg-black hover:text-white rounded-full px-4 py-2 transition-colors duration-200 ease-in-out font-poppins hover:animate-bounce">Privacy Policy</a>
          <a href="https://au.linkedin.com/company/ordinaryagencyseo?trk=public_profile_experience-item_profile-section-card_subtitle-click" className="bg-white border border-black text-black hover:bg-black hover:text-white rounded-full px-4 py-2 transition-colors duration-200 ease-in-out font-poppins hover:animate-bounce">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
