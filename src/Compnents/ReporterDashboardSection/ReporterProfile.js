import React from 'react';

const ReporterProfile = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Profile</h1>
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-24 h-24 bg-gray-200 rounded-full">
            {/* Profile image placeholder */}
          </div>
          <div>
            <h2 className="text-xl font-semibold">Reporter Name</h2>
            <p className="text-gray-600">Reporter ID: #12345</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="text-sm text-gray-600">Email</label>
              <p className="font-medium">reporter@example.com</p>
            </div>
            <div>
              <label className="text-sm text-gray-600">Phone</label>
              <p className="font-medium">+1 234 567 8900</p>
            </div>
            <div>
              <label className="text-sm text-gray-600">Location</label>
              <p className="font-medium">New Delhi, India</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-sm text-gray-600">Joined Date</label>
              <p className="font-medium">January 1, 2024</p>
            </div>
            <div>
              <label className="text-sm text-gray-600">Status</label>
              <p className="font-medium text-green-600">Active</p>
            </div>
            <div>
              <label className="text-sm text-gray-600">Reports Published</label>
              <p className="font-medium">42</p>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReporterProfile;