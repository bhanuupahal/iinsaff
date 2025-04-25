import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './Compnents/NavbarSection/Navbar';
import Login from './Compnents/Auth/Login';
import Register from './Compnents/Auth/Register';
import ForgetPassword from './Compnents/Auth/ForgetPassword';
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
// Import Reporter Layout and Components
import ReporterLayout from './Compnents/ReporterDashboardSection/ReporterLayout';
import ReporterDashboard from './Compnents/ReporterDashboardSection/ReporterDashboard';
import ReporterAdvertisement from './Compnents/ReporterDashboardSection/ReporterAdvertisement';
import ReporterConference from './Compnents/ReporterDashboardSection/ReporterConference';
import ReporterDarbar from './Compnents/ReporterDashboardSection/ReporterDarbar';
import ReporterPodcast from './Compnents/ReporterDashboardSection/ReporterPodcast';
import ReporterVoice from './Compnents/ReporterDashboardSection/ReporterVoice';
import ReporterPayment from './Compnents/ReporterDashboardSection/ReporterPayment';
import ReporterCards from './Compnents/ReporterDashboardSection/ReporterCards';
import ReporterAccount from './Compnents/ReporterDashboardSection/ReporterAccount';
import ReporterWallet from './Compnents/ReporterDashboardSection/ReporterWallet';
import ReporterProfile from './Compnents/ReporterDashboardSection/ReporterProfile';
import ReporterSettings from './Compnents/ReporterDashboardSection/ReporterSettings';

// Protected Route component
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  if (!token) {
    return <Navigate to="/auth/login" replace />;
  }
  return children;
};

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // Check if current path starts with /reporter
  const isReporterDashboard = location.pathname.startsWith('/reporter');

  return (
    <div className="App">
      {/* Only show Navbar if not in reporter dashboard */}
      {!isReporterDashboard && <Navbar />}
      
      <main className={`${isReporterDashboard ? '' : 'min-h-screen'}`}>
        <Routes>
          {/* Public routes */}
          <Route exact path="/" element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="/auth/forgot-password" element={<ForgetPassword />} />
          <Route path="/OurSerSection/ReportingServices" element={<Reporting />} />
          <Route path="/OurSerSection/AdvertisingServices" element={<Advertising />} />
          <Route path="/OurSerSection/InfluencingServices" element={<Influencing />} />
          <Route path="/OurSerSection/SocialMediaServices" element={<SocialMedia />} />
          <Route path="/OurSerSection/CampaignManagementServices" element={<CampaignManagement />} />
          <Route path="/OurSerSection/BrandLaunchServices" element={<BrandLaunch />} />
          <Route path="/OurSerSection/SurveyServices" element={<Survey />} />

          {/* Protected Reporter Dashboard Routes */}
          <Route path="/reporter" element={
            <ProtectedRoute>
              <ReporterLayout />
            </ProtectedRoute>
          }>
            <Route path="dashboard" element={<ReporterDashboard />} />
            <Route path="advertisement" element={<ReporterAdvertisement />} />
            <Route path="conference" element={<ReporterConference />} />
            <Route path="darbar" element={<ReporterDarbar />} />
            <Route path="podcast" element={<ReporterPodcast />} />
            <Route path="voice" element={<ReporterVoice />} />
            <Route path="payment" element={<ReporterPayment />} />
            <Route path="cards" element={<ReporterCards />} />
            <Route path="account" element={<ReporterAccount />} />
            <Route path="wallet" element={<ReporterWallet />} />
            <Route path="profile" element={<ReporterProfile />} />
            <Route path="settings" element={<ReporterSettings />} />
          </Route>
        </Routes>
      </main>
      {!isReporterDashboard && <Footer />}
    </div>
  );
}

export default App;






