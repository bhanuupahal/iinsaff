import React from 'react';

const JoinIinsaf = () => {
  return (
    <div className="py-16 pt-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Join IINSAF</h2>
        <div className="max-w-md mx-auto">
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                className="w-full border rounded-lg p-2"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full border rounded-lg p-2"
                placeholder="Enter your email"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JoinIinsaf;