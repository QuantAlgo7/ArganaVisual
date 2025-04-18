import { useEffect, useRef } from 'react';
import ParticleNetwork from '../utils/ParticleNetwork';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const particleRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!particleRef.current) return;
    
    const particleInstance = new ParticleNetwork(particleRef.current);
    return () => {
      particleInstance.destroy();
    };
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Neural network particle background */}
      <div ref={particleRef} className="particle-container"></div>
      
      {/* Content container */}
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
            The Future of 
            <span className="bg-gradient-to-r from-accent to-primary-light bg-clip-text text-transparent block mt-2">
              Alpha Generation
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-light-dark mb-10 max-w-2xl mx-auto">
            Algorithmic Intelligence. Predictive Precision. Institutional Performance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-accent">
              Explore Strategies
            </button>
            <button className="btn bg-dark-lighter hover:bg-dark-light text-light">
              Learn More
            </button>
          </div>

          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
            <a href="#chart" aria-label="Scroll down">
              <ChevronDown className="text-accent" size={32} />
            </a>
          </div>
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-dark to-transparent"></div>
    </section>
  );
};

export default Hero;