"use client";

import { useState, useEffect, Fragment } from 'react';
import Head from 'next/head'; // Import the Head component
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
  const [heroData, setHeroData] = useState({});

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
        if (heroData.backgroundImage) {
          // Assuming the URL from Contentful is already complete and doesn't need 'https:' to be added
          heroData.backgroundImage = heroData.backgroundImage;
        } else {
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
    <Fragment>
      <Head>
        <title>Your Page Title</title>
      </Head>
      <Header />
      <main>
        <div className="relative">
        <div
      className="bg-cover bg-center h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${(heroData as any)['backgroundImage'] ? `https:${(heroData as any)['backgroundImage']}` : ''})` }}
    >
            <h1 className="text-white text-5xl font-bold">{(heroData as any).title ?? 'Title Placeholder'}</h1>
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
    </Fragment>
  );
}