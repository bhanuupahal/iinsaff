import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaIdCard, FaUserShield } from 'react-icons/fa';

const AdminProfile = () => {
  const [profileData, setProfileData] = useState({
    name: 'Admin User',
    email: 'admin@example.com',
    phone: '+1 234 567 8900',
    address: '123 Admin Street',
    adminId: 'ADM001',
    role: 'Super Admin',
    joinDate: '2024-01-01',
    lastLogin: '2024-02-20 10:30 AM'
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(profileData);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you would typically make an API call to update the profile
    setProfileData(formData);
    setIsEditing(false);
  };

  const ProfileField = ({ icon: Icon, label, value, name }) => (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        <div className="flex items-center gap-2">
          <Icon className="text-gray-500" />
          {label}
        </div>
      </label>
      {isEditing ? (
        <input
          type="text"
          name={name}
          value={formData[name]}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      ) : (
        <p className="text-gray-700 py-2">{value}</p>
      )}
    </div>
  );

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Admin Profile</h1>
        <button
          onClick={() => isEditing ? handleSubmit() : setIsEditing(true)}
          className={`px-4 py-2 rounded-lg ${
            isEditing 
              ? 'bg-green-600 hover:bg-green-700' 
              : 'bg-blue-600 hover:bg-blue-700'
          } text-white`}
        >
          {isEditing ? 'Save Changes' : 'Edit Profile'}
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-6">
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
            <FaUser className="text-4xl text-gray-400" />
          </div>
          <div className="ml-6">
            <h2 className="text-xl font-semibold">{profileData.name}</h2>
            <p className="text-gray-600">{profileData.role}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <ProfileField
              icon={FaUser}
              label="Full Name"
              value={profileData.name}
              name="name"
            />
            <ProfileField
              icon={FaEnvelope}
              label="Email"
              value={profileData.email}
              name="email"
            />
            <ProfileField
              icon={FaPhone}
              label="Phone"
              value={profileData.phone}
              name="phone"
            />
            <ProfileField
              icon={FaMapMarkerAlt}
              label="Address"
              value={profileData.address}
              name="address"
            />
          </div>
          <div>
            <ProfileField
              icon={FaIdCard}
              label="Admin ID"
              value={profileData.adminId}
              name="adminId"
            />
            <ProfileField
              icon={FaUserShield}
              label="Role"
              value={profileData.role}
              name="role"
            />
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Join Date</label>
              <p className="text-gray-700 py-2">{profileData.joinDate}</p>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Last Login</label>
              <p className="text-gray-700 py-2">{profileData.lastLogin}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;