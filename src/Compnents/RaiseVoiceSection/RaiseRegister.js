import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUser, 
  faEnvelope, 
  faPhone, 
  faIdCard, 
  faCalendar, 
  faTint, 
  faMapMarker, 
  faCity, 
  faGlobe,
  faLock,
  faEye,
  faEyeSlash,
  faVenusMars
} from '@fortawesome/free-solid-svg-icons';

const RaiseRegister = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    email: '',
    mobile: '',
    aadharNo: '',
    panCard: '',
    dob: '',
    bloodType: '',
    address: '',
    city: '',
    state: '',
    password: '',
    confirmPassword: ''
  });

  const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
  const states = ['Delhi', 'Maharashtra', 'Karnataka', 'Tamil Nadu']; // Add more states as needed

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match!');
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        // Show success message
        alert('Registration successful! Please login to continue.');
        // Navigate to login page
        navigate('/raise-voice/login');
      } else {
        setError(data.message || 'Registration failed');
      }
    } catch (err) {
      setError('An error occurred during registration');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Logo and Header Section */}
        <div className="text-center mb-8">
          <img
            src="/images/iinsaf.png"
            alt="IINSAF Logo"
            className="mx-auto w-32 h-auto mb-6 animate-fade-in"
          />
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            Welcome to <span className="text-red-600">ii</span>nsaf
          </h2>
          <p className="text-lg text-gray-600">
            International Influencing News Social Media Advertisement Federation
          </p>
        </div>

        {/* Main Form Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-gray-900">Raise Your Voice</h3>
              <p className="mt-2 text-gray-600">Fill in your details to register</p>
              {error && (
                <div className="mt-4 bg-red-50 border-l-4 border-red-500 text-red-700 p-4 rounded-lg text-sm animate-fade-in">
                  {error}
                </div>
              )}
            </div>

            {/* Form Section */}
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Field */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                    <FontAwesomeIcon icon={faUser} className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    required
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                {/* Gender Field */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                    <FontAwesomeIcon icon={faVenusMars} className="text-gray-400" />
                  </div>
                  <select
                    name="gender"
                    required
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    value={formData.gender}
                    onChange={handleChange}
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Email Field */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                    <FontAwesomeIcon icon={faEnvelope} className="text-gray-400" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    required
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                {/* Mobile Number Field */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                    <FontAwesomeIcon icon={faPhone} className="text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    name="mobile"
                    required
                    pattern="[0-9]{10}"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Mobile Number"
                    value={formData.mobile}
                    onChange={handleChange}
                  />
                </div>

                {/* Aadhar Number Field */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                    <FontAwesomeIcon icon={faIdCard} className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="aadharNo"
                    required
                    pattern="[0-9]{12}"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Aadhar Number"
                    value={formData.aadharNo}
                    onChange={handleChange}
                  />
                </div>

                {/* PAN Card Field */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                    <FontAwesomeIcon icon={faIdCard} className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="panCard"
                    required
                    pattern="[0-9]{12}"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="PAN Card Number"
                    value={formData.panCard}
                    onChange={handleChange}
                  />
                </div>

                {/* DOB Field */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                    <FontAwesomeIcon icon={faCalendar} className="text-gray-400" />
                  </div>
                  <input
                    type="date"
                    name="dob"
                    required
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    value={formData.dob}
                    onChange={handleChange}
                  />
                </div>

                {/* Blood Type Field */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                    <FontAwesomeIcon icon={faTint} className="text-gray-400" />
                  </div>
                  <select
                    name="bloodType"
                    required
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    value={formData.bloodType}
                    onChange={handleChange}
                  >
                    <option value="">Select Blood Type</option>
                    {bloodTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                {/* Address Field */}
                <div className="relative md:col-span-2">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                    <FontAwesomeIcon icon={faMapMarker} className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="address"
                    required
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>

                {/* City Field */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                    <FontAwesomeIcon icon={faCity} className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="city"
                    required
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleChange}
                  />
                </div>

                {/* State Field */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                    <FontAwesomeIcon icon={faGlobe} className="text-gray-400" />
                  </div>
                  <select
                    name="state"
                    required
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    value={formData.state}
                    onChange={handleChange}
                  >
                    <option value="">Select State</option>
                    {states.map(state => (
                      <option key={state} value={state}>{state}</option>
                    ))}
                  </select>
                </div>

                {/* Password Field */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                    <FontAwesomeIcon icon={faLock} className="text-gray-400" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    required
                    className="block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <FontAwesomeIcon 
                      icon={showPassword ? faEyeSlash : faEye}
                      className="text-gray-400"
                    />
                  </button>
                </div>

                {/* Confirm Password Field */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                    <FontAwesomeIcon icon={faLock} className="text-gray-400" />
                  </div>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    required
                    className="block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    <FontAwesomeIcon 
                      icon={showConfirmPassword ? faEyeSlash : faEye}
                      className="text-gray-400"
                    />
                  </button>
                </div>
              </div>

              {/* Registration Button Section */}
              <div className="flex flex-col items-center justify-center pt-6 border-t border-gray-200">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full md:w-1/2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg 
                           hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-200
                           focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50
                           shadow-lg flex items-center justify-center space-x-2 font-semibold text-lg"
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      <span>Register Now</span>
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </>
                  )}
                </button>

                <p className="mt-4 text-sm text-gray-600">
                  Already have an account?{' '}
                  <Link to="/raise-voice/login" className="text-blue-600 hover:text-blue-700 font-medium">
                    Sign in here
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>

        {/* Footer Section */}
        <div className="text-center mt-8 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} IINSAF. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default RaiseRegister;