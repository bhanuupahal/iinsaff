import React, { useEffect } from 'react';
import { FaDigitalTachograph, FaBullhorn, FaChartLine, FaNewspaper, FaMobileAlt, FaSearchDollar } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Advertising = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  const services = [
    {
      icon: <FaDigitalTachograph className="w-8 h-8" />,
      title: "Digital Advertising",
      description: "Strategic digital ad campaigns across multiple platforms to reach your target audience effectively.",
      color: "bg-blue-50",
      iconColor: "text-blue-600",
      borderColor: "border-blue-200"
    },
    {
      icon: <FaBullhorn className="w-8 h-8" />,
      title: "Social Media Advertising",
      description: "Targeted social media campaigns that engage and convert your ideal customers.",
      color: "bg-purple-50",
      iconColor: "text-purple-600",
      borderColor: "border-purple-200"
    },
    {
      icon: <FaNewspaper className="w-8 h-8" />,
      title: "Print Advertising",
      description: "Traditional print advertising solutions designed for maximum impact and reach.",
      color: "bg-green-50",
      iconColor: "text-green-600",
      borderColor: "border-green-200"
    },
    {
      icon: <FaMobileAlt className="w-8 h-8" />,
      title: "Mobile Advertising",
      description: "Mobile-first advertising strategies to capture the growing smartphone audience.",
      color: "bg-red-50",
      iconColor: "text-red-600",
      borderColor: "border-red-200"
    },
    {
      icon: <FaChartLine className="w-8 h-8" />,
      title: "Performance Marketing",
      description: "Data-driven performance marketing campaigns focused on measurable results.",
      color: "bg-yellow-50",
      iconColor: "text-yellow-600",
      borderColor: "border-yellow-200"
    },
    {
      icon: <FaSearchDollar className="w-8 h-8" />,
      title: "PPC Advertising",
      description: "Optimized pay-per-click campaigns that maximize your advertising ROI.",
      color: "bg-indigo-50",
      iconColor: "text-indigo-600",
      borderColor: "border-indigo-200"
    }
  ];

  const benefits = [
    { title: "Increased Brand Visibility", value: "300%", suffix: "+" },
    { title: "Average ROI", value: "250%", suffix: "+" },
    { title: "Client Retention Rate", value: "95", suffix: "%" },
    { title: "Successful Campaigns", value: "1000", suffix: "+" }
  ];

  return (
    <div className="min-h-screen pt-20 px-4 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="relative inline-block">
            <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Advertising Services
            </h1>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-8 leading-relaxed">
            Transform your brand's reach with our comprehensive advertising solutions tailored to your business goals
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className={`${service.color} rounded-xl p-6 transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl border ${service.borderColor}`}
            >
              <div className={`${service.iconColor} mb-6 bg-white p-4 rounded-lg inline-block shadow-md`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {benefit.value}{benefit.suffix}
                </div>
                <p className="text-gray-600">{benefit.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div 
          className="relative overflow-hidden rounded-2xl mb-16"
          data-aos="fade-up"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-90"></div>
          <div className="relative z-10 p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Ready to Amplify Your Brand?</h2>
            <p className="text-xl mb-8 opacity-90">Start your advertising journey with us today</p>
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

export default Advertising;

