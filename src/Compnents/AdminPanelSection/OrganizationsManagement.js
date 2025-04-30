import React, { useState } from 'react';
import { FaBuilding, FaUsers, FaGlobe, FaEdit, FaTrash, FaCheckCircle } from 'react-icons/fa';

const OrganizationsManagement = () => {
  const [organizations, setOrganizations] = useState([
    {
      id: 1,
      name: 'Islamic Relief',
      type: 'NGO',
      location: 'International',
      members: 500,
      verified: true,
      status: 'Active',
      website: 'www.islamicrelief.org',
      projects: 25,
      followers: 10000
    },
    // Add more organizations...
  ]);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Organizations Management</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Add Organization
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {organizations.map((org) => (
          <div key={org.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <FaBuilding className="text-blue-600 text-xl" />
                  </div>
                  <div className="ml-4">
                    <div className="flex items-center">
                      <h3 className="text-lg font-semibold text-gray-800">{org.name}</h3>
                      {org.verified && (
                        <FaCheckCircle className="ml-2 text-blue-500" title="Verified Organization" />
                      )}
                    </div>
                    <div className="text-sm text-gray-500">{org.type}</div>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center text-sm">
                  <FaGlobe className="text-gray-400 mr-2" />
                  <a href={`https://${org.website}`} className="text-blue-600 hover:underline">
                    {org.website}
                  </a>
                </div>
                <div className="flex items-center text-sm">
                  <FaUsers className="text-gray-400 mr-2" />
                  <span>{org.members} Members</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-blue-50 p-3 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600">{org.projects}</div>
                  <div className="text-sm text-blue-600">Projects</div>
                </div>
                <div className="bg-green-50 p-3 rounded-lg text-center">
                  <div className="text-2xl font-bold text-green-600">{org.followers}</div>
                  <div className="text-sm text-green-600">Followers</div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  org.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {org.status}
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

export default OrganizationsManagement;