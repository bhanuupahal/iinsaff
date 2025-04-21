import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Banner1.css';

const Banner1 = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const navigation = useNavigate();
  const [dots, setDots] = useState([]);

  useEffect(() => {
    // Generate random radar dots
    const generateDots = () => {
      const newDots = [];
      for (let i = 0; i < 15; i++) {
        const angle = Math.random() * Math.PI * 2;
        const distance = 20 + Math.random() * 60; // Between 20% and 80% from center
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;
        newDots.push({ x: `${x}%`, y: `${y}%` });
      }
      setDots(newDots);
    };

    generateDots();
    const interval = setInterval(generateDots, 6000); // Changed from 4000 to 6000
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="home" className="w-full h-screen bg-gray-100 relative flex items-center justify-center overflow-hidden" style={{ marginTop: '0px' }}> {/* Removed negative margin */}
      {/* Background Images */}
      <div className="absolute inset-0 bg-black/5">
        {/* Desktop Image Layout */}
        <div className="hidden md:flex h-screen"> {/* Changed h-full to h-screen */}
          <div className="h-full w-1/2">
            <img
              src="/images/iinsaf_2.jpg"
              alt="IINSAF Home Left"
              className="w-full h-full object-cover opacity-95 bright-image"
            />
          </div>
          <div className="h-full w-1/2">
            <img
              src="/images/iinsaf-home.jpeg"
              alt="IINSAF Home Right"
              className="w-full h-full object-cover opacity-95 bright-image"
            />
          </div>
        </div>

        {/* Mobile Image Layout */}
        <div className="md:hidden h-screen"> {/* Changed h-full to h-screen */}
          <img
            src="/images/iinsaf-home.jpeg"
            alt="IINSAF Home"
            className="w-full h-full object-cover opacity-95 bright-image"
          />
        </div>
      </div>

      {/* Radar Effect - Hidden on mobile */}
      <div className="radar-container hidden md:block">
        <div className="radar-glow"></div>
        <div className="radar-grid"></div>
        <div className="radar-sweep"></div>
        <div className="radar-dots">
          {dots.map((dot, index) => (
            <div
              key={index}
              className="radar-dot"
              style={{ left: dot.x, top: dot.y }}
            />
          ))}
        </div>
      </div>
      
      <div className="gradient-overlay"></div>

      {/* Content Section */}
      <div className="slider-content relative z-10 flex flex-col items-center text-center w-full md:w-4/5 lg:w-3/4">
        {currentSlide === 1 && (
          <div className="content animate-fade-in px-4 md:px-0">
            <h1 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4 text-gray-900 animate-slide-up drop-shadow-lg">
              Welcome to <span className="text-red-700 font-black">II</span>NSAF
            </h1>
            <p className="text-sm md:text-xl mt-2 md:mt-4 animate-slide-up delay-100 font-medium text-gray-1000 drop-shadow-md px-2">
              <span className="text-red-700 font-bold">International Influencing</span> News Social Media Advertisement Federation
            </p>
            
            {/* Buttons Container - Mobile Optimized */}
            <div className="flex flex-col md:flex-row justify-center gap-3 mt-6 animate-slide-up delay-200">
              <button
                className="quote-btn1 px-6 py-3 text-white font-bold rounded-lg bg-red-700 hover:bg-red-600 transition-all duration-300"
                onClick={() => navigation("/voice")}
              >
                Raise Your Voice
              </button>
            </div>

            <div className="flex flex-col md:flex-row justify-center gap-3 mt-3 animate-slide-up delay-200">
              <button
                className="quote-btn px-6 py-3 text-white bg-green-700 hover:bg-green-800 font-bold rounded-lg transition-all duration-300"
                onClick={() => navigation("/darbar-register")}
              >
                जनसेवा दरबार
              </button>
              
              <button
                className="quote-btn px-6 py-3 text-white bg-blue-950 hover:bg-blue-700 font-bold rounded-lg transition-all duration-300"
                onClick={() => navigation("/register?role=Advertiser")}
              >
                Press Conference
              </button>
              
              <button
                onClick={() => navigation("/podcast")}
                className="quote-btn podcast-btn px-6 py-3 text-white font-bold rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                  />
                </svg>
                Podcast
              </button>
            </div>
          </div>
        )}
        {currentSlide === 2 && (
          <div className="content animate-fade-in px-4 md:px-0">
            <img
              src="/images/homeiinsaf.png"
              alt="IINSAF Logo"
              className="mx-auto mb-4 md:mb-8 w-32 md:w-64 h-auto"
            />
            <h1 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4 text-red-800 animate-slide-up">
              Digital Innovation Hub
            </h1>
            <p className="text-sm md:text-lg mt-2 md:mt-4 animate-slide-up delay-100">
              Helping your brand thrive in the digital era with innovative solutions.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center gap-3 mt-6 animate-slide-up delay-200">
              {/* Mobile-optimized buttons */}
              <button
                className="quote-btn px-6 py-3 text-white bg-black hover:bg-gray-900 font-bold rounded-lg transition-all duration-300"
                onClick={() => navigation("/darbarRegister")}
              >
                जनसेवा दरबार
              </button>
              
              <button
                className="quote-btn1 px-6 py-3 text-white font-bold rounded-lg bg-red-800 hover:bg-red-600 transition-all duration-300"
                onClick={() => navigation("/voice")}
              >
                Raise Your Voice
              </button>
              
              <button
                onClick={() => navigation("/podcast")}
                className="quote-btn podcast-btn px-6 py-3 text-white font-bold rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                  />
                </svg>
                Podcast
              </button>
            </div>
          </div>
        )}
      </div>
      
      <div className="bottom-glow"></div>
    </div>
  );
};

export default Banner1;