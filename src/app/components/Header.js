import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiPhone, FiCheck } from 'react-icons/fi';
import Logo from './Logo';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  }
};

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [posted, setPosted] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50;
      if (show !== isScrolled) {
        setIsScrolled(show);
      }
    };

    if (typeof window !== "undefined") {
      Modal.setAppElement('body')

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [isScrolled]);

  const buttonClass = isScrolled ? 'bg-white text-black border-2 border-black' : 'bg-black text-white border-2 border-black';
  const phoneNumberClass = isScrolled ? 'text-black' : 'text-white';

  const handleSubmit = async event => {
    event.preventDefault()
    const form = event.currentTarget.elements
    const body = {
      name: form.name.value,
      email: form.email.value,
    }
    setSubmitted(true)
    try {
      const res = await fetch('https://getform.io/f/61892774-9629-43a7-8a42-f3f8e44d35a2', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      if (res.ok) setPosted(true)
    } catch (error) {
      console.log("ERROR:", error)
    }
  }


  const handleSubmitSendgrid = async event => {
    event.preventDefault()
    const form = event.currentTarget.elements
    const body = {
      name: form.name.value,
      from: form.email.value,
    }
    setSubmitted(true)
    try {
      const res = await fetch('/api/handleForm', {
        method: 'POST',
        body: JSON.stringify(body),
      })
      if (res.ok) setPosted(true)
    } catch (error) {
      console.log("ERROR:", error)
    }
  }

  return (
    <>
      <header className={`fixed top-0 right-0 p-4 md:p-8 w-full z-10 ${isScrolled ? 'bg-white' : 'bg-transparent'}`}>
        <div className="flex items-center justify-between w-full">
          <Link href="/" passHref>
              <Logo className="w-12 h-12 md:w-16 md:h-16 object-contain cursor-pointer" />
          </Link>
          <div className="md:flex items-center">
            <div className="flex items-center justify-end md:mr-4">
              <FiPhone />
              <a href="tel:+610899308081" className={`${phoneNumberClass} block ml-2 hover:text-gray-700 transition-colors duration-300 bold`}>
                (08) 9930 8081
              </a>
            </div>
            <div className="flex justify-end mt-2 md:mt-0">
              <button onClick={openModal} className={`${buttonClass} font-bold py-2 px-4 rounded mr-2 hover:bg-white hover:text-black transition-colors duration-300`}>
                Contact
              </button>
              <a href="https://app.ordinaryagency.com.au" target="_blank" rel="noopener noreferrer" className={`${buttonClass} font-bold py-2 px-4 rounded hover:bg-white hover:text-black transition-colors duration-300`}>
                Login
              </a>
            </div>
          </div>
        </div>
      </header>
      <Modal
        id="contact_modal"
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>

        {posted ? (
          <div className="flex items-center justify-center mb-6">
            <FiCheck className="text-green-500" size={24} />
            <span className="text-green-500 ml-2">Form submitted successfully!</span>
          </div>
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
            <input id="name" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" type="text" name="name" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
            <input id="email" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" type="email" name="email" />
          </div>
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-700">Service:</label>
            <select id="service" name="service" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            <option value="">Select a service</option>
            <option value="seo">SEO</option>
            <option value="web-dev">Web Development</option>
            <option value="api-integrations">API Integrations</option>
            <option value="wordpress">WordPress</option>
            <option value="shopify">Shopify</option>
            <option value="ecommerce">eCommerce</option>
          </select>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message:</label>
          <textarea id="message" name="message" rows="4" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
        </div>
            <button type="submit" className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit</button>
          </form>
        )}


        <button onClick={closeModal} className="mt-4 w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">Close</button>
      </Modal>
    </>
  );
};

export default Header;
