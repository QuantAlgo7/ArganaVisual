import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FuturisticShowcase from './components/FuturisticShowcase';
import StrategyDashboard from './components/StrategyDashboard';
import TradingViewChart from './components/TradingViewChart';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AllStrategies from './pages/AllStrategies';
import FAQ from './pages/FAQ';
import ChatWidget from './components/ChatWidget';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for smooth transition
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    // Add refresh handler
    const handleBeforeUnload = () => {
      window.location.href = '/';
      return undefined;
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-dark flex items-center justify-center">
        <div className="text-accent font-display text-3xl">
          <span className="inline-block animate-float">A</span>
          <span className="inline-block animate-float" style={{ animationDelay: '0.2s' }}>B</span>
          <span className="inline-block animate-float" style={{ animationDelay: '0.4s' }}>C</span>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div className="min-h-screen bg-dark text-light">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <FuturisticShowcase />
              <TradingViewChart />
              <StrategyDashboard />
              <Testimonials />
              <Contact />
            </main>
          } />
          <Route path="/strategies" element={<AllStrategies />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<Navigate to="/\" replace />} />
        </Routes>
        <Footer />
        <ChatWidget />
      </div>
    </Router>
  );
}

export default App;