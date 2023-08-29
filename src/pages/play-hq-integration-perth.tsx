import '../app/aos.css'
import '../app/globals.css'
import { useState } from "react";
import Header from "../app/components/Header";
import Footer from "../app/components/Footer";
import Head from "next/head";
import InternalHero from "../app/components/InternalHero";
import { FaChartLine, FaRegLightbulb, FaRocket, FaSearchDollar, FaCheck } from "react-icons/fa";
import { motion } from 'framer-motion';

const PlayHQPerth = () => {
  return (
    <>
      <Head>
        <title>Play HQ Integration | Perth Sports Clubs | Ordinary Agency</title>
        <meta property="og:title" content="Play HQ Integration | Perth Sports Clubs | Ordinary Agency" key="title" />
        <meta
          name="description"
          content="Experience seamless Play HQ integration with Ordinary Agency. Boost your sports club's management efficiency and member experience with our top-rated integration services. As a leading digital agency in Perth, we offer strategic, ROI-focused solutions tailored to your club's needs."
          key="desc"
        />
      </Head>
      <Header />
      <InternalHero title="Play HQ Integration | Ordinary Agency" />

      <main className="min-h-screen bg-white items-center justify-start pt-40 md:pt-20 px-4 sm:px-6 md:px-8 lg:px-12 lg:py-0 xl:px-16">
        <section className="container mx-auto px-4 py-12 text-center">
          <h2 className="text-5xl font-extrabold mb-4 text-black tracking-wide transform transition-transform duration-500 hover:scale-105">Empowering Perth Sports Clubs with Play HQ Integration</h2>
          <p className="text-xl text-black italic mb-12 transform transition-transform duration-500 hover:scale-105">Embark on a journey of digital transformation with Ordinary Agency, your dedicated Play HQ integration partner. Streamline your club's operations and enhance member experience with our top integration services in Perth.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="integration-item text-left p-6 md:p-10 space-y-4 transition-all duration-500 ease-in-out transform hover:shadow-2xl hover:scale-105">
                <FaSearchDollar className="text-black transition-all duration-500 ease-in-out hover:scale-150 hover:text-gray-700" size={32} />
                <h3 className="text-lg md:text-xl font-bold text-black tracking-wide">ROI-Driven Integration</h3>
                <p className="text-black text-lg">We strategically optimize Play HQ integration for maximum return on investment. Our services are designed to deliver impactful, measurable results.</p>
            </div>
            <div className="integration-item text-left p-6 md:p-10 space-y-4 transition-all duration-500 ease-in-out transform hover:shadow-2xl hover:scale-105">
                <FaCheck className="text-black transition-all duration-500 ease-in-out hover:scale-150 hover:text-gray-700" size={32} />
                <h3 className="text-lg md:text-xl font-bold text-black tracking-wide">Performance Tracking</h3>
                <p className="text-black text-lg">Experience the power of real-time performance reports with our integration services. We provide you with insights that help you understand your digital growth.</p>
            </div>
            <div className="integration-item text-left p-6 md:p-10 space-y-4 transition-all duration-500 ease-in-out transform hover:shadow-2xl hover:scale-105">
                <FaRocket className="text-black transition-all duration-500 ease-in-out hover:scale-150 hover:text-gray-700" size={32} />
                <h3 className="text-lg md:text-xl font-bold text-black tracking-wide">Growth-Oriented Integration</h3>
                <p className="text-black text-lg">At Ordinary Agency, we're committed to helping Perth sports clubs reach new heights. Leverage our integration services to elevate your club's efficiency and member satisfaction.</p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12 text-center">
          <h2 className="text-5xl font-extrabold mb-4 text-black tracking-wide transform transition-transform duration-500 hover:scale-105">Why Choose Ordinary Agency for Your Play HQ Integration</h2>
          <p className="text-xl text-black italic mb-12 transform transition-transform duration-500 hover:scale-105">Our unique, personalised approach to Play HQ integration sets us apart in Perth's competitive digital landscape.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="service-item text-left p-6 md:p-10 space-y-6 transition-all duration-500 ease-in-out transform hover:shadow-2xl hover:scale-105">
                  <FaRegLightbulb className="text-black transition-all duration-500 ease-in-out hover:scale-150 hover:text-gray-700 mr-4" size={32} />
                  <h3 className="text-lg md:text-xl font-bold text-black tracking-wide">Innovative Integration Strategies</h3>
                  <p className="text-black text-lg">Experience innovative integration techniques with Ordinary Agency. We use state-of-the-art tactics tailored to meet the specific needs of your Perth sports club.</p>
              </div>
              <div className="service-item text-left p-6 md:p-10 space-y-6 transition-all duration-500 ease-in-out transform hover:shadow-2xl hover:scale-105">
                  <FaChartLine className="text-black transition-all duration-500 ease-in-out hover:scale-150 hover:text-gray-700 mr-4" size={32} />
                  <h3 className="text-lg md:text-xl font-bold text-black tracking-wide">Data-Driven Integration Decisions</h3>
                  <p className="text-black text-lg">We believe in the power of data. Our decisions are backed by extensive market research and data analysis to deliver successful integration strategies for your Perth sports club.</p>
              </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12 text-center">
            <h2 className="text-5xl font-extrabold mb-4 text-black tracking-wide transform transition-transform duration-500 hover:scale-105">Contact Our Agency for A Free Consultation</h2>
            <p className="text-xl text-black italic mb-12 transform transition-transform duration-500 hover:scale-105">
                Ready to streamline your sports club's operations? Contact Ordinary Agency, your trusted Play HQ integration partner in Perth, for a free consultation. We'd be more than happy to discuss your club's goals and how our integration services can help you achieve them.
            </p>
        </section>
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        <script>
            AOS.init();
        </script>
      </main>
      <Footer />
    </>
  );
};

export default PlayHQPerth;