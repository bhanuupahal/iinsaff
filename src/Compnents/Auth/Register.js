import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCity,
  faEnvelope,
  faMapMarkerAlt,
  faPhoneAlt,
  faUser,
  faVenusMars,
  faIdCard,
  faTint,
  faEye,
  faEyeSlash,
  faUserPlus,
  faArrowRight,
  faArrowLeft,
  faCheckCircle,
  faCalendar
} from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import { baseUrl } from '../AdvertiserDashboardSection/utils/const';

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Debug log to check baseUrl
  // console.log("API base URL:", baseUrl);

  // Get role from URL if present
  const searchParams = new URLSearchParams(location.search);
  const roleFromUrl = searchParams.get('role');
  const [selectedRole, setSelectedRole] = useState(roleFromUrl || "");

  // Add a new state to track registration step
  const [registrationStep, setRegistrationStep] = useState(1);

  // Add function to go back to role selection
  const goBackToRoleSelection = () => {
    setRegistrationStep(1);
  };

  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    email: "",
    mobile: "",
    aadharNo: "",
    pancard: "",
    dateOfBirth: "",
    bloodType: "",
    address: "",
    state: "",
    city: "",
    password: "",
    confirmpassword: ""
  });

  const [states] = useState([
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
    "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
    "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
  ]);

  const [cities, setCities] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showOtpFields, setShowOtpFields] = useState(false);
  const [timer, setTimer] = useState(180); // 3 minutes in seconds
  const [isResending, setIsResending] = useState(false);
  const [canResendOTP, setCanResendOTP] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const [otpData, setOtpData] = useState({
    otpEmail: "",
    otpMobile: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setFormError('');
  };

  const handleStateChange = (e) => {
    const selectedState = e.target.value;
    setFormData({
      ...formData,
      state: selectedState,
      city: ""
    });

    // Provide realistic cities based on the selected state
    if (selectedState) {
      // Map of states to their major cities
      const stateCities = {
        "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Thane", "Aurangabad"],
        "Delhi": ["New Delhi", "North Delhi", "South Delhi", "East Delhi", "West Delhi"],
        "Karnataka": ["Bangalore", "Mysore", "Hubli", "Mangalore", "Belgaum"],
        "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Salem", "Trichy"],
        "Uttar Pradesh": ["Lucknow", "Kanpur", "Agra", "Varanasi", "Allahabad"],
        "Haryana": ["Gurgaon", "Faridabad", "Panipat", "Rohtak", "Palwal" ,"Hisar", "Sirsa"],
        "Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Gandhinagar"],
        "West Bengal": ["Kolkata", "Howrah", "Durgapur", "Asansol", "Siliguri"],
        "Rajasthan": ["Jaipur", "Jodhpur", "Udaipur", "Kota", "Ajmer"],
        "Telangana": ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar", "Khammam"],
        "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore", "Kurnool"]
      };
      
      // Set cities for the selected state, or default to empty array if state not in our map
      setCities(stateCities[selectedState] || []);
    } else {
      setCities([]);
    }
  };

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    setRegistrationStep(2); // Move to form step after role selection
  };

  const validateForm = () => {
    // Check if required fields are filled
    if (!formData.name || !formData.gender || !formData.email || !formData.mobile || 
        !formData.aadharNo || !formData.dateOfBirth || !formData.address ||
        !formData.state || !formData.city || !formData.password || 
        !formData.confirmpassword) {
      setFormError("Please fill all required fields");
      return false;
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormError("Please enter a valid email address");
      return false;
    }
    
    // Validate mobile number (10 digits)
    const mobileRegex = /^\d{10}$/;
    if (!mobileRegex.test(formData.mobile)) {
      setFormError("Please enter a valid 10-digit mobile number");
      return false;
    }
    
    // Validate Aadhar number (12 digits)
    const aadharRegex = /^\d{12}$/;
    if (formData.aadharNo && !aadharRegex.test(formData.aadharNo)) {
      setFormError("Please enter a valid 12-digit Aadhar number");
      return false;
    }
    
    // Validate password (at least 8 characters)
    if (formData.password.length < 8) {
      setFormError("Password must be at least 8 characters long");
      return false;
    }
    
    // Check if passwords match
    if (formData.password !== formData.confirmpassword) {
      setFormError("Passwords do not match");
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError('');
    
    // Validate form before submission
    if (!validateForm()) {
      setIsSubmitting(false);
      return;
    }
    
    try {
      console.log("Sending registration data:", formData); // Debug log
      
      // Send form data to backend API
      const response = await axios.post(`${baseUrl}/register`, {
        ...formData,
        role: selectedRole
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      console.log("Registration response:", response.data); // Debug log
      
      // Always show OTP fields after successful form submission
      setShowOtpFields(true);
      
      if (!response.data.success) {
        setFormError(response.data.message || "Registration failed. Please try again.");
      }
    } catch (error) {
      // Error handling remains the same
      // ... (existing error handling code)
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOtpChange = (e) => {
    setOtpData({
      ...otpData,
      [e.target.name]: e.target.value
    });
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post(`${baseUrl}/verify-otp`, {
        email: formData.email,
        mobile: formData.mobile,
        emailOtp: otpData.otpEmail,
        mobileOtp: otpData.otpMobile
      });
      
      if (response.data.success) {
        // Show toast notification
        setToastMessage('Registration successful! Redirecting to login...');
        setShowToast(true);

        // Immediately redirect to login page
        setShowOtpFields(false);
        navigate('/auth/login');
      } else {
        setFormError(response.data.message || "OTP verification failed");
      }
    } catch (error) {
      setFormError(error.response?.data?.message || "OTP verification failed");
    }
  };

  const handleResendOTP = async () => {
    setIsResending(true);
    try {
      const response = await axios.post(`${baseUrl}/auth/resend-otp`, {
        email: formData.email,
        mobile: formData.mobile
      });
      
      if (response.data.success) {
        // Reset timer
        setTimer(120);
        setCanResendOTP(false);
        alert("OTP resent successfully!");
      } else {
        alert(response.data.message || "Failed to resend OTP");
      }
    } catch (error) {
      alert(error.response?.data?.message || "Failed to resend OTP");
    } finally {
      setIsResending(false);
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Left side - Image and info */}
          <div className="md:w-2/5 bg-gradient-to-br from-blue-600 to-purple-700 p-8 text-white flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6">Join <span className="text-red-600">II</span>NSAF</h2>
            <p className="text-lg mb-8 opacity-90">
              Create your account and become part of our growing community.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="bg-white/20 p-2 rounded-full mr-3">
                  <FontAwesomeIcon icon={faUserPlus} className="text-lg" />
                </div>
                <span>Access exclusive features</span>
              </div>
              <div className="flex items-center">
                <div className="bg-white/20 p-2 rounded-full mr-3">
                  <FontAwesomeIcon icon={faUserPlus} className="text-lg" />
                </div>
                <span>Connect with other members</span>
              </div>
              <div className="flex items-center">
                <div className="bg-white/20 p-2 rounded-full mr-3">
                  <FontAwesomeIcon icon={faUserPlus} className="text-lg" />
                </div>
                <span>Stay updated with latest news</span>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="md:w-3/5 p-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              {registrationStep === 1 ? "Select Your Role" : "Create Your Account"}
            </h1>

            {registrationStep === 1 ? (
              // Step 1: Role selection
              <div className="py-6">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-6">
                  <p className="text-sm text-gray-700">
                    Please select your role to continue with registration. Your role determines the features and permissions you'll have in the system.
                  </p>
                  <div className="mt-2 flex items-center text-xs text-blue-600">
                    <FontAwesomeIcon icon={faUserPlus} className="mr-1" />
                    <span>You must select a role before proceeding</span>
                  </div>
                </div>

                <label className="block text-lg font-medium text-gray-800 mb-4">
                  Select Your Role
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <button
                    type="button"
                    onClick={() => handleRoleSelect("Reporter")}
                    className="flex flex-col items-center justify-center p-6 border-2 border-gray-200 hover:border-blue-500 rounded-lg transition-all hover:bg-blue-50 hover:shadow-md"
                  >
                    <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                      <FontAwesomeIcon icon={faUser} className="text-blue-600 text-xl" />
                    </div>
                    <span className="text-base font-medium">Reporter</span>
                    <p className="text-xs text-gray-500 text-center mt-2">
                      Report news and events
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleRoleSelect("Influencer")}
                    className="flex flex-col items-center justify-center p-6 border-2 border-gray-200 hover:border-purple-500 rounded-lg transition-all hover:bg-purple-50 hover:shadow-md"
                  >
                    <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-3">
                      <FontAwesomeIcon icon={faUser} className="text-purple-600 text-xl" />
                    </div>
                    <span className="text-base font-medium">Influencer</span>
                    <p className="text-xs text-gray-500 text-center mt-2">
                      Create and share content
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleRoleSelect("Advertiser")}
                    className="flex flex-col items-center justify-center p-6 border-2 border-gray-200 hover:border-green-500 rounded-lg transition-all hover:bg-green-50 hover:shadow-md"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-3">
                      <FontAwesomeIcon icon={faUser} className="text-green-600 text-xl" />
                    </div>
                    <span className="text-base font-medium">Advertiser</span>
                    <p className="text-xs text-gray-500 text-center mt-2">
                      Promote products and services
                    </p>
                  </button>
                </div>
              </div>
            ) : (
              // Step 2: Registration form
              <>
                <div className="mb-4 flex items-center justify-between">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    Selected Role: {selectedRole}
                  </span>
                  <button
                    onClick={goBackToRoleSelection}
                    className="text-sm text-blue-600 hover:text-blue-800 flex items-center"
                  >
                    <FontAwesomeIcon icon={faArrowLeft} className="mr-1" />
                    Change Role
                  </button>
                </div>

                {/* Role selection - compact version */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Change Your Role
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    <button
                      type="button"
                      onClick={() => handleRoleSelect("Reporter")}
                      className={`flex flex-col items-center justify-center p-3 border rounded-lg transition-all ${
                        selectedRole === "Reporter"
                          ? "border-blue-500 bg-blue-50 text-blue-700"
                          : "border-gray-200 hover:border-blue-300 text-gray-600"
                      }`}
                    >
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                        <FontAwesomeIcon icon={faUser} className="text-blue-600" />
                      </div>
                      <span className="text-sm font-medium">Reporter</span>
                      {selectedRole === "Reporter" && (
                        <span className="mt-1 inline-block px-2 py-0.5 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                          Selected
                        </span>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => handleRoleSelect("Influencer")}
                      className={`flex flex-col items-center justify-center p-3 border rounded-lg transition-all ${
                        selectedRole === "Influencer"
                          ? "border-purple-500 bg-purple-50 text-purple-700"
                          : "border-gray-200 hover:border-purple-300 text-gray-600"
                      }`}
                    >
                      <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-2">
                        <FontAwesomeIcon icon={faUser} className="text-purple-600" />
                      </div>
                      <span className="text-sm font-medium">Influencer</span>
                      {selectedRole === "Influencer" && (
                        <span className="mt-1 inline-block px-2 py-0.5 text-xs font-medium bg-purple-100 text-purple-800 rounded-full">
                          Selected
                        </span>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => handleRoleSelect("Advertiser")}
                      className={`flex flex-col items-center justify-center p-3 border rounded-lg transition-all ${
                        selectedRole === "Advertiser"
                          ? "border-green-500 bg-green-50 text-green-700"
                          : "border-gray-200 hover:border-green-300 text-gray-600"
                      }`}
                    >
                      <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-2">
                        <FontAwesomeIcon icon={faUser} className="text-green-600" />
                      </div>
                      <span className="text-sm font-medium">Advertiser</span>
                      {selectedRole === "Advertiser" && (
                        <span className="mt-1 inline-block px-2 py-0.5 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                          Selected
                        </span>
                      )}
                    </button>
                  </div>
                </div>

                {/* Registration form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                  {formError && (
                    <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm font-medium">
                      {formError}
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Name Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FontAwesomeIcon icon={faUser} className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                </div>

                {/* Gender Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Gender
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FontAwesomeIcon icon={faVenusMars} className="text-gray-400" />
                    </div>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
                      required
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FontAwesomeIcon icon={faEnvelope} className="text-gray-400" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                {/* Mobile Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Mobile Number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FontAwesomeIcon icon={faPhoneAlt} className="text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter your mobile number"
                      required
                    />
                  </div>
                </div>

                {/* Aadhar Card field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Aadhar Number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FontAwesomeIcon icon={faIdCard} className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="aadharNo"
                      value={formData.aadharNo}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter your 12-digit Aadhar number"
                      pattern="[0-9]{12}"
                      maxLength="12"
                    />
                  </div>
                </div>

                {/* PAN Card field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    PAN Card
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FontAwesomeIcon icon={faIdCard} className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="pancard"
                      value={formData.pancard}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter your PAN card number"
                    />
                  </div>
                </div>

                {/* Date of Birth field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Date of Birth
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FontAwesomeIcon icon={faCalendar} className="text-gray-400" />
                    </div>
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                {/* Blood Type field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Blood Type
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FontAwesomeIcon icon={faTint} className="text-gray-400" />
                    </div>
                    <select
                      name="bloodType"
                      value={formData.bloodType}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
                    >
                      <option value="">Select Blood Type</option>
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
                </div>

                {/* Address Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FontAwesomeIcon icon={faMapMarkerAlt} className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter your address"
                    />
                  </div>
                </div>

                {/* State Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    State
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FontAwesomeIcon icon={faMapMarkerAlt} className="text-gray-400" />
                    </div>
                    <select
                      name="state"
                      value={formData.state}
                      onChange={handleStateChange}
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
                      required
                    >
                      <option value="">Select State</option>
                      {states.map((state, index) => (
                        <option key={index} value={state}>
                          {state}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* City Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    City
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FontAwesomeIcon icon={faCity} className="text-gray-400" />
                    </div>
                    <select
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
                      required
                      disabled={!formData.state}
                    >
                      <option value="">Select City</option>
                      {cities.map((city, index) => (
                        <option key={index} value={city}>
                          {city}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Password Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FontAwesomeIcon icon={faEye} className="text-gray-400" />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Create a password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    >
                      <FontAwesomeIcon
                        icon={showPassword ? faEyeSlash : faEye}
                        className="text-gray-400 hover:text-gray-600"
                      />
                    </button>
                  </div>
                </div>

                {/* Confirm Password Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FontAwesomeIcon icon={faEye} className="text-gray-400" />
                    </div>
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmpassword"
                      value={formData.confirmpassword}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Confirm your password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    >
                      <FontAwesomeIcon
                        icon={showConfirmPassword ? faEyeSlash : faEye}
                        className="text-gray-400 hover:text-gray-600"
                      />
                    </button>
                  </div>
                </div>

                
                
            
                
              </div>

              {/* Terms and conditions */}
              <div className="flex items-center">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                  I agree to the <a href="#" className="text-blue-600 hover:underline">Terms and Conditions</a>
                </label>
              </div>

              {/* Submit Button */}
              <div className="mt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    <>
                      Register <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                    </>
                  )}
                </button>
              </div>

              <div className="text-center mt-4">
                <span className="text-sm text-gray-600">
                  Already have an account?
                </span>
                <Link
                  to="/auth/login"
                  className="inline-flex items-center text-blue-600 font-medium ml-2 hover:underline"
                >
                  Sign in <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                </Link>
              </div>
            </form>
              </>
            )}
          </div>
        </div>
      </div>

      {/* OTP Verification Modal */}
      {showOtpFields && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white w-full max-w-md mx-auto p-6 rounded-lg shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-800">Verify OTP</h3>
              <div className="text-sm font-medium text-gray-600">
                Time remaining: <span className="text-blue-600">{formatTime(timer)}</span>
              </div>
            </div>

            {successMessage && (
              <div className="mb-4 p-3 bg-green-50 text-green-700 rounded-lg text-center">
                {successMessage}
              </div>
            )}

            <form onSubmit={handleOtpSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email OTP
                </label>
                <input
                  type="text"
                  id="otpEmail"
                  name="otpEmail"
                  maxLength={6}
                  value={otpData.otpEmail}
                  onChange={handleOtpChange}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Enter 6-digit OTP"
                />
                <p className="mt-1 text-xs text-gray-500">
                  Check your email {formData.email} for the OTP
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Mobile OTP
                </label>
                <input
                  type="text"
                  id="otpMobile"
                  name="otpMobile"
                  maxLength={6}
                  value={otpData.otpMobile}
                  onChange={handleOtpChange}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Enter 6-digit OTP"
                />
                <p className="mt-1 text-xs text-gray-500">
                  Check your phone {formData.mobile} for the OTP
                </p>
              </div>

              <div className="flex flex-col gap-3 mt-4">
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 font-medium"
                >
                  Verify OTP
                </button>

                <button
                  type="button"
                  onClick={handleResendOTP}
                  disabled={!canResendOTP || isResending}
                  className={`w-full flex justify-center py-2 px-4 border rounded-md shadow-sm font-medium ${
                    canResendOTP && !isResending
                      ? "border-blue-300 text-blue-700 bg-blue-50 hover:bg-blue-100"
                      : "border-gray-300 text-gray-400 bg-gray-50 cursor-not-allowed"
                  }`}
                >
                  {isResending ? "Resending..." : "Resend OTP"}
                </button>
              </div>
            </form>

            <button
              onClick={() => setShowOtpFields(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-4 right-4 bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded shadow-md z-50">
          <div className="flex">
            <div className="py-1">
              <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
            </div>
            <div>
              <p className="font-bold">Success</p>
              <p className="text-sm">{toastMessage}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;



























