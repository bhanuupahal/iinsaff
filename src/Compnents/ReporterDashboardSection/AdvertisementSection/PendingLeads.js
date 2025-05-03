import React, { useState } from 'react';
import { FaEye, FaCheck, FaTimes } from 'react-icons/fa';

const PendingLeads = () => {
  const [pendingLeads, setPendingLeads] = useState([
    {
      id: 1,
      title: 'Product Launch Campaign',
      advertiser: 'New Tech Corp',
      budget: '35000',
      submissionDate: '2024-01-20',
      category: 'Technology',
      status: 'Under Review'
    },
    // Add more sample data as needed
  ]);

  const handleAccept = (id) => {
    // Handle accept logic
    console.log('Accepted lead:', id);
  };

  const handleReject = (id) => {
    // Handle reject logic
    console.log('Rejected lead:', id);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Pending Leads</h2>

      <div className="space-y-4">
        {pendingLeads.map((lead) => (
          <div 
            key={lead.id} 
            className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{lead.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{lead.advertiser}</p>
              </div>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                {lead.status}
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              <div>
                <p className="text-sm text-gray-500">Budget</p>
                <p className="font-medium">₹{lead.budget}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Category</p>
                <p className="font-medium">{lead.category}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Submitted</p>
                <p className="font-medium">{lead.submissionDate}</p>
              </div>
            </div>

            <div className="mt-4 flex justify-end space-x-3">
              <button 
                onClick={() => handleAccept(lead.id)}
                className="flex items-center px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
              >
                <FaCheck className="w-4 h-4 mr-2" />
                Accept
              </button>
              <button 
                onClick={() => handleReject(lead.id)}
                className="flex items-center px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                <FaTimes className="w-4 h-4 mr-2" />
                Reject
              </button>
              <button 
                className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                <FaEye className="w-4 h-4 mr-2" />
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PendingLeads;