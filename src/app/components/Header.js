import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiPhone, FiCheck, FiGrid } from 'react-icons/fi';
import Logo from './Logo';
import Modal from 'react-modal';
import FullScreenMenu from './FullScreenMenu';

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false); // State to manage services mega menu

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleServicesMenu = () => { // Function to toggle services mega menu
    setIsServicesMenuOpen(!isServicesMenuOpen);
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
  const phoneNumberClass = isScrolled ? 'text-black' : 'text-black';

  const handleSubmit = async event => {
    event.preventDefault()
    const form = event.currentTarget.elements
    const body = {
      name: form.name.value,
      email: form.email.value,
      service: form.service.value,
      message: form.message.value,
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

  return (
    <header className={`fixed top-0 right-0 p-4 md:p-8 w-full z-10 ${isScrolled ? 'bg-white' : 'bg-transparent'}`}>
       <div className="flex items-center justify-between w-full">
         {/* Logo */}
         <Link href="/" legacyBehavior>
             <a><Logo className="w-12 h-12 md:w-16 md:h-16 object-contain cursor-pointer" /></a>
         </Link>

         {/* Phone Number, Contact, and Login buttons */}
         <div className="md:flex items-center justify-center space-x-4">
      
           {/* Services Mega Menu */}
           <div className="relative group">
             <button onMouseEnter={toggleServicesMenu} onMouseLeave={toggleServicesMenu} className={`${buttonClass} font-bold text-lg py-2 px-4 rounded-lg shadow-md mr-2 transition duration-300 ease-in-out flex items-center focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-black hover:bg-opacity-80`}>
               Services <FiGrid className="ml-1" />
             </button>
             <div className={`absolute top-full left-0 w-56 bg-black text-white rounded-md shadow-lg mt-2 py-2 transition duration-300 ease-in-out group-hover:scale-100 group-hover:opacity-100 ${isServicesMenuOpen ? 'visible' : 'invisible'}`}>
               <ul className="space-y-2">
                 <li className="flex flex-col items-center justify-center text-center bg-black text-white rounded-md transition duration-300 ease-in-out hover:scale-105 hover:bg-gray-800 cursor-pointer py-2">
                   <span className="text-md font-medium mb-1">Web Development</span>
                   <p className="text-xs text-gray-400">Empower your online presence.</p>
                 </li>
                 <li className="flex flex-col items-center justify-center text-center bg-black text-white rounded-md transition duration-300 ease-in-out hover:scale-105 hover:bg-gray-800 cursor-pointer py-2">
                   <span className="text-md font-medium mb-1">Lead Generation</span>
                   <p className="text-xs text-gray-400">Boost your business growth.</p>
                 </li>
               </ul>
             </div>
           </div>

         {/* Hamburger Menu Icon */}
         <div className="flex items-end">
      
         <div className="hidden md:flex pr-4">
           <button onClick={openModal} className={`${buttonClass} font-bold py-2 px-4 rounded mr-2 hover:bg-white hover:text-black transition-colors duration-300`}>
             Contact
           </button>
           <a href="https://app.ordinaryagency.com.au" target="_blank" rel="noopener noreferrer" className={`${buttonClass} font-bold py-2 px-4 rounded hover:bg-white hover:text-black transition-colors duration-300`}>
             Login
           </a>
         </div>
         <div className="hidden md:flex mr-2 mb-2 ml-2 items-center justify-center">
           <a href="tel:+610899308081" className={`text-sm font-bold py-2 px-4 rounded-full transition-colors duration-300 text-lg ${isScrolled ? 'bg-black text-white' : 'bg-white text-black'} hover:bg-gray-200`}>
             <FiPhone className="inline mr-2" />
             (08) 9930 8081
           </a>
         </div>
       </div>
           <button onClick={toggleMenu}>
             <div className="w-6 h-0.5 bg-black mb-1.5"></div>
             <div className="w-6 h-0.5 bg-black mb-1.5"></div>
             <div className="w-6 h-0.5 bg-black"></div>
           </button>
         </div>
      {/* Full Screen Menu */}
      <FullScreenMenu isOpen={isMenuOpen} onClose={toggleMenu} />

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
      </div>
    </header>
  );
};

export default Header;
