import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBell, FaUserCircle } from 'react-icons/fa';

const AdminHeader = () => {
  const navigate = useNavigate();
  const adminName = localStorage.getItem('adminName') || 'Admin';

  return (
    <header className="bg-white h-16 px-6 flex items-center justify-between border-b">
      {/* Left Side - Logo and Welcome Message */}
      <div className="flex items-center space-x-4">
        <img 
          src="/images/iinsaf.png" 
          alt="IINSAF Logo" 
          className="h-10 w-auto"
        />
        <div className="flex flex-col">
          <span className="text-lg font-semibold text-gray-900">
            Welcome back, {adminName}
          </span>
          <span className="text-sm text-gray-500">
            Have a nice day at work
          </span>
        </div>
      </div>

      {/* Right Side Actions */}
      <div className="flex items-center space-x-4">
        {/* Notifications */}
        <div className="relative">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <FaBell className="w-6 h-6 text-gray-600" />
            <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs">
              3
            </span>
          </button>
        </div>

        {/* Admin Profile */}
        <div className="flex items-center space-x-3 border-l pl-4">
          <div className="flex flex-col items-end">
            <span className="font-medium text-sm text-gray-900">{adminName}</span>
            <span className="text-xs text-gray-500">Super Admin</span>
          </div>
          <button 
            onClick={() => navigate('/admin/profile')}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <FaUserCircle className="w-8 h-8 text-gray-600" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;