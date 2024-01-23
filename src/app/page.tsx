"use client";

import { useState, useEffect, Fragment } from 'react';
import Head from 'next/head'; // Import the Head component
import { createClient } from 'contentful';
import Accordion from './components/Accordion';
import Footer from './components/Footer';
import Header from './components/Header';
import BlogSlider from './components/BlogSlider';

const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export default function Home() {
  const [accordionItems, setAccordionItems] = useState([]);
  const [heroData, setHeroData] = useState(null);

  useEffect(() => {
    contentfulClient.getEntries({
      content_type: 'accordionItem' // Replace 'YOUR_ACCORDION_CONTENT_TYPE_ID' with a valid content type ID
    })
    .then((response) => {
      // Ensure the response items are of the correct type before setting the state
      if (Array.isArray(response.items) && response.items.every(item => item.sys && item.fields)) {
        setAccordionItems(response.items);
      }
    })
    .catch(console.error);
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Your Page Title</title>
      </Head>
      <Header />
      <main>
        <section>
          {accordionItems.map((item) => (
            <Accordion
              key={item.sys.id}
              question={item.fields.question}
              answer={item.fields.answer}
            />
          ))}
        </section>
        {/* Pass the required 'posts' prop to BlogSlider */}
        <BlogSlider posts={[]} />
      </main>
      <Footer />
    </Fragment>
  );
}