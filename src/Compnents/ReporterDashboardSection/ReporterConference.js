import React from 'react';
import { FaPlus, FaCheck, FaHourglassHalf, FaClock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ReporterConference = () => {
  const navigate = useNavigate();

  const cards = [
    {
      title: 'New Conference',
      icon: <FaPlus className="w-6 h-6" />,
      count: 0,
      color: 'from-blue-500 to-blue-600',
      onClick: () => navigate('/reporter/conference/new'),
      description: 'Create a new conference'
    },
    {
      title: 'Accepted Conference',
      icon: <FaCheck className="w-6 h-6" />,
      count: 12,
      color: 'from-green-500 to-green-600',
      onClick: () => navigate('/reporter/conference/accepted'),
      description: 'View accepted conference'
    },
    {
      title: 'Completed Conference',
      icon: <FaHourglassHalf className="w-6 h-6" />,
      count: 45,
      color: 'from-purple-500 to-purple-600',
      onClick: () => navigate('/reporter/conference/completed'),
      description: 'View completed conference'
    },
    {
      title: 'Pending Conference',
      icon: <FaClock className="w-6 h-6" />,
      count: 8,
      color: 'from-yellow-500 to-yellow-600',
      onClick: () => navigate('/reporter/conference/pending'),
      description: 'View pending conference'
    }
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Conference Management</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            onClick={card.onClick}
            className={`
              bg-gradient-to-r ${card.color}
              p-6 rounded-xl shadow-lg
              transform transition-all duration-300
              hover:scale-105 hover:shadow-xl
              cursor-pointer
              relative
            `}
          >
            <div className="flex items-center justify-between text-white">
              <div className="bg-white/20 rounded-full p-3">
                {card.icon}
              </div>
              <span className="text-3xl font-bold">{card.count}</span>
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-white">{card.title}</h3>
              <p className="text-white/80 text-sm mt-1">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReporterConference;



