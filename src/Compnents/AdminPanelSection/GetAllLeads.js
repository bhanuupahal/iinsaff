import React, { useState } from 'react';
import { FaEye, FaCheck, FaTimes, FaSearch } from 'react-icons/fa';

const GetAllLeads = () => {
  const [advertisements, setAdvertisements] = useState([
    {
      id: 1,
      title: 'Breaking News Coverage',
      reporter: 'John Doe',
      status: 'Pending',
      date: '2023-06-15',
      category: 'News',
      views: 150
    },
    {
      id: 2,
      title: 'Local Event Coverage',
      reporter: 'Jane Smith',
      status: 'Approved',
      date: '2023-06-14',
      category: 'Events',
      views: 300
    }
  ]);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Reporter Advertisements</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search advertisements..."
            className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {advertisements.map((ad) => (
          <div key={ad.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold text-gray-800">{ad.title}</h3>
              <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                ad.status === 'Approved' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
              }`}>
                {ad.status}
              </span>
            </div>
            
            <div className="space-y-2 mb-4">
              <p className="text-sm text-gray-600">Reporter: {ad.reporter}</p>
              <p className="text-sm text-gray-600">Category: {ad.category}</p>
              <p className="text-sm text-gray-600">Date: {ad.date}</p>
              <p className="text-sm text-gray-600">Views: {ad.views}</p>
            </div>

            <div className="flex space-x-2">
              <button className="flex-1 flex items-center justify-center px-4 py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200">
                <FaEye className="mr-2" />
                View
              </button>
              <button className="flex-1 flex items-center justify-center px-4 py-2 bg-green-100 text-green-600 rounded-lg hover:bg-green-200">
                <FaCheck className="mr-2" />
                Approve
              </button>
              <button className="flex-1 flex items-center justify-center px-4 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200">
                <FaTimes className="mr-2" />
                Reject
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetAllLeads;