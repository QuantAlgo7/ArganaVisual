import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ParticleNetwork from '../utils/ParticleNetwork';

const showcaseImages = [
  {
    url: 'https://i.imgur.com/bmO4Iy8.png',
    caption: 'Quant Algo 1'
  },
  {
    url: 'https://i.imgur.com/IXYrBtZ.png',
    caption: 'Quant Algo 2'
  }
];

const FuturisticShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const particleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!particleRef.current) return;
    
    const particleInstance = new ParticleNetwork(particleRef.current);
    return () => {
      particleInstance.destroy();
    };
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % showcaseImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % showcaseImages.length);
    setIsAutoPlaying(false);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + showcaseImages.length) % showcaseImages.length);
    setIsAutoPlaying(false);
  };

  return (
    <section className="relative h-screen overflow-hidden bg-dark">
      <div ref={particleRef} className="particle-container"></div>
      
      {/* Screen Frame */}
      <div className="absolute inset-0 max-w-6xl mx-auto my-16 px-4">
        <div className="relative h-full border border-accent/20 rounded-lg backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent/5"></div>
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent"></div>
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent"></div>
          <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-accent to-transparent"></div>
          <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-accent to-transparent"></div>
          
          {/* Screen Content */}
          <div className="relative h-full p-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 1 }}
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center rounded-lg"
                  style={{ backgroundImage: `url(${showcaseImages[currentIndex].url})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-dark/30 via-dark/10 to-dark/30 rounded-lg"></div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Caption */}
            <motion.div
              className="absolute bottom-8 left-0 right-0 p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="bg-dark/30 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto border border-accent/20">
                <h2 className="font-display text-3xl mb-2 bg-gradient-to-r from-accent to-primary-light bg-clip-text text-transparent">
                  {showcaseImages[currentIndex].caption}
                </h2>
                <div className="h-1 w-24 mx-auto bg-gradient-to-r from-accent to-primary-light rounded-full"></div>
              </div>
            </motion.div>

            {/* Navigation Controls */}
            <button
              onClick={goToPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-dark/30 backdrop-blur-sm border border-accent/20 text-accent hover:bg-accent hover:text-dark transition-all duration-300"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-dark/30 backdrop-blur-sm border border-accent/20 text-accent hover:bg-accent hover:text-dark transition-all duration-300"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>

            {/* Progress Indicators */}
            <div className="absolute bottom-32 left-1/2 -translate-x-1/2 flex space-x-2">
              {showcaseImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsAutoPlaying(false);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-8 bg-accent'
                      : 'bg-accent/30 hover:bg-accent/50'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FuturisticShowcase;