import React, { useState } from "react";
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
} from "react-icons/fa";

const ReporterLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  
  const menuItems = [
    { path: "/reporter/dashboard", icon: FaTachometerAlt, label: "Dashboard" },
    { path: "/reporter/advertisement", icon: FaAd, label: "Advertisement" },
    { path: "/reporter/conference", icon: FaVideo, label: "Conference" },
    { path: "/reporter/darbar", icon: FaGavel, label: "Darbar" },
    { path: "/reporter/podcast", icon: FaMicrophone, label: "Podcast" },
    { path: "/reporter/voice", icon: FaBullhorn, label: "Raise Voice" },
    { path: "/reporter/payment", icon: FaMoneyBillWave, label: "Payment" },
    { path: "/reporter/cards", icon: FaCreditCard, label: "ID Cards" },
    { path: "/reporter/account", icon: FaUserCircle, label: "Account" },
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
                    ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md"
                    : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                }
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
        {/* Top Header Bar */}
        <header className="bg-white shadow-sm h-16 flex items-center justify-end px-6">
          <div className="flex items-center space-x-4">
            {/* Wallet Button */}
            <button
              onClick={() => navigate('/reporter/wallet')}
              className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all duration-300 flex items-center gap-2"
              title="Wallet"
            >
              <FaWallet className="w-5 h-5" />
              <span className="font-medium">₹0.00</span>
            </button>

            {/* Profile Button */}
            <button
              onClick={() => navigate('/reporter/profile')}
              className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all duration-300"
              title="Profile"
            >
              <FaUserCircle className="w-5 h-5" />
            </button>

            {/* Settings Button */}
            <button
              onClick={() => navigate('/reporter/settings')}
              className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all duration-300"
              title="Settings"
            >
              <FaCog className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default ReporterLayout;
