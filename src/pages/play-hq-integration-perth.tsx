import '../app/aos.css'
import '../app/globals.css'
import { useState } from "react";
import Header from "../app/components/Header";
import Footer from "../app/components/Footer";
import Head from "next/head";
import InternalHero from "../app/components/InternalHero";
import { FaBasketballBall, FaCalendar, FaFutbol } from "react-icons/fa";
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

      <main className="min-h-screen bg-white items-center justify-start pt-20 md:pt-10 px-4 sm:px-6 md:px-8 lg:px-12 lg:py-0 xl:px-16">
        <section className="container mx-auto px-4 py-6 text-center" data-aos="fade-up">
          <img src="/images/hq.png" alt="Play HQ Integration" className="w-64 h-auto mx-auto mb-4" data-aos="fade-up" data-aos-delay="100" />
          <h2 className="text-5xl font-extrabold mb-2 text-black tracking-wide transform transition-transform duration-500 hover:scale-105" data-aos="fade-up" data-aos-delay="200">Revolutionizing Perth Sports Clubs with Play HQ Integration</h2>
          <p className="text-2xl text-black italic mb-6 transform transition-transform duration-500 hover:scale-105" data-aos="fade-up" data-aos-delay="300">Unleash the power of Play HQ integration and transform your sports club into a digital powerhouse. Stay ahead of the game with real-time updates and seamless integration.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4" data-aos="fade-up" data-aos-delay="400">
            <div className="integration-item text-left p-3 md:p-5 space-y-2 transition-all duration-500 ease-in-out transform hover:scale-105 bg-blue-100 rounded-lg" data-aos="fade-up" data-aos-delay="500">
                <FaBasketballBall className="text-black transition-all duration-500 ease-in-out hover:scale-150 hover:text-gray-700" size={32} data-aos="fade-up" data-aos-delay="600" />
                <h3 className="text-lg md:text-xl font-bold text-black tracking-wide" data-aos="fade-up" data-aos-delay="700">Seamless Integration</h3>
                <p className="text-black text-lg" data-aos="fade-up" data-aos-delay="800">Experience the future of sports management with our Play HQ integration. Add fixtures and season stats to your website effortlessly, providing your members with instant access to crucial information.</p>
            </div>
            <div className="integration-item text-left p-3 md:p-5 space-y-2 transition-all duration-500 ease-in-out transform hover:scale-105 bg-blue-100 rounded-lg" data-aos="fade-up" data-aos-delay="900">
                <FaCalendar className="text-black transition-all duration-500 ease-in-out hover:scale-150 hover:text-gray-700" size={32} data-aos="fade-up" data-aos-delay="1000" />
                <h3 className="text-lg md:text-xl font-bold text-black tracking-wide" data-aos="fade-up" data-aos-delay="1100">Real-Time Updates</h3>
                <p className="text-black text-lg" data-aos="fade-up" data-aos-delay="1200">Keep your members in the loop with real-time updates. Our Play HQ integration ensures your members never miss a beat, enhancing their experience and engagement.</p>
            </div>
            <div className="integration-item text-left p-3 md:p-5 space-y-2 transition-all duration-500 ease-in-out transform hover:scale-105 bg-blue-100 rounded-lg" data-aos="fade-up" data-aos-delay="1300">
                <FaFutbol className="text-black transition-all duration-500 ease-in-out hover:scale-150 hover:text-gray-700" size={32} data-aos="fade-up" data-aos-delay="1400" />
                <h3 className="text-lg md:text-xl font-bold text-black tracking-wide" data-aos="fade-up" data-aos-delay="1500">Efficient Management</h3>
                <p className="text-black text-lg" data-aos="fade-up" data-aos-delay="1600">Play HQ integration takes the hassle out of sports club management. Focus on what truly matters - the game, while we handle the rest.</p>
            </div>
          </div>
        </section>
                <section className="flex flex-col md:flex-row bg-blue-200 rounded-lg p-3 md:p-5 shadow-lg" style={{backgroundImage: 'url(/images/eee.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
                  <div className="w-full md:w-1/2 flex flex-col justify-center items-start p-5" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
                    <h3 className="text-4xl md:text-5xl font-bold text-white tracking-wide mb-4" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.5)'}}>Experience the Convenience of Play HQ Integration</h3>
                    <p className="text-white text-lg leading-relaxed" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.5)'}}>Play HQ integration brings everything you need to your fingertips. Say goodbye to the hassle of searching for information. Managing your sports club has never been easier.</p>
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