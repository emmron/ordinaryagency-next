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
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          } else {
            entry.target.classList.remove('fade-in');
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
    <footer ref={footerRef} className="w-full bg-white text-black py-6 opacity-0 transition-opacity duration-500 transform -translate-y-5 transition-all duration-500">
      <div className="flex justify-between items-center px-4 md:px-8">
        <Logo className="w-12 h-12 md:w-16 md:h-16 object-contain" />
        <div className="text-sm">
          <Link href="/terms">
            <span className="link mr-2 md:mr-4 bg-white border border-black text-black hover:bg-black hover:text-white rounded-full px-2 md:px-4 py-1 md:py-2 transition-all duration-200 ease-in-out font-poppins hover:animate-bounce">Terms</span>
          </Link>
          <Link href="/pages/terms" as="/privacy">
            <span className="link mr-2 md:mr-4 bg-white border border-black text-black hover:bg-black hover:text-white rounded-full px-2 md:px-4 py-1 md:py-2 transition-all duration-200 ease-in-out font-poppins hover:animate-bounce">Privacy</span>
          </Link>
          <Link href="https://au.linkedin.com/company/ordinaryagencyseo?trk=public_profile_experience-item_profile-section-card_subtitle-click">
            <span className="link mr-2 md:mr-4 bg-white border border-black text-black hover:bg-black hover:text-white rounded-full px-2 md:px-4 py-1 md:py-2 transition-all duration-200 ease-in-out font-poppins hover:animate-bounce">
              <FontAwesomeIcon icon={faLinkedin} />
            </span>
          </Link>
          <Link href="https://www.instagram.com/ordinaryagency/">
            <span className="link bg-white border border-black text-black hover:bg-black hover:text-white rounded-full px-2 md:px-4 py-1 md:py-2 transition-all duration-200 ease-in-out font-poppins hover:animate-bounce">
              <FontAwesomeIcon icon={faInstagram} />
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
