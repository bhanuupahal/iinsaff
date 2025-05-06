import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const DarbarForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSuccessMessage('');

    try {
      const response = await fetch('/api/darbar/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage('पासवर्ड रीसेट निर्देश आपके ईमेल पर भेज दिए गए हैं।');
        setTimeout(() => {
          navigate('/darbar/login');
        }, 3000);
      } else {
        setError(data.message || 'अनुरोध प्रक्रिया विफल रही');
      }
    } catch (err) {
      setError('कुछ गलत हो गया। कृपया बाद में पुनः प्रयास करें।');
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
          <h2 className="text-3xl font-bold text-gray-900">पासवर्ड भूल गए</h2>
          <p className="text-gray-600 mt-2">अपना पासवर्ड रीसेट करने के लिए अपना ईमेल दर्ज करें</p>
        </div>

        {error && (
          <div className="bg-red-50 text-red-500 p-3 rounded-lg text-sm mb-6">
            {error}
          </div>
        )}

        {successMessage && (
          <div className="bg-green-50 text-green-500 p-3 rounded-lg text-sm mb-6">
            {successMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
              <FontAwesomeIcon icon={faEnvelope} className="text-gray-400" />
            </div>
            <input
              type="email"
              required
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="अपना ईमेल दर्ज करें"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            {isLoading ? (
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              'पासवर्ड रीसेट करें'
            )}
          </button>

          <div className="text-center mt-4">
            <Link
              to="/darbar/login"
              className="text-sm font-medium text-blue-600 hover:text-blue-500"
            >
              लॉगिन पर वापस जाएं
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DarbarForgotPassword;