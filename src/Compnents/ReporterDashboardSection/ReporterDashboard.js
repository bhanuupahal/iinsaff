import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaAd,
  FaVideo,
  FaGavel,
  FaMicrophone,
  FaBullhorn,
  FaMoneyBillWave,
  FaCreditCard,
  FaTimes,
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const ReporterDashboard = () => {
  const navigate = useNavigate();
  const [showNotifications, setShowNotifications] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const notifications = {
    advertisement: [
      { id: 1, message: "New ad campaign request", time: "2 hours ago" },
      { id: 2, message: "Campaign performance update", time: "5 hours ago" },
      { id: 3, message: "Ad budget alert", time: "1 day ago" },
    ],
    conference: [
      { id: 1, message: "Upcoming press conference", time: "1 hour ago" },
    ],
    podcast: [
      { id: 1, message: "New podcast listener milestone", time: "30 mins ago" },
      { id: 2, message: "Comment on your podcast", time: "2 hours ago" },
      { id: 3, message: "New subscriber alert", time: "3 hours ago" },
      { id: 4, message: "Content suggestion", time: "5 hours ago" },
      { id: 5, message: "Analytics update", time: "1 day ago" },
    ],
    voice: [
      { id: 1, message: "Your voice post is trending", time: "1 hour ago" },
      { id: 2, message: "New response to your post", time: "4 hours ago" },
    ],
    payment: [
      { id: 1, message: "Payment received", time: "2 hours ago" },
    ],
  };

  const dashboardCards = [
    {
      title: 'Advertisement',
      icon: <FaAd className="w-8 h-8" />,
      description: 'Manage your advertisement campaigns',
      path: '/reporter/advertisement',
      color: 'from-blue-500 to-blue-600',
      notifications: notifications.advertisement.length,
      type: 'advertisement'
    },
    {
      title: 'Conference',
      icon: <FaVideo className="w-8 h-8" />,
      description: 'Schedule and manage press conferences',
      path: '/reporter/conference',
      color: 'from-green-500 to-green-600',
      notifications: notifications.conference.length,
      type: 'conference'
    },
    {
      title: 'Darbar',
      icon: <FaGavel className="w-8 h-8" />,
      description: 'Access Darbar management system',
      path: '/reporter/darbar',
      color: 'from-purple-500 to-purple-600',
      notifications: 0,
      type: 'darbar'
    },
    {
      title: 'Podcast',
      icon: <FaMicrophone className="w-8 h-8" />,
      description: 'Create and manage your podcasts',
      path: '/reporter/podcast',
      color: 'from-red-500 to-red-600',
      notifications: notifications.podcast.length,
      type: 'podcast'
    },
    {
      title: 'Raise Voice',
      icon: <FaBullhorn className="w-8 h-8" />,
      description: 'Share your concerns and opinions',
      path: '/reporter/voice',
      color: 'from-yellow-500 to-yellow-600',
      notifications: notifications.voice.length,
      type: 'voice'
    },
    {
      title: 'Payment',
      icon: <FaMoneyBillWave className="w-8 h-8" />,
      description: 'View and manage payments',
      path: '/reporter/payment',
      color: 'from-emerald-500 to-emerald-600',
      notifications: notifications.payment.length,
      type: 'payment'
    },
    {
      title: 'ID Cards',
      icon: <FaCreditCard className="w-8 h-8" />,
      description: 'Access your digital ID cards',
      path: '/reporter/cards',
      color: 'from-indigo-500 to-indigo-600',
      notifications: 0,
      type: 'cards'
    },
  ];

  const handleNotificationClick = (e, card) => {
    e.stopPropagation();
    setSelectedCard(card);
    setShowNotifications(true);
  };

  return (
    <div className="p-6 relative">
      <h1 className="text-2xl font-bold mb-6">Reporter Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dashboardCards.map((card, index) => (
          <div
            key={index}
            onClick={() => navigate(card.path)}
            className={`
              bg-gradient-to-r ${card.color} 
              p-6 rounded-xl shadow-lg 
              transform transition-all duration-300 
              hover:scale-105 hover:shadow-xl 
              cursor-pointer
              relative
            `}
          >
            <div className="flex items-center justify-between">
              <div className="text-white">{card.icon}</div>
              {card.notifications > 0 && (
                <motion.div 
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  whileHover={{ scale: 1.1 }}
                  onClick={(e) => handleNotificationClick(e, card)}
                  className="relative group"
                >
                  <div className="bg-white/20 rounded-full p-2 cursor-pointer hover:bg-white/30 transition-all duration-300 relative">
                    <motion.div 
                      initial={{ scale: 1 }}
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ 
                        repeat: Infinity, 
                        duration: 2,
                        repeatType: "reverse" 
                      }}
                      className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-lg"
                    >
                      {card.notifications}
                    </motion.div>
                    
                    {/* Ping Animation */}
                    <div className="absolute -top-2 -right-2 animate-ping bg-red-500 rounded-full w-5 h-5 opacity-75"></div>
                    
                    {/* Notification dot */}
                    <div className="w-2 h-2 bg-white rounded-full relative">
                      <div className="absolute inset-0 bg-white rounded-full animate-pulse"></div>
                    </div>

                    {/* Tooltip */}
                    <div className="absolute top-full right-0 mt-2 scale-0 group-hover:scale-100 transition-transform duration-200 origin-top-right">
                      <div className="bg-black text-white text-xs py-1 px-2 rounded shadow-lg whitespace-nowrap">
                        {card.notifications} new notifications
                      </div>
                      <div className="absolute -top-1 right-2 w-2 h-2 bg-black transform rotate-45"></div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
            
            <h2 className="text-xl font-bold text-white mt-4">{card.title}</h2>
            <p className="text-white/80 mt-2 text-sm">{card.description}</p>
            
            <div className="mt-4 flex justify-end">
              <span className="text-white/80 text-sm hover:text-white">
                View Details →
              </span>
            </div>  
          </div>
        ))}
      </div>

      {/* Notification Popup */}
      {showNotifications && selectedCard && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md m-4 overflow-hidden">
            <div className="p-4 bg-gradient-to-r from-gray-100 to-gray-200 flex justify-between items-center">
              <h3 className="text-xl font-bold text-gray-800">
                {selectedCard.title} Notifications
              </h3>
              <button 
                onClick={() => setShowNotifications(false)}
                className="text-gray-600 hover:text-gray-800"
              >
                <FaTimes />
              </button>
            </div>
            <div className="p-4 max-h-[60vh] overflow-y-auto">
              {notifications[selectedCard.type]?.length > 0 ? (
                notifications[selectedCard.type].map((notification) => (
                  <div 
                    key={notification.id}
                    className="p-3 hover:bg-gray-50 border-b border-gray-100 last:border-0"
                  >
                    <div className="text-gray-800">{notification.message}</div>
                    <div className="text-sm text-gray-500 mt-1">{notification.time}</div>
                  </div>
                ))
              ) : (
                <div className="text-center text-gray-500 py-4">
                  No notifications
                </div>
              )}
            </div>
            <div className="p-4 bg-gradient-to-r from-gray-100 to-gray-200 text-center">
              <button 
                onClick={() => setShowNotifications(false)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReporterDashboard;

const styles = `
  @keyframes pulse {
    0% { transform: scale(0.95); opacity: 0.5; }
    50% { transform: scale(1.05); opacity: 0.8; }
    100% { transform: scale(0.95); opacity: 0.5; }
  }

  @keyframes ping {
    75%, 100% {
      transform: scale(2);
      opacity: 0;
    }
  }

  .animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }

  .animate-ping {
    animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
  }
`;


