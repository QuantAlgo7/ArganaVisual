import { useState, useEffect } from 'react';
import { Menu, X, TrendingUp } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  const NavLink = ({ href, label }: { href: string; label: string }) => (
    <a 
      href={href} 
      className="hover:text-accent transition-colors duration-300 py-2"
      onClick={() => setIsMenuOpen(false)}
    >
      {label}
    </a>
  );

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark-light/90 backdrop-blur-lg py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <TrendingUp className="text-accent mr-2" size={28} />
          <span className="font-display text-xl font-semibold tracking-wide">
            <span className="text-accent">A</span>rgana <span className="text-accent">B</span>ridge <span className="text-accent">C</span>apital
          </span>
        </a>

        {/* Desktop menu */}
        <nav className="hidden md:flex gap-8">
          <NavLink href="#home" label="Home" />
          <NavLink href="#chart" label="Live Chart" />
          <NavLink href="#strategies" label="Strategies" />
          <NavLink href="#testimonials" label="Testimonials" />
          <NavLink href="#contact" label="Contact" />
        </nav>

        <button className="hidden md:block btn-accent">
          Explore Strategies
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
            <NavLink href="#chart" label="Live Chart" />
            <NavLink href="#strategies" label="Strategies" />
            <NavLink href="#testimonials" label="Testimonials" />
            <NavLink href="#contact" label="Contact" />
            <button className="btn-accent w-full mt-4">
              Explore Strategies
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;