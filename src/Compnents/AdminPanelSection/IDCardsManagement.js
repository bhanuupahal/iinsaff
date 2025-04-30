import React, { useState } from 'react';
import { FaIdCard, FaUserCheck, FaTimesCircle, FaDownload, FaPrint } from 'react-icons/fa';

const IDCardsManagement = () => {
  const [idCards, setIdCards] = useState([
    {
      id: 'ID-001',
      name: 'Ahmed Khan',
      role: 'Reporter',
      status: 'Pending',
      issueDate: '2024-02-15',
      expiryDate: '2025-02-15',
      photo: '/path/to/photo.jpg'
    },
    // Add more ID cards...
  ]);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">ID Cards Management</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Generate New ID Card
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {idCards.map((card) => (
          <div key={card.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <FaIdCard className="text-blue-600 text-xl" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-800">{card.name}</h3>
                    <p className="text-sm text-gray-500">{card.role}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  card.status === 'Active' ? 'bg-green-100 text-green-800' :
                  card.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {card.status}
                </span>
              </div>

              <div className="mt-6 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">ID Number:</span>
                  <span className="font-medium">{card.id}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Issue Date:</span>
                  <span className="font-medium">{card.issueDate}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Expiry Date:</span>
                  <span className="font-medium">{card.expiryDate}</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <button className="flex items-center justify-center px-4 py-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-100">
                  <FaPrint className="mr-2" />
                  Print
                </button>
                <button className="flex items-center justify-center px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100">
                  <FaDownload className="mr-2" />
                  Download
                </button>
              </div>

              <div className="mt-3 grid grid-cols-2 gap-3">
                <button className="flex items-center justify-center px-4 py-2 bg-yellow-50 text-yellow-600 rounded-lg hover:bg-yellow-100">
                  <FaUserCheck className="mr-2" />
                  Verify
                </button>
                <button className="flex items-center justify-center px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100">
                  <FaTimesCircle className="mr-2" />
                  Revoke
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IDCardsManagement;