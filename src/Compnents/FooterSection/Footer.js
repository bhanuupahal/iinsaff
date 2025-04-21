import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faYoutube,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faChevronRight,
  faShieldAlt
} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-700 to-blue-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {/* Logo and Social Icons */}
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center justify-center sm:justify-start">
              <img 
                src="/images/iinsaf.png"
                alt="iinsaaf Logo"
                className="h-10 sm:h-12 w-auto"
              />
            </div>
            <p className="text-sm sm:text-base text-gray-200 leading-relaxed text-center sm:text-left px-4 sm:px-0">
              <span className="text-red-500 font-bold">ii</span>
              <span className="font-bold">nsaaf</span> is a leading platform dedicated to promoting social justice
              through innovative technological solutions.
            </p>
            <div className="flex justify-center sm:justify-start space-x-4 sm:space-x-6 px-4 sm:px-0">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-white transition-all duration-300"
                  aria-label={social.name}
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300">
                    <FontAwesomeIcon icon={social.icon} className="text-xs sm:text-sm" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 sm:space-y-4 px-4 sm:px-0">
            <h3 className="text-base sm:text-lg font-semibold text-white border-b border-blue-400 pb-2 text-center sm:text-left">
              Quick Links
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="group flex items-center justify-center sm:justify-start text-gray-200 hover:text-white transition-colors duration-300 text-sm sm:text-base"
                  >
                    <div className="hidden sm:flex w-6 h-6 rounded-full bg-white/10 items-center justify-center mr-3 group-hover:bg-white/20 transition-all duration-300">
                      <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
                    </div>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Privacy Links */}
          <div className="space-y-3 sm:space-y-4 px-4 sm:px-0">
            <h3 className="text-base sm:text-lg font-semibold text-white border-b border-blue-400 pb-2 text-center sm:text-left">
              Privacy Links
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {privacyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="group flex items-center justify-center sm:justify-start text-gray-200 hover:text-white transition-colors duration-300 text-sm sm:text-base"
                  >
                    <div className="hidden sm:flex w-6 h-6 rounded-full bg-white/10 items-center justify-center mr-3 group-hover:bg-white/20 transition-all duration-300">
                      <FontAwesomeIcon icon={faShieldAlt} className="text-xs" />
                    </div>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-3 sm:space-y-4 px-4 sm:px-0">
            <h3 className="text-base sm:text-lg font-semibold text-white border-b border-blue-400 pb-2 text-center sm:text-left">
              Contact Us
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              {contactInfo.map((info) => (
                <li key={info.type}>
                  <a
                    href={info.href}
                    className="group flex items-center justify-center sm:justify-start text-gray-200 hover:text-white transition-colors duration-300 text-sm sm:text-base"
                  >
                    <div className="hidden sm:flex w-8 h-8 rounded-full bg-white/10 items-center justify-center mr-3 group-hover:bg-white/20 transition-all duration-300">
                      <FontAwesomeIcon icon={info.icon} className="text-sm" />
                    </div>
                    {info.value}
                  </a>
                </li>
              ))}
              <li>
                <div className="group flex items-center justify-center sm:justify-start text-gray-200">
                  <div className="hidden sm:flex w-8 h-8 rounded-full bg-white/10 items-center justify-center mr-3">
                    <FontAwesomeIcon icon={faLocationDot} className="text-sm" />
                  </div>
                  <address className="text-gray-200 text-center sm:text-left not-italic text-sm sm:text-base">
                    123 Business Avenue, Tech Park,<br />
                    New Delhi, India - 110001
                  </address>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-6 sm:my-8 border-blue-600/30" />

        {/* Copyright Section */}
        <div className="text-center space-y-3 sm:space-y-4">
          <p className="text-xs sm:text-sm text-gray-200 px-4 sm:px-0">
            Copyright © {new Date().getFullYear()}, All rights reserved by{" "}
            <a
              href="https://www.iinsaf.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300"
            >
              www.iinsaf.com
            </a>
          </p>
          <div className="flex justify-center space-x-3 sm:space-x-4 text-xs sm:text-sm text-gray-200">
            <Link to="/terms" className="hover:text-white transition-colors duration-300">Terms</Link>
            <span>•</span>
            <Link to="/privacy" className="hover:text-white transition-colors duration-300">Privacy</Link>
            <span>•</span>
            <Link to="/cookies" className="hover:text-white transition-colors duration-300">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Data arrays for footer content
const socialLinks = [
  { name: 'Facebook', icon: faFacebookF, href: 'https://facebook.com/iinsaaf' },
  { name: 'Twitter', icon: faTwitter, href: 'https://twitter.com/iinsaaf' },
  { name: 'LinkedIn', icon: faLinkedinIn, href: 'https://linkedin.com/company/iinsaaf' },
  { name: 'YouTube', icon: faYoutube, href: 'https://youtube.com/iinsaaf' },
  { name: 'Instagram', icon: faInstagram, href: 'https://instagram.com/iinsaaf' },
];

const quickLinks = [
  { name: 'Homepage', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'FAQs', href: '/faqs' },
  { name: 'Join as Reporter', href: '/register?as=1' },
  { name: 'Join as Advertiser', href: '/register?as=2' },
];

const privacyLinks = [
  { name: 'Terms and Conditions', href: '/terms' },
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Refund Policy', href: '/refund' },
  { name: 'Disclaimer', href: '/disclaimer' },
];

const contactInfo = [
  { type: 'phone', icon: faPhone, value: '+91 99923-96623', href: 'tel:+919992396623' },
  { type: 'email', icon: faEnvelope, value: 'iinsafgroup@example.com', href: 'mailto:iinsafgroup@example.com' },
];

export default Footer;