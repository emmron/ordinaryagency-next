"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Modal from 'react-modal';
import Logo from './components/Logo';
import Accordion from './components/Accordion';
import { FiPhone } from 'react-icons/fi';
import { useInView } from 'react-intersection-observer';

const variants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};
//lolrofl
export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { ref: refAbout, inView: inViewAbout } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: refTeam, inView: inViewTeam } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: refServices, inView: inViewServices } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: refWork, inView: inViewWork } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50;
      if (show !== isScrolled) {
        setIsScrolled(show);
      }
    };

    if (typeof window !== "undefined") {
      Modal.setAppElement('#my-root')

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [isScrolled]);

  const buttonClass = isScrolled ? 'bg-white text-black border-2 border-black' : 'bg-black text-white';
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 10000,
      background: '#fff',
      borderRadius: '4px',
      border: '1px solid #ccc',
      padding: '20px',
      overflow: 'auto',
      fontFamily: "'Poppins', sans-serif",
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
      zIndex: 10000,
    },
  };

  return (
    <main className="flex flex-col min-h-screen items-center justify-start pt-28 md:pt-20 p-4 sm:p-6 md:p-8 lg:p-12 xl:p-28 bg-white text-black">
    <header className={`fixed top-0 right-0 bg-white p-4 md:p-8 w-full z-10 ${isScrolled ? '' : ''}`}>
  <div className="flex items-center justify-between w-full">
    <Logo className="w-12 h-12 md:w-16 md:h-16 object-contain" />
    <div className="md:flex items-center">
      <div className="flex items-center justify-end md:mr-4">
        <FiPhone />
        <a href="tel:+610899308081" className="text-black block ml-2 hover:text-gray-700 transition-colors duration-300">
          (08) 9930 8081
        </a>
      </div>
      <div className="flex justify-end mt-2 md:mt-0">
        <button onClick={openModal} className={`${buttonClass} font-bold py-2 px-4 rounded mr-2 hover:bg-white hover:text-black transition-colors duration-300`}>
          Contact
        </button>
        <a href="https://app.ordinaryagency.com.au" target="_blank" rel="noopener noreferrer" className={`${buttonClass} font-bold py-2 px-4 rounded hover:bg-white hover:text-black transition-colors duration-300`}>
          Login
        </a>
      </div>
    </div>
  </div>
</header>

      <Modal
        id="contact_modal"
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customStyles} // apply the custom styles
      >
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
            <input id="name" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" type="text" name="name" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
            <input id="email" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" type="email" name="email" />
          </div>
          <button type="submit" className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit</button>
        </form>
        <button onClick={closeModal} className="mt-4 w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">Close</button>
      </Modal>

      <div className="flex flex-col md:flex-row justify-center items-center text-4xl md:text-8xl font-extrabold my-0 h-screen bg-white text-black mt-8 md:mt-0">
    <motion.div className="flex flex-col justify-center items-center h-full w-full p-0">
      <motion.span className="md:pr-4 text-5xl sm:text-6xl md:text-8xl"
        style={{ fontFamily: "'Poppins', sans-serif" }}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        Anything.
      </motion.span>
      <motion.span className="text-5xl sm:text-6xl md:text-8xl"
        style={{ fontFamily: "'Poppins', sans-serif" }}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        But Ordinary
      </motion.span>
    </motion.div>
  </div>

      <div ref={refAbout} className="z-10 w-full max-w-5xl items-center justify-center font-mono text-sm">
        <motion.div className="about mb-8"
          initial="hidden"
          animate={inViewAbout ? 'visible' : 'hidden'}
          variants={variants}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-2xl mb-4">About</h2>
          <p>Our digital agency excels in web development, SEO, API integrations, marketing, AI, and marketing strategy. We create stunning websites, optimize them for search engines, and seamlessly integrate different software systems. Our marketing services leverage AI to analyze data and devise effective strategies. We're dedicated to delivering tangible results for Australian businesses in the digital realm.</p>
        </motion.div>

        <div ref={refTeam}>
          <motion.div className="team mb-8"
            initial="hidden"
            animate={inViewTeam ? 'visible' : 'hidden'}
            variants={variants}
            transition={{ delay: 1 }}
          >
            <h2 className="text-2xl mb-4">Team</h2>
            <p>We are comprising of both local and international talent. Our agency is proud to have a group of professionals with diverse expertise and backgrounds. Many of our team members bring valuable experience from agency backgrounds in Perth, Western Australia.</p>
          </motion.div>
        </div>

        <div ref={refServices}>
          <motion.div className="services mb-8"
            initial="hidden"
            animate={inViewServices ? 'visible' : 'hidden'}
            variants={variants}
            transition={{ delay: 1.5 }}
          >
            <h2 className="text-2xl mb-4">Our Services</h2>
            <Accordion question="Web Support & Hosting" answer="We provide excellent web support and hosting services." />
            <Accordion question="SEO & PPC" answer="Our SEO and PPC services are designed to help you reach your target audience effectively." />
            <Accordion question="Automations & AI" answer="We implement cutting-edge automations and AI to boost the efficiency and effectiveness of your business processes." />
            <Accordion question="Web Development & API Integrations" answer="Our team of experts offer top-tier web development and API integration services." />
          </motion.div>
        </div>

        <div ref={refWork}>
          <motion.div className="work mb-8"
            initial="hidden"
            animate={inViewWork ? 'visible' : 'hidden'}
            variants={variants}
            transition={{ delay: 2 }}
          >
            <h2 className="text-2xl mb-4">Our Work</h2>
            <Accordion question="JLC Associates" answer="We rebuilt their website giving them a clean modern design. Check out the website at <a href='http://jlcassociates.com.au' target='_blank' rel='noopener noreferrer'>jlcassociates.com.au</a>." />
            <Accordion question="The Barefoot Disciple" answer="Details of the work we've done for The Barefoot Disciple." />
            <Accordion question="Instant Fun" answer="We rebuilt their website in Shopify, offering a modern ecommerce experience." />
            <Accordion question="BML Ventures" answer="We built BML Ventures a Gatsby website that's fast, clean, and modern. Visit <a href='http://bmlventures.com.au' target='_blank' rel='noopener noreferrer'>bmlventures.com.au</a> to see it." />
            <Accordion question="Aust-BioSearch" answer="We revamped Aust-BioSearch's website search and modernised the homepage." />
            <Accordion question="Wanneroo Basketball Association" answer="Details of the work we've done for Wanneroo Basketball Association." />
          </motion.div>
        </div>
      </div>
    </main>
  );
}
