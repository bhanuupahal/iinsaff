import React, { useState } from 'react';
import { FaAd, FaClock, FaEye, FaTrash, FaCheck } from 'react-icons/fa';

const FreeAds = () => {
  const [freeAds, setFreeAds] = useState([
    {
      id: 1,
      title: 'Community Event Promotion',
      submitter: 'Local Community Center',
      duration: '7 days',
      status: 'Pending',
      category: 'Event',
      views: 0,
      description: 'Free community gathering for local artists...'
    },
    // Add more ads...
  ]);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Free Advertisements</h1>
        <div className="flex space-x-4">
          <select className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>All Categories</option>
            <option>Events</option>
            <option>Community</option>
            <option>Charity</option>
          </select>
          <select className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>All Status</option>
            <option>Pending</option>
            <option>Approved</option>
            <option>Rejected</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {freeAds.map((ad) => (
          <div key={ad.id} className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between items-start">
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center">
                  <FaAd className="text-orange-600 text-xl" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-800">{ad.title}</h3>
                  <p className="text-sm text-gray-500">{ad.submitter}</p>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                ad.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                ad.status === 'Approved' ? 'bg-green-100 text-green-800' :
                'bg-red-100 text-red-800'
              }`}>
                {ad.status}
              </span>
            </div>

            <div className="mt-4">
              <p className="text-gray-600 text-sm line-clamp-2">{ad.description}</p>
            </div>

            <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center">
                <FaClock className="mr-1" />
                {ad.duration}
              </div>
              <div className="flex items-center">
                <FaEye className="mr-1" />
                {ad.views} views
              </div>
            </div>

            <div className="mt-6 flex space-x-2">
              <button className="flex-1 flex items-center justify-center px-4 py-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-100">
                <FaCheck className="mr-2" />
                Approve
              </button>
              <button className="flex-1 flex items-center justify-center px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100">
                <FaTrash className="mr-2" />
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FreeAds;