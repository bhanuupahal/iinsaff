import React, { useState } from 'react';
import { 
  FaCog, 
  FaBell, 
  FaLock, 
  FaPalette, 
  FaGlobe, 
  FaEnvelope,
  FaSave,
  FaToggleOn,
  FaToggleOff
} from 'react-icons/fa';

const SettingsManagement = () => {
  const [settings, setSettings] = useState({
    notifications: {
      emailAlerts: true,
      pushNotifications: false,
      newsUpdates: true,
      securityAlerts: true
    },
    security: {
      twoFactorAuth: true,
      passwordExpiry: 90,
      sessionTimeout: 30
    },
    appearance: {
      theme: 'light',
      fontSize: 'medium',
      language: 'en'
    },
    system: {
      maintenanceMode: false,
      debugMode: false,
      autoBackup: true
    }
  });

  const toggleSetting = (category, setting) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [setting]: !prev[category][setting]
      }
    }));
  };

  return (
    <div className="p-4">
      <div className="flex items-center mb-6">
        <FaCog className="text-2xl text-gray-600 mr-2" />
        <h1 className="text-2xl font-bold text-gray-800">System Settings</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Notifications Settings */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center mb-4">
            <FaBell className="text-xl text-blue-500 mr-2" />
            <h2 className="text-lg font-semibold">Notifications</h2>
          </div>
          
          <div className="space-y-4">
            {Object.entries(settings.notifications).map(([key, value]) => (
              <div key={key} className="flex items-center justify-between">
                <span className="text-gray-700">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                <button
                  onClick={() => toggleSetting('notifications', key)}
                  className={`text-2xl ${value ? 'text-blue-500' : 'text-gray-400'}`}
                >
                  {value ? <FaToggleOn /> : <FaToggleOff />}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Security Settings */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center mb-4">
            <FaLock className="text-xl text-blue-500 mr-2" />
            <h2 className="text-lg font-semibold">Security</h2>
          </div>
          
          <div className="space-y-4">
            {Object.entries(settings.security).map(([key, value]) => (
              <div key={key} className="flex items-center justify-between">
                <span className="text-gray-700">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                {typeof value === 'boolean' ? (
                  <button
                    onClick={() => toggleSetting('security', key)}
                    className={`text-2xl ${value ? 'text-blue-500' : 'text-gray-400'}`}
                  >
                    {value ? <FaToggleOn /> : <FaToggleOff />}
                  </button>
                ) : (
                  <input
                    type="number"
                    value={value}
                    onChange={(e) => setSettings(prev => ({
                      ...prev,
                      security: {
                        ...prev.security,
                        [key]: parseInt(e.target.value)
                      }
                    }))}
                    className="w-20 p-1 border rounded"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* System Settings */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center mb-4">
            <FaCog className="text-xl text-blue-500 mr-2" />
            <h2 className="text-lg font-semibold">System</h2>
          </div>
          
          <div className="space-y-4">
            {Object.entries(settings.system).map(([key, value]) => (
              <div key={key} className="flex items-center justify-between">
                <span className="text-gray-700">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                <button
                  onClick={() => toggleSetting('system', key)}
                  className={`text-2xl ${value ? 'text-blue-500' : 'text-gray-400'}`}
                >
                  {value ? <FaToggleOn /> : <FaToggleOff />}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Save Button */}
        <div className="lg:col-span-2 flex justify-end">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center">
            <FaSave className="mr-2" />
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsManagement;