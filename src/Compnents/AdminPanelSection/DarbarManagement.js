import React, { useState } from 'react';
import { FaMosque, FaMapMarkerAlt, FaPhone, FaEnvelope, FaEdit, FaTrash } from 'react-icons/fa';

const DarbarManagement = () => {
  const [darbars, setDarbars] = useState([
    {
      id: 1,
      name: 'Darbar-e-Aliya',
      location: 'Lahore, Pakistan',
      inCharge: 'Sheikh Abdullah',
      contact: '+92 300 1234567',
      email: 'contact@darbaraliya.com',
      status: 'Active',
      followers: 5000,
      events: 12
    },
    // Add more darbars...
  ]);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Darbar Management</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Add New Darbar
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {darbars.map((darbar) => (
          <div key={darbar.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                  <FaMosque className="text-green-600 text-xl" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-800">{darbar.name}</h3>
                  <div className="flex items-center text-sm text-gray-500">
                    <FaMapMarkerAlt className="mr-1" />
                    {darbar.location}
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <span className="text-gray-500 w-24">In Charge:</span>
                  <span className="font-medium">{darbar.inCharge}</span>
                </div>
                <div className="flex items-center text-sm">
                  <FaPhone className="text-gray-400 mr-2" />
                  <span>{darbar.contact}</span>
                </div>
                <div className="flex items-center text-sm">
                  <FaEnvelope className="text-gray-400 mr-2" />
                  <span>{darbar.email}</span>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{darbar.followers}</div>
                  <div className="text-sm text-blue-600">Followers</div>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">{darbar.events}</div>
                  <div className="text-sm text-green-600">Events</div>
                </div>
              </div>

              <div className="mt-6 flex justify-between">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  darbar.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {darbar.status}
                </span>
                <div className="space-x-2">
                  <button className="p-2 text-blue-600 hover:bg-blue-50 rounded">
                    <FaEdit />
                  </button>
                  <button className="p-2 text-red-600 hover:bg-red-50 rounded">
                    <FaTrash />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DarbarManagement;