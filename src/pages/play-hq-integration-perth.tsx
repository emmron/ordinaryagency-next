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
          <img src="/images/hq.png" alt="Play HQ Integration" className="w-full h-auto mb-8" />
          <h2 className="text-5xl font-extrabold mb-4 text-black tracking-wide transform transition-transform duration-500 hover:scale-105">Empowering Perth Sports Clubs</h2>
          <p className="text-xl text-black italic mb-12 transform transition-transform duration-500 hover:scale-105">Streamline your club's operations and enhance member experience with our top integration services in Perth.</p>

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