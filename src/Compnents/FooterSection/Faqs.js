import React from 'react';

const Faqs = () => {
  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
        <div className="space-y-6">
          <div className="border-b pb-4">
            <h3 className="text-xl font-semibold mb-2">What is IINSAF?</h3>
            <p className="text-gray-600">
              IINSAF is a platform dedicated to promoting social justice through innovative technological solutions.
            </p>
          </div>
          {/* Add more FAQs as needed */}
        </div>
      </div>
    </div>
  );
};

export default Faqs;