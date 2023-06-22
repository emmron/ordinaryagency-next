import { motion, useViewportScroll, useTransform } from 'framer-motion';

const easing = [0.6, -0.05, 0.01, 0.99];

const SEOSection = () => {
  const { scrollYProgress } = useViewportScroll();
  const cardOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const cardX = useTransform(scrollYProgress, [0, 0.1, 0.4], ['-100vw', '-45vw', '0vw'], easing);

  return (
    <section
      className="relative flex items-center justify-center min-h-screen py-10 sm:py-20 px-2 sm:px-4 bg-center bg-cover"
      style={{ backgroundImage: `url(/images/0_0.png)`}}
    >
      <motion.div
        className="relative z-10 max-w-xs sm:max-w-3xl p-6 sm:p-10 mx-auto bg-white bg-opacity-80 rounded-xl shadow-2xl"
        style={{ opacity: cardOpacity, x: cardX }}
      >
        <h2 className="mb-4 sm:mb-6 text-xl sm:text-4xl font-extrabold tracking-wide text-gray-900">What is SEO and Why it's Crucial for Your Business</h2>
        <p className="text-sm sm:text-lg font-light tracking-wide leading-relaxed text-gray-800">
          Search engine optimization, or SEO, is the process of enhancing a website's visibility on search engine results pages (SERPs). By leveraging SEO, Perth businesses can increase their online visibility, reach more potential customers, and improve their bottom line. SEO is crucial for businesses of all sizes because it helps attract organic traffic, build credibility, and deliver a better user experience.
        </p>
      </motion.div>
    </section>
  );
};

export default SEOSection;
