import React, { useState, useEffect } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  FaTachometerAlt,
  FaAd,
  FaVideo,
  FaGavel,
  FaMoneyBillWave,
  FaCreditCard,
  FaUserCircle,
  FaBars,
  FaTimes,
  FaMicrophone,
  FaBullhorn,
  FaWallet,
  FaCog,
  FaCheck,
  FaSignOutAlt,
} from "react-icons/fa";
import ReporterHeader from './ReporterHeader';

const ReporterLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isProfileComplete, setIsProfileComplete] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const checkProfileCompletion = async () => {
      try {
        const user = JSON.parse(localStorage.getItem('user'));
        // Add your profile completion criteria here
        const isComplete = user && user.name && user.email && user.phone && user.address;
        setIsProfileComplete(isComplete);
      } catch (error) {
        console.error('Error checking profile completion:', error);
        setIsProfileComplete(false);
      }
    };

    checkProfileCompletion();
  }, []);

  const menuItems = [
    { 
      path: "/reporter/dashboard", 
      icon: FaTachometerAlt, 
      label: "Dashboard",
      gradient: "from-blue-200 to-blue-300",
      hoverGradient: "from-blue-300 to-blue-400",
      textColor: "text-blue-900"
    },
    { 
      path: "/reporter/advertisement", 
      icon: FaAd, 
      label: "Advertisement",
      gradient: "from-purple-200 to-purple-300",
      hoverGradient: "from-purple-300 to-purple-400",
      textColor: "text-purple-900"
    },
    { 
      path: "/reporter/conference", 
      icon: FaVideo, 
      label: "Conference",
      gradient: "from-green-200 to-green-300",
      hoverGradient: "from-green-300 to-green-400",
      textColor: "text-green-900"
    },
    { 
      path: "/reporter/darbar", 
      icon: FaGavel, 
      label: "Darbar",
      gradient: "from-red-200 to-red-300",
      hoverGradient: "from-red-300 to-red-400",
      textColor: "text-red-900"
    },
    { 
      path: "/reporter/podcast", 
      icon: FaMicrophone, 
      label: "Podcast",
      gradient: "from-pink-200 to-pink-300",
      hoverGradient: "from-pink-300 to-pink-400",
      textColor: "text-pink-900"
    },
    { 
      path: "/reporter/voice", 
      icon: FaBullhorn, 
      label: "Raise Voice",
      gradient: "from-yellow-200 to-yellow-300",
      hoverGradient: "from-yellow-300 to-yellow-400",
      textColor: "text-yellow-900"
    },
    { 
      path: "/reporter/payment", 
      icon: FaMoneyBillWave, 
      label: "Payment",
      gradient: "from-emerald-200 to-emerald-300",
      hoverGradient: "from-emerald-300 to-emerald-400",
      textColor: "text-emerald-900"
    },
    { 
      path: "/reporter/cards", 
      icon: FaCreditCard, 
      label: "ID Cards",
      gradient: "from-cyan-200 to-cyan-300",
      hoverGradient: "from-cyan-300 to-cyan-400",
      textColor: "text-cyan-900"
    },
    { 
      path: "/reporter/account", 
      icon: FaUserCircle, 
      label: "Account",
      gradient: "from-indigo-200 to-indigo-300",
      hoverGradient: "from-indigo-300 to-indigo-400",
      textColor: "text-indigo-900"
    },
  ];

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Sidebar Toggle Button for Mobile */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar */}
      <div
        className={`
          fixed lg:static
          inset-y-0 left-0
          w-64 bg-white
          shadow-xl
          transform transition-all duration-300 ease-in-out
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
          rounded-r-xl lg:rounded-none
          border-r border-gray-100
        `}
      >
        {/* Logo Section */}
        <div className="h-16 flex items-center justify-center border-b bg-gradient-to-r from-blue-50 to-white">
          <img 
            src="/images/iinsaf.png" 
            alt="IINSAF Logo" 
            className="h-12 hover:scale-105 transition-transform duration-300" 
          />
        </div>

        {/* Navigation Menu */}
        <nav className="mt-6 px-3">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`
                flex items-center px-4 py-3 my-1
                rounded-lg transition-all duration-300
                ${
                  location.pathname === item.path
                    ? `bg-gradient-to-r ${item.gradient} ${item.textColor} shadow-md scale-105`
                    : "text-gray-600 hover:bg-gradient-to-r"
                }
                hover:${item.hoverGradient}
                hover:${item.textColor}
                hover:shadow-lg hover:scale-105
              `}
            >
              <item.icon className={`w-5 h-5 mr-3 ${
                location.pathname === item.path
                  ? "animate-pulse"
                  : ""
              }`} />
              <span className="font-medium">{item.label}</span>
            </Link>
          ))}

          {/* Logout Button */}
          <button
            onClick={() => {
              localStorage.removeItem('token');
              localStorage.removeItem('user');
              navigate('/auth/login');
            }}
            className="w-full flex items-center px-4 py-3 my-1 mt-4
              rounded-lg transition-all duration-300
              text-white
              bg-gradient-to-r from-red-600 to-red-700
              hover:from-red-700 hover:to-red-800
              hover:shadow-lg hover:scale-105"
          >
            <FaSignOutAlt className="w-5 h-5 mr-3" />
            <span className="font-medium">Logout</span>
          </button>
        </nav>

        {/* Bottom Section */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t bg-gradient-to-t from-blue-50 to-white">
          <div className="text-sm text-gray-500 text-center">
            IINSAF Reporter Portal
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <ReporterHeader isProfileComplete={isProfileComplete} />
        
        {/* Main Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default ReporterLayout;
