import { Routes, Route } from 'react-router-dom';
import Navbar from './Compnents/NavbarSection/Navbar';
import Footer from './Compnents/FooterSection/Footer';
import Home from './Compnents/HomePageSection/Home';
import Login from './Compnents/Auth/Login';
import Register from './Compnents/Auth/Register';

// Import Footer Routes
import About from './Compnents/FooterSection/About';
import Faqs from './Compnents/FooterSection/Faqs';
import Privacy from './Compnents/FooterSection/Privacy';
import PrivacyPolicy from './Compnents/FooterSection/PrivacyPolicy';
import RefundPolicy from './Compnents/FooterSection/RefundPolicy';
import Disclaimer from './Compnents/FooterSection/Disclaimer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* Footer Routes */}
        <Route path="/about" element={<About />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/refundpolicy" element={<RefundPolicy />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
