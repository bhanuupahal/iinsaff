import React from "react";
import Banner1 from "./Banner1";
import Services from "./Services";
import Solution from "./Solution";
import TopicsComponent from "./TopicComponent";
import OwerClientSlider from "./OwerClientSlider";  // Changed from OurClientSlider
import WhyUs from "./WhyUs";
import Card from "./Card";
import BrandScrolling from "./BrandScrolling";
import OrganizationScrolling from "./OrganizationScrolling";
import AboutUs from "./Aboutus";
import ContactUs from "./ContactUs";

const Home = () => {
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

        <Services />
        <Solution />
        <TopicsComponent />
        <OwerClientSlider />  {/* Changed from OurClientSlider */}
        <WhyUs />
        <Card />
        <BrandScrolling />
        <OrganizationScrolling />
        <AboutUs />
        <ContactUs />
      </div>
    </div>
  );
};

export default Home;



