import React from 'react';

const Newspaper = () => {
  return (
    <div className="p-4">
      <h3 className="text-xl font-bold mb-2">Newspaper Services</h3>
      <div className="space-y-4">
        <p className="text-gray-700">
          Access and publish news through our newspaper network
        </p>
        <ul className="list-disc list-inside text-gray-600">
          <li>Digital newspaper publishing</li>
          <li>News distribution</li>
          <li>Media coverage</li>
          <li>Press releases</li>
        </ul>
      </div>
    </div>
  );
};

export default Newspaper;