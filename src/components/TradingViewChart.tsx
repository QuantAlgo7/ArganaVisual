import { useState, useEffect, useRef } from 'react';
import { ArrowRight, TrendingUp, Activity, BarChart4, Percent, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tooltip } from './Tooltip';
import ParticleNetwork from '../utils/ParticleNetwork';
import { useLanguage } from '../contexts/LanguageContext';

const metricDefinitions = {
  winRate: "Percentage of profitable trades out of total trades executed.",
  sharpe: "A risk-adjusted return measure; higher values indicate better return per unit of risk.",
  cagr: "Compound Annual Growth Rate – the mean annual growth rate of an investment over a specified time period.",
  maxDrawdown: "The peak-to-trough decline during a specific recorded period of a trading strategy."
};

const TradingViewChart = () => {
  const [showSubscribeModal, setShowSubscribeModal] = useState(false);
  const particleRef = useRef<HTMLDivElement>(null);
  const { t, isRTL } = useLanguage();

  useEffect(() => {
    if (!particleRef.current) return;
    
    const particleInstance = new ParticleNetwork(particleRef.current);
    return () => {
      particleInstance.destroy();
    };
  }, []);

  const MetricDisplay = ({ label, value, definition }: { label: string; value: number | string; definition: string }) => (
    <div className="metric group relative bg-dark-card border border-dark-lighter">
      <div className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
        <span className="text-light">{label}: <span className="text-accent">{typeof value === 'number' ? `${value}%` : value}</span></span>
        <Info size={14} className={`${isRTL ? 'mr-1.5' : 'ml-1.5'} text-accent opacity-50 group-hover:opacity-100 transition-opacity`} />
      </div>
      <Tooltip content={definition} />
    </div>
  );

  return (
    <section id="chart" className="section bg-dark-light relative min-h-screen overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
      <div ref={particleRef} className="particle-container"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-dark/80 via-dark/60 to-dark/80"></div>
      
      <div className="container mx-auto relative z-10">
        <div className={`max-w-4xl mx-auto mb-16 ${isRTL ? 'text-right' : ''}`}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-to-r from-accent to-primary-light bg-clip-text text-transparent"
          >
            {t('vision.title')}
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-light-dark mb-8"
          >
            {t('vision.description')}
          </motion.p>
          
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl font-display font-bold mb-4 text-accent"
          >
            {t('vision.subtitle')}
          </motion.h3>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-light-dark mb-6"
          >
            {t('vision.description2')}
          </motion.p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <motion.div 
              initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="card backdrop-blur-sm"
            >
              <TrendingUp className={`text-accent mb-4 ${isRTL ? 'ml-auto' : ''}`} size={24} />
              <h4 className="text-lg font-semibold mb-2">{t('vision.features.technical.title')}</h4>
              <p className="text-light-dark">{t('vision.features.technical.description')}</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="card backdrop-blur-sm"
            >
              <Activity className={`text-accent mb-4 ${isRTL ? 'ml-auto' : ''}`} size={24} />
              <h4 className="text-lg font-semibold mb-2">{t('vision.features.fundamental.title')}</h4>
              <p className="text-light-dark">{t('vision.features.fundamental.description')}</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="card backdrop-blur-sm"
            >
              <BarChart4 className={`text-accent mb-4 ${isRTL ? 'ml-auto' : ''}`} size={24} />
              <h4 className="text-lg font-semibold mb-2">{t('vision.features.strategies.title')}</h4>
              <p className="text-light-dark">{t('vision.features.strategies.description')}</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="card backdrop-blur-sm"
            >
              <Percent className={`text-accent mb-4 ${isRTL ? 'ml-auto' : ''}`} size={24} />
              <h4 className="text-lg font-semibold mb-2">{t('vision.features.bots.title')}</h4>
              <p className="text-light-dark">{t('vision.features.bots.description')}</p>
            </motion.div>
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-xl font-display text-center text-accent"
          >
            {t('vision.finalMessage')}
          </motion.p>
        </div>
      </div>

      {/* Subscribe Modal */}
      <AnimatePresence>
        {showSubscribeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-dark/90 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setShowSubscribeModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-dark-card border border-dark-lighter rounded-xl w-full max-w-lg p-6"
              onClick={e => e.stopPropagation()}
            >
              <h2 className="text-2xl font-display font-semibold mb-4">
                Get Started with Argana Bridge Capital
              </h2>
              <p className="text-light-dark mb-6">
                Access our advanced trading tools and start generating consistent returns today.
              </p>
              <div className="space-y-4">
                <a
                  href="mailto:arganabridgecapital@gmail.com?subject=Trading Tools Access Request"
                  className="btn-accent w-full justify-center"
                >
                  Contact Us
                </a>
                <button
                  onClick={() => setShowSubscribeModal(false)}
                  className="btn bg-dark-lighter hover:bg-dark-light text-light w-full"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default TradingViewChart;