import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, ChevronDown, Activity, TrendingUp, LineChart, BarChart4, Zap } from 'lucide-react';
import ParticleNetwork from '../utils/ParticleNetwork';
import MiniChart from './charts/MiniChart';

const generateChartData = (length: number, volatility: number) => {
  return Array.from({ length }, (_, i) => ({
    date: new Date(2024, 0, i + 1).toISOString(),
    value: 1000 * Math.exp(0.001 * i + volatility * Math.sin(i * 0.1))
  }));
};

const chartConfigs = [
  {
    title: 'Neural Alpha',
    data: generateChartData(100, 0.15),
    color: '#00F5C4',
    icon: Brain,
    metrics: { value: '+28.5%', label: 'Annual Return' }
  },
  {
    title: 'Quantum Edge',
    data: generateChartData(100, 0.2),
    color: '#0D4C73',
    icon: Activity,
    metrics: { value: '2.84', label: 'Sharpe Ratio' }
  },
  {
    title: 'Momentum Flow',
    data: generateChartData(100, 0.18),
    color: '#FF4444',
    icon: TrendingUp,
    metrics: { value: '71.2%', label: 'Win Rate' }
  },
  {
    title: 'Volatility Grid',
    data: generateChartData(100, 0.25),
    color: '#FFB800',
    icon: LineChart,
    metrics: { value: '12.3%', label: 'Max Drawdown' }
  },
  {
    title: 'Alpha Surge',
    data: generateChartData(100, 0.22),
    color: '#9945FF',
    icon: BarChart4,
    metrics: { value: '+18.7%', label: 'Alpha' }
  }
];

const Hero = () => {
  const particleRef = useRef<HTMLDivElement>(null);
  const [activeChart, setActiveChart] = useState(0);
  
  useEffect(() => {
    if (!particleRef.current) return;
    
    const particleInstance = new ParticleNetwork(particleRef.current);
    return () => {
      particleInstance.destroy();
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveChart((prev) => (prev + 1) % chartConfigs.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div ref={particleRef} className="particle-container"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            The Future of 
            <span className="bg-gradient-to-r from-accent to-primary-light bg-clip-text text-transparent block mt-2">
              Alpha Generation
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-light-dark mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Algorithmic Intelligence. Predictive Precision. Institutional Performance.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {chartConfigs.map((config, index) => (
            <motion.div
              key={config.title}
              className={`card relative overflow-hidden transition-all duration-500 ${
                index === activeChart ? 'md:col-span-2 lg:col-span-1 border-accent' : ''
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold flex items-center">
                  <config.icon className="w-4 h-4 mr-2" style={{ color: config.color }} />
                  {config.title}
                </h3>
                <div className="flex items-center space-x-1">
                  <Zap className="w-3 h-3 text-accent animate-pulse" />
                  <span className="text-xs text-accent">LIVE</span>
                </div>
              </div>
              
              <div className="h-24 relative">
                <MiniChart 
                  data={config.data} 
                  color={config.color}
                  isActive={index === activeChart}
                />
              </div>

              <div className="mt-3 flex items-center justify-between">
                <span className="text-xs text-light-dark">{config.metrics.label}</span>
                <span className="text-sm font-mono font-semibold" style={{ color: config.color }}>
                  {config.metrics.value}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <button className="btn-accent">
            Explore Strategies
          </button>
          <button className="btn bg-dark-lighter hover:bg-dark-light text-light">
            Learn More
          </button>
        </motion.div>

        <motion.div 
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <a href="#chart" aria-label="Scroll down">
            <ChevronDown className="text-accent" size={32} />
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-dark to-transparent"></div>
    </section>
  );
};

export default Hero;