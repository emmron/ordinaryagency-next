"use client";

import { useState, useEffect, Fragment } from 'react';
import { motion } from 'framer-motion';
import Modal from 'react-modal';
import Logo from './components/Logo';
import Accordion from './components/Accordion';
import Footer from './components/Footer';
import { FiPhone } from 'react-icons/fi';
import { useInView } from 'react-intersection-observer';
import Head from "next/head"
import { Parallax } from 'react-parallax';
const variants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

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

    const handleParallax = () => {
  const heroElement = document.getElementById('hero');
  const scrollPosition = window.pageYOffset;

  if (heroElement) {
    heroElement.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
  }
};

window.addEventListener('scroll', handleParallax);
return () => {
  window.removeEventListener('scroll', handleParallax);
};

    if (typeof window !== "undefined") {
      Modal.setAppElement('#my-root')

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [isScrolled]);

  const buttonClass = isScrolled ? 'bg-white text-black border-2 border-black' : 'bg-black text-white border-2 border-black';
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
  const image1 = "/images/frest2.png";
  return (
    <>
    <Head>
      <title>Ordinary Agency</title>
      <meta property="og:title" content="Ordinary Agency" key="title" />
      <meta name="description" content="Digital Agency in West Perth" key="desc" />
    </Head>
    <main id="#my-root" className="flex flex-col min-h-screen bg-white items-center justify-start pt-28 md:pt-20 p-4 sm:p-6 md:p-8 lg:p-12 lg:py-0 xl:p-28 bg-transparent text-black">
      <header className={`fixed top-0 right-0 bg-transparent p-4 md:p-8 w-full z-10 ${isScrolled ? '' : ''}`}>
        <div className="flex items-center justify-between w-full">
          <Logo className="w-12 h-12 md:w-16 md:h-16 object-contain" />
          <div className="md:flex items-center">
            <div className="flex items-center justify-end md:mr-4">
              <FiPhone />
              <a href="tel:+610899308081" className="text-black block ml-2 hover:text-gray-700 transition-colors duration-300 bold">
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

            <Parallax bgImage={image1} strength={500}>
            <div className="flex flex-col hero md:flex-row justify-center items-center text-4xl md:text-8xl font-extrabold my-0 h-screen bg-white text-black mt-8 md:mt-0"
    style={{
      backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url('/images/frest2.png')",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'scroll', // change this line
      height: '120vh',
      width: '100vw',
      marginTop: '-200px',
      transform: 'translateZ(0)',
      backfaceVisibility: 'hidden',
      perspective: 1000,
    }}
  >
                <motion.span className="md:pr-4 text-5xl sm:text-6xl md:text-8xl text-black"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                >
                  Anything.
                </motion.span>
                <motion.span className="text-5xl sm:text-6xl md:text-8xl text-black"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                >
                  But Ordinary
                </motion.span>
              </div>
            </Parallax>
      <div ref={refAbout} className="z-10 pt-12 w-full max-w-5xl items-center justify-center font-mono text-sm">
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
            <Accordion
              question="Web Support & Hosting"
              answer={
                <>
                  Our proficient team delivers steadfast web support and hosting services. We ensure your digital presence is secure, reliable, and efficient, allowing you to concentrate on your core business operations.
                </>
              }
            />

            <Accordion
              question="SEO & PPC"
              answer={
                <>
                  With a strategic blend of SEO and PPC, we foster meaningful connections between you and your target audience. Our strategies aim to boost visibility, drive website traffic, and increase conversions, propelling your business growth.
                </>
              }
            />

            <Accordion
              question="Automations & AI"
              answer={
                <>
                  We embrace the future of digital technology by implementing state-of-the-art automations and AI. Our objective is to enhance your business processes' efficiency and effectiveness, freeing you to focus on what matters most: your business's success.
                </>
              }
            />

            <Accordion
              question="Web Development & API Integrations"
              answer={
                <>
                  Specialising in creating seamless digital experiences, our expert web development team seamlessly integrates APIs with diverse platforms, including Shopify, WordPress, WooCommerce, and custom React applications. We aim to simplify complex technical processes, ensuring your business tools perform harmoniously for maximum performance and scalability.
                </>
              }
            />
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
            <Accordion
  question="JLC Associates"
  answer={
    <>
      We revitalised the JLC Associates' digital footprint with a sleek, contemporary website design. Take a moment to explore their transformed platform at <a href="http://www.jlcassociates.com.au" target="_blank" rel="noopener noreferrer">jlcassociates.com.au</a>.
    </>
  }
/>

<Accordion
  question="The Barefoot Disciple"
  answer={
    <>
      Tasked with showcasing their book, we constructed a clean, intuitive website for The Barefoot Disciple using WordPress, ACF, and GeneratePress. Discover our work and their compelling content at <a href="http://www.barefootdisciple.com" target="_blank" rel="noopener noreferrer">barefootdisciple.com</a>.
    </>
  }
/>

<Accordion
  question="Instant Fun"
  answer={
    <>
      Transitioning to a modern e-commerce platform, we reimagined Instant Fun's website on Shopify, enhancing the online shopping experience.
    </>
  }
/>

<Accordion
  question="BML Ventures"
  answer={
    <>
      For BML Ventures, we developed a website utilising Gatsby. The result? A platform that's speedy, streamlined, and stylish. Visit <a href="http://www.bmlventures.com.au" target="_blank" rel="noopener noreferrer">bmlventures.com.au</a> to see for yourself.
    </>
  }
/>

<Accordion
  question="Aust-BioSearch"
  answer={
    <>
      We revitalised Aust-BioSearch's website, introducing a sophisticated search function and modernising the homepage for an improved user experience.
    </>
  }
/>

<Accordion
  question="Wanneroo Basketball Association"
  answer={
    <>
      We are currently working on developing a new website for Wanneroo Basketball Association. Stay tuned for the upcoming launch!
    </>
  }
/>
          </motion.div>
        </div>
      </div>
      <Footer />
    </main>
    </>
  );
}
