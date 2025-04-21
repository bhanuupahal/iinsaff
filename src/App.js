import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Compnents/NavbarSection/Navbar';
import Footer from './Compnents/FooterSection/Footer';
import Home from './Compnents/HomePageSection/Home';
import ContactUs from './Compnents/HomePageSection/ContactUs';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="min-h-screen"> {/* Removed pt-16 */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
