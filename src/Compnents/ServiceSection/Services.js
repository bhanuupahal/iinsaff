import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReporterService from "./ReporterService";
import AdvertiserService from "./AdvertiserServices";
import InfluencersService from "./InfluencersServices";
import DrLawyer from "./DrLawyer";
import MarketerService from "./MarketerService";
import Newspaper from "./Newspaper";
import Website from "../ServiceSection/Website";

const Services = ({ activeCareer, setActiveCareer }) => {
  const navigate = useNavigate();
  const [activeService, setActiveService] = useState(activeCareer);
  const [touchedService, setTouchedService] = useState(null); // Add this state

  useEffect(() => {
    setActiveService(activeCareer);
  }, [activeCareer]);

  const handleServiceClick = (service) => {
    setActiveService(service.title);
    if (setActiveCareer) {
      setActiveCareer(service.title);
    }
    if (service.link && service.link !== "#") {
      navigate(service.link);
    }
  };

  const handleTouchStart = (serviceTitle) => {
    setTouchedService(serviceTitle);
  };

  const handleTouchEnd = () => {
    setTouchedService(null);
  };

  const servicesData = [
    {
      title: "Reporter",
      description: "",
      bgColor: "bg-blue-100",
      iconBgColor: "bg-blue-600",
      iconColor: "text-blue-600",
      image: "/assets/reporter.png",
      link: "/auth/login?redirect=reporter/dashboard"
    },
    {
      title: "Advertiser",
      description: "",
      bgColor: "bg-orange-100",
      iconBgColor: "bg-orange-500",
      iconColor: "text-orange-600",
      image: "/assets/ads-career.png",
      link: "/auth/login?role=advertiser"
    },
    {
      title: "Marketer",
      description: "",
      bgColor: "bg-red-100",
      iconBgColor: "bg-red-500",
      iconColor: "text-red-600",
      image: "/assets/marketer.png",
      link: "/auth/login"
    },
    {
      title: "Influencer",
      description: "",
      bgColor: "bg-blue-100",
      iconBgColor: "bg-blue-600",
      iconColor: "text-blue-600",
      image: "/assets/influencer-career.png",
      link: "/auth/register?role=Influencer"
    },
    {
      title: "Join Organization ",
      description: "",
      bgColor: "bg-yellow-100",
      iconBgColor: "bg-yellow-500",
      iconColor: "text-yellow-600",
      image: "/assets/lawyer.png",
      link: "/auth/login"
    },
    {
      title: "Newspaper",
      description: "",
      bgColor: "bg-red-100",
      iconBgColor: "bg-red-500",
      iconColor: "text-red-600",
      image: "/assets/marketer.png",
      link: "/auth/login"
    },
    {
      title: "Website",
      description: "",
      bgColor: "bg-blue-100",
      iconBgColor: "bg-blue-500",
      iconColor: "text-blue-600",
      image: "/assets/marketer.png",
      link: "/auth/login"
    },
  ];

  const getServiceComponent = () => {
    switch (activeService) {
      case "Reporter":
        return <ReporterService />;
      case "Advertiser":
        return <AdvertiserService />;
      case "Marketer":
        return <MarketerService />;
      case "Influencer":
        return <InfluencersService />;
      case "Dr, Lawyer":
        return <DrLawyer />;
      case "Newspaper":
        return <Newspaper />;
      case "Website":
        return <Website />;
      default:
        return null;
    }
  };

  const getActiveServiceIcon = () => {
    const service = servicesData.find(s => s.title === activeService);
    return service ? service.image : null;
  };

  return (
    <>
      <div id="career" className="flex flex-col lg:flex-row items-center gap-4 md:gap-8 px-4 md:px-6 lg:px-16 py-6 md:py-10 bg-gray-100 relative">
        {/* Logo Section - Responsive adjustments */}
        <div className="flex-shrink-0 relative mb-6 md:mb-8 lg:mb-0 w-full lg:w-auto flex justify-center">
          <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-48 lg:h-44 relative border-r-4 border-dotted border-black rounded-full flex justify-center items-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full flex items-center justify-center relative overflow-hidden">
              <img
                src="/assets/icon.jpg"
                alt="IINSAF Logo"
                className="absolute inset-0 w-full h-full object-cover z-10 opacity-90 filter brightness-110"
              />
              <img
                className="absolute inset-0 w-full h-full object-cover opacity-65"
                src={getActiveServiceIcon()}
                alt={activeService}
              />
            </div>
          </div>
        </div>

        {/* Services List - Responsive adjustments */}
        <div className="flex flex-col gap-3 md:gap-4 lg:gap-6 w-full lg:w-2/4 relative">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className={`
                flex items-center gap-2 md:gap-3
                ${service.bgColor}
                p-2 w-full
                rounded-lg shadow-md
                relative
                transition-all
                duration-300
                ${touchedService === service.title ? 'scale-[1.02] shadow-lg brightness-105' : ''}
                ${
                  // Adjusted margins for mobile and desktop
                  index === 0
                    ? "ml-0 lg:-ml-32"
                    : index === 1
                    ? "ml-0 lg:-ml-12"
                    : index === 2
                    ? "ml-0 lg:ml-4"
                    : index === 3
                    ? "ml-0 lg:ml-14"
                    : index === 4
                    ? "ml-0 lg:ml-4"
                    : index === 5
                    ? "ml-0 lg:-ml-12"
                    : index === 6
                    ? "ml-0 lg:-ml-32"
                    : "ml-0"
                }
                rounded-r-full
                cursor-pointer
                ${
                  activeService === service.title || touchedService === service.title
                    ? "border-2 border-blue-600"
                    : "border-transparent"
                }
                group
              `}
              onClick={() => handleServiceClick(service)}
              onTouchStart={() => handleTouchStart(service.title)}
              onTouchEnd={handleTouchEnd}
              onTouchCancel={handleTouchEnd}
            >
              {/* Icon Container - Responsive adjustments */}
              <div
                className={`
                  ${service.iconBgColor}
                  text-white
                  p-1.5 md:p-2
                  rounded-full
                  absolute
                  w-[45px] h-[45px] md:w-[60px] md:h-[60px]
                  flex items-center justify-center
                  left-[-15px] md:left-[-20px]
                  ${service.iconColor}
                  transition-all
                  duration-300
                  ${touchedService === service.title ? 'rotate-12 scale-110' : ''}
                  border-[2px] md:border-[3px]
                  border-white
                  shadow-lg
                  ${touchedService === service.title ? 'shadow-xl' : ''}
                  ring-2
                  ring-offset-2
                  ring-${service.iconBgColor.split('-')[1]}-400
                  ${touchedService === service.title ? `ring-${service.iconBgColor.split('-')[1]}-500` : ''}
                  before:content-['']
                  before:absolute
                  before:inset-0
                  before:rounded-full
                  before:border-2
                  before:border-dashed
                  before:border-white/50
                  ${touchedService === service.title ? 'before:border-white/70' : ''}
                `}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className={`
                    w-6 h-6 md:w-8 md:h-8 
                    rounded-full 
                    transition-transform 
                    duration-300
                    ${touchedService === service.title ? 'scale-110' : ''}
                  `}
                />
              </div>
              {/* Title Container - Responsive adjustments */}
              <div className={`
                pl-[40px] md:pl-[48px] 
                w-full 
                transition-all 
                duration-300
                ${touchedService === service.title ? 'pl-[45px] md:pl-[52px]' : ''}
              `}>
                <h3 className={`
                  ${service.iconColor}
                  font-bold text-lg md:text-xl
                  text-center
                  transition-all
                  duration-300
                  ${touchedService === service.title ? 'scale-105' : ''}
                  ${touchedService === service.title ? `${service.iconColor.replace('text', 'text')}/90` : ''}
                `}>
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Service Component Container */}
        <div className="w-full lg:w-auto mt-6 lg:mt-0">
          {getServiceComponent()}
        </div>
      </div>
    </>
  );
};

export default Services;


