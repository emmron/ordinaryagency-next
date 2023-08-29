import '../app/globals.css'
import { useState, useEffect, Fragment } from 'react';
import { motion } from 'framer-motion';
import Modal from 'react-modal';
import Logo from '../app/components/Logo';
import Accordion from '../app/components/Accordion';
import Footer from '../app/components/Footer';
import { FiPhone } from 'react-icons/fi';
import Head from "next/head"
import { Parallax } from 'react-parallax';
import Link from 'next/link';
import Circle from '../app/components/Circle';
import Header from '../app/components/Header';


const variants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};
const handleSetup = () => {
  console.log("Setup button clicked");
  // Add your logic here
};
export default function ShopifyPerth() {
  return (
    <>
      <Head>
        <title>Shopify Services | Ordinary Agency</title>
        <meta property="og:title" content="Shopify Services | Ordinary Agency" key="title" />
        <meta name="description" content="Expert Shopify services in Perth" key="desc" />
      </Head>
      <main id="#my-root" className="flex flex-col min-h-screen bg-white items-center justify-start pt-28 md:pt-20 p-4 sm:p-6 md:p-8 lg:p-12 lg:py-0 xl:p-28 bg-transparent text-black">
        <Header />
        <div className="container mx-auto px-4 py-12 text-center">
          <motion.div className="services mb-8"
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ delay: 1.5 }}
          >
            <h2 className="text-5xl font-extrabold mb-4 text-black tracking-wide transform transition-transform duration-500 hover:scale-105">Discover the Power of Shopify with Our Services</h2>
            <Accordion
              question="Shopify Store Setup & Customization"
              answer={
                <div className="text-xl text-black italic mb-12 transform transition-transform duration-500 hover:scale-105">
                  We don't just set up Shopify stores, we create unique online experiences that resonate with your brand. From product listings to payment gateways, we've got you covered. <button onClick={handleSetup}>Learn More</button>
                </div>
              }
            />

            <Accordion
              question="Shopify SEO"
              answer={
                <div className="text-xl text-black italic mb-12 transform transition-transform duration-500 hover:scale-105">
                  Our Shopify SEO services are designed to catapult your online store to the top of search engine results, driving traffic and boosting sales like never before. <button onClick={handleSetup}>Learn More</button>
                </div>
              }
            />

            <Accordion
              question="Shopify Maintenance & Support"
              answer={
                <div className="text-xl text-black italic mb-12 transform transition-transform duration-500 hover:scale-105">
                  With our ongoing maintenance and support, your Shopify store will always be in top shape. From updating product listings to troubleshooting, we're here to ensure your success. <button onClick={handleSetup}>Learn More</button>
                </div>
              }
            />
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
}