import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation, Outlet } from 'react-router-dom';
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
import NewAdvertise from './Compnents/ReporterDashboardSection/AdvertisementSection/NewAdvertisement';
import AcceptedLeads from './Compnents/ReporterDashboardSection/AdvertisementSection/AcceptedLeads';
import CompletedLeads from './Compnents/ReporterDashboardSection/AdvertisementSection/CompletedLeads';
import PendingLeads from './Compnents/ReporterDashboardSection/AdvertisementSection/PendingLeads';

// Import Admin Layout and Components
import AdminLayout from './Compnents/AdminPanelSection/AdminLayout';
import AdminDashboard from './Compnents/AdminPanelSection/AdminDashboard';
import CouponManagement from './Compnents/AdminPanelSection/CouponManagement';
import SettingsManagement from './Compnents/AdminPanelSection/SettingsManagement';
import AdminManagement from './Compnents/AdminPanelSection/AdminManagement';
import DarbarManagement from './Compnents/AdminPanelSection/DarbarManagement';
import Conferences from './Compnents/AdminPanelSection/Conferences';
import OrganizationsManagement from './Compnents/AdminPanelSection/OrganizationsManagement';
import IDCardsManagement from './Compnents/AdminPanelSection/IDCardsManagement';
import PriceSet from './Compnents/AdminPanelSection/PriceSet';
import VoicesManagement from './Compnents/AdminPanelSection/VoicesManagement';
import GetAllLeads from './Compnents/AdminPanelSection/GetAllLeads';
import FreeAds from './Compnents/AdminPanelSection/FreeAds';
import AllUser from './Compnents/AdminPanelSection/AllUser';
import PaymentHistory from './Compnents/AdminPanelSection/PaymentHistory';
import WithdrawalHistory from './Compnents/AdminPanelSection/WithdrawalHistory';
import WithdrawalRequests from './Compnents/AdminPanelSection/WithdrawalRequests';
import AdminLogin from './Compnents/AdminAuth/AdminLogin';
import AdminRegister from './Compnents/AdminAuth/AdminRegister';
import AdminForgotPassword from './Compnents/AdminAuth/AdminForgotPassword';
import AdminProfile from './Compnents/AdminPanelSection/AdminProfile';

// Import Advertiser Layout and Components
import AdvertiserLayout from './Compnents/AdvertiserDashboardSection/AdvertiserLayout';
import AdvertiserDashboard from './Compnents/AdvertiserDashboardSection/AdvertiserDashboard';
import PostAdvertisement from './Compnents/AdvertiserDashboardSection/AdvertiserLeads/PostAdvertisement';

// Import Raise Voice Section
import RaiseLogin from './Compnents/RaiseVoiceSection/RaiseLogin';
import RaiseRegister from './Compnents/RaiseVoiceSection/RaiseRegister';
import RaiseForgotPassword from './Compnents/RaiseVoiceSection/RaiseForgotPassword';

// Import Press Conference Section
import PressLogin from './Compnents/PressconferenceSection/PressLogin';
import PressRegister from './Compnents/PressconferenceSection/PressRegister';
import PressForgotPassword from './Compnents/PressconferenceSection/PressForgotPassword';

// Import Darbar Section
import DarbarLogin from './Compnents/DarbarSection/DarbarLogin';
import DarbarRegister from './Compnents/DarbarSection/DarbarRegister';
import DarbarForgotPassword from './Compnents/DarbarSection/DarbarForgotPassword';

// Create placeholder components for Advertiser Dashboard
const PlaceholderComponent = ({ title }) => (
  <div className="p-6">
    <h1 className="text-2xl font-bold text-gray-800 mb-6">{title}</h1>
    <div className="bg-white rounded-xl shadow-lg p-6">
      <p className="text-gray-600">This page is under construction. Please check back later.</p>
    </div>
  </div>
);

// Protected Route component
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  
  console.log("Protected route check:", { token, user });
  
  if (!token) {
    return <Navigate to="/auth/login" replace />;
  }
  
  return children;
};

const ProtectedAdminRoute = ({ children }) => {
  const adminToken = localStorage.getItem('adminToken');
  if (!adminToken) {
    return <Navigate to="/admin/login" replace />;
  }
  return children;
};

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const isReporterDashboard = location.pathname.startsWith('/reporter');
  const isAdminDashboard = location.pathname.startsWith('/admin');
  const isAdvertiserDashboard = location.pathname.startsWith('/advertiser');
  const shouldShowNavbar = !isReporterDashboard && !isAdminDashboard && !isAdvertiserDashboard;

  return (
    <div className="App">
      {shouldShowNavbar && <Navbar />}
      
      <main className={`${shouldShowNavbar ? 'min-h-screen' : ''}`}>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
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
          <Route path="/raise-voice/login" element={<RaiseLogin />} />
          <Route path="/raise-voice/register" element={<RaiseRegister />} />
          <Route path="/raise-voice/forgot-password" element={<RaiseForgotPassword />} />
          {/* Admin Auth Routes - These should be public */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/register" element={<AdminRegister />} />
          <Route path="/admin/forgot-password" element={<AdminForgotPassword />} />
          {/* Press Conference Routes */}
          <Route path="/press-conference/login" element={<PressLogin />} />
          <Route path="/press-conference/register" element={<PressRegister />} />
          <Route path="/press-conference/forgot-password" element={<PressForgotPassword />} />
          {/* Darbar Routes */}
          <Route path="/darbar/login" element={<DarbarLogin />} />
          <Route path="/darbar/register" element={<DarbarRegister />} />
          <Route path="/darbar/forgot-password" element={<DarbarForgotPassword />} />
          
            
          
          
          {/* Protected Admin Dashboard Routes */}
          <Route path="/admin" element={
            <ProtectedAdminRoute>
              <AdminLayout />
            </ProtectedAdminRoute>
          }>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="createAdmin" element={<AdminManagement />} />
            <Route path="getAllDarbar" element={<DarbarManagement />} />
            <Route path="allconfrences" element={<Conferences />} />
            <Route path="settings" element={<SettingsManagement />} />
            <Route path="organization" element={<OrganizationsManagement />} />
            <Route path="card-requests" element={<IDCardsManagement />} />
            <Route path="approved-cards" element={<IDCardsManagement />} />
            <Route path="rejected-cards" element={<IDCardsManagement />} />
            <Route path="priceset" element={<PriceSet />} />
            <Route path="voices" element={<VoicesManagement />} />
            <Route path="admincouponmanage" element={<CouponManagement />} />
            <Route path="getallleads" element={<GetAllLeads />} />
            <Route path="freeAd" element={<FreeAds />} />
            <Route path="adStatus" element={<FreeAds />} />
            <Route path="AllUser" element={<AllUser />} />
            <Route path="AllAdmin" element={<AdminManagement />} />
            <Route path="payment-history" element={<PaymentHistory />} />
            <Route path="withdrawal-history" element={<WithdrawalHistory />} />
            <Route path="withdrawal-requests" element={<WithdrawalRequests />} />
            <Route path="profile" element={<AdminProfile />} />
          </Route>

          {/* Protected Reporter Dashboard Routes */}
          <Route path="/reporter" element={
            <ProtectedRoute>
              <ReporterLayout />
            </ProtectedRoute>
          }>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<ReporterDashboard />} />
            
            {/* Advertisement Routes */}
            <Route path="advertisement">
              <Route index element={<ReporterAdvertisement />} />
              <Route path="new" element={<NewAdvertise />} />
              <Route path="accepted" element={<AcceptedLeads />} />
              <Route path="completed" element={<CompletedLeads />} />
              <Route path="pending" element={<PendingLeads />} />
            </Route>

            {/* Other Reporter Routes */}
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

          {/* Protected Advertiser Dashboard Routes */}
          <Route path="/advertiser" element={
            <ProtectedRoute>
              <AdvertiserLayout />
            </ProtectedRoute>
          }>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<AdvertiserDashboard />} />
            
            {/* Advertisement Routes */}
            <Route path="PostAdvertisement" element={<PostAdvertisement />} />
            <Route path="leads-status" element={<PlaceholderComponent title="Advertisement Status" />} />
            
            {/* Conference Routes */}
            <Route path="conferences" element={<PlaceholderComponent title="Create Conferences" />} />
            <Route path="get-user-conferences" element={<PlaceholderComponent title="Conference Status" />} />
            
            {/* Payment Routes */}
            <Route path="payment-history" element={<PlaceholderComponent title="Payment History" />} />
            <Route path="payment-historyConference" element={<PlaceholderComponent title="Payment History Conference" />} />
            <Route path="withdrawal-history" element={<PlaceholderComponent title="Withdrawal History" />} />
            <Route path="withdrawal-requests" element={<PlaceholderComponent title="Withdrawal Requests" />} />
            
            {/* Account Routes */}
            <Route path="profile" element={<PlaceholderComponent title="Profile" />} />
            <Route path="settings" element={<PlaceholderComponent title="Change Password" />} />
          </Route>
        </Routes>
      </main>
      {shouldShowNavbar && <Footer />}
    </div>
  );
}

export default App;




