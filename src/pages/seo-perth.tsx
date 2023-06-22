import '../app/globals.css'
import { useState } from "react";
import Header from "../app/components/Header";
import Footer from "../app/components/Footer";
import Head from "next/head";
import InternalHero from "../app/components/InternalHero";
import { FaChartLine, FaRegLightbulb, FaRocket, FaSearchDollar, FaCheck } from "react-icons/fa";

const SEOPerth = () => {
  return (
    <>
      <Head>
        <title>Perth SEO | Top SEO Services Perth | SEO Agency Perth | Ordinary Agency</title>
        <meta property="og:title" content="Perth SEO | Top SEO Services Perth | SEO Agency Perth | Ordinary Agency" key="title" />
        <meta
          name="description"
          content="Experience the best Perth SEO with Ordinary Agency. Boost your online visibility and business growth through our top-rated SEO services Perth. As a leading SEO agency Perth, we offer strategic, ROI-focused SEO solutions tailored to your business needs."
          key="desc"
        />
      </Head>
      <Header />
      <InternalHero title="Perth SEO | Ordinary Agency" />

      <main className="min-h-screen bg-white items-center justify-start pt-40 md:pt-20 px-4 sm:px-6 md:px-8 lg:px-12 lg:py-0 xl:px-16">
        <section className="container mx-auto px-4 py-12 text-center">
          <h2 className="text-5xl font-extrabold mb-4 text-black tracking-wide transform transition-transform duration-500 hover:scale-105">Unleashing the Power of SEO in Perth</h2>
          <p className="text-xl text-black italic mb-12 transform transition-transform duration-500 hover:scale-105">Embark on a journey of digital growth with Ordinary Agency, your dedicated Perth SEO partner. Elevate your online presence and drive more business with our top SEO services in Perth.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="seo-item text-left p-6 md:p-10 space-y-4 transition-all duration-500 ease-in-out transform hover:shadow-2xl hover:scale-105">
                <FaSearchDollar className="text-black transition-all duration-500 ease-in-out hover:scale-150 hover:text-gray-700" size={32} />
                <h3 className="text-lg md:text-xl font-bold text-black tracking-wide">ROI-Driven Perth SEO</h3>
                <p className="text-black text-lg">We strategically optimize SEO for maximum return on investment. As a leading SEO agency Perth, our services are designed to deliver impactful, measurable results.</p>
            </div>
            <div className="seo-item text-left p-6 md:p-10 space-y-4 transition-all duration-500 ease-in-out transform hover:shadow-2xl hover:scale-105">
                <FaCheck className="text-black transition-all duration-500 ease-in-out hover:scale-150 hover:text-gray-700" size={32} />
                <h3 className="text-lg md:text-xl font-bold text-black tracking-wide">Performance Tracking</h3>
                <p className="text-black text-lg">Experience the power of real-time performance reports with our SEO services Perth. We provide you with insights that help you understand your digital growth.</p>
            </div>
            <div className="seo-item text-left p-6 md:p-10 space-y-4 transition-all duration-500 ease-in-out transform hover:shadow-2xl hover:scale-105">
                <FaRocket className="text-black transition-all duration-500 ease-in-out hover:scale-150 hover:text-gray-700" size={32} />
                <h3 className="text-lg md:text-xl font-bold text-black tracking-wide">Growth-Oriented SEO</h3>
                <p className="text-black text-lg">At Ordinary Agency, we're committed to helping Perth businesses reach new heights. Leverage our SEO services Perth to elevate your online visibility and business growth.</p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12 text-center">
          <h2 className="text-5xl font-extrabold mb-4 text-black tracking-wide transform transition-transform duration-500 hover:scale-105">Why Choose Ordinary Agency as Your SEO Agency Perth</h2>
          <p className="text-xl text-black italic mb-12 transform transition-transform duration-500 hover:scale-105">Our unique, personalised approach to SEO sets us apart in Perth's competitive digital landscape.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="service-item text-left p-6 md:p-10 space-y-6 transition-all duration-500 ease-in-out transform hover:shadow-2xl hover:scale-105">
                  <FaRegLightbulb className="text-black transition-all duration-500 ease-in-out hover:scale-150 hover:text-gray-700 mr-4" size={32} />
                  <h3 className="text-lg md:text-xl font-bold text-black tracking-wide">Innovative SEO Strategies</h3>
                  <p className="text-black text-lg">Experience innovative SEO techniques with Ordinary Agency. We use state-of-the-art tactics tailored to meet the specific needs of your Perth business.</p>
              </div>
              <div className="service-item text-left p-6 md:p-10 space-y-6 transition-all duration-500 ease-in-out transform hover:shadow-2xl hover:scale-105">
                  <FaChartLine className="text-black transition-all duration-500 ease-in-out hover:scale-150 hover:text-gray-700 mr-4" size={32} />
                  <h3 className="text-lg md:text-xl font-bold text-black tracking-wide">Data-Driven SEO Decisions</h3>
                  <p className="text-black text-lg">We believe in the power of data. Our decisions are backed by extensive market research and data analysis to deliver successful SEO strategies for your Perth business.</p>
              </div>
          </div>
        </section>
        <section className="container mx-auto px-4 py-12 text-center">
    <h2 className="text-5xl font-extrabold mb-4 text-black tracking-wide transform transition-transform duration-500 hover:scale-105">What is SEO and Why it's Crucial for Your Business</h2>
    <p className="text-xl text-black italic mb-12 transform transition-transform duration-500 hover:scale-105">
        Search engine optimization, or SEO, is the process of enhancing a website's visibility on search engine results pages (SERPs). By leveraging SEO, Perth businesses can increase their online visibility, reach more potential customers, and improve their bottom line. SEO is crucial for businesses of all sizes because it helps attract organic traffic, build credibility, and deliver a better user experience.
    </p>
</section>

<section className="container mx-auto px-4 py-12 text-center">
    <h2 className="text-5xl font-extrabold mb-4 text-black tracking-wide transform transition-transform duration-500 hover:scale-105">Our SEO Approach</h2>
    <p className="text-xl text-black italic mb-12 transform transition-transform duration-500 hover:scale-105">
        At Ordinary Agency, we understand that no two businesses are the same. That's why we offer bespoke SEO solutions tailored to your unique business needs. Our SEO services in Perth include keyword research, on-page and off-page optimization, technical SEO, local SEO, and SEO analytics. With a focus on driving sustainable growth, our approach combines the best of technology and creativity to deliver unparalleled results.
    </p>
</section>

<section className="container mx-auto px-4 py-12 text-center">
    <h2 className="text-5xl font-extrabold mb-4 text-black tracking-wide transform transition-transform duration-500 hover:scale-105">Common SEO Misconceptions</h2>
    <p className="text-xl text-black italic mb-12 transform transition-transform duration-500 hover:scale-105">
        One of the most common misconceptions about SEO is that it delivers instant results. The truth is that SEO is a long-term strategy and it may take several months to see significant improvements. Another misconception is that SEO is all about keywords. While keywords are important, modern SEO involves a wide range of factors including content quality, user experience, site speed, mobile-friendliness, and more.
    </p>
</section>

<section className="container mx-auto px-4 py-12 text-center">
    <h2 className="text-5xl font-extrabold mb-4 text-black tracking-wide transform transition-transform duration-500 hover:scale-105">FAQs About Our Perth SEO Services</h2>
    <div className="text-left text-lg">
        <h3 className="font-bold mb-2">What kind of businesses do you work with?</h3>
        <p>We work with businesses of all sizes across various industries. Whether you're a local Perth business or an international corporation, we can tailor our SEO services to fit your needs.</p>

        <h3 className="font-bold mb-2 mt-4">How do you track SEO performance?</h3>
        <p>We use a variety of tools and metrics to track SEO performance, including organic traffic, keyword rankings, bounce rate, page loading time, and more.</p>

        <h3 className="font-bold mb-2 mt-4">How long does it take to see results with SEO?</h3>
        <p>SEO is a long-term strategy and it usually takes 3-6 months to see noticeable results. However, this can vary based on a number of factors, including the competitiveness of your industry and the current state of your website.</p>
    </div>
</section>
<section className="container mx-auto px-4 py-12 text-center">
    <h2 className="text-5xl font-extrabold mb-4 text-black tracking-wide transform transition-transform duration-500 hover:scale-105">The Role of Our SEO Agency in Perth</h2>
    <p className="text-xl text-black italic mb-12 transform transition-transform duration-500 hover:scale-105">
        As a leading SEO agency in Perth, we aim to bridge the gap between businesses and their target audience. We employ innovative techniques and SEO strategies that not only increase your website's visibility but also improve its credibility. Our team of SEO experts in Perth understand the local market dynamics and consumer behavior, which enables us to craft effective SEO campaigns for Perth businesses.
    </p>
</section>

<section className="container mx-auto px-4 py-12 text-center">
    <h2 className="text-5xl font-extrabold mb-4 text-black tracking-wide transform transition-transform duration-500 hover:scale-105">SEO Services Perth - Our Offerings</h2>
    <p className="text-xl text-black italic mb-12 transform transition-transform duration-500 hover:scale-105">
        Our range of SEO services in Perth includes, but is not limited to, on-page and off-page optimization, link building, keyword analysis, competitor analysis, website audits, and content marketing. We also specialize in local SEO, helping Perth businesses improve their local search rankings and reach more customers in the region.
    </p>
</section>

<section className="container mx-auto px-4 py-12 text-center">
    <h2 className="text-5xl font-extrabold mb-4 text-black tracking-wide transform transition-transform duration-500 hover:scale-105">Why is Local SEO Important for Perth Businesses?</h2>
    <p className="text-xl text-black italic mb-12 transform transition-transform duration-500 hover:scale-105">
        With the rising competition in the digital market, it is essential for businesses to target customers in their locale. Local SEO is a strategy that helps businesses rank higher in local search results. For Perth businesses, local SEO is a key way to reach more potential customers in the area and build a strong local presence.
    </p>
</section>

<section className="container mx-auto px-4 py-12 text-center">
    <h2 className="text-5xl font-extrabold mb-4 text-black tracking-wide transform transition-transform duration-500 hover:scale-105">Contact Our SEO Agency Perth for A Free Consultation</h2>
    <p className="text-xl text-black italic mb-12 transform transition-transform duration-500 hover:scale-105">
        Ready to take your online presence to the next level? Contact Ordinary Agency, your trusted SEO agency in Perth, for a free consultation. We'd be more than happy to discuss your business goals and how our SEO services in Perth can help you achieve them.
    </p>
</section>
      </main>
      <Footer />
    </>
  );
};

export default SEOPerth;
