import React, { useState } from 'react';
import { FaMicrophone, FaUser, FaCalendar, FaPlay, FaPause, FaEdit, FaTrash } from 'react-icons/fa';

const VoicesManagement = () => {
  const [voices, setVoices] = useState([
    {
      id: 1,
      title: 'Morning Prayer',
      speaker: 'Sheikh Muhammad',
      duration: '5:30',
      date: '2024-02-15',
      category: 'Prayer',
      status: 'Active',
      plays: 1200,
      likes: 450
    },
    // Add more voices...
  ]);

  const [playing, setPlaying] = useState(null);

  const handlePlay = (id) => {
    setPlaying(playing === id ? null : id);
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Voices Management</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Upload New Voice
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {voices.map((voice) => (
          <div key={voice.id} className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <FaMicrophone className="text-purple-600 text-xl" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-800">{voice.title}</h3>
                  <div className="flex items-center text-sm text-gray-500">
                    <FaUser className="mr-1" />
                    {voice.speaker}
                  </div>
                </div>
              </div>
              <div className="text-sm text-gray-500">
                <FaCalendar className="inline mr-1" />
                {voice.date}
              </div>
            </div>

            <div className="flex items-center justify-between mb-4">
              <div className="flex space-x-4">
                <button
                  onClick={() => handlePlay(voice.id)}
                  className={`p-3 rounded-full ${
                    playing === voice.id ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'
                  }`}
                >
                  {playing === voice.id ? <FaPause /> : <FaPlay />}
                </button>
                <div className="flex flex-col justify-center">
                  <div className="text-sm font-medium">{voice.duration}</div>
                  <div className="text-xs text-gray-500">{voice.category}</div>
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="text-center">
                  <div className="text-lg font-bold text-gray-800">{voice.plays}</div>
                  <div className="text-xs text-gray-500">Plays</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-gray-800">{voice.likes}</div>
                  <div className="text-xs text-gray-500">Likes</div>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                voice.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {voice.status}
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
        ))}
      </div>
    </div>
  );
};

export default VoicesManagement;