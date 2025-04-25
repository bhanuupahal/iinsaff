import React, { useState } from "react";
import Banner1 from "./Banner1";
// Fix the import path for Services
import Services from "../ServiceSection/Services";
import OurServices from './OurServices';
import OwerClientSlider from "./OwerClientSlider";
import WhyUs from "./WhyUs";
import Card from "./Card";
import BrandScrolling from "./BrandScrolling";
import OrganizationScrolling from "./OrganizationScrolling";
import WebsiteOverview from "./WebsiteOverview";
import AboutUs from "./Aboutus";
import ContactUs from "./ContactUs";

const Home = () => {
  const [activeCareer, ] = useState();
  const [activeTopic, setActiveTopic] = useState("all");

  return (
    <div className="relative w-full overflow-x-hidden">
      <div className="bg-gradient-to-r from-blue-100 via-blue-400 to-[#f2effd] w-full">
        <Banner1 />
        <div className="marquee-container bg-white/80 py-4 shadow-inner">
          <div className="marquee">
            <div className="marquee-content text-3xl">
              IINSAF is dedicated to promoting social justice through innovative technological solutions. &nbsp;
            </div>
            <div className="marquee-content text-3xl" aria-hidden="true">
              IINSAF is dedicated to promoting social justice through innovative technological solutions. &nbsp;
            </div>
          </div>
        </div>
        
        <div className="py-10 bg-gray-50">
          <Services 
            activeCareer={activeCareer}
          />
        </div>

        <WebsiteOverview />
        <WhyUs />
        <Card />
        <BrandScrolling />
        <OrganizationScrolling />
        <OurServices />
        <OwerClientSlider />
        <AboutUs />
        <ContactUs />
      </div>
    </div>
  );
};

export default Home;
