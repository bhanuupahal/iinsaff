import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaChartLine,
  FaComments,
  FaStar,
  FaUsers,
  FaCogs,
} from "react-icons/fa";

const WhyUs = () => {
  const navigate = useNavigate();

  const leftServicesData = [
    {
      title: "Online Marketing Experience",
      description: "We have 8 years of experience in Online Marketing",
      bgColor: "bg-blue-100",
      iconBgColor: "bg-blue-600",
      iconColor: "text-blue-600",
      Icon: FaCogs,
      route: "/online-marketing"
    },
    {
      title: "Business Experience",
      description: "Experience in multiple verticals and industries",
      bgColor: "bg-orange-100",
      iconBgColor: "bg-orange-500",
      iconColor: "text-orange-600",
      Icon: FaComments,
      route: "/business-experience"
    },
    {
      title: "Solid Team",
      description: "We have a solid team of full-time employees and specialists",
      bgColor: "bg-red-100",
      iconBgColor: "bg-red-500",
      iconColor: "text-red-600",
      Icon: FaStar,
      route: "/team-info"
    },
  ];

  const rightServicesData = [
    {
      title: "Business Strategy",
      description: "We adapt to any business with result-driven strategies",
      bgColor: "bg-green-100",
      iconBgColor: "bg-green-600",
      iconColor: "text-green-600",
      Icon: FaChartLine,
      route: "/business-strategy"
    },
    {
      title: "Our Passion",
      description: "We love what we do - reflected in our results",
      bgColor: "bg-yellow-100",
      iconBgColor: "bg-yellow-500",
      iconColor: "text-yellow-600",
      Icon: FaUsers,
      route: "/our-passion"
    },
    {
      title: "Advertising Plans",
      description: "Explore resources for your advertising objectives",
      bgColor: "bg-purple-100",
      iconBgColor: "bg-purple-500",
      iconColor: "text-purple-600",
      Icon: FaComments,
      route: "/advertising-plans"
    },
  ];

  const handleCardClick = (route) => {
    navigate(route);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8 px-4 lg:px-5 py-6 lg:py-10 bg-gray-100">
      {/* Left Column */}
      <div className="w-full lg:w-5/12 flex flex-col gap-4 lg:gap-6">
        {leftServicesData.map((service, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(service.route)}
            className={`flex items-center gap-3 ${service.bgColor} p-2 w-full rounded-lg lg:rounded-l-full shadow-md relative ${
              index === 0
                ? "ml-0 lg:ml-[3px]"
                : index === 1
                ? "ml-0 lg:ml-[-30px]"
                : "ml-0"
            } cursor-pointer hover:shadow-xl transition-all duration-300`}
          >
            {/* Text */}
            <div className="pl-5 pr-16 lg:pl-5 lg:pr-10 py-3 lg:py-0 lg:h-[48px] flex items-center">
              <p className="text-gray-700 text-xs">{service.description}</p>
            </div>

            {/* Icon - Maintained size for desktop, adjusted for mobile */}
            <div
              className={`${service.iconBgColor} text-white p-2 rounded-full w-[60px] h-[60px] flex items-center justify-center absolute right-[-20px]`}
            >
              <div className="border-2 border-dashed rounded-full border-white-500 shadow-lg p-3">
                <service.Icon className="w-4 h-4" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Middle Column */}
      <div className="w-full lg:w-2/12 flex justify-center my-6 lg:my-0">
        <div className="w-32 lg:w-36 xl:w-48 h-32 lg:h-36 xl:h-48 relative border-4 border-dotted border-black rounded-full flex justify-center items-center">
          <div className="w-28 lg:w-32 xl:w-44 h-28 lg:h-32 xl:h-44 bg-blue-800 rounded-full flex items-center justify-center shadow-lg">
            <div className="w-24 lg:w-24 xl:w-32 h-24 lg:h-24 xl:h-32 bg-blue-900 rounded-full flex flex-col items-center justify-center text-white text-center">
              <h2 className="text-sm lg:text-base font-bold">Why Us</h2>
              <p className="text-xs lg:text-xs mt-1">What Makes Us Stand Out</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="w-full lg:w-5/12 flex flex-col gap-4 lg:gap-6">
        {rightServicesData.map((service, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(service.route)}
            className={`flex items-center gap-3 ${service.bgColor} p-2 w-full rounded-lg lg:rounded-r-full shadow-md relative ${
              index === 0
                ? "ml-0"
                : index === 1
                ? "ml-0 lg:ml-[30px]"
                : "ml-0 lg:ml-[3px]"
            } cursor-pointer hover:shadow-xl transition-all duration-300`}
          >
            {/* Icon - Maintained size for desktop, adjusted for mobile */}
            <div
              className={`${service.iconBgColor} text-white p-2 rounded-full w-[60px] h-[60px] flex items-center justify-center absolute left-[-20px]`}
            >
              <div className="border-2 border-dashed rounded-full border-white-500 shadow-lg p-3">
                <service.Icon className="w-4 h-4" />
              </div>
            </div>

            {/* Text */}
            <div className="pl-16 pr-5 py-3 lg:py-0 lg:h-[48px] flex items-center">
              <p className="text-gray-700 text-xs">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;