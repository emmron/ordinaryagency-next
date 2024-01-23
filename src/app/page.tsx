"use client";

import { useState, useEffect } from 'react';
import Head from 'next/head';
import { createClient } from 'contentful';
import Accordion from './components/Accordion';
import Footer from './components/Footer';
import Header from './components/Header';

const contentfulClient = createClient({
  space: '27rs2i2q5dqf',
  accessToken: 'NHGhWwA_AB9q3RGf8PBUpRiZ6fnDRxWgi5QeH6RjNNE',
});

export default function Home() {
  const [accordionItems, setAccordionItems] = useState<any[]>([]);
  const [heroData, setHeroData] = useState<any>({});

  useEffect(() => {
    contentfulClient.getEntries({
      content_type: 'accordionItem'
    })
    .then((response) => {
      setAccordionItems(response.items || []);
    })
    .catch(console.error);
    contentfulClient.getEntries({
      content_type: 'homeHero',
    })
    .then((response) => {
      if (response.items.length > 0) {
        const heroData = response.items[0].fields || {};
        if (!heroData.backgroundImage) {
          console.error('No valid URL found for backgroundImage');
        }
        console.log(heroData); // Added console log for heroData
        setHeroData(heroData);
      } else {
        console.error('No hero data found');
      }
    })
    .catch(console.error);
  }, []);

  if (Object.keys(heroData).length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>Your Page Title</title>
      </Head>
      <Header />
      <main>
        <div className="relative overflow-hidden h-screen bg-black">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-700">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 mix-blend-multiply"></div>
            <div className="absolute inset-0 animate-pulse-slow">
              <div className="flex h-full w-full">
                <div className="w-1/3 h-full bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="w-1/3 h-full bg-gradient-to-t from-gray-800 to-transparent animate-spin-slow"></div>
                <div className="w-1/3 h-full bg-gradient-to-t from-transparent to-gray-900"></div>
              </div>
            </div>
            <div className="absolute inset-0 transform-gpu scale-125 rotate-3 bg-gradient-to-r from-gray-900 to-gray-700 opacity-20 blur"></div>
            <div className="absolute inset-0 transform-gpu scale-125 -rotate-3 bg-gradient-to-l from-gray-900 to-gray-700 opacity-20 blur"></div>
          </div>
          <div className="relative flex items-center justify-center h-full">
            <div className="text-6xl font-extrabold text-white animate-fade-in-down">
              {heroData.title || 'Title Placeholder'}
            </div>
            <svg className="absolute bottom-0 animate-bounce-slow h-24 w-24 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-5a1 1 0 112 0h-2zm1-3a1 1 0 01-1-1V5a1 1 0 012 0v4a1 1 0 01-1 1z" clip-rule="evenodd" />
            </svg>
          </div>
        </div>
        <section className="max-w-4xl mx-auto p-4">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            {accordionItems.map((item) => (
              <Accordion
                key={item.sys.id}
                question={item.fields.question}
                answer={item.fields.answer}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}