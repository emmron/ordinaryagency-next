import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiPhone } from 'react-icons/fi';
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
        <form className="space-y-4">
          {/* Add your form elements here */}
        </form>
        <button onClick={closeModal} className="mt-4 w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">Close</button>
      </Modal>
    </>
  );
};

export default Header;
