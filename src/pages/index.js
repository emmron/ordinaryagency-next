"use client";

import Head from 'next/head';
import { createClient } from 'contentful';
import Accordion from '../components/Accordion';
import Footer from '../components/Footer';
import Header from '../components/Header';

// const contentfulClient = createClient({
//   space: '27rs2i2q5dqf',
//   accessToken: 'NHGhWwA_AB9q3RGf8PBUpRiZ6fnDRxWgi5QeH6RjNNE',
// });

export default function Home({accordionItems, heroData}) {
  console.log(accordionItems, heroData)
  return (
    <>
      <Head>
        <title>Ordinary Agency - West Leederville Digital Agency</title>
      </Head>
      <Header />
      <main>
        <div className="relative overflow-hidden h-screen bg-gradient-to-r from-blue-900 via-purple-800 to-pink-600">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 mix-blend-multiply">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black mix-blend-multiply"></div>
            <div className="flex h-full w-full">
              <div className="flex-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 transition duration-300 ease-in-out hover:from-blue-400 hover:to-purple-400"></div>
              <div className="flex-1 h-full bg-gradient-to-b from-black to-gray-800 transition duration-300 ease-in-out hover:from-black hover:to-gray-700"></div>
              <div className="flex-1 h-full bg-gradient-to-b from-gray-700 to-gray-500 transition duration-300 ease-in-out hover:from-gray-600 hover:to-gray-400"></div>
              <div className="flex-1 h-full bg-gradient-to-b from-gray-400 to-white transition duration-300 ease-in-out hover:from-gray-300 hover:to-gray-100"></div>
            </div>
            <div className="absolute inset-0 transform-gpu scale-110 rotate-6 bg-gradient-to-r from-black to-gray-700 opacity-10 blur-lg transition duration-500 ease-in-out hover:opacity-25 hover:scale-105">
              <svg className="h-full w-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <polygon points="100,10 40,198 190,78 10,78 160,198" stroke="white" strokeWidth="4" fill="none" />
              </svg>
            </div>
            <div className="absolute inset-0 transform-gpu scale-110 -rotate-6 bg-gradient-to-l from-gray-700 to-white opacity-10 blur-lg transition duration-500 ease-in-out hover:opacity-25 hover:scale-105">
              <svg className="h-full w-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <polygon points="100,10 40,198 190,78 10,78 160,198" stroke="white" strokeWidth="4" fill="none" />
              </svg>
            </div>
          </div>
          <div className="relative flex items-center justify-center h-full md:text-6xl text-3xl">
            <div className="font-extrabold text-white animate-fade-in-down">
              {heroData.title || 'Title Placeholder'}
            </div>
            <svg className="absolute bottom-0 animate-bounce-slow h-12 w-12 md:h-24 md:w-24 text-white" viewBox="0 0 20 20" fill="currentColor" stroke="white" strokeWidth="2">
              <circle cx="7" cy="7" r="2" fill="none" />
            </svg>
          </div>
        </div>
        <section className="max-w-4xl mx-auto p-4">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            {accordionItems.items.map( (item) => (
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

export async function getStaticProps() {
  // Environment variables are accessed here to initialize the Contentful client
  const contentfulClient = createClient({
    space: process.env.CONTENTFUL_SPACE_ID || "",
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
  });

  let accordionItems = {items: []};
  let heroData = null;

  try {
    accordionItems = await contentfulClient.getEntries({
      content_type: 'accordionItem',
    });

    const heroDataResponse = await contentfulClient.getEntries({
      content_type: 'homeHero',
    });

    if (heroDataResponse.items.length > 0) {
      heroData = heroDataResponse.items[0].fields;
    }
  } catch (error) {
    console.error("Error fetching data from Contentful", error);
  }

  // Returns props to your page component below
  return {
    props: {
      accordionItems,
      heroData,
    },
    revalidate: 1, // Use ISR if needed
  };
}
