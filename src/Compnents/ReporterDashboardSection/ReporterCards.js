import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUser, 
  faIdCard, 
  faDroplet, 
  faBriefcase, 
  faLocationDot, 
  faPhone, 
  faCalendar,
  faEnvelope,
  faUserTie,  // Added for father's name
  faCheck     // Added for confirmation
} from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const ReporterCards = () => {
  const [formData, setFormData] = useState({
    name: '',
    fathersName: '',
    bloodGroup: '',
    designation: '',
    aadharCard: '',
    address: '',
    mobileNo: '',
    email: '',
    dateOfBirth: '',
    confirmDetails: false,
    photoUrl: ''
  });
  const [showSubmittedDetails, setShowSubmittedDetails] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSubmittedDetails(true);
    console.log(formData);
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
            <FontAwesomeIcon icon={faIdCard} className="mr-4" />
            ID Card Application
          </h1>
          <p className="text-lg text-gray-600">
            Please fill in your details carefully for your official ID card
          </p>
        </div>

        {/* Main Form Card */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-gray-100 mb-12">
          <form onSubmit={handleSubmit} className="space-y-10">
            {/* Personal Information Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="bg-blue-100 rounded-lg p-2 mr-3">
                  <FontAwesomeIcon icon={faUser} className="text-blue-600 text-xl" />
                </span>
                Personal Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Input */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                    <FontAwesomeIcon icon={faUser} className="text-blue-500" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    className="pl-11 pr-4 py-4 w-full rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Father's Name Input */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                    <FontAwesomeIcon icon={faUserTie} className="text-blue-500" />
                  </div>
                  <input
                    type="text"
                    name="fathersName"
                    placeholder="Father's Name"
                    className="pl-11 pr-4 py-4 w-full rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                    value={formData.fathersName}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Designation Input */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                    <FontAwesomeIcon icon={faBriefcase} className="text-blue-500" />
                  </div>
                  <input
                    type="text"
                    name="designation"
                    placeholder="Designation"
                    className="pl-11 pr-4 py-4 w-full rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                    value={formData.designation}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Email Input */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                    <FontAwesomeIcon icon={faEnvelope} className="text-blue-500" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="pl-11 pr-4 py-4 w-full rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Aadhar Card Input */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                    <FontAwesomeIcon icon={faIdCard} className="text-blue-500" />
                  </div>
                  <input
                    type="text"
                    name="aadharCard"
                    placeholder="12-digit Aadhar Number"
                    className="pl-11 pr-4 py-4 w-full rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                    value={formData.aadharCard}
                    onChange={handleChange}
                    pattern="[0-9]{12}"
                    maxLength="12"
                    required
                  />
                </div>

                {/* Date of Birth Input */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                    <FontAwesomeIcon icon={faCalendar} className="text-blue-500" />
                  </div>
                  <input
                    type="date"
                    name="dateOfBirth"
                    className="pl-11 pr-4 py-4 w-full rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Blood Group Select */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                    <FontAwesomeIcon icon={faDroplet} className="text-red-500" />
                  </div>
                  <select
                    name="bloodGroup"
                    className="pl-11 pr-4 py-4 w-full rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 appearance-none"
                    value={formData.bloodGroup}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Blood Group</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select>
                </div>

                {/* Mobile Number Input */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                    <FontAwesomeIcon icon={faPhone} className="text-blue-500" />
                  </div>
                  <input
                    type="tel"
                    name="mobileNo"
                    placeholder="10-digit Mobile Number"
                    className="pl-11 pr-4 py-4 w-full rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                    value={formData.mobileNo}
                    onChange={handleChange}
                    pattern="[0-9]{10}"
                    maxLength="10"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Address Section */}
            <div className="relative">
              <div className="absolute top-4 left-4 pointer-events-none">
                <FontAwesomeIcon icon={faLocationDot} className="text-blue-500" />
              </div>
              <textarea
                name="address"
                placeholder="Full Address"
                className="pl-11 pr-4 py-4 w-full rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                value={formData.address}
                onChange={handleChange}
                rows="3"
                required
              />
            </div>

            {/* Confirmation Checkbox */}
            <div className="flex items-center space-x-3 p-6 bg-blue-50 rounded-xl">
              <input
                type="checkbox"
                name="confirmDetails"
                id="confirmDetails"
                className="w-5 h-5 text-blue-600 rounded"
                checked={formData.confirmDetails}
                onChange={handleChange}
                required
              />
              <label htmlFor="confirmDetails" className="text-sm text-gray-700 flex items-center">
                <FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" />
                I confirm that all the details provided above are correct
              </label>
            </div>

            {showSubmittedDetails && (
              <div className="mb-6 p-6 bg-green-50 rounded-xl">
                <h3 className="text-xl font-semibold text-green-800 mb-4">Submitted Details:</h3>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(formData).map(([key, value]) => (
                    key !== 'confirmDetails' && (
                      <div key={key} className="flex flex-col">
                        <span className="text-sm font-medium text-gray-600">{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                        <span className="text-gray-800">{value.toString()}</span>
                      </div>
                    )
                  ))}
                </div>
              </div>
            )}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center space-x-2"
            >
              <FontAwesomeIcon icon={faIdCard} className="text-xl" />
              <span>Submit Application</span>
            </button>
          </form>
        </div>

        {/* Cards Section - Shown after form submission */}
        {showSubmittedDetails && (
          <div className="space-y-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Your IINSAF Cards</h2>
            
            {/* Cards Container - Added flex layout */}
            <div className="flex flex-col lg:flex-row justify-center gap-8 px-4">
              {/* IINSAF Press Card */}
              <div className="flex">
                {/* Vertical Black Section */}
                <div className="bg-red-600 w-16 flex items-center justify-center rounded-l-xl">
                  <div className="whitespace-nowrap text-white font-bold text-3xl tracking-[0.3em]" style={{ writingMode: 'vertical-rl' }}>
                    RAISE YOUR VOICE
                  </div>
                </div>

                {/* Main Card Content */}
                <div className="bg-white rounded-r-xl shadow-2xl overflow-hidden w-full lg:w-[400px]">
                  <div className="p-6">
                    <div className="flex flex-col items-center mb-6">
                      <img 
                        src="/images/iinsaf.png" 
                        alt="IINSAF Logo" 
                        className="h-12 mb-2"
                      />
                      <div className="text-center mb-2">
                        <p className="text-sm font-semibold text-gray-800"><span className='text-red-600'>International Influencing</span> News Social Media Advertisement Federation</p>
                        
                      </div>
                      <h2 className="text-2xl font-bold text-white bg-red-600 px-4 py-1 rounded mb-4">PRESS</h2>
                    </div>
                    
                    {/* Photo Section */}
                    <div className="flex flex-col items-center mb-6">
                      <div className="w-40 h-48 bg-gray-200 rounded-lg overflow-hidden mb-4">
                        <img 
                          src={formData.photoUrl || '/images/placeholder.png'} 
                          alt="Reporter" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    {/* Details Section */}
                    <div className="text-black">
                      <h3 className="text-xl font-semibold mb-4 text-center">{formData.name}</h3>
                      <div className="space-y-3">
                        <p className="flex justify-between">
                          <span className="text-black">IINSAF ID:</span>
                          <span>{formData.aadharCard}</span>
                        </p>
                        <p className="flex justify-between">
                          <span className="text-black">Phone:</span>
                          <span>{formData.mobileNo}</span>
                        </p>
                        <p className="flex justify-between">
                          <span className="text-black">Address:</span>
                          <span className="text-right flex-1 ml-4">{formData.address}</span>
                        </p>
                        <p className="flex justify-between mt-4">
                          <span className="text-black">Approved By:</span>
                          <span>IINSAF Authority</span>
                        </p>
                      </div>
                    </div>
                    
                    <div className="mt-6 pt-4 border-t border-blue-400 text-center">
                      <p className="text-xs text-black">Valid Until: {new Date().getFullYear() + 1}</p>
                    </div>
                  </div>
                </div>
              </div>


              {/* IINSAF ID Card */}
              <div className="flex">
                {/* Vertical Red Section */}
                <div className="bg-red-600 w-16 flex items-center justify-center rounded-l-xl">
                  <div className="whitespace-nowrap text-white font-bold text-5xl tracking-[0.3em]" style={{ writingMode: 'vertical-rl' }}>
                    ii<span className='text-black'>nsaf</span>
                  </div>
                </div>

                <div className="bg-white rounded-r-xl shadow-2xl overflow-hidden w-full lg:w-[400px]">
                  <div className="p-6">
                    <div className="flex flex-col items-center mb-6">
                      <h2 className="text-2xl font-bold text-white bg-red-600 px-4 py-1 rounded mb-4">PRESS</h2>
                      <span className="text-lg font-semibold text-black">{formData.channelName || 'Channel Name'}</span>
                    </div>
                    
                    {/* channel logo Section */}
                    <div className="flex flex-col items-center mb-6">
                      <div className="w-40 h-48 bg-gray-200 rounded-lg overflow-hidden mb-4">
                        <img 
                          src={formData.photoUrl || '/images/placeholder.png'} 
                          alt="channel logo" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    {/* Details Section */}
                    <div className="text-black">
                      <div className="space-y-3">
                        <p className="flex justify-between">
                          <span className="text-black">DOB:</span>
                          <span>{formData.dateOfBirth}</span>
                        </p>
                        <p className="flex justify-between">
                          <span className="text-black">Aadhar No:</span>
                          <span>{formData.aadharCard}</span>
                        </p>
                        <p className="flex justify-between">
                          <span className="text-black">Blood Type:</span>
                          <span>{formData.bloodGroup}</span>
                        </p>
                        <p className="flex justify-between">
                          <span className="text-black">Issue Date:</span>
                          <span>{new Date().toLocaleDateString()}</span>
                        </p>
                        <p className="flex justify-between">
                          <span className="text-black">Valid Up To:</span>
                          <span>{new Date().getFullYear() + 1}</span>
                        </p>
                      </div>
                    </div>
                    
                    {/* QR Code and Website */}
                    <div className="mt-6 pt-4 border-t border-purple-400 text-center space-y-3">
                      <div className="flex justify-center">
                        <img 
                          src="/images/qr-code.png" 
                          alt="QR Code" 
                          className="h-24 w-24"
                        />
                      </div>
                      <p className="text-sm text-black">www.iinsaf.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReporterCards;























