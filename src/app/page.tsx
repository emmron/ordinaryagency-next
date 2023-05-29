import Logo from './components/Logo';
import Accordion from './components/Accordion';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-start p-24 bg-white text-black">
      <Logo className="mb-8" />
      <div className="z-10 w-full max-w-5xl items-center justify-center font-mono text-sm">
        <h1 className="text-center mb-4">Welcome to OA Digital Agency</h1>
        <p className="text-center mb-8">We offer a wide range of services to help you build your online presence.</p>

        <div className="services mb-8">
          <h2 className="mb-4">Our Services</h2>
          <Accordion question="Web Development" answer="We provide high-quality web development services." />
          <Accordion question="WordPress" answer="We can create and manage your WordPress site." />
          <Accordion question="API and Integrations" answer="We can integrate various APIs into your website." />
        </div>

        <div className="work mb-8">
          <h2 className="mb-4">Our Work</h2>
          <Accordion question="Client A" answer="We have worked with Client A to create a responsive website." />
          <Accordion question="Client B" answer="We helped Client B to integrate their API with their website." />
          <Accordion question="Client C" answer="We managed the WordPress site for Client C." />
        </div>
      </div>
    </main>
  )
}
