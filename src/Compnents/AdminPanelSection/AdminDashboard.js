import React, { useState } from 'react';
import { 
  FaUsers, 
  FaIdCard, 
  FaMosque, 
  FaBuilding,
  FaMoneyBill,
  FaChartLine,
  FaBell,
  FaCalendarAlt
} from 'react-icons/fa';

const AdminDashboard = () => {
  // Mock data - Replace with actual API calls
  const [stats] = useState({
    totalUsers: 1234,
    pendingIdCards: 45,
    totalDarbars: 78,
    totalOrganizations: 156,
    totalRevenue: "₹125,000",
    activeUsers: 890,
    growthRate: "12.5%",
    pendingApprovals: 23
  });

  const [recentActivities] = useState([
    { id: 1, type: 'New User', name: 'John Doe', time: '2 minutes ago' },
    { id: 2, type: 'ID Card Request', name: 'Sarah Smith', time: '5 minutes ago' },
    { id: 3, type: 'New Darbar', name: 'Darbar-e-Aliya', time: '10 minutes ago' },
    { id: 4, type: 'Payment', name: 'Mike Johnson', time: '15 minutes ago' },
  ]);

  const StatCard = ({ icon: Icon, title, value, color }) => (
    <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm">{title}</p>
          <h3 className="text-2xl font-bold mt-2">{value}</h3>
        </div>
        <div className={`w-12 h-12 rounded-full ${color} flex items-center justify-center`}>
          <Icon className="text-white text-xl" />
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2">
            <FaBell />
            <span>Notifications</span>
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          icon={FaUsers} 
          title="Total Users" 
          value={stats.totalUsers} 
          color="bg-blue-500"
        />
        <StatCard 
          icon={FaIdCard} 
          title="Pending ID Cards" 
          value={stats.pendingIdCards} 
          color="bg-yellow-500"
        />
        <StatCard 
          icon={FaMosque} 
          title="Total Darbars" 
          value={stats.totalDarbars} 
          color="bg-green-500"
        />
        <StatCard 
          icon={FaBuilding} 
          title="Organizations" 
          value={stats.totalOrganizations} 
          color="bg-purple-500"
        />
      </div>

      {/* Secondary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          icon={FaMoneyBill} 
          title="Total Revenue" 
          value={stats.totalRevenue} 
          color="bg-emerald-500"
        />
        <StatCard 
          icon={FaUsers} 
          title="Active Users" 
          value={stats.activeUsers} 
          color="bg-cyan-500"
        />
        <StatCard 
          icon={FaChartLine} 
          title="Growth Rate" 
          value={stats.growthRate} 
          color="bg-indigo-500"
        />
        <StatCard 
          icon={FaCalendarAlt} 
          title="Pending Approvals" 
          value={stats.pendingApprovals} 
          color="bg-rose-500"
        />
      </div>

      {/* Recent Activities */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
        <div className="space-y-4">
          {recentActivities.map(activity => (
            <div key={activity.id} className="flex items-center justify-between border-b pb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <FaBell className="text-blue-500" />
                </div>
                <div>
                  <p className="font-medium">{activity.type}</p>
                  <p className="text-sm text-gray-500">{activity.name}</p>
                </div>
              </div>
              <span className="text-sm text-gray-500">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;