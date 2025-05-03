import React, { useState } from 'react';
import { 
  FaAd, 
  FaVideo, 
  FaMoneyBillWave, 
  FaCheckCircle,
  FaTimesCircle,
  FaHourglassHalf,
  FaUserFriends
} from 'react-icons/fa';

const AdvertiserDashboard = () => {
  // Initial State
  const [stats] = useState({
    totalAds: 24,
    activeAds: 12,
    pendingAds: 5,
    completedAds: 7,
    rejectedAds: 3,
    totalLeads: 156,
    pendingLeads: 42,
    completedLeads: 98,
    rejectedLeads: 16,
    totalSpent: "₹45,000",
    totalConferences: 8
  });

  const [recentActivities] = useState([
    { id: 1, type: 'New Ad', title: 'Product Launch Campaign', time: '2 hours ago' },
    { id: 2, type: 'Conference', title: 'Media Briefing', time: '1 day ago' },
    { id: 3, type: 'Payment', amount: '₹5,000', time: '3 days ago' },
    { id: 4, type: 'Ad Completed', title: 'Brand Awareness', time: '1 week ago' },
    { id: 5, type: 'Ad Rejected', title: 'Holiday Special', time: '2 weeks ago', reason: 'Content policy violation' },
  ]);

  console.log("AdvertiserDashboard rendering with stats:", stats); // Debug log

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Advertiser Dashboard</h1>
      
      {/* Advertisement Stats Grid */}
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Advertisement Statistics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Total Advertisements */}
        <div className="bg-blue-500 p-6 rounded-xl shadow-lg text-white">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium opacity-80">Total Advertisements</p>
              <p className="text-2xl font-bold mt-1">{stats.totalAds}</p>
            </div>
            <FaAd className="w-10 h-10 opacity-80" />
          </div>
        </div>

        {/* Active Advertisements */}
        <div className="bg-green-500 p-6 rounded-xl shadow-lg text-white">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium opacity-80">Active Advertisements</p>
              <p className="text-2xl font-bold mt-1">{stats.activeAds}</p>
            </div>
            <FaCheckCircle className="w-10 h-10 opacity-80" />
          </div>
        </div>

        {/* Pending Advertisements */}
        <div className="bg-yellow-500 p-6 rounded-xl shadow-lg text-white">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium opacity-80">Pending Advertisements</p>
              <p className="text-2xl font-bold mt-1">{stats.pendingAds}</p>
            </div>
            <FaHourglassHalf className="w-10 h-10 opacity-80" />
          </div>
        </div>

        {/* Rejected Advertisements */}
        <div className="bg-red-500 p-6 rounded-xl shadow-lg text-white">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium opacity-80">Rejected Advertisements</p>
              <p className="text-2xl font-bold mt-1">{stats.rejectedAds}</p>
            </div>
            <FaTimesCircle className="w-10 h-10 opacity-80" />
          </div>
        </div>
      </div>
      
      {/* Leads Stats Grid */}
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Lead Statistics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Total Leads */}
        <div className="bg-indigo-500 p-6 rounded-xl shadow-lg text-white">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium opacity-80">Total Leads</p>
              <p className="text-2xl font-bold mt-1">{stats.totalLeads}</p>
            </div>
            <FaUserFriends className="w-10 h-10 opacity-80" />
          </div>
        </div>

        {/* Completed Leads */}
        <div className="bg-green-500 p-6 rounded-xl shadow-lg text-white">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium opacity-80">Completed Leads</p>
              <p className="text-2xl font-bold mt-1">{stats.completedLeads}</p>
            </div>
            <FaCheckCircle className="w-10 h-10 opacity-80" />
          </div>
        </div>

        {/* Pending Leads */}
        <div className="bg-yellow-500 p-6 rounded-xl shadow-lg text-white">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium opacity-80">Pending Leads</p>
              <p className="text-2xl font-bold mt-1">{stats.pendingLeads}</p>
            </div>
            <FaHourglassHalf className="w-10 h-10 opacity-80" />
          </div>
        </div>

        {/* Rejected Leads */}
        <div className="bg-red-500 p-6 rounded-xl shadow-lg text-white">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium opacity-80">Rejected Leads</p>
              <p className="text-2xl font-bold mt-1">{stats.rejectedLeads}</p>
            </div>
            <FaTimesCircle className="w-10 h-10 opacity-80" />
          </div>
        </div>
      </div>
      
      {/* Financial Stats */}
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Financial Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Total Spent */}
        <div className="bg-emerald-500 p-6 rounded-xl shadow-lg text-white">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium opacity-80">Total Spent</p>
              <p className="text-2xl font-bold mt-1">{stats.totalSpent}</p>
            </div>
            <FaMoneyBillWave className="w-10 h-10 opacity-80" />
          </div>
        </div>

        {/* Total Conferences */}
        <div className="bg-purple-500 p-6 rounded-xl shadow-lg text-white">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium opacity-80">Total Conferences</p>
              <p className="text-2xl font-bold mt-1">{stats.totalConferences}</p>
            </div>
            <FaVideo className="w-10 h-10 opacity-80" />
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h2>
        <div className="divide-y">
          {recentActivities.map(activity => (
            <div key={activity.id} className="py-3 flex justify-between items-center">
              <div>
                <p className="font-medium text-gray-800">{activity.type}</p>
                <p className="text-sm text-gray-500">
                  {activity.title || (activity.amount && `Amount: ${activity.amount}`)}
                </p>
                {activity.reason && (
                  <p className="text-xs text-red-500 mt-1">Reason: {activity.reason}</p>
                )}
              </div>
              <p className="text-sm text-gray-500">{activity.time}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 flex items-center justify-center">
            <FaAd className="mr-2" /> Create New Advertisement
          </button>
          <button className="p-4 bg-purple-100 text-purple-600 rounded-lg hover:bg-purple-200 flex items-center justify-center">
            <FaVideo className="mr-2" /> Schedule Conference
          </button>
          <button className="p-4 bg-green-100 text-green-600 rounded-lg hover:bg-green-200 flex items-center justify-center">
            <FaMoneyBillWave className="mr-2" /> Make Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdvertiserDashboard;

