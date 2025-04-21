import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaPlay } from "react-icons/fa";

const Card = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div
      className="mt-10 bgsecondhome mb-10 p-6 md:p-8 lg:p-12 xl:p-16 rounded-xl shadow-lg max-w-6xl mx-auto"
      data-aos="fade-up"
      style={{
        backgroundImage: `url('/AboutUsImages/test.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Section */}
        <div
          className="md:w-[40%] lg:w-[35%] xl:w-[30%] w-full"
          data-aos="fade-right"
        >
         
        </div>

        {/* Right Section with Glass Effect */}
        <div
          className="md:w-[60%] lg:w-[65%] xl:w-[70%] xl:ml-28 w-full glass-effect p-6 md:p-8 rounded-lg"
          data-aos="fade-left"
        >
          <h1 className="text-xl md:text-3xl lg:text-4xl font-semibold text-gray-800 mb-6">
            How to Get Started with IINSAF Services?
          </h1>

          <ol className="space-y-6">
            <li>
              <h2 className="text-base md:text-xl font-semibold text-gray-900">
                1. Choose Your Role
              </h2>
              <p className="text-gray-700 text-sm">
                Select your preferred role - Reporter, Advertiser, Marketer, or Influencer. 
                Each role comes with specialized tools and features tailored to your needs.
              </p>
            </li>
            <li>
              <h2 className="text-base md:text-xl font-semibold text-gray-900">
                2. Complete Your Profile
              </h2>
              <p className="text-gray-700 text-sm">
                Set up your professional profile by adding your expertise, experience, 
                and relevant credentials. This helps us match you with the right opportunities 
                and network.
              </p>
            </li>
            <li>
              <h2 className="text-base md:text-xl font-semibold text-gray-900">
                3. Explore and Connect
              </h2>
              <p className="text-gray-700 text-sm">
                Access our comprehensive platform features, connect with other professionals, 
                and start utilizing our tools for campaign management, reporting, and analytics 
                to grow your presence.
              </p>
            </li>
          </ol>
          <div
            className="flex justify-center items-center space-x-4 mt-8"
            data-aos="fade-up"
          >
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-500 transition duration-300 shadow-lg lg:px-6"
            >
              <FaPlay className="text-white text-lg" />
              Watch Demo
            </a>
            <button className="px-3 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-500 transition duration-300 shadow-lg lg:px-6">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;