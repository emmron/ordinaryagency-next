import "../app/globals.css";
import { useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";
import InternalHero from "../components/InternalHero";
import Head from "next/head";
import ReCAPTCHA from "react-google-recaptcha";
import { FaRegEnvelope, FaRegUser, FaRegCommentDots, FaPhone, FaRegClock } from "react-icons/fa";

const formEndpoint = "https://getform.io/f/61892774-9629-43a7-8a42-f3f8e44d35a2";

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("Sending...");

    const name = event.currentTarget.elements.namedItem("name");
    const email = event.currentTarget.elements.namedItem("email");
    const message = event.currentTarget.elements.namedItem("message");

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

      <main className="min-h-screen bg-white items-center justify-start pt-40 md:pt-20 px-4 sm:px-6 md:px-8 lg:px-12 lg:py-0 xl:px-16">
      <section className="flex flex-col items-center justify-center h-screen text-black bg-white overflow-auto">
        <div className="container mx-auto px-4 py-24">
          <div className="flex flex-wrap justify-center">
            <div className="lg:w-6/12 px-4">
              <div className="text-center mb-16">
                <h2 className="text-5xl font-extrabold mb-8 text-black tracking-wide transform transition-transform duration-500 hover:scale-105">Let's Connect</h2>
                <p className="text-xl text-black italic transform transition-transform duration-500 hover:scale-105">We'd love to hear from you. Fill in the form below and we'll get back to you as soon as possible.</p>
              </div>
              <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
                <div className="form-group transition-all duration-500 ease-in-out hover:bg-gray-100 rounded p-2">
                  <label htmlFor="name" className="block text-sm font-medium text-black tracking-wide transform transition-transform duration-500 hover:scale-105">Your Name</label>
                  <input type="text" id="name" name="name" className="w-full p-3 border-b-2 border-black mt-2 focus:outline-none focus:border-black transition duration-500 ease-in-out" required />
                </div>
                <div className="form-group transition-all duration-500 ease-in-out hover:bg-gray-100 rounded p-2">
                  <label htmlFor="email" className="block text-sm font-medium text-black tracking-wide transform transition-transform duration-500 hover:scale-105">Your Email</label>
                  <input type="email" id="email" name="email" className="w-full p-3 border-b-2 border-black mt-2 focus:outline-none focus:border-black transition duration-500 ease-in-out" required />
                </div>
                <div className="col-span-full md:col-span-2 form-group transition-all duration-500 ease-in-out hover:bg-gray-100 rounded p-2">
                  <label htmlFor="message" className="block text-sm font-medium text-black tracking-wide transform transition-transform duration-500 hover:scale-105">Your Message</label>
                  <textarea id="message" name="message" className="w-full p-3 border-b-2 border-black mt-2 focus:outline-none focus:border-black transition duration-500 ease-in-out" rows={6} required></textarea>
                </div>
                <div className="col-span-full text-center mt-8">
                  <button
                    type="submit"
                    className="inline-block px-8 py-3 border-2 border-black text-black bg-white rounded-full font-semibold text-lg focus:outline-none transition-all duration-500 ease-in-out transition-colors delay-150 transform hover:scale-105 hover:bg-black hover:text-white"
                  >
                    Submit
                  </button>
                </div>
              </form>
              <div className="mt-12 text-center">
                <p className="text-sm text-black opacity-60 transition-opacity duration-500 hover:opacity-100">We respect your privacy and take protecting it seriously.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-5xl mx-auto px-4 py-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-center text-black tracking-wide transform transition-all duration-500 ease-in-out hover:scale-110">Reach Us Directly</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="contact-item border-2 border-black bg-white rounded-lg p-6 md:p-10 space-y-6 transition-all duration-500 ease-in-out transform hover:shadow-2xl hover:scale-105">
                  <div className="flex items-center mb-4 transform transition-all duration-500 ease-in-out hover:translate-x-2">
                      <FaPhone className="text-black transition-all duration-500 ease-in-out hover:scale-150 hover:text-gray-700 mr-4" size={28} />
                      <h3 className="text-lg md:text-xl font-bold text-black tracking-wide">Phone</h3>
                  </div>
                  <a href="tel:+0899308081" className="text-black text-xl md:text-2xl font-extrabold transition-colors duration-500 ease-in-out hover:text-gray-800">+08 9930 8081</a>
              </div>
              <div className="contact-item border-2 border-black bg-white rounded-lg p-6 md:p-10 space-y-6 transition-all duration-500 ease-in-out transform hover:shadow-2xl hover:scale-105">
                  <div className="flex items-center mb-4 transform transition-all duration-500 ease-in-out hover:translate-x-2">
                      <FaRegEnvelope className="text-black transition-all duration-500 ease-in-out hover:scale-150 hover:text-gray-700 mr-4" size={28} />
                      <h3 className="text-lg md:text-xl font-bold text-black tracking-wide">Email</h3>
                  </div>
                  <a href="mailto:hello@ordinaryagency.com.au" className="email text-black text-xl md:text-2xl font-extrabold transition-colors duration-500 ease-in-out hover:text-gray-800">hello@ordinaryagency.com.au</a>
              </div>
          </div>
      </section>
      <FAQ />
      </main>
      <Footer />
    </>
  );
};

export default Contact;
