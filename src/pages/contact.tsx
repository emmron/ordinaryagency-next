import "../app/globals.css";
import { useState } from "react";
import axios from "axios";
import Header from "../app/components/Header";
import Footer from "../app/components/Footer";
import InternalHero from "../app/components/InternalHero";
import Head from "next/head";
import ReCAPTCHA from "react-google-recaptcha";
import { FaRegEnvelope, FaRegUser, FaRegCommentDots, FaPhone, FaRegClock } from "react-icons/fa";

const formEndpoint = "https://getform.io/f/61892774-9629-43a7-8a42-f3f8e44d35a2";

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("Sending...");

    const name = event.currentTarget.elements.namedItem("name") as HTMLInputElement;
    const email = event.currentTarget.elements.namedItem("email") as HTMLInputElement;
    const message = event.currentTarget.elements.namedItem("message") as HTMLInputElement;

    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };

    let response = await axios.post(formEndpoint, details);

    if (response.data.success) {
      setStatus("🎉 Your message has been successfully sent!");
    } else {
      setStatus("😓 Something went wrong! Please try again.");
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us | Ordinary Agency</title>
        <meta property="og:title" content="Contact Us" key="title" />
        <meta
          name="description"
          content="Contact Ordinary Agency for extraordinary services."
          key="desc"
        />
      </Head>
      <Header />
      <InternalHero title="Contact Us" />

      <main className="min-h-screen bg-white items-center justify-start pt-16 md:pt-20 px-4 sm:px-6 md:px-8 lg:px-12 lg:py-0 xl:px-16">
      <section className="max-w-full px-4 py-12 bg-white text-black">
    <div className="max-w-7xl mx-auto">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-8 text-black tracking-wide">Let's Connect</h2>
        <p className="text-xl text-black mb-10 italic">We'd love to hear from you. Fill in the form below and we'll get back to you as soon as possible.</p>
      </div>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
        <div className="form-group transition-all duration-300 ease-in-out">
          <label htmlFor="name" className="block text-sm font-medium text-black tracking-wide">Your Name</label>
          <input type="text" id="name" name="name" className="w-full p-3 border-b-2 border-black mt-1 focus:outline-none focus:border-black transition duration-300 ease-in-out" required />
        </div>
        <div className="form-group transition-all duration-300 ease-in-out">
          <label htmlFor="email" className="block text-sm font-medium text-black tracking-wide">Your Email</label>
          <input type="email" id="email" name="email" className="w-full p-3 border-b-2 border-black mt-1 focus:outline-none focus:border-black transition duration-300 ease-in-out" required />
        </div>
        <div className="col-span-full md:col-span-2 form-group transition-all duration-300 ease-in-out">
          <label htmlFor="message" className="block text-sm font-medium text-black tracking-wide">Your Message</label>
          <textarea id="message" name="message" className="w-full p-3 border-b-2 border-black mt-1 focus:outline-none focus:border-black transition duration-300 ease-in-out" rows={6} required></textarea>
        </div>
        <div className="col-span-full">
          <button
            type="submit"
            className="px-6 py-3 border-2 border-black text-black bg-white rounded-full font-semibold text-lg shadow-md hover:bg-black hover:text-white hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-black transition-all duration-300 ease-in-out transition-colors delay-150"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </section>
  <section className="max-w-5xl mx-auto px-4 py-12">
    <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-center text-black tracking-wide">Reach Us Directly</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="contact-item border-2 border-black bg-white rounded-lg p-6 md:p-10 space-y-6 transform transition-all duration-500 ease-in-out hover:border-black hover:shadow-lg hover:scale-105">
        <div className="flex items-center mb-4">
          <FaPhone className="text-black transition-colors duration-500 ease-in-out hover:text-gray-700 mr-4" size={28} />
          <h3 className="text-lg md:text-xl font-bold text-black tracking-wide">Phone</h3>
        </div>
        <a href="tel:+0899308081" className="text-black text-xl md:text-2xl font-extrabold transition-colors duration-500 ease-in-out hover:text-gray-800">+08 9930 8081</a>
      </div>
      <div className="contact-item border-2 border-black bg-white rounded-lg p-6 md:p-10 space-y-6 transform transition-all duration-500 ease-in-out hover:border-black hover:shadow-lg hover:scale-105">
        <div className="flex items-center mb-4">
          <FaRegEnvelope className="text-black transition-colors duration-500 ease-in-out hover:text-gray-700 mr-4" size={28} />
          <h3 className="text-lg md:text-xl font-bold text-black tracking-wide">Email</h3>
        </div>
        <a href="mailto:hello@ordinaryagency.com.au" className="text-black text-xl md:text-2xl font-extrabold transition-colors duration-500 ease-in-out hover:text-gray-800">hello@ordinaryagency.com.au</a>
      </div>
    </div>
  </section>


        <section className="max-w-5xl mx-auto px-4 py-10">
          <h2 className="text-2xl font-bold mb-10 text-center text-gray-900">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="faq-item border-2 border-gray-300 bg-white rounded-lg p-6 md:p-10 space-y-6 transform transition-all duration-500 ease-in-out hover:border-indigo-500 hover:shadow-lg hover:-translate-y-1">
              <div className="flex items-start md:items-center mb-4">
                <FaRegClock className="text-black mr-4" size={28} />
                <h3 className="text-lg md:text-xl font-semibold text-gray-800">How quickly do you respond to inquiries?</h3>
              </div>
              <p>We aim to respond to all inquiries within 24 hours during our working days.</p>
            </div>
            <div className="faq-item border-2 border-gray-300 bg-white rounded-lg p-6 md:p-10 space-y-6 transform transition-all duration-500 ease-in-out hover:border-indigo-500 hover:shadow-lg hover:-translate-y-1">
              <div className="flex items-start md:items-center mb-4">
                <FaRegCommentDots className="text-black mr-4" size={28} />
                <h3 className="text-lg md:text-xl font-semibold text-gray-800">What is SEO?</h3>
              </div>
              <p>SEO, or Search Engine Optimization, is the practice of optimizing your website to improve its visibility on search engines like Google.</p>
            </div>
            <div className="faq-item border-2 border-gray-300 bg-white rounded-lg p-6 md:p-10 space-y-6 transform transition-all duration-500 ease-in-out hover:border-indigo-500 hover:shadow-lg hover:-translate-y-1">
              <div className="flex items-start md:items-center mb-4">
                <FaRegUser className="text-black mr-4" size={28} />
                <h3 className="text-lg md:text-xl font-semibold text-gray-800">Why is SEO important?</h3>
              </div>
              <p>SEO is important because it increases the visibility of your website, which can lead to increased traffic, more customers, and ultimately higher revenue.</p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
};

export default Contact;
