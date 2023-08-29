"use client";

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
            <h2 className="text-5xl font-extrabold mb-4 text-black tracking-wide transform transition-transform duration-500 hover:scale-105">Our Shopify Services</h2>
            <Accordion
              question="Shopify Store Setup & Customization"
              answer={
                <div className="text-xl text-black italic mb-12 transform transition-transform duration-500 hover:scale-105">
                  We help businesses set up their Shopify stores and customize them to match their brand. This includes setting up product listings, payment gateways, shipping settings, and more.
                </div>
              }
            />

            <Accordion
              question="Shopify SEO"
              answer={
                <div className="text-xl text-black italic mb-12 transform transition-transform duration-500 hover:scale-105">
                  We optimize your Shopify store for search engines to help you rank higher, attract more traffic, and increase sales.
                </div>
              }
            />

            <Accordion
              question="Shopify Maintenance & Support"
              answer={
                <div className="text-xl text-black italic mb-12 transform transition-transform duration-500 hover:scale-105">
                  We provide ongoing maintenance and support services to keep your Shopify store running smoothly. This includes updating product listings, managing promotions, troubleshooting issues, and more.
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