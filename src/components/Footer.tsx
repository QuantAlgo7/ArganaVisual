import { TrendingUp, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark-light border-t border-dark-lighter">
      <div className="container mx-auto py-12 px-4 md:px-8">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <TrendingUp className="text-accent mr-2" size={24} />
              <span className="font-display text-xl font-semibold tracking-wide">
                Argana Bridge Capital
              </span>
            </div>
            <p className="text-light-dark mb-4 max-w-md">
              Argana Bridge Capital specializes in algorithmic trading strategies powered by neural network intelligence, delivering institutional-grade performance for investors.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-light-dark hover:text-accent transition-colors" aria-label="Github">
                <Github size={20} />
              </a>
              <a href="#" className="text-light-dark hover:text-accent transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-light-dark hover:text-accent transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-light-dark hover:text-accent transition-colors">Home</a></li>
              <li><a href="#chart" className="text-light-dark hover:text-accent transition-colors">Live Chart</a></li>
              <li><a href="#strategies" className="text-light-dark hover:text-accent transition-colors">Strategies</a></li>
              <li><a href="#testimonials" className="text-light-dark hover:text-accent transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-light-dark hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-light-dark hover:text-accent transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-light-dark hover:text-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-light-dark hover:text-accent transition-colors">Disclaimer</a></li>
              <li><a href="#" className="text-light-dark hover:text-accent transition-colors">Risk Disclosure</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-dark-lighter mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-light-dark text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Argana Bridge Capital. All rights reserved.
          </p>
          <p className="text-light-dark text-sm text-center md:text-right">
            <span className="block md:inline mb-2 md:mb-0 md:mr-4">Algorithmic Intelligence. Predictive Precision.</span>
            <span className="block md:inline">Institutional Performance.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;