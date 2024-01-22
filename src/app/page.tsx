"use client";

import { useState, useEffect, Fragment } from 'react';
import { motion } from 'framer-motion';
import Modal from 'react-modal';
import Logo from './components/Logo';
import Accordion from './components/Accordion';
import Footer from './components/Footer';
import { FiPhone } from 'react-icons/fi';
import { useInView } from 'react-intersection-observer';
import Head from "next/head";
import { Parallax } from 'react-parallax';
import Link from 'next/link';
import Circle from './components/Circle';
import Header from './components/Header';
import BlogSlider from './components/BlogSlider';
import matter from 'gray-matter';

const variants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [markdownPosts, setMarkdownPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      // Assuming posts are now fetched from an API instead of the file system
      const response = await fetch('/api/posts');
      const postsData = await response.json();

      const posts = postsData.map(post => {
        const { data: frontmatter, content } = matter(post.content);

        return {
          slug: post.slug,
          title: frontmatter.title,
          excerpt: content.slice(0, 200), // Create an excerpt
          imageUrl: frontmatter.image, // Assuming an image field in frontmatter
        };
      });

      setMarkdownPosts(posts);
    };

    fetchPosts();
  }, []);

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
    <Header />
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
Our Perth-based team is skilled in integrating automation and AI solutions that are specifically tailored to your business needs. We are passionate about using the latest digital technologies to help Australian businesses enhance their online presence and achieve their business goals.                </>
              }
            />

            <Accordion
              question="Web Development & API Integrations"
              answer={
                <>
Our talented web development team excels in creating exceptional websites and web applications using platforms like WordPress, Shopify, WooCommerce, and custom React applications. By expertly integrating APIs, we ensure seamless functionality, delivering efficient and scalable digital solutions for your business.                </>
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
      We updated JLC Associates' website with a modern and clean design. Check out their new website at <a href="http://jlcassociates.com.au" target="_blank" rel="noopener noreferrer">jlcassociates.com.au</a>.
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
      We moved Instant Fun's website from WooCommerce to Shopify, a more user-friendly online shopping platform. This process involved moving product data from WooCommerce to Shopify and setting up the new site. Visit the improved website at <a href="http://www.instantfun.com.au" target="_blank" rel="noopener noreferrer">instantfun.com.au</a>.
    </>
  }
/>

<Accordion
  question="BML Ventures"
  answer={
    <>
    Given the task to create a fast and elegant platform for BML Ventures, we developed a website using Gatsby, coupled with a WordPress backend, striking a balance between performance and ease of management. Check out their new website at
  <a href="http://www.bmlventures.com.au" target="_blank" rel="noopener noreferrer">bmlventures.com.au</a>.    </>
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
      We've built a new website for Wanneroo Basketball Association. It's integrated with PlayHQ and built using Gatsby and WordPress. Check it out at <a href="http://www.wolfpackbasketball.com.au" target="_blank" rel="noopener noreferrer">wolfpackbasketball.com.au</a>.
    </>
  }
/>
          </motion.div>
        </div>
      </div>
      <BlogSlider posts={markdownPosts} />
    </main>

<Footer />
    </>
  );
}

