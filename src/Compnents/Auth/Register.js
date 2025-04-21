import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUser, 
  faEnvelope, 
  faLock, 
  faPhone, 
  faLocationDot, 
  faEye, 
  faEyeSlash,
  faIdCard,
  faCity,
  faMapMarker,
  faMapPin
} from '@fortawesome/free-solid-svg-icons';

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const roleFromUrl = queryParams.get('role');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    role: roleFromUrl || 'user',
    aadharNumber: '',
  });

  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        navigate('/');
        window.location.reload();
      } else {
        const data = await response.json();
        setError(data.message || 'Registration failed');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4 mt-16"> {/* Added mt-24 for top margin */}
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row my-8"> {/* Added my-8 for vertical margin */}
        {/* Left Side - Company Branding */}
        <div className="hidden lg:block lg:w-5/12 bg-gradient-to-br from-blue-500 to-purple-600 p-8 relative">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10 h-full flex flex-col justify-center items-center text-white">
            <motion.img
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              src="/images/iinsaf.png"
              alt="IINSAF Logo"
              className="w-40 h-auto mb-6 filter brightness-110"
            />
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <h1 className="text-3xl font-bold mb-3">
                Welcome to <span className="text-red-500">ii</span>nsaf
              </h1>
              <p className="text-lg text-gray-100 mb-6">
                International Influencing News Social Media Advertisement Federation
              </p>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <FontAwesomeIcon icon={faUser} className="h-4 w-4" />
                  </span>
                  <span>Join our growing community</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <FontAwesomeIcon icon={faEnvelope} className="h-4 w-4" />
                  </span>
                  <span>Stay updated with latest news</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <FontAwesomeIcon icon={faIdCard} className="h-4 w-4" />
                  </span>
                  <span>Get verified professional status</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Side - Registration Form */}
        <div className="lg:w-7/12 p-8">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-md mx-auto"
          >
            <div className="text-center lg:text-left mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Create Your Account</h2>
              {roleFromUrl && (
                <p className="text-gray-600 text-sm mt-1">Registering as {roleFromUrl}</p>
              )}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-50 text-red-500 p-3 rounded-lg text-sm text-center"
                >
                  {error}
                </motion.div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <FontAwesomeIcon icon={faUser} className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                  </div>
                  <input
                    name="name"
                    type="text"
                    required
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <FontAwesomeIcon icon={faEnvelope} className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                  </div>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <FontAwesomeIcon icon={faPhone} className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                  </div>
                  <input
                    name="phone"
                    type="tel"
                    required
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <FontAwesomeIcon icon={faIdCard} className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                  </div>
                  <input
                    name="aadharNumber"
                    type="text"
                    required
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Aadhar Number"
                    value={formData.aadharNumber}
                    onChange={handleChange}
                  />
                </div>

                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <FontAwesomeIcon icon={faLocationDot} className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                  </div>
                  <input
                    name="address"
                    type="text"
                    required
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>

                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <FontAwesomeIcon icon={faCity} className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                  </div>
                  <input
                    name="city"
                    type="text"
                    required
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleChange}
                  />
                </div>

                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <FontAwesomeIcon icon={faMapMarker} className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                  </div>
                  <input
                    name="state"
                    type="text"
                    required
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="State"
                    value={formData.state}
                    onChange={handleChange}
                  />
                </div>

                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <FontAwesomeIcon icon={faMapPin} className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                  </div>
                  <input
                    name="pincode"
                    type="text"
                    required
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                  />
                </div>

                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <FontAwesomeIcon icon={faLock} className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                  </div>
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 flex items-center pr-3"
                  >
                    <FontAwesomeIcon 
                      icon={showPassword ? faEyeSlash : faEye} 
                      className="h-5 w-5 text-gray-400" 
                    />
                  </button>
                </div>

                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <FontAwesomeIcon icon={faLock} className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                  </div>
                  <input
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    required
                    className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-0 flex items-center pr-3"
                  >
                    <FontAwesomeIcon 
                      icon={showConfirmPassword ? faEyeSlash : faEye} 
                      className="h-5 w-5 text-gray-400" 
                    />
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 px-4 border border-transparent rounded-lg text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                {isLoading ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  />
                ) : (
                  <>
                    <span>Create Account</span>
                    <FontAwesomeIcon icon={faUser} className="h-5 w-5" />
                  </>
                )}
              </button>

              <p className="mt-4 text-center text-sm text-gray-600">
                Already have an account?{" "}
                <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">
                  Sign in
                </Link>
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Register;