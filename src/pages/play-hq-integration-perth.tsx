import '../app/aos.css'
import '../app/globals.css'
import { useState } from "react";
import Header from "../app/components/Header";
import Footer from "../app/components/Footer";
import Head from "next/head";
import InternalHero from "../app/components/InternalHero";
import { FaBasketballBall, FaCalendarAlt, FaWhistle } from "react-icons/fa";
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
          <img src="/images/hq.png" alt="Play HQ Integration" className="w-64 h-auto mx-auto mb-8" />
          <h2 className="text-5xl font-extrabold mb-4 text-black tracking-wide transform transition-transform duration-500 hover:scale-105">Empowering Perth Sports Clubs with Play HQ Integration</h2>
          <p className="text-xl text-black italic mb-12 transform transition-transform duration-500 hover:scale-105">With Play HQ integration, you can easily add fixtures and season stats to your website, making it easy for your members to stay up-to-date.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="integration-item text-left p-6 md:p-10 space-y-4 transition-all duration-500 ease-in-out transform hover:shadow-2xl hover:scale-105">
                <FaBasketballBall className="text-black transition-all duration-500 ease-in-out hover:scale-150 hover:text-gray-700" size={32} />
                <h3 className="text-lg md:text-xl font-bold text-black tracking-wide">Seamless Integration</h3>
                <p className="text-black text-lg">Our Play HQ integration allows you to seamlessly add fixtures and season stats to your website, providing your members with easy access to important information.</p>
            </div>
            <div className="integration-item text-left p-6 md:p-10 space-y-4 transition-all duration-500 ease-in-out transform hover:shadow-2xl hover:scale-105">
                <FaCalendarAlt className="text-black transition-all duration-500 ease-in-out hover:scale-150 hover:text-gray-700" size={32} />
                <h3 className="text-lg md:text-xl font-bold text-black tracking-wide">Real-Time Updates</h3>
                <p className="text-black text-lg">With real-time updates, your members can stay up-to-date with the latest fixtures and stats, improving their experience and engagement.</p>
            </div>
            <div className="integration-item text-left p-6 md:p-10 space-y-4 transition-all duration-500 ease-in-out transform hover:shadow-2xl hover:scale-105">
                <FaWhistle className="text-black transition-all duration-500 ease-in-out hover:scale-150 hover:text-gray-700" size={32} />
                <h3 className="text-lg md:text-xl font-bold text-black tracking-wide">Efficient Management</h3>
                <p className="text-black text-lg">Play HQ integration simplifies the management of your sports club, allowing you to focus on what matters most - the game.</p>
            </div>
          </div>
        </section>

        <section className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <img src="/images/playhqcricket.png" alt="Play HQ" className="w-full h-auto" />
          </div>
          <div className="w-full md:w-1/2 p-6 md:p-10 space-y-4">
            <h3 className="text-lg md:text-xl font-bold text-black tracking-wide">The Convenience of Play HQ Integration</h3>
            <p className="text-black text-lg">With Play HQ integration, there's no more searching for this or that. Everything you need is right at your fingertips, making it easier than ever to manage your sports club.</p>
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