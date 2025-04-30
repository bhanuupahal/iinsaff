import React, { useState } from 'react';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';

const PriceSet = () => {
  const [advertisementTypes, setAdvertisementTypes] = useState([
    { id: 1, type: 'Basic', price: 100, duration: '30 days', features: ['Feature 1', 'Feature 2'] },
    { id: 2, type: 'Premium', price: 200, duration: '60 days', features: ['Feature 1', 'Feature 2', 'Feature 3'] },
  ]);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Advertisement Settings</h1>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <FaPlus className="mr-2" />
          Add New Package
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {advertisementTypes.map((type) => (
          <div key={type.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold text-gray-800">{type.type}</h3>
              <div className="flex space-x-2">
                <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-full">
                  <FaEdit />
                </button>
                <button className="p-2 text-red-600 hover:bg-red-50 rounded-full">
                  <FaTrash />
                </button>
              </div>
            </div>
            <div className="mb-4">
              <p className="text-3xl font-bold text-gray-900">${type.price}</p>
              <p className="text-gray-500">{type.duration}</p>
            </div>
            <ul className="space-y-2">
              {type.features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceSet;