import React from 'react';
import { FaPlus, FaCheck, FaHourglassHalf, FaClock, FaChartLine } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const ReporterAdvertisement = () => {
  const navigate = useNavigate();

  const cards = [
    {
      title: 'New Advertise',
      icon: <FaPlus className="w-6 h-6" />,
      count: 0,
      color: 'from-blue-500 to-blue-600',
      onClick: () => navigate('/reporter/advertisement/new'),
      description: 'Create a new advertise',
      trend: null
    },
    {
      title: 'Accepted Leads',
      icon: <FaCheck className="w-6 h-6" />,
      count: 12,
      color: 'from-green-500 to-green-600',
      onClick: () => navigate('/reporter/advertisement/accepted'),
      description: 'View accepted advertise leads',
      trend: '+2.5%'
    },
    {
      title: 'Completed Leads',
      icon: <FaHourglassHalf className="w-6 h-6" />,
      count: 45,
      color: 'from-purple-500 to-purple-600',
      onClick: () => navigate('/reporter/advertisement/completed'),
      description: 'View completed advertise leads',
      trend: '+5.2%'
    },
    {
      title: 'Pending Leads',
      icon: <FaClock className="w-6 h-6" />,
      count: 8,
      color: 'from-yellow-500 to-yellow-600',
      onClick: () => navigate('/reporter/advertisement/pending'),
      description: 'View pending advertise leads',
      trend: '-1.8%'
    }
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Advertisement Management
        </h1>
        <p className="text-gray-600">
          Monitor and manage your advertising campaigns effectively
        </p>
      </div>
      
      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            onClick={card.onClick}
            className={`
              bg-gradient-to-r ${card.color}
              p-6 rounded-2xl shadow-lg
              cursor-pointer
              relative
              overflow-hidden
            `}
          >
            {/* Background Pattern */}
            <div className="absolute right-0 top-0 opacity-10">
              <svg
                width="100"
                height="100"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="75" cy="25" r="50" fill="currentColor" />
              </svg>
            </div>

            {/* Card Content */}
            <div className="relative z-10">
              <div className="flex items-center justify-between text-white mb-4">
                <div className="bg-white/20 rounded-full p-3 backdrop-blur-sm">
                  {card.icon}
                </div>
                <div className="text-right">
                  <span className="text-4xl font-bold">{card.count}</span>
                  {card.trend && (
                    <div className={`text-sm flex items-center justify-end mt-1 ${
                      card.trend.startsWith('+') ? 'text-green-200' : 'text-red-200'
                    }`}>
                      <FaChartLine className="mr-1" />
                      {card.trend}
                    </div>
                  )}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">
                  {card.title}
                </h3>
                <p className="text-white/80 text-sm">
                  {card.description}
                </p>
              </div>
            </div>

            {/* Hover Effect Overlay */}
            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-10 transition-opacity duration-300 rounded-2xl" />
          </motion.div>
        ))}
      </div>

      {/* Quick Stats Section */}
      <div className="mt-8 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Quick Statistics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-blue-50 rounded-xl">
            <div className="text-blue-600 text-sm font-medium">
              Total Revenue
            </div>
            <div className="text-2xl font-bold text-gray-800">
              ₹45,250
            </div>
          </div>
          <div className="p-4 bg-green-50 rounded-xl">
            <div className="text-green-600 text-sm font-medium">
              Success Rate
            </div>
            <div className="text-2xl font-bold text-gray-800">
              85%
            </div>
          </div>
          <div className="p-4 bg-purple-50 rounded-xl">
            <div className="text-purple-600 text-sm font-medium">
              Active Campaigns
            </div>
            <div className="text-2xl font-bold text-gray-800">
              12
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReporterAdvertisement;

