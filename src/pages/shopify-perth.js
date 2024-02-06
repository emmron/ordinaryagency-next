import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";
import InternalHero from "../components/InternalHero";
import { FaBasketballBall, FaCalendar, FaFutbol } from "react-icons/fa";
import { motion } from 'framer-motion';
import Accordion from '../components/Accordion';

const ShopifyPerth = () => {
  const handleSetup = () => {
    console.log("Setup button clicked");
    // Add your logic here
  };

  return (
    <>
      <Head>
        <title>Shopify Services | Ordinary Agency</title>
        <meta property="og:title" content="Shopify Services | Ordinary Agency" key="title" />
        <meta name="description" content="Expert Shopify services in Perth" key="desc" />
      </Head>
      <Header />
      <InternalHero title="Shopify Services | Ordinary Agency" />

      <main className="min-h-screen bg-white flex items-center justify-start pt-20 md:pt-10 px-4 sm:px-6 md:px-8 lg:px-12 lg:py-0 xl:px-16 overflow-x-hidden">
        <section className="container mx-auto px-4 py-6 text-center bg-white">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-2 tracking-wide transform transition-transform duration-500 hover:scale-105">Discover the Power of Shopify with Our Services</h2>
          <p className="text-lg sm:text-xl md:text-2xl italic mb-6 transform transition-transform duration-500 hover:scale-105">We offer a range of Shopify services to help your business succeed online.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Accordion
              question="Shopify Store Setup & Customization"
              answer={
                <div className="text-lg md:text-xl text-black italic mb-12 transform transition-transform duration-500 hover:scale-105">
                  We don't just set up Shopify stores, we create unique online experiences that resonate with your brand. From product listings to payment gateways, we've got you covered. <button className="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-700" onClick={handleSetup}>Learn More</button>
                </div>
              }
            />

            <Accordion
              question="Shopify SEO"
              answer={
                <div className="text-lg md:text-xl text-black italic mb-12 transform transition-transform duration-500 hover:scale-105">
                  Our Shopify SEO services are designed to catapult your online store to the top of search engine results, driving traffic and boosting sales like never before. <button className="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-700" onClick={handleSetup}>Learn More</button>
                </div>
              }
            />

            <Accordion
              question="Shopify Maintenance & Support"
              answer={
                <div className="text-lg md:text-xl text-black italic mb-12 transform transition-transform duration-500 hover:scale-105">
                  With our ongoing maintenance and support, your Shopify store will always be in top shape. From updating product listings to troubleshooting, we're here to ensure your success. <button className="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-700" onClick={handleSetup}>Learn More</button>
                </div>
              }
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ShopifyPerth;