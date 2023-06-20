import '../app/globals.css';
import { useState } from 'react';
import axios from 'axios';
import Header from '../app/components/Header';
import Footer from '../app/components/Footer';
import InternalHero from '../app/components/InternalHero';
import Head from 'next/head';
import ReCAPTCHA from "react-google-recaptcha";
const formEndpoint = "https://getform.io/f/61892774-9629-43a7-8a42-f3f8e44d35a2";

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("Sending...");

    const { name, email, message } = event.currentTarget.elements;

    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };

    let response = await axios.post(
      formEndpoint,
      details,
    );

    if (response.data.success) {
      setStatus("Your message has been successfully sent!");
    } else {
      setStatus("Something went wrong! Please try again.");
    }
  }
  
  return (
    <>
      <Head>
        <title>Contact Us | Ordinary Agency</title>
        <meta property="og:title" content="Contact Us" key="title" />
        <meta name="description" content="Contact Ordinary Agency." key="desc" />
      </Head>
      <Header />
      <InternalHero title="Contact Us" />
      <main className="min-h-screen bg-white items-center justify-start pt-16 md:pt-20 px-4 sm:px-6 md:px-8 lg:px-12 lg:py-0 xl:px-16">
        <section className="max-w-5xl mx-auto px-4 py-10 flex">
          <div className="w-full max-w-lg pr-4">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your Name" required />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your Email" required />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" rows="6" placeholder="Your Message" required></textarea>
              </div>
              <div className="mb-4">
                 <ReCAPTCHA sitekey="6Ld-xLQmAAAAAOWD5COryyyLmQZ6qjWn5Kj8lDN2" />
               </div>

               <div className="flex items-center justify-between">
                 <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                   Send
                 </button>
                 {status && <p className="text-blue-500 text-sm">{status}</p>}
               </div>
             </form>
           </div>
           <div className="w-full max-w-lg pl-4">
             <iframe
               className="w-full md:w-full"
               style={{maxWidth: '600px', height: '450px', border: '0'}}
               referrerpolicy="no-referrer-when-downgrade"
               src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAFaKgtNcVrijcVmdLr_rHDMvfm4PIZVvs&q=Ordinary+Agency,Location+Address"
               allowFullScreen>
             </iframe>
           </div>
         </section>
</main>
<Footer />
</>
);
}

export default Contact;
