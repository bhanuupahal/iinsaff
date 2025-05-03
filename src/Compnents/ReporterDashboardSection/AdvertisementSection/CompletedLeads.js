import React, { useState } from 'react';
import { FaEye, FaStar, FaFileDownload } from 'react-icons/fa';

const CompletedLeads = () => {
  const [completedAds, setCompletedAds] = useState([
    {
      id: 1,
      title: 'Summer Sale Campaign',
      advertiser: 'Fashion Store Ltd',
      budget: '75000',
      completionDate: '2024-01-10',
      rating: 4.5,
      revenue: '85000'
    },
    // Add more sample data as needed
  ]);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Completed Leads</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {completedAds.map((ad) => (
          <div key={ad.id} className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold text-gray-900">{ad.title}</h3>
              <div className="flex items-center">
                <FaStar className="text-yellow-400 w-5 h-5" />
                <span className="ml-1 text-gray-600">{ad.rating}</span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Advertiser:</span>
                <span className="text-gray-900 font-medium">{ad.advertiser}</span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Budget:</span>
                <span className="text-gray-900 font-medium">₹{ad.budget}</span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Revenue:</span>
                <span className="text-green-600 font-medium">₹{ad.revenue}</span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Completed:</span>
                <span className="text-gray-900 font-medium">{ad.completionDate}</span>
              </div>
            </div>

            <div className="mt-6 flex justify-between">
              <button className="flex items-center text-blue-600 hover:text-blue-800">
                <FaEye className="w-4 h-4 mr-2" />
                View Details
              </button>
              <button className="flex items-center text-green-600 hover:text-green-800">
                <FaFileDownload className="w-4 h-4 mr-2" />
                Report
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompletedLeads;