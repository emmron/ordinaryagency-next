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
          <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-700 to-white">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black mix-blend-multiply"></div>
            <div className="absolute inset-0 animate-pulse-slow">
              <div className="flex h-full w-full transform rotate-45">
                <div className="w-1/3 h-full bg-gradient-to-t from-black to-transparent"></div>
                <div className="w-1/3 h-full bg-gradient-to-t from-gray-700 to-transparent animate-spin-slow"></div>
                <div className="w-1/3 h-full bg-gradient-to-t from-transparent to-white"></div>
              </div>
            </div>
            <div className="absolute inset-0 transform-gpu scale-125 rotate-3 bg-gradient-to-r from-black to-gray-700 opacity-20 blur">
              <svg className="h-full w-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <polygon points="100,10 40,198 190,78 10,78 160,198" stroke="white" strokeWidth="4" fill="none" />
              </svg>
            </div>
            <div className="absolute inset-0 transform-gpu scale-125 -rotate-3 bg-gradient-to-l from-gray-700 to-white opacity-20 blur">
              <svg className="h-full w-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <polygon points="100,10 40,198 190,78 10,78 160,198" stroke="white" strokeWidth="4" fill="none" />
              </svg>
            </div>
          </div>
          <div className="relative flex items-center justify-center h-full">
            <div className="text-6xl font-extrabold text-white animate-fade-in-down">
              {heroData.title || 'Title Placeholder'}
            </div>
            <svg className="absolute bottom-0 animate-bounce-slow h-24 w-24 text-white" viewBox="0 0 20 20" fill="currentColor" stroke="white" strokeWidth="2">
              <circle cx="7" cy="7" r="2" fill="none" />
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