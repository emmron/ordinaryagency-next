"use client";

import { useState, useEffect, Fragment } from 'react';
import Head from 'next/head'; // Import the Head component
import { createClient, Entry } from 'contentful';
import Accordion from './components/Accordion';
import Footer from './components/Footer';
import Header from './components/Header';

interface EntrySkeletonType {
  sys: {
    id: string;
  };
  fields: {
    question: string;
    answer: any;
    backgroundImage?: {
      fields: {
        file: {
          url: string;
        };
      };
    };
    title?: string;
  };
}

const contentfulClient = createClient({
  space: '27rs2i2q5dqf',
  accessToken: 'NHGhWwA_AB9q3RGf8PBUpRiZ6fnDRxWgi5QeH6RjNNE',
});

export default function Home() {
  const [accordionItems, setAccordionItems] = useState<Entry<EntrySkeletonType, undefined, string>[]>([]);
  const [heroData, setHeroData] = useState<EntrySkeletonType | null>(null);

  useEffect(() => {
    contentfulClient.getEntries({
      content_type: 'accordionItem' // Replace 'YOUR_ACCORDION_CONTENT_TYPE_ID' with a valid content type ID
    })
    .then((response) => {
      // Ensure the response items are of the correct type before setting the state
      if (Array.isArray(response.items) && response.items.every(item => item.sys && item.fields)) {
        setAccordionItems(response.items as Entry<EntrySkeletonType, undefined, string>[]);
      }
    })
    .catch(console.error);

    contentfulClient.getEntries({
      content_type: 'homeHero', // Replace with your actual content type ID
    })
    .then((response) => {
      // Check if the response contains items before trying to access them
      if (response.items.length > 0) {
        setHeroData(response.items[0].fields as EntrySkeletonType);
      } else {
        // Handle the case where no items are returned
        console.error('No hero data found');
      }
    })
    .catch(console.error);
  }, []);

  if (!heroData) {
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
            style={{ backgroundImage: `url(${heroData.backgroundImage?.fields.file.url})` }}
          >
            <h1 className="text-white text-5xl font-bold">{heroData.title}</h1>
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