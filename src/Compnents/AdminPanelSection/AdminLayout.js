import React from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import Swal from "sweetalert2";
import AdminHeader from './AdminHeader';
// Import icons from react-icons
import { 
  FaThLarge, // Dashboard
  FaAdversal, // Advertisement
  FaUsers, // Users
  FaNewspaper, // Reporter
  FaUserTie, // Marketer
  FaVideo, // Conference
  FaAd, // Free Ad
  FaMoneyBillWave, // Payments
  FaIdCard, // ID Cards
  FaUserShield, // Admin
  FaGavel, // Darbar
  FaBullhorn, // Voices
  FaBuilding, // Organizations
  FaTicketAlt, // Coupon
  FaUserCog, // Profile
  FaCog, // Settings
  FaSignOutAlt // Logout
} from "react-icons/fa";

const AdminLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

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
        localStorage.removeItem("adminToken");
        navigate("/adminlogin");
        Swal.fire("Logged Out", "You have been logged out.", "success");
      }
    });
  };

  const onNavigate = (path) => {
    navigate(`/admin/${path}`);
  };

  const menuItems = [
    { 
      title: "Main",
      titleColor: "text-gray-600",
      items: [
        { 
          path: "dashboard", 
          icon: FaThLarge, 
          label: "Dashboard", 
          gradient: "from-blue-400 to-blue-600",
          iconColor: "text-blue-500"
        }
      ]
    },
    {
      title: "Other",
      titleColor: "text-gray-600",
      items: [
        { 
          path: "priceset", 
          icon: FaAdversal, 
          label: "Advertisement Setting", 
          gradient: "from-purple-400 to-purple-600",
          iconColor: "text-purple-500"
        }
      ]
    },
    {
      title: "All User",
      titleColor: "text-gray-600",
      items: [
        { 
          path: "AllUser", 
          icon: FaUsers, 
          label: "All User Details", 
          gradient: "from-green-400 to-green-600",
          iconColor: "text-green-500"
        }
      ]
    },
    {
      title: "Advertiser Lead",
      titleColor: "text-gray-600",
      items: [
        { 
          path: "getallleads", 
          icon: FaNewspaper, 
          label: "Reporter Advertisement", 
          gradient: "from-yellow-400 to-yellow-600",
          iconColor: "text-yellow-500"
        }
      ]
    },
    {
      title: "Marketer Profiles",
      titleColor: "text-gray-600",
      items: [
        { 
          path: "getallProfiles", 
          icon: FaUserTie, 
          label: "Marketer User", 
          gradient: "from-pink-400 to-pink-600",
          iconColor: "text-pink-500"
        },
        { 
          path: "getalllAdvs", 
          icon: FaAdversal, 
          label: "Marketer Advertisement", 
          gradient: "from-pink-400 to-pink-600",
          iconColor: "text-pink-500"
        }
      ]
    },
    {
      title: "Advertiser Conference",
      titleColor: "text-gray-600",
      items: [
        { 
          path: "allconfrences", 
          icon: FaVideo, 
          label: "All Conferences", 
          gradient: "from-cyan-400 to-cyan-600",
          iconColor: "text-cyan-500"
        }
      ]
    },
    {
      title: "Free Ad",
      titleColor: "text-gray-600",
      items: [
        { 
          path: "freeAd", 
          icon: FaAd, 
          label: "FreeAd", 
          gradient: "from-orange-400 to-orange-600",
          iconColor: "text-orange-500"
        },
        { 
          path: "adStatus", 
          icon: FaAd, 
          label: "AdStatus", 
          gradient: "from-orange-400 to-orange-600",
          iconColor: "text-orange-500"
        }
      ]
    },
    {
      title: "Payments",
      titleColor: "text-gray-600",
      items: [
        { 
          path: "payment-history", 
          icon: FaMoneyBillWave, 
          label: "Payment History", 
          gradient: "from-teal-400 to-teal-600",
          iconColor: "text-teal-500"
        },
        { 
          path: "withdrawal-history", 
          icon: FaMoneyBillWave, 
          label: "Withdrawal History", 
          gradient: "from-teal-400 to-teal-600",
          iconColor: "text-teal-500"
        },
        { 
          path: "withdrawal-requests", 
          icon: FaMoneyBillWave, 
          label: "Withdrawal Requests", 
          gradient: "from-teal-400 to-teal-600",
          iconColor: "text-teal-500"
        }
      ]
    },
    {
      title: "Id-cards",
      titleColor: "text-gray-600",
      items: [
        { 
          path: "card-requests", 
          icon: FaIdCard, 
          label: "New Id-Cards", 
          gradient: "from-indigo-400 to-indigo-600",
          iconColor: "text-indigo-500"
        },
        { 
          path: "approved-cards", 
          icon: FaIdCard, 
          label: "Verified Id-Cards", 
          gradient: "from-indigo-400 to-indigo-600",
          iconColor: "text-indigo-500"
        },
        { 
          path: "rejected-cards", 
          icon: FaIdCard, 
          label: "Rejected Id-Cards", 
          gradient: "from-indigo-400 to-indigo-600",
          iconColor: "text-indigo-500"
        }
      ]
    },
    {
      title: "Create Admins",
      titleColor: "text-gray-600",
      items: [
        { 
          path: "createAdmin", 
          icon: FaUserShield, 
          label: "New Admin", 
          gradient: "from-gray-400 to-gray-600",
          iconColor: "text-gray-500"
        },
        { 
          path: "AllAdmin", 
          icon: FaUserShield, 
          label: "All Admin", 
          gradient: "from-gray-400 to-gray-600",
          iconColor: "text-gray-500"
        }
      ]
    },
    {
      title: "Darbar",
      titleColor: "text-gray-600",
      items: [
        { 
          path: "getAllDarbar", 
          icon: FaGavel, 
          label: "Darbar", 
          gradient: "from-gray-400 to-gray-600",
          iconColor: "text-gray-500"
        }
      ]
    },
    {
      title: "Voices",
      titleColor: "text-gray-600",
      items: [
        { 
          path: "voices", 
          icon: FaBullhorn, 
          label: "Raise Voices", 
          gradient: "from-gray-400 to-gray-600",
          iconColor: "text-gray-500"
        }
      ]
    },
    {
      title: "Organizations",
      titleColor: "text-gray-600",
      items: [
        { 
          path: "organization", 
          icon: FaBuilding, 
          label: "iinsaf Organization", 
          gradient: "from-gray-400 to-gray-600",
          iconColor: "text-gray-500"
        }
      ]
    },
    {
      title: "Discount Coupon",
      titleColor: "text-gray-600",
      items: [
        { 
          path: "admincouponmanage", // This matches the route we added
          icon: FaTicketAlt, 
          label: "Coupon Management", 
          gradient: "from-gray-400 to-gray-600",
          iconColor: "text-gray-500"
        }
      ]
    },
    {
      title: "Settings",
      titleColor: "text-gray-600",
      items: [
        { 
          path: "settings", 
          icon: FaCog, 
          label: "Admin Password", 
          gradient: "from-gray-400 to-gray-600",
          iconColor: "text-gray-500"
        },
        { 
          path: "profile", 
          icon: FaUserCog, 
          label: "Profile Settings", 
          gradient: "from-gray-400 to-gray-600",
          iconColor: "text-gray-500"
        }
      ]
    }
  ];

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      {/* Fixed Sidebar */}
      <div className="w-80 h-screen flex-shrink-0 bg-white shadow-2xl rounded-r-3xl">
        {/* Sidebar Header */}
        <div className="relative">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 h-16 flex items-center justify-center">
            <h2 className="text-2xl font-bold text-white">
              Admin Panel
            </h2>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-400 to-blue-600 opacity-50 blur-sm"></div>
        </div>

        {/* Scrollable Sidebar Content */}
        <div className="overflow-y-auto h-[calc(100vh-4rem)] px-4 py-6 custom-scrollbar">
          {menuItems.map((section, idx) => (
            <div key={idx} className="mb-6">
              <h2 className={`font-bold uppercase text-xs tracking-wider mb-3 px-2 ${section.titleColor}`}>
                {section.title}
              </h2>
              {section.items.map((item, itemIdx) => {
                const isActive = location.pathname === `/admin/${item.path}`;
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

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Fixed Header */}
        <AdminHeader />
        
        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="p-8">
            <div className="bg-white rounded-3xl shadow-sm p-8 min-h-[calc(100vh-8rem)]">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
