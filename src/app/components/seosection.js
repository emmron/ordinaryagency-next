import { motion } from 'framer-motion';

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const contentVariants = {
  hidden: { x: '-100vw' },
  visible: {
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 30,
      damping: 10
    }
  },
};

const SEOSection = () => (
  <motion.section
    className="relative flex items-center justify-center min-h-screen py-20 px-4 bg-center bg-cover"
    style={{ backgroundImage: `url(/images/0_0.png)`}}
    variants={backdrop}
    initial="hidden"
    animate="visible"
  >
    <motion.div
      className="relative z-10 max-w-3xl p-10 mx-auto bg-gradient-to-br from-black to-gray-800 bg-opacity-70 rounded-xl shadow-2xl text-white"
      variants={contentVariants}
    >
      <h2 className="mb-6 text-4xl font-extrabold tracking-wide sm:text-5xl">What is SEO and Why it's Crucial for Your Business</h2>
      <p className="text-lg text-white font-light tracking-wide leading-relaxed">
        Search engine optimization, or SEO, is the process of enhancing a website's visibility on search engine results pages (SERPs). By leveraging SEO, Perth businesses can increase their online visibility, reach more potential customers, and improve their bottom line. SEO is crucial for businesses of all sizes because it helps attract organic traffic, build credibility, and deliver a better user experience.
      </p>
    </motion.div>
  </motion.section>
);

export default SEOSection;
