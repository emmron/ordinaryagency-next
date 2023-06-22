import { FaRegClock, FaRegCommentDots, FaRegUser } from "react-icons/fa";

const FAQ = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-10 text-center text-gray-900">Frequently Asked Questions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item border-2 border-gray-800 bg-white rounded-lg p-6 md:p-10 space-y-6 transform transition-all duration-500 ease-in-out hover:border-gray-500 hover:shadow-lg hover:-translate-y-1">
            <div className="flex items-start md:items-center mb-4">
              <div className="icon-container">
                <faq.icon className="text-black transition-transform duration-500 ease-in-out transform hover:rotate-90 mr-4" size={28} />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800">{faq.question}</h3>
            </div>
            <p className="text-gray-800">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const faqs = [
  {
    question: 'How quickly do you respond to inquiries?',
    answer: 'We aim to respond to all inquiries within 24 hours during our working days.',
    icon: FaRegClock
  },
  {
    question: 'What is SEO?',
    answer: 'SEO, or Search Engine Optimization, is the practice of optimizing your website to improve its visibility on search engines like Google.',
    icon: FaRegCommentDots
  },
  {
    question: 'Why is SEO important?',
    answer: 'SEO is important because it increases the visibility of your website, which can lead to increased traffic, more customers, and ultimately higher revenue.',
    icon: FaRegUser
  }
];

export default FAQ;
