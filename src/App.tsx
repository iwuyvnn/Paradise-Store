/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetails from './pages/ProductDetails';
import GamesStore from './pages/GamesStore';
import Reviews from './pages/Reviews';
import Dashboard from './pages/Dashboard';
import AdminDashboard from './pages/AdminDashboard';
import Checkout from './pages/Checkout';
import SimplePage from './pages/SimplePage';
import SocialProof from './components/SocialProof';
import AnnouncementBanner from './components/AnnouncementBanner';
import { AnimatePresence } from 'motion/react';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
        <AnnouncementBanner />
        <Navbar />
        <SocialProof />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/games" element={<GamesStore />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/tos" element={<SimplePage title="Terms of Service" />} />
              <Route path="/privacy" element={<SimplePage title="Privacy Policy" />} />
              <Route path="/contact" element={<SimplePage title="Contact Us" />} />
              <Route path="/discord" element={<SimplePage title="Redirecting to Discord..." />} />
              {/* Fallback */}
              <Route path="*" element={<Home />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
