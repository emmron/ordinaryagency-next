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
      <section className="bg-white max-w-full px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-900 tracking-wide">Let's Connect</h2>
          <p className="text-xl text-gray-600 mb-10 italic">We'd love to hear from you. Fill in the form below and we'll get back to you as soon as possible.</p>
        </div>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 tracking-wide">Your Name</label>
            <input type="text" id="name" name="name" className="w-full p-3 border-2 border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-lg transition duration-300 ease-in-out" required />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 tracking-wide">Your Email</label>
            <input type="email" id="email" name="email" className="w-full p-3 border-2 border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-lg transition duration-300 ease-in-out" required />
          </div>
          <div className="col-span-full md:col-span-2">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 tracking-wide">Your Message</label>
            <textarea id="message" name="message" className="w-full p-3 border-2 border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-lg transition duration-300 ease-in-out" rows={6} required></textarea>
          </div>
          <div className="col-span-full">
            <button
              type="submit"
              className="w-full p-3 text-white bg-black rounded-lg font-semibold text-lg hover:bg-gray-900 transition-colors duration-300 ease-in-out shadow-lg focus:outline-none"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>


        <section className="max-w-5xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-900">Reach Us Directly</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="border-2 border-gray-300 bg-white rounded-lg p-6 md:p-10 space-y-6 transform transition-all duration-500 ease-in-out hover:border-indigo-500 hover:shadow-lg hover:-translate-y-1">
              <div className="flex items-start md:items-center mb-4">
                <FaPhone className="text-black mr-4" size={28} />
                <h3 className="text-lg md:text-xl font-semibold text-gray-800">Phone</h3>
              </div>
              <a href="tel:+0899308081" className="text-gray-800 text-xl md:text-2xl hover:text-indigo-500 font-bold">+08 9930 8081</a>
            </div>
            <div className="border-2 border-gray-300 bg-white rounded-lg p-6 md:p-10 space-y-6 transform transition-all duration-500 ease-in-out hover:border-indigo-500 hover:shadow-lg hover:-translate-y-1">
              <div className="flex items-start md:items-center mb-4">
                <FaRegEnvelope className="text-black mr-4" size={28} />
                <h3 className="text-lg md:text-xl font-semibold text-gray-800">Email</h3>
              </div>
              <a href="mailto:hello@ordinaryagency.com.au" className="text-gray-800 text-xl md:text-2xl hover:text-indigo-500 font-bold">hello@ordinaryagency.com.au</a>
            </div>
          </div>
        </section>
        <section className="max-w-5xl mx-auto px-4 py-10">
          <h2 className="text-2xl font-bold mb-10 text-center text-gray-900">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="border-2 border-gray-300 bg-white rounded-lg p-6 md:p-10 space-y-6 transform transition-all duration-500 ease-in-out hover:border-indigo-500 hover:shadow-lg hover:-translate-y-1">
              <div className="flex items-start md:items-center mb-4">
                <FaRegClock className="text-black mr-4" size={28} />
                <h3 className="text-lg md:text-xl font-semibold text-gray-800">How quickly do you respond to inquiries?</h3>
              </div>
              <p>We aim to respond to all inquiries within 24 hours during our working days.</p>
            </div>
            <div className="border-2 border-gray-300 bg-white rounded-lg p-6 md:p-10 space-y-6 transform transition-all duration-500 ease-in-out hover:border-indigo-500 hover:shadow-lg hover:-translate-y-1">
              <div className="flex items-start md:items-center mb-4">
                <FaRegCommentDots className="text-black mr-4" size={28} />
                <h3 className="text-lg md:text-xl font-semibold text-gray-800">What is SEO?</h3>
              </div>
              <p>SEO, or Search Engine Optimization, is the practice of optimizing your website to improve its visibility on search engines like Google.</p>
            </div>
            <div className="border-2 border-gray-300 bg-white rounded-lg p-6 md:p-10 space-y-6 transform transition-all duration-500 ease-in-out hover:border-indigo-500 hover:shadow-lg hover:-translate-y-1">
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
