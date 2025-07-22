import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import ParticleNetwork from '../utils/ParticleNetwork';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const particleRef = useRef<HTMLDivElement>(null);
  const { t, isRTL } = useLanguage();
  
  useEffect(() => {
    if (!particleRef.current) return;
    
    const particleInstance = new ParticleNetwork(particleRef.current);
    return () => {
      particleInstance.destroy();
    };
  }, []);

  const scrollToStrategies = () => {
    const strategiesSection = document.getElementById('strategies');
    if (strategiesSection) {
      strategiesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div ref={particleRef} className="particle-container"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className={`max-w-4xl mx-auto text-center ${isRTL ? 'text-right' : ''}`}>
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {t('hero.title')}
            <span className="bg-gradient-to-r from-accent to-primary-light bg-clip-text text-transparent block mt-2">
              {t('hero.subtitle')}
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-light-dark mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {t('hero.description')}
          </motion.p>
        </div>

        <motion.div 
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <a href="#showcase" aria-label="Scroll down to showcase">
            <ChevronDown className="text-accent" size={32} />
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-dark to-transparent"></div>
    </section>
  );
};

export default Hero;