import '../app/aos.css';
import '../app/globals.css';
import { useState } from 'react';
import Header from '../app/components/Header';
import Footer from '../app/components/Footer';
import Head from 'next/head';
import InternalHero from '../app/components/InternalHero';
import { FaBug, FaSearch, FaChartLine, FaTools } from 'react-icons/fa';
import { motion } from 'framer-motion';
import SEOSection from '../app/components/seosection.js'; // Assuming you have a similar component for SEO

const PestControlWebAndSEO = () => {
  return (
    <>
      <Head>
        <title>Pest Control Web Development & SEO Services | Ordinary Agency</title>
        <meta property="og:title" content="Pest Control Web Development & SEO Services | Ordinary Agency" key="title" />
        <meta
          name="description"
          content="Specialized web development and SEO services for pest control companies. Enhance your online presence and attract more customers with Ordinary Agency."
          key="desc"
        />
      </Head>
      <Header />
      <InternalHero title="Pest Control Web & SEO Services | Ordinary Agency" />

      <main className="min-h-screen bg-white items-center justify-start pt-40 md:pt-20 px-4 sm:px-6 md:px-8 lg:px-12 lg:py-0 xl:px-16">
        <section className="container mx-auto px-4 py-12 text-center">
          <h2 className="text-5xl font-extrabold mb-4 text-black tracking-wide">Expert Web & SEO Solutions for Pest Control Companies</h2>
          <p className="text-xl text-black italic mb-12">Elevate your pest control business with a professionally designed website and strategic SEO services tailored to your industry's unique needs.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="feature-item text-left p-6 md:p-10 space-y-4">
              <FaTools className="text-black" size={32} />
              <h3 className="text-lg md:text-xl font-bold text-black">Custom Website Development</h3>
              <p className="text-black text-lg">Our custom web development services ensure your pest control website is user-friendly, responsive, and optimized for conversions.</p>
            </div>
            <div className="feature-item text-left p-6 md:p-10 space-y-4">
              <FaSearch className="text-black" size={32} />
              <h3 className="text-lg md:text-xl font-bold text-black">SEO for Pest Control</h3>
              <p className="text-black text-lg">Increase your online visibility and attract more customers with our specialized SEO strategies for the pest control industry.</p>
            </div>
          </div>
        </section>

        <SEOSection />

        <section className="container mx-auto px-4 py-12 text-center">
          <h2 className="text-5xl font-extrabold mb-4 text-black">Why Choose Us for Your Pest Control Website and SEO?</h2>
          <p className="text-xl text-black italic mb-12">We combine industry-specific expertise with digital marketing prowess to deliver results that help your business grow.</p>
        </section>

        <section className="container mx-auto px-4 py-12">
          <h2 className="text-5xl font-extrabold mb-4 text-center text-black">Our Process</h2>
          <div className="flex flex-wrap justify-center gap-10">
            <div className="w-full md:w-1/2 lg:w-1/3">
              <h3 className="text-lg md:text-xl font-bold text-black mb-2">1. Discovery & Strategy</h3>
              <p className="text-black text-lg">We start by understanding your business goals, target audience, and competitive landscape to create a strategic plan for your online success.</p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3">
              <h3 className="text-lg md:text-xl font-bold text-black mb-2">2. Design & Development</h3>
              <p className="text-black text-lg">Our team designs and develops a custom website that showcases your services, helps you stand out, and converts visitors into customers.</p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3">
<p className="text-black text-lg">We implement on-page and off-page SEO tactics specifically tailored for pest control services to improve your search engine rankings and drive organic traffic.</p>
</div>
</div>
</section>

<section className="container mx-auto px-4 py-12 text-center">
<h2 className="text-5xl font-extrabold mb-4 text-black">Frequently Asked Questions</h2>
<div className="text-left text-lg">
<h3 className="font-bold mb-2">How long does it take to see results from SEO?</h3>
<p>SEO is a long-term strategy. Typically, it can take several months to see significant improvements in search rankings and traffic, but this can vary based on competition and industry.</p>

<h3 className="font-bold mb-2 mt-4">Can I update the website myself?</h3>
<p>Yes, we build our websites on content management systems that are user-friendly, allowing you to make updates and changes without technical expertise.</p>

<h3 className="font-bold mb-2 mt-4">Do you provide ongoing support and maintenance?</h3>
<p>Yes, we offer ongoing support and maintenance packages to ensure your website remains up-to-date, secure, and aligned with SEO best practices.</p>
</div>
</section>

<section className="container mx-auto px-4 py-12 text-center">
<h2 className="text-5xl font-extrabold mb-4 text-black">Get in Touch for a Custom Quote</h2>
<p className="text-xl text-black italic mb-12">Contact us to discuss how we can build a robust online presence for your pest control business with our web and SEO services.</p>
{/* Add a contact form or contact information here */}
</section>

{/* Additional content sections can be added here as needed. */}

</main>
<Footer />
</>
);
};

export default PestControlWebAndSEO;