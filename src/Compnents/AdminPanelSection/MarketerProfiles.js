import React, { useState } from 'react';
import { FaUserTie, FaChartLine, FaCrown, FaEllipsisV } from 'react-icons/fa';

const MarketerProfiles = () => {
  const [marketers, setMarketers] = useState([
    {
      id: 1,
      name: 'Sarah Johnson',
      level: 'Gold',
      earnings: 15000,
      clients: 45,
      successRate: 92,
      activeDeals: 8
    },
    // Add more marketers...
  ]);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Marketer Profiles</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Add New Marketer
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {marketers.map((marketer) => (
          <div key={marketer.id} className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between items-start">
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <FaUserTie className="text-blue-600 text-xl" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-800">{marketer.name}</h3>
                  <div className="flex items-center">
                    <FaCrown className="text-yellow-500 mr-1" />
                    <span className="text-sm text-gray-500">{marketer.level} Level</span>
                  </div>
                </div>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <FaEllipsisV />
              </button>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-sm text-gray-500">Total Earnings</div>
                <div className="text-xl font-semibold text-gray-800">${marketer.earnings}</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-sm text-gray-500">Active Deals</div>
                <div className="text-xl font-semibold text-gray-800">{marketer.activeDeals}</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-sm text-gray-500">Total Clients</div>
                <div className="text-xl font-semibold text-gray-800">{marketer.clients}</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-sm text-gray-500">Success Rate</div>
                <div className="text-xl font-semibold text-green-600">{marketer.successRate}%</div>
              </div>
            </div>

            <div className="mt-6 flex space-x-2">
              <button className="flex-1 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100">
                View Profile
              </button>
              <button className="flex-1 px-4 py-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-100">
                Performance
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketerProfiles;