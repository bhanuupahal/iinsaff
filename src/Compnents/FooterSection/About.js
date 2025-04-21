import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">About Us</h1>
        <div className="prose max-w-none">
          <p className="mb-4">
            Welcome to <span className="text-red-600">ii</span>nsaaf - International Influencing News Social Media Advertisement Federation.
          </p>
          <p className="mb-4">
            We are dedicated to promoting social justice through innovative technological solutions and creating a platform where voices can be heard and stories can be told.
          </p>
          {/* Add more content as needed */}
        </div>
      </div>
    </div>
  );
};

export default About;