import React, { useState } from 'react';
import { FaVideo, FaCalendar, FaUsers, FaLink, FaPlus } from 'react-icons/fa';

const Conferences = () => {
  const [conferences, setConferences] = useState([
    {
      id: 1,
      title: 'Monthly Reporter Meet',
      date: '2024-02-20',
      time: '14:00',
      participants: 25,
      status: 'Upcoming',
      platform: 'Zoom',
      link: 'https://zoom.us/j/123456789'
    },
    // Add more conferences...
  ]);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Conferences</h1>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <FaPlus className="mr-2" />
          Schedule Conference
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {conferences.map((conference) => (
          <div key={conference.id} className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <FaVideo className="text-purple-600 text-xl" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-800">{conference.title}</h3>
                  <div className="flex items-center text-sm text-gray-500">
                    <FaCalendar className="mr-1" />
                    {conference.date} at {conference.time}
                  </div>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                conference.status === 'Upcoming' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
              }`}>
                {conference.status}
              </span>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center text-gray-600">
                  <FaUsers className="mr-2" />
                  <span>{conference.participants} Participants</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <span className="mr-2">Platform:</span>
                  <span className="font-medium">{conference.platform}</span>
                </div>
              </div>

              <div className="flex items-center text-gray-600">
                <FaLink className="mr-2" />
                <a href={conference.link} className="text-blue-600 hover:underline truncate">
                  {conference.link}
                </a>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button className="px-4 py-2 bg-purple-50 text-purple-600 rounded-lg hover:bg-purple-100">
                Edit Conference
              </button>
              <button className="px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100">
                Cancel Conference
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Conferences;