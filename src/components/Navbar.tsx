import { useState, useEffect } from 'react';
import { Menu, X, TrendingUp } from 'lucide-react';
import SubscriptionModal from './SubscriptionModal';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (path: string) => {
    if (location.pathname === '/' && path.startsWith('#')) {
      // Handle smooth scroll for home page sections
      const element = document.querySelector(path);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (path.startsWith('http')) {
      // Handle external links
      window.open(path, '_blank');
    } else {
      // Regular page navigation
      navigate(path);
      window.scrollTo(0, 0);
    }
    setIsMenuOpen(false);
  };

  const NavLink = ({ href, label }: { href: string; label: string }) => (
    <button 
      onClick={() => handleNavigation(href)}
      className={`hover:text-accent transition-colors duration-300 py-2 ${
        (location.pathname === '/' && href === '#home') || 
        (location.pathname === href) || 
        (location.hash === href) 
          ? 'text-accent'
          : ''
      }`}
    >
      {label}
    </button>
  );

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-dark-light/90 backdrop-blur-lg py-3' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          <button 
            onClick={() => handleNavigation('/')} 
            className="flex items-center"
          >
            <TrendingUp className="text-accent mr-2" size={28} />
            <span className="font-display text-xl font-semibold tracking-wide">
              <span className="text-accent">A</span>rgana <span className="text-accent">B</span>ridge <span className="text-accent">C</span>apital
            </span>
          </button>

          {/* Desktop menu */}
          <nav className="hidden md:flex gap-8">
            <NavLink href="#home" label="Home" />
            <NavLink href="#chart" label="Our Vision" />
            <NavLink href="/strategies" label="Strategies" />
            <NavLink href="#testimonials" label="Testimonials" />
            <NavLink href="#contact" label="Contact" />
            <NavLink href="/faq" label="FAQ" />
          </nav>

          <button 
            className="hidden md:block btn-accent"
            onClick={() => setShowSubscriptionModal(true)}
          >
            Get Access
          </button>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-light hover:text-accent transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-dark-light/95 backdrop-blur-lg py-4">
            <nav className="container mx-auto px-4 flex flex-col space-y-4">
              <NavLink href="#home" label="Home" />
              <NavLink href="#chart" label="Our Vision" />
              <NavLink href="/strategies" label="Strategies" />
              <NavLink href="#testimonials" label="Testimonials" />
              <NavLink href="#contact" label="Contact" />
              <NavLink href="/faq" label="FAQ" />
              <button 
                className="btn-accent w-full mt-4"
                onClick={() => {
                  setShowSubscriptionModal(true);
                  setIsMenuOpen(false);
                }}
              >
                Get Access
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Subscription Modal */}
      {showSubscriptionModal && (
        <SubscriptionModal 
          onClose={() => setShowSubscriptionModal(false)}
          strategy={{
            id: 0,
            name: "All Strategies Bundle",
            category: "momentum",
            shortDescription: "Access to our complete suite of algorithmic trading strategies",
            longDescription: "Get unlimited access to all our trading strategies, including future releases",
            logicDescription: "Multiple algorithmic approaches combined for optimal market coverage",
            marketApplication: "Comprehensive coverage across all major market conditions",
            chartUrl: "https://images.pexels.com/photos/7567434/pexels-photo-7567434.jpeg",
            metrics: {
              sharpe: 4.2,
              cagr: 187,
              maxDrawdown: 12,
              winRate: 89,
              sortino: 3.8,
              alpha: 15.4
            }
          }}
        />
      )}
    </>
  );
};

export default Navbar;