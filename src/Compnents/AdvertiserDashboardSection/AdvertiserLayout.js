import React, { useState, useEffect } from "react";
import { useLocation, Outlet, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import AdvertiserHeader from "./AdvertiserHeader";

// Import Icons
import { 
  FaThLarge, FaAd, FaVideo, FaHistory, 
  FaMoneyBillWave, FaUserCircle, FaCog, FaSignOutAlt 
} from "react-icons/fa";

const AdvertiserLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProfileComplete, setIsProfileComplete] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Check if profile is complete
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    setIsProfileComplete(!!user.name && !!user.email);
  }, []);

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to log out?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log out",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/auth/login");
        Swal.fire("Logged Out", "You have been logged out.", "success");
      }
    });
  };

  const onNavigate = (path) => {
    navigate(`/advertiser/${path}`);
    setIsSidebarOpen(false);
  };

  // Menu items structure
  const menuItems = [
    {
      title: "Main",
      titleColor: "text-gray-600",
      items: [
        { 
          path: "dashboard", 
          icon: FaThLarge, 
          label: "Dashboard", 
          gradient: "from-orange-400 to-orange-600",
          iconColor: "text-orange-500"
        }
      ]
    },
    {
      title: "Advertisement Details",
      titleColor: "text-gray-600",
      items: [
        { 
          path: "PostAdvertisement", 
          icon: FaAd, 
          label: "Post Advertisement", 
          gradient: "from-green-400 to-green-600",
          iconColor: "text-green-500"
        },
        { 
          path: "leads-status", 
          icon: FaAd, 
          label: "Advertisement Status", 
          gradient: "from-green-400 to-green-600",
          iconColor: "text-green-500"
        }
      ]
    },
    {
      title: "Conference Details",
      titleColor: "text-gray-600",
      items: [
        { 
          path: "conferences", 
          icon: FaVideo, 
          label: "Create Conferences", 
          gradient: "from-purple-400 to-purple-600",
          iconColor: "text-purple-500"
        },
        { 
          path: "get-user-conferences", 
          icon: FaVideo, 
          label: "Conference Status", 
          gradient: "from-purple-400 to-purple-600",
          iconColor: "text-purple-500"
        }
      ]
    },
    {
      title: "Payment Details",
      titleColor: "text-gray-600",
      items: [
        { 
          path: "payment-history", 
          icon: FaHistory, 
          label: "Payment History", 
          gradient: "from-yellow-400 to-yellow-600",
          iconColor: "text-yellow-500"
        },
        { 
          path: "payment-historyConference", 
          icon: FaHistory, 
          label: "Payment History Conference", 
          gradient: "from-yellow-400 to-yellow-600",
          iconColor: "text-yellow-500"
        },
        { 
          path: "withdrawal-history", 
          icon: FaHistory, 
          label: "Withdrawal History", 
          gradient: "from-yellow-400 to-yellow-600",
          iconColor: "text-yellow-500"
        },
        { 
          path: "withdrawal-requests", 
          icon: FaMoneyBillWave, 
          label: "Withdrawal Requests", 
          gradient: "from-yellow-400 to-yellow-600",
          iconColor: "text-yellow-500"
        }
      ]
    },
    {
      title: "Accounts",
      titleColor: "text-gray-600",
      items: [
        { 
          path: "profile", 
          icon: FaUserCircle, 
          label: "Profile", 
          gradient: "from-indigo-400 to-indigo-600",
          iconColor: "text-indigo-500"
        },
        { 
          path: "settings", 
          icon: FaCog, 
          label: "Change Password", 
          gradient: "from-indigo-400 to-indigo-600",
          iconColor: "text-indigo-500"
        }
      ]
    }
  ];

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Sidebar Toggle Button for Mobile */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? "✕" : "☰"}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-4 border-b h-16">
            <h1 className="text-xl font-semibold text-gray-800">iinsaf Advertiser</h1>
            <button className="lg:hidden" onClick={() => setIsSidebarOpen(false)}>
              ✕
            </button>
          </div>

          {/* Scrollable Sidebar Content */}
          <div className="overflow-y-auto h-[calc(100vh-4rem)] px-4 py-6 custom-scrollbar">
            {menuItems.map((section, idx) => (
              <div key={idx} className="mb-6">
                <h2 className={`font-bold uppercase text-xs tracking-wider mb-3 px-2 ${section.titleColor}`}>
                  {section.title}
                </h2>
                {section.items.map((item, itemIdx) => {
                  const isActive = location.pathname === `/advertiser/${item.path}`;
                  return (
                    <div
                      key={itemIdx}
                      onClick={() => onNavigate(item.path)}
                      className={`
                        flex items-center space-x-3 px-4 py-3 rounded-xl cursor-pointer
                        transition-all duration-300 transform hover:scale-105
                        ${isActive
                          ? `bg-gradient-to-r ${item.gradient} shadow-lg`
                          : 'hover:bg-gray-100'
                        }
                        group
                      `}
                    >
                      <div className={`
                        transition-all duration-300
                        ${isActive 
                          ? 'text-white' 
                          : `${item.iconColor} group-hover:scale-110`
                        }
                      `}>
                        <item.icon className="w-5 h-5" />
                      </div>
                      <span className={`
                        font-medium transition-all duration-300
                        ${isActive 
                          ? 'text-white' 
                          : 'text-gray-700'
                        }
                      `}>
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            ))}

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="w-full mt-6 flex items-center space-x-3 px-4 py-3 rounded-xl
                bg-gradient-to-r from-red-500 to-red-600 text-white
                transition-all duration-300 transform hover:scale-105 hover:shadow-lg
                group"
            >
              <FaSignOutAlt className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <AdvertiserHeader isProfileComplete={isProfileComplete} />
        
        {/* Main Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
          <Outlet />
        </main>
      </div>

      {/* Help Support Button */}
      <button
        onClick={() => navigate("/help")}
        className="fixed bottom-4 right-4 bg-blue-500 text-white rounded-full px-6 py-3 shadow-lg hover:bg-blue-700 transition duration-150 ease-in-out"
      >
        Help Support
      </button>
    </div>
  );
};

export default AdvertiserLayout;
