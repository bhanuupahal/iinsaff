import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // Replace with your actual API endpoint
      const response = await fetch('/api/send-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneNumber }),
      });

      if (response.ok) {
        // Store phone number in session storage for verification
        sessionStorage.setItem('resetPhoneNumber', phoneNumber);
        navigate('/verify-otp');
      } else {
        const data = await response.json();
        setError(data.message || 'Failed to send OTP');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4 mt-16">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row my-8">
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
              <h1 className="text-3xl font-bold mb-3">Password Recovery</h1>
              <p className="text-lg text-gray-100 mb-6">
                Enter your phone number to receive an OTP
              </p>
            </motion.div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="lg:w-7/12 p-8">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-md mx-auto"
          >
            <div className="text-center lg:text-left mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Forgot Password</h2>
              <p className="text-gray-600 text-sm mt-1">
                Enter your phone number to receive a verification code
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-50 text-red-500 p-3 rounded-lg text-sm text-center"
                >
                  {error}
                </motion.div>
              )}

              <div className="relative group">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500"
                  />
                </div>
                <input
                  type="tel"
                  required
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your phone number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {isLoading ? 'Sending OTP...' : 'Send OTP'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;