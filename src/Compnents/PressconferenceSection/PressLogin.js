import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const PressLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    emailOrMobile: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
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
    setIsLoading(true);
    try {
      // First check if user exists
      const response = await fetch('/api/press/check-user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ emailOrMobile: formData.emailOrMobile })
      });
      const data = await response.json();

      if (!data.exists) {
        // Redirect to registration if user doesn't exist
        navigate('/press-conference/register', { 
          state: { emailOrMobile: formData.emailOrMobile }
        });
        return;
      }

      // Proceed with login if user exists
      const loginResponse = await fetch('/api/press/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const loginData = await loginResponse.json();

      if (loginResponse.ok) {
        localStorage.setItem('pressToken', loginData.token);
        localStorage.setItem('pressUser', JSON.stringify(loginData.user));
        navigate('/press-conference/dashboard');
      } else {
        setError(loginData.message || 'Login failed');
      }

    } catch (error) {
      setError('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        <div className="text-center mb-8">
          <img
            src="/images/iinsaf.png"
            alt="IINSAF Logo"
            className="mx-auto w-32 h-auto mb-6"
          />
          <h2 className="text-3xl font-bold text-gray-900">Press Conference Login</h2>
          <p className="text-gray-600 mt-2">Please sign in to continue</p>
        </div>

        {error && (
          <div className="bg-red-50 text-red-500 p-3 rounded-lg text-sm mb-6">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
              <FontAwesomeIcon icon={faEnvelope} className="text-gray-400" />
            </div>
            <input
              type="text"
              name="emailOrMobile"
              required
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Email or Mobile Number"
              value={formData.emailOrMobile}
              onChange={handleChange}
            />
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
              <FontAwesomeIcon icon={faLock} className="text-gray-400" />
            </div>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              required
              className="block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                className="text-gray-400 hover:text-gray-600"
              />
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                Remember me
              </label>
            </div>
            <Link
              to="/press-conference/forgot-password"
              className="text-sm text-blue-600 hover:text-blue-500"
            >
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            {isLoading ? (
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              'Sign In'
            )}
          </button>

          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <Link
                to="/press-conference/register"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Register now
              </Link>
            </p>
          </div>
        </form>

        {/* <div className="text-center mt-6">
          <button
            className="quote-btn px-6 py-3 text-white bg-blue-950 hover:bg-blue-700 font-bold rounded-lg transition-all duration-300"
            onClick={() => {
              const token = localStorage.getItem('pressToken');
              if (!token) {
                // First check if user is registered
                const pressUser = localStorage.getItem('pressUser');
                if (!pressUser) {
                  navigate('/press-conference/register');
                } else {
                  navigate('/press-conference/login');
                }
              } else {
                // If already logged in, go to press conference dashboard
                navigate('/press-conference/dashboard');
              }
            }}
          >
            Press Conference
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default PressLogin;