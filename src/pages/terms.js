import React from 'react';
import Header from '../app/components/Header'; // Assuming you have a Header component
import Footer from '../app/components/Footer';
import Link from 'next/link';

const Terms = () => {
  return (
    <div>
      <Header />
      <main className="p-4">
        <h1 className="text-2xl font-bold mb-4">Terms and Conditions</h1>
        <p>
          These are the terms and conditions for using this website. By using this website, you agree to these terms and conditions.
          {/* Add your actual terms and conditions here */}
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
