import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaWallet, FaUserCircle, FaCog, FaCheck, FaTimes } from "react-icons/fa";

const AdvertiserHeader = ({ isProfileComplete }) => {
  const navigate = useNavigate();

  return (
    <header className="bg-white shadow-sm h-16 flex items-center justify-end px-6">
      <div className="flex items-center space-x-4">
        {/* Wallet Button */}
        <button
          onClick={() => navigate('/advertiser/wallet')}
          className="p-2 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-full transition-all duration-300 flex items-center gap-2"
          title="Wallet"
        >
          <FaWallet className="w-5 h-5" />
          <span className="font-medium">₹0.00</span>
        </button>

        {/* Profile Button */}
        <div className="relative">
          <button
            onClick={() => navigate('/advertiser/profile')}
            className="p-2 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-full transition-all duration-300"
            title="Profile"
          >
            <FaUserCircle className="w-5 h-5" />
            {/* Verification Badge */}
            {isProfileComplete && (
              <div className="absolute -top-1 -right-1 bg-green-500 rounded-full p-1 border-2 border-white">
                <FaCheck className="w-2 h-2 text-white" />
              </div>
            )}
            {/* {!isProfileComplete && (
              <div className="absolute -top-1 -right-1 bg-red-500 rounded-full p-1 border-2 border-white">
                <FaTimes className="w-2 h-2 text-white" />
              </div>
            )} */}
          </button>
        </div>

        {/* Settings Button */}
        <button
          onClick={() => navigate('/advertiser/settings')}
          className="p-2 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-full transition-all duration-300"
          title="Settings"
        >
          <FaCog className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
};

export default AdvertiserHeader;
