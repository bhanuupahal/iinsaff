import React from 'react';

const Website = () => {
  return (
    <div className="p-4">
      <h3 className="text-xl font-bold mb-2">Website Services</h3>
      <div className="space-y-4">
        <p className="text-gray-700">
          Comprehensive website solutions for your online presence
        </p>
        <ul className="list-disc list-inside text-gray-600">
          <li>Website development</li>
          <li>Content management</li>
          <li>SEO optimization</li>
          <li>Website maintenance</li>
        </ul>
      </div>
    </div>
  );
};

export default Website;