import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user') || '{}'));
  const [activeTopic, setActiveTopic] = useState(null);
  const [activeCareer, setActiveCareer] = useState(null);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingUp = prevScrollPos > currentScrollPos;
      const isAtTop = currentScrollPos < 10;

      setVisible(isScrollingUp || isAtTop);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const handleMouseEnter = (menu) => {
    setOpenDropdown(menu);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const services = [
    { id: 'reporting', name: 'Reporting' },
    { id: 'advertising', name: 'Advertising' },
    { id: 'influencing', name: 'Influencing' },
    { id: 'socialMedia', name: 'Social Media Marketing' },
    { id: 'campaignManagement', name: 'Campaign Management' },
    { id: 'brandLaunch', name: 'Brand Launch' },
    { id: 'electionCampaign', name: 'Election Campaign Management' },
    { id: 'survey', name: 'Survey' }
  ];

  const careers = [
    { id: 'reporter', name: 'Reporter', link: '/register?role=Reporter' },
    { id: 'advertiser', name: 'Advertiser', link: '/register?role=Advertiser' },
    { id: 'marketer', name: 'Marketer', link: '/marketer' },
    { id: 'influencer', name: 'Influencer', link: '/register?role=Influencer' },
    { id: 'drLawyer', name: 'Dr, Lawyer', link: '/JoinIinsaf' }
  ];

  const closeNavAndNavigate = () => {
    setIsOpen(false);
    setOpenDropdown(null);
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setUser({});
    navigate('/');
  };

  const goToProfile = () => {
    navigate('/profile');
  };

  return (
    <nav 
      className={`bg-white/70 backdrop-blur-sm shadow-lg fixed w-[80%] left-1/2 -translate-x-1/2 rounded-full z-[100] transition-all duration-300 ${
        visible ? 'top-2 opacity-100' : '-top-24 opacity-0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <Link to="/" className="flex items-center">
            <img src="/images/iinsaf.png" alt="IINSAF Logo" className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 text-base font-medium">
              Home
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 text-base font-medium">
              Contact
            </Link>

            {/* Services Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => handleMouseEnter('services')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200 text-base font-medium"
              >
                <span>Services</span>
                <FontAwesomeIcon
                  icon={openDropdown === 'services' ? faChevronUp : faChevronDown}
                  className="h-4 w-4 ml-1"
                />
              </button>
              {openDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl py-2 animate-fadeIn border border-gray-100">
                  <div className="max-h-[80vh] overflow-y-auto">
                    <ul className="grid grid-cols-1 gap-1 p-2">
                      {services.map((service) => (
                        <li
                          key={service.id}
                          onClick={() => setActiveTopic(service.id)}
                          className="cursor-pointer hover:bg-gray-100 px-4 py-2 rounded-lg transition-all duration-200"
                        >
                          <a 
                            href="#services" 
                            className="text-gray-700 hover:text-blue-600 text-base font-medium block w-full text-left"
                          >
                            {service.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Careers Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => handleMouseEnter('careers')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200 text-base font-medium"
              >
                <span>Careers</span>
                <FontAwesomeIcon
                  icon={openDropdown === 'careers' ? faChevronUp : faChevronDown}
                  className="h-4 w-4 ml-1"
                />
              </button>
              {openDropdown === 'careers' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl py-2 animate-fadeIn border border-gray-100">
                  <div className="max-h-[80vh] overflow-y-auto">
                    <ul className="grid grid-cols-1 gap-1 p-2">
                      {careers.map((career) => (
                        <li
                          key={career.id}
                          onClick={() => setActiveCareer(career.id)}
                          className="cursor-pointer hover:bg-gray-100 px-4 py-2 rounded-lg transition-all duration-200"
                        >
                          <Link 
                            to={career.link}
                            className="text-gray-700 hover:text-blue-600 text-base font-medium block w-full text-left"
                          >
                            {career.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Auth Buttons */}
            {isLoggedIn ? (
              <div className="flex items-center space-x-4">
                <button
                  onClick={goToProfile}
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
                >
                  Profile
                </button>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200 shadow-md"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <button
                  onClick={handleLogin}
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200 shadow-md"
                >
                  Login
                </button>
                <Link
                  to="/register"
                  className="px-4 py-2 text-sm font-medium text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-200 shadow-sm"
                >
                  Register
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            <div className="w-5 h-0.5 bg-gray-600 mb-1"></div>
            <div className="w-5 h-0.5 bg-gray-600 mb-1"></div>
            <div className="w-5 h-0.5 bg-gray-600"></div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden fixed top-0 left-0 w-full h-screen bg-white/95 backdrop-blur-lg overflow-y-auto z-50">
          <div className="p-4">
            {/* Close Button */}
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Mobile Logo */}
            <Link to="/" className="flex items-center justify-center mb-8" onClick={closeNavAndNavigate}>
              <img src="/images/iinsaf.png" alt="IINSAF Logo" className="h-12 w-auto" />
            </Link>

            {/* Mobile Navigation Links */}
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-600 py-2 text-center text-lg font-medium"
                onClick={closeNavAndNavigate}
              >
                Home
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-blue-600 py-2 text-center text-lg font-medium"
                onClick={closeNavAndNavigate}
              >
                Contact
              </Link>

              {/* Mobile Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setOpenDropdown(openDropdown === 'services' ? null : 'services')}
                  className="w-full flex items-center justify-center space-x-2 text-gray-700 hover:text-blue-600 py-2 text-lg font-medium"
                >
                  <span>Services</span>
                  <FontAwesomeIcon
                    icon={openDropdown === 'services' ? faChevronUp : faChevronDown}
                    className="h-4 w-4"
                  />
                </button>
                {openDropdown === 'services' && (
                  <div className="bg-gray-50 rounded-lg mt-2">
                    {services.map((service) => (
                      <a
                        key={service.id}
                        href="#services"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                        onClick={() => {
                          setActiveTopic(service.id);
                          closeNavAndNavigate();
                        }}
                      >
                        {service.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Careers Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setOpenDropdown(openDropdown === 'careers' ? null : 'careers')}
                  className="w-full flex items-center justify-center space-x-2 text-gray-700 hover:text-blue-600 py-2 text-lg font-medium"
                >
                  <span>Careers</span>
                  <FontAwesomeIcon
                    icon={openDropdown === 'careers' ? faChevronUp : faChevronDown}
                    className="h-4 w-4"
                  />
                </button>
                {openDropdown === 'careers' && (
                  <div className="bg-gray-50 rounded-lg mt-2">
                    {careers.map((career) => (
                      <Link
                        key={career.id}
                        to={career.link}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                        onClick={() => {
                          setActiveCareer(career.id);
                          closeNavAndNavigate();
                        }}
                      >
                        {career.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Auth Buttons */}
              <div className="pt-4 border-t border-gray-200">
                {isLoggedIn ? (
                  <div className="flex flex-col space-y-3">
                    <button
                      onClick={() => {
                        goToProfile();
                        closeNavAndNavigate();
                      }}
                      className="w-full px-4 py-2 text-gray-700 hover:text-blue-600 text-lg font-medium"
                    >
                      Profile
                    </button>
                    <button
                      onClick={() => {
                        handleLogout();
                        closeNavAndNavigate();
                      }}
                      className="w-full px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-medium"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col space-y-3">
                    <button
                      onClick={() => {
                        handleLogin();
                        closeNavAndNavigate();
                      }}
                      className="w-full px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-medium"
                    >
                      Login
                    </button>
                    <Link
                      to="/register"
                      onClick={closeNavAndNavigate}
                      className="w-full px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 text-center text-lg font-medium"
                    >
                      Register
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;