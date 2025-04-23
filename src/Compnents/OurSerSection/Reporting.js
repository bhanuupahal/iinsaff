import React, { useEffect } from 'react';
import { FaChartLine, FaNewspaper, FaSearchDollar, FaChartPie, FaFileAlt, FaDatabase } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Reporting = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  const features = [
    {
      icon: <FaChartLine className="w-8 h-8" />,
      title: "Real-time Analytics",
      description: "Track social media campaigns and engagements with live metrics and instant updates.",
      color: "bg-blue-50",
      iconColor: "text-blue-600",
      borderColor: "border-blue-200"
    },
    {
      icon: <FaNewspaper className="w-8 h-8" />,
      title: "Media Coverage Analysis",
      description: "Comprehensive analysis of your media presence across different platforms.",
      color: "bg-purple-50",
      iconColor: "text-purple-600",
      borderColor: "border-purple-200"
    },
    {
      icon: <FaSearchDollar className="w-8 h-8" />,
      title: "ROI Tracking",
      description: "Measure and analyze return on investment for your media campaigns.",
      color: "bg-green-50",
      iconColor: "text-green-600",
      borderColor: "border-green-200"
    },
    {
      icon: <FaChartPie className="w-8 h-8" />,
      title: "Custom Dashboards",
      description: "Personalized dashboards with the metrics that matter most to your business.",
      color: "bg-red-50",
      iconColor: "text-red-600",
      borderColor: "border-red-200"
    },
    {
      icon: <FaFileAlt className="w-8 h-8" />,
      title: "Detailed Reports",
      description: "Generate comprehensive reports with actionable insights and recommendations.",
      color: "bg-yellow-50",
      iconColor: "text-yellow-600",
      borderColor: "border-yellow-200"
    },
    {
      icon: <FaDatabase className="w-8 h-8" />,
      title: "Data Management",
      description: "Efficient storage and organization of all your reporting data.",
      color: "bg-indigo-50",
      iconColor: "text-indigo-600",
      borderColor: "border-indigo-200"
    }
  ];

  return (
    <div className="min-h-screen pt-20 px-4 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="relative inline-block">
            <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Reporting Services
            </h1>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-8 leading-relaxed">
            Transform your data into actionable insights with our comprehensive reporting solutions
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className={`${feature.color} rounded-xl p-6 transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl border ${feature.borderColor}`}
            >
              <div className={`${feature.iconColor} mb-6 bg-white p-4 rounded-lg inline-block shadow-md`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16" data-aos="fade-up">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <p className="text-gray-600">Accuracy Rate</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
              <p className="text-gray-600">Real-time Monitoring</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
              <p className="text-gray-600">Happy Clients</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div 
          className="relative overflow-hidden rounded-2xl mb-16"
          data-aos="fade-up"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-90"></div>
          <div className="relative z-10 p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Reporting?</h2>
            <p className="text-xl mb-8 opacity-90">Get started with our comprehensive reporting solutions today</p>
            <div className="flex gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg">
                Get Started
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reporting;