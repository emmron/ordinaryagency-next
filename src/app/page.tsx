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
          <div className="absolute inset-0 bg-gradient-to-r from-gray-700 via-gray-500 to-gray-300 opacity-50">
            <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-b from-transparent to-gray-900 opacity-75"></div>
            <div className="absolute inset-0 transform skew-y-6 bg-gradient-to-r from-gray-700 via-gray-500 to-gray-300 opacity-50 animate-pulse"></div>
            <div className="absolute inset-0 transform -skew-y-6 bg-gradient-to-l from-gray-700 via-gray-500 to-gray-300 opacity-50 animate-pulse"></div>
          </div>
          <div className="relative flex items-center justify-center h-full">
            <div className="text-6xl font-extrabold text-white animate-bounce">
              {heroData.title || 'Title Placeholder'}
            </div>
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