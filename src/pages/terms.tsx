import '../app/globals.css'
import { useState, useEffect } from 'react';
import Header from '../app/components/Header';
import Footer from '../app/components/Footer';
import Modal from 'react-modal';
import Head from 'next/head';
import InternalHero from '../app/components/InternalHero';
const Terms = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      Modal.setAppElement('body');
    }
  }, []);

  return (
    <>
      <Head>
        <title>Terms and Conditions</title>
        <meta property="og:title" content="Terms and Conditions" key="title" />
        <meta
          name="description"
          content="Terms and conditions for using this website."
          key="desc"
        />
      </Head>
      <Header />
      <InternalHero title="Terms & Conditions" />

      <main className="min-h-screen bg-white items-center justify-start pt-16 md:pt-20 px-4 sm:px-6 md:px-8 lg:px-12 lg:py-0 xl:px-16">

        <section className="max-w-5xl mx-auto px-4 py-10">
          <h2 className="text-2xl font-bold mb-6">Terms and Conditions</h2>
          <p>
            These are the terms and conditions for using this website. By using this website, you agree to these terms and conditions.
            {/* Add your actual terms and conditions here */}
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Terms;
