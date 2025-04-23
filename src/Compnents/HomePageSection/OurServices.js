import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

const OurServices = () => {
  const navigate = useNavigate();
  const [activeService, setActiveService] = useState('reporting');

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const services = {
    reporting: {
      title: "Reporting",
      description: "Track and generate detailed reports on social media campaigns and engagements with real-time analytics. Our comprehensive reporting tools provide actionable insights, performance metrics, and customizable dashboards to help you make data-driven decisions. Monitor campaign success, audience engagement, and ROI all in one place.",
      icon: "/assets/reporter.png",
      image: "/assets/reporter.png",
      bgColor: "bg-blue-100",
      hoverBgColor: "hover:bg-blue-200",
      iconBg: "bg-blue-500",
      link: "/OurSerSection/ReportingServices"
    },
    advertising: {
      title: "Advertising",
      description: "Create and manage effective advertising campaigns across multiple platforms. Our advanced advertising solutions include targeted audience segmentation, budget optimization, A/B testing capabilities, and cross-platform campaign management. Maximize your ad spend and reach the right audience at the right time.",
      icon: "/assets/advertiser.png",
      image: "/assets/advertiser.png",
      bgColor: "bg-purple-100",
      hoverBgColor: "hover:bg-purple-200",
      iconBg: "bg-purple-500",
      link: "/OurSerSection/AdvertisingServices"
    },
    influencing: {
      title: "Influencing",
      description: "Connect with influential voices and amplify your message to the right audience. Our influencer platform helps you identify, collaborate, and manage relationships with key industry influencers. Track campaign performance, manage content approvals, and measure influencer impact on your brand's growth.",
      icon: "/assets/influencing-services.png",
      image: "/assets/influencing-services.png",
      bgColor: "bg-pink-100",
      hoverBgColor: "hover:bg-pink-200",
      iconBg: "bg-pink-500",
      link: "/OurSerSection/InfluencingServices"
    },
    socialMedia: {
      title: "Social Media Management",
      description: "Comprehensive social media management and engagement strategies. Our platform offers content scheduling, community management, social listening, and crisis management tools. Stay ahead with trend analysis, competitor tracking, and automated posting across all major social networks.",
      icon: "/assets/social-media.png",
      image: "/assets/social-media.png",
      bgColor: "bg-indigo-100",
      hoverBgColor: "hover:bg-indigo-200",
      iconBg: "bg-indigo-500",
      link: "/OurSerSection/SocialMediaServices"
    },
    campaignManagement: {
      title: "Campaign Management",
      description: "End-to-end campaign planning, execution, and monitoring services. From strategy development to performance analysis, our campaign management tools help you create, launch, and optimize marketing campaigns. Includes timeline management, resource allocation, and real-time campaign tracking features.",
      icon: "/assets/capaign-manager.png",
      image: "/assets/capaign-manager.png",
      bgColor: "bg-green-100",
      hoverBgColor: "hover:bg-green-200",
      iconBg: "bg-green-500",
      link: "/OurSerSection/CampaignManagementServices"
    },
    brandLaunch: {
      title: "Brand Launch",
      description: "Strategic brand launches and positioning in the market. Our brand launch services include market research, competitor analysis, brand identity development, and launch strategy planning. Get comprehensive support for successful brand introduction, including PR outreach and social media activation.",
      icon: "/assets/brand launch.png",
      image: "/assets/brand launch.png",
      bgColor: "bg-yellow-100",
      hoverBgColor: "hover:bg-yellow-200",
      iconBg: "bg-yellow-500",
      link: "/OurSerSection/BrandLaunchServices"
    },
    survey: {
      title: "Survey",
      description: "Comprehensive survey and data collection services with advanced analytics capabilities. Create custom surveys, gather valuable feedback, and analyze responses with our intuitive tools. Features include automated data collection, real-time reporting, and trend analysis for informed decision-making.",
      icon: "/assets/survey.png",
      image: "/assets/survey.png",
      bgColor: "bg-red-100",
      hoverBgColor: "hover:bg-red-200",
      iconBg: "bg-red-500",
      link: "/OurSerSection/SurveyServices"
    },
  };

  const handleServiceClick = (key) => {
    setActiveService(key);
    navigate(services[key].link);
  };

  return (
    <section id="services" className="relative flex flex-col items-center justify-center overflow-hidden py-16">
      {/* Background Images */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            url(/bg-images/bg5.jpg), 
            url(/bg-images/bg4.jpg), 
            url(/bg-images/bg3.jpg), 
            url(/bg-images/bg2.jpg)
          `,
          backgroundPosition: "left center, right center, top center, bottom center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "overlay",
        }}
      />

      {/* Main Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center mb-12">
          <p className="text-black font-bold text-3xl mb-2">OUR SERVICES</p>
          <h2 className="text-xl font-semibold mb-4" data-aos="fade-down">
            Comprehensive <span style={{ color: '#333' }}>Solutions</span> For Your Needs
          </h2>
        </div>

        {/* Services Grid */}
        <div 
          className="flex justify-center items-center gap-2 mb-12 flex-wrap" 
          data-aos="fade-up"
        >
          {Object.entries(services).map(([key, service]) => (
            <div
              key={key}
              className={`w-[150px] p-4 rounded-full aspect-square flex flex-col items-center justify-center shadow-lg cursor-pointer transition-all duration-300 hover:transform hover:scale-105 ${service.bgColor} ${service.hoverBgColor}`}
              onClick={() => handleServiceClick(key)}
              style={{
                border: activeService === key ? '2px solid rgba(0,0,0,0.2)' : 'none'
              }}
            >
              <div className="flex items-center justify-center mb-3">
                {/* Removed the relative group wrapper div */}
                <div 
                  className={`w-16 h-16 rounded-full flex items-center justify-center p-2.5 ${service.iconBg} transition-transform duration-300 hover:scale-110`}
                >
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-11 h-11 object-contain"
                  />
                </div>
              </div>
              <h3 className="text-sm font-semibold text-center truncate max-w-full px-2">
                {service.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Selected Service Details */}
        <div
          className={`rounded-[40px] shadow-xl p-8 mt-8 ${services[activeService].bgColor}`}
          data-aos="fade-up"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-800">
                {services[activeService].title}
              </h3>
              <p className="text-gray-700">
                {services[activeService].description}
              </p>
              <button 
                className={`px-8 py-3 rounded-full text-white hover:opacity-90 transition-opacity ${services[activeService].iconBg}`}
              >
                Learn More
              </button>
            </div>
            <div className="flex justify-center">
              <div 
                className={`rounded-full overflow-hidden shadow-lg p-2 ${services[activeService].iconBg}`}
              >
                <img
                  src={services[activeService].image}
                  alt={services[activeService].title}
                  className="w-48 h-48  p-4"
                  data-aos="zoom-in"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
