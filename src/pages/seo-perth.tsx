import '../app/globals.css'
import { useState, useEffect } from 'react';
import Header from '../app/components/Header';
import Footer from '../app/components/Footer';
import Modal from 'react-modal';
import Head from 'next/head';
import InternalHero from '../app/components/InternalHero';
import Circle from '../app/components/Circle';

const SEOPerth = () => {

  return (
    <>
      <Head>
        <title>Terms and Conditions</title>
        <meta property="og:title" content="SEO Perth" key="title" />
        <meta
          name="description"
          content="SEO Perth."
          key="desc"
        />
      </Head>
      <Header />
      <InternalHero title="SEO Perth" />
      <main className="min-h-screen bg-white items-center justify-start pt-16 md:pt-20 px-4 sm:px-6 md:px-8 lg:px-12 lg:py-0 xl:px-16">
        <section className="max-w-5xl mx-auto px-4 py-10">
          <h2 className="text-2xl font-bold mb-6">SEO Perth</h2>
          <Circle />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SEOPerth;
