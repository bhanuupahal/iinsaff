import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faEye, faEyeSlash, faUser } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios'; // Make sure to install axios: npm install axios

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    // Check if user is already logged in
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/dashboard');
    }
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // First, check if email exists
      const checkEmailResponse = await axios.post('YOUR_API_ENDPOINT/auth/check-email', {
        email: formData.email
      });

      if (!checkEmailResponse.data.exists) {
        // Show error message and redirect to register page after a short delay
        setError('Email is not registered. Redirecting to registration...');
        setIsLoading(false);
        setTimeout(() => {
          navigate('/auth/register', { 
            state: { email: formData.email } // Pass email to pre-fill registration form
          });
        }, 2000);
        return;
      }

      // If email exists, proceed with login
      const loginResponse = await axios.post('YOUR_API_ENDPOINT/auth/login', {
        email: formData.email,
        password: formData.password
      });

      if (loginResponse.data && loginResponse.data.token) {
        // Store authentication data
        localStorage.setItem('token', loginResponse.data.token);
        localStorage.setItem('user', JSON.stringify(loginResponse.data.user));

        // Navigate based on user role
        const userRole = loginResponse.data.user.role.toLowerCase();
        const dashboardRoutes = {
          advertiser: '/advertiser/dashboard',
          reporter: '/reporter/dashboard',
          influencer: '/influencer/dashboard'
        };

        navigate(dashboardRoutes[userRole] || '/dashboard');
      } else {
        setError('Invalid credentials');
      }
    } catch (err) {
      if (err.response?.status === 401) {
        setError('Invalid password. Please try again.');
      } else {
        setError(
          err.response?.data?.message || 
          'Login failed. Please try again later.'
        );
      }
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
                  <span>Access your personal dashboard</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <FontAwesomeIcon icon={faEnvelope} className="h-4 w-4" />
                  </span>
                  <span>Stay connected with updates</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <FontAwesomeIcon icon={faLock} className="h-4 w-4" />
                  </span>
                  <span>Secure and protected login</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="lg:w-7/12 p-8">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-md mx-auto"
          >
            <div className="text-center lg:text-left mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Welcome Back</h2>
              <p className="text-gray-600 text-sm mt-1">Please sign in to continue</p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-50 text-red-500 p-3 rounded-lg text-sm text-center"
                >
                  {error}
                </motion.div>
              )}

              <div className="space-y-4">
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <FontAwesomeIcon icon={faEnvelope} className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500" />
                  </div>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <FontAwesomeIcon icon={faLock} className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500" />
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
                      className="h-5 w-5 text-gray-400 hover:text-gray-600" 
                    />
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                    Remember me
                  </label>
                </div>
                <Link to="/forgot-password" className="text-sm text-blue-600 hover:text-blue-500">
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {isLoading ? 'Signing in...' : 'Sign in'}
              </button>

              <div className="text-center text-sm">
                <span className="text-gray-600">Don't have an account? </span>
                <Link to="/auth/register" className="text-blue-600 hover:text-blue-500 font-medium">
                  Sign up
                </Link>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Login;

// In your Register component
const Register = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    email: location.state?.email || '',
    // ...other form fields
  });
  
  // ...rest of your register component
};







