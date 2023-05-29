import Logo from './components/Logo';
import Accordion from './components/Accordion';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-start p-24 bg-white text-black">
      <Logo className="mb-8" />
      <h1 className="text-3xl text-center mb-8">A digital agency that is anything but ordinary</h1>
      <div className="z-10 w-full max-w-5xl items-center justify-center font-mono text-sm">
        <div className="about mb-8">
          <h2 className="mb-4">About</h2>
          <p>Our digital agency excels in web development, SEO, API integrations, marketing, AI, and marketing strategy. We create stunning websites, optimize them for search engines, and seamlessly integrate different software systems. Our marketing services leverage AI to analyze data and devise effective strategies. We're dedicated to delivering tangible results for Australian businesses in the digital realm.</p>
        </div>

        <div className="team mb-8">
          <h2 className="mb-4">Team</h2>
          <p>We are comprising of both local and international talent. Our agency is proud to have a group of professionals with diverse expertise and backgrounds. Many of our team members bring valuable experience from agency backgrounds in Perth, Western Australia.</p>
        </div>

        <div className="services mb-8">
          <h2 className="mb-4">Our Services</h2>
          <Accordion question="Web Support & Hosting" answer="We provide excellent web support and hosting services." />
          <Accordion question="SEO & PPC" answer="Our SEO and PPC services are designed to help you reach your target audience effectively." />
          <Accordion question="Automations & AI" answer="We implement cutting-edge automations and AI to boost the efficiency and effectiveness of your business processes." />
          <Accordion question="Web Development & API Integrations" answer="Our team of experts offer top-tier web development and API integration services." />
                  </div>

        <div className="work mb-8">
          <h2 className="mb-4">Our Work</h2>
          <Accordion question="JLC Associates" answer="We rebuilt their website giving them a clean modern design. Check out the website at <a href='http://jlcassociates.com.au' target='_blank' rel='noopener noreferrer'>jlcassociates.com.au</a>." />
          <Accordion question="The Barefoot Disciple" answer="Details of the work we've done for The Barefoot Disciple." />
          <Accordion question="Instant Fun" answer="We rebuilt their website in Shopify, offering a modern ecommerce experience." />
          <Accordion question="BML Ventures" answer="We built BML Ventures a Gatsby website that's fast, clean, and modern. Visit <a href='http://bmlventures.com.au' target='_blank' rel='noopener noreferrer'>bmlventures.com.au</a> to see it." />
          <Accordion question="Aust-BioSearch" answer="Details of the work we've done for Aust-BioSearch." />
          <Accordion question="Wanneroo Basketball Association" answer="Details of the work we've done for Wanneroo Basketball Association." />
          <Accordion question="WA Pest Consultants" answer="Details of the work we've done for WA Pest Consultants." />
          <Accordion question="Central Lending Solutions" answer="Details of the work we've done for Central Lending Solutions." />
        </div>
      </div>
    </main>
  )
}
