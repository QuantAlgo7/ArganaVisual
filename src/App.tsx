import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StrategyDashboard from './components/StrategyDashboard';
import TradingViewChart from './components/TradingViewChart';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for smooth transition
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
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
    <div className="min-h-screen bg-dark text-light">
      <Navbar />
      <main>
        <Hero />
        <TradingViewChart />
        <StrategyDashboard />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;