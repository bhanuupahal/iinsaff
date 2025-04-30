import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUser, 
  faEnvelope, 
  faPhone, 
  faLocationDot, 
  faGlobe, 
  faWallet,
  faUserTag,
  faCity,
  faMapLocation,
  faMapPin,
  faVideo
} from '@fortawesome/free-solid-svg-icons';
import { 
  faFacebookSquare, 
  faYoutube, 
  faInstagram,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons';

const ReporterProfile = () => {
  const profileData = {
    name: "Reporter Name",
    reporterId: "#12345",
    role: "Senior Reporter",
    email: "reporter@example.com",
    phone: "+1 234 567 8900",
    whatsapp: "+1 234 567 8901",
    secondaryPhone: "+1 234 567 8902",
    address: "123 Main Street",
    city: "New Delhi",
    state: "Delhi",
    pincode: "110001",
    website: "www.reporterwebsite.com",
    channel: "Reporter News Network",
    facebookUrl: "facebook.com/reportername",
    youtubeUrl: "youtube.com/reportername",
    instagramUrl: "instagram.com/reportername",
    wallet: "₹5,000",
    joinedDate: "January 1, 2024",
    status: "Active",
    reportsPublished: 42
  };

  const ProfileField = ({ icon, label, value }) => (
    <div className="space-y-1">
      <label className="text-sm text-gray-600 flex items-center gap-2">
        <FontAwesomeIcon icon={icon} className="text-gray-400" />
        {label}
      </label>
      <p className="font-medium pl-6">{value}</p>
    </div>
  );

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Profile</h1>
      <div className="bg-white rounded-xl shadow-md p-6">
        {/* Profile Header */}
        <div className="flex items-center space-x-4 mb-8">
          <div className="w-24 h-24 bg-gray-200 rounded-full overflow-hidden">
            <img 
              src="/path-to-profile-image.jpg" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-xl font-semibold">{profileData.name}</h2>
            <p className="text-gray-600">Reporter ID: {profileData.reporterId}</p>
            <span className="inline-block mt-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
              {profileData.role}
            </span>
          </div>
        </div>

        {/* Profile Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg border-b pb-2">Personal Information</h3>
            <ProfileField icon={faUserTag} label="Role" value={profileData.role} />
            <ProfileField icon={faEnvelope} label="Email" value={profileData.email} />
            <ProfileField icon={faPhone} label="Phone" value={profileData.phone} />
            <ProfileField icon={faWhatsapp} label="WhatsApp" value={profileData.whatsapp} />
            <ProfileField icon={faPhone} label="Secondary Phone" value={profileData.secondaryPhone} />
            <ProfileField icon={faWallet} label="Wallet Balance" value={profileData.wallet} />
            <ProfileField icon={faVideo} label="Channel" value={profileData.channel} />
          </div>

          {/* Contact & Social Information */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg border-b pb-2">Contact & Location</h3>
            <ProfileField icon={faLocationDot} label="Address" value={profileData.address} />
            <ProfileField icon={faCity} label="City" value={profileData.city} />
            <ProfileField icon={faMapLocation} label="State" value={profileData.state} />
            <ProfileField icon={faMapPin} label="Pincode" value={profileData.pincode} />
            <ProfileField icon={faGlobe} label="Website" value={profileData.website} />
            <ProfileField icon={faFacebookSquare} label="Facebook" value={profileData.facebookUrl} />
            <ProfileField icon={faYoutube} label="YouTube" value={profileData.youtubeUrl} />
          </div>
        </div>

        {/* Status Information */}
        <div className="mt-6 grid grid-cols-2 gap-6">
          <div>
            <label className="text-sm text-gray-600">Joined Date</label>
            <p className="font-medium">{profileData.joinedDate}</p>
          </div>
          <div>
            <label className="text-sm text-gray-600">Status</label>
            <p className="font-medium text-green-600">{profileData.status}</p>
          </div>
        </div>

        {/* Edit Button */}
        <div className="mt-8 flex justify-end">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center gap-2">
            <FontAwesomeIcon icon={faUser} />
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReporterProfile;