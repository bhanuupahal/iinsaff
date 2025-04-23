import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Compnents/NavbarSection/Navbar';
import Footer from './Compnents/FooterSection/Footer';
import Home from './Compnents/HomePageSection/Home';
import ContactUs from './Compnents/HomePageSection/ContactUs';
import Reporting from './Compnents/OurSerSection/Reporting';
import Advertising from './Compnents/OurSerSection/Advertising';
import Influencing from './Compnents/OurSerSection/Influencing';
import SocialMedia from './Compnents/OurSerSection/SocialMedia';
import CampaignManagement from './Compnents/OurSerSection/CampaignManagement';
import BrandLaunch from './Compnents/OurSerSection/BrandLaunch';
import Survey from './Compnents/OurSerSection/Survey';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="min-h-screen">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/OurSerSection/ReportingServices" element={<Reporting />} />
          <Route path="/OurSerSection/AdvertisingServices" element={<Advertising />} />
          <Route path="/OurSerSection/InfluencingServices" element={<Influencing />} />
          <Route path="/OurSerSection/SocialMediaServices" element={<SocialMedia />} />
          <Route path="/OurSerSection/CampaignManagementServices" element={<CampaignManagement />} />
          <Route path="/OurSerSection/BrandLaunchServices" element={<BrandLaunch />} />
          <Route path="/OurSerSection/SurveyServices" element={<Survey />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
