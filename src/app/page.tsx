"use client";

import { motion } from 'framer-motion';
import Logo from './components/Logo';
import Accordion from './components/Accordion';
import { FiPhone } from 'react-icons/fi';


const variants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-start p-4 pt-20 sm:p-6 md:p-8 lg:p-12 xl:p-28 bg-white text-black">
    <header className="fixed top-0 right-0 bg-white p-8 flex justify-between items-center w-full z-10">
      <div className="flex items-center">
        <FiPhone className="mr-2" />
        <a href="tel:+1234567890" className="text-black hover:text-gray-700 transition-colors duration-300">
          +1 (234) 567-890
        </a>
      </div>
      <a href="https://app.ordinaryagency.com.au" target="_blank" rel="noopener noreferrer" className="bg-black text-white font-bold py-2 px-4 rounded hover:bg-white hover:text-black transition-colors duration-300">
        Login
      </a>
    </header>

      <Logo className="mb-8" />

      <h1 className="text-3xl text-center mb-8">A digital agency that is anything but ordinary</h1>
      <div className="z-10 w-full max-w-5xl items-center justify-center font-mono text-sm">
        <motion.div className="about mb-8" initial="hidden" animate="visible" variants={variants} transition={{ delay: 0.5 }}>
          <h2 className="text-2xl mb-4">About</h2>
          <p>Our digital agency excels in web development, SEO, API integrations, marketing, AI, and marketing strategy. We create stunning websites, optimize them for search engines, and seamlessly integrate different software systems. Our marketing services leverage AI to analyze data and devise effective strategies. We're dedicated to delivering tangible results for Australian businesses in the digital realm.</p>
        </motion.div>

        <motion.div className="team mb-8" initial="hidden" animate="visible" variants={variants} transition={{ delay: 1 }}>
          <h2 className="text-2xl mb-4">Team</h2>
          <p>We are comprising of both local and international talent. Our agency is proud to have a group of professionals with diverse expertise and backgrounds. Many of our team members bring valuable experience from agency backgrounds in Perth, Western Australia.</p>
        </motion.div>

        <motion.div className="services mb-8" initial="hidden" animate="visible" variants={variants} transition={{ delay: 1.5 }}>
          <h2 className="text-2xl mb-4">Our Services</h2>
          <Accordion question="Web Support & Hosting" answer="We provide excellent web support and hosting services." />
          <Accordion question="SEO & PPC" answer="Our SEO and PPC services are designed to help you reach your target audience effectively." />
          <Accordion question="Automations & AI" answer="We implement cutting-edge automations and AI to boost the efficiency and effectiveness of your business processes." />
          <Accordion question="Web Development & API Integrations" answer="Our team of experts offer top-tier web development and API integration services." />
        </motion.div>

        <motion.div className="work mb-8" initial="hidden" animate="visible" variants={variants} transition={{ delay: 2 }}>
          <h2 className="text-2xl mb-4">Our Work</h2>
          <Accordion question="JLC Associates" answer="We rebuilt their website giving them a clean modern design. Check out the website at <a href='http://jlcassociates.com.au' target='_blank' rel='noopener noreferrer'>jlcassociates.com.au</a>." />
          <Accordion question="The Barefoot Disciple" answer="Details of the work we've done for The Barefoot Disciple." />
          <Accordion question="Instant Fun" answer="We rebuilt their website in Shopify, offering a modern ecommerce experience." />
          <Accordion question="BML Ventures" answer="We built BML Ventures a Gatsby website that's fast, clean, and modern. Visit <a href='http://bmlventures.com.au' target='_blank' rel='noopener noreferrer'>bmlventures.com.au</a> to see it." />
          <Accordion question="Aust-BioSearch" answer="We revamped Aust-BioSearch's website search and modernised the homepage." />
          <Accordion question="Wanneroo Basketball Association" answer="Details of the work we've done for Wanneroo Basketball Association." />
          <Accordion question="WA Pest Consultants" answer="Details of the work we've done for WA Pest Consultants." />
          <Accordion question="Central Lending Solutions" answer="We do SEO for Central Lending Solutions, optimizing their content and keywords." />
        </motion.div>
      </div>
    </main>
  )
}
