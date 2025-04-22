import { useState } from 'react';
import { ArrowRight, TrendingUp, Activity, BarChart4, Percent, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import StrategyChart from './charts/StrategyChart';
import { Tooltip } from './Tooltip';

interface Strategy {
  id: string;
  name: string;
  description: string;
  metrics: {
    winRate: number;
    cagr: number;
    maxDrawdown: number;
    sharpe: number;
  };
  data: Array<{ date: string; value: number }>;
}

// Enhanced data generator with controlled drawdowns
const generateStrategyData = (cagr: number, drawdowns: Array<{ size: number; position: number }>) => {
  const days = 365;
  const dailyReturn = Math.pow(1 + cagr / 100, 1 / days) - 1;
  const data = [];
  let currentValue = 1000;
  let inDrawdown = false;
  let drawdownIndex = 0;
  let recoveryRate = 0;
  
  for (let i = 0; i < days; i++) {
    // Check if we should start a drawdown
    if (drawdownIndex < drawdowns.length && i === drawdowns[drawdownIndex].position) {
      inDrawdown = true;
      const drawdownSize = drawdowns[drawdownIndex].size;
      recoveryRate = drawdownSize / 10; // Recover over ~10 days
    }
    
    if (inDrawdown) {
      currentValue *= (1 - drawdowns[drawdownIndex].size / 100);
      inDrawdown = false;
      drawdownIndex++;
    } else {
      // Add small random noise (-0.1% to 0.1%) to daily returns
      const noise = (Math.random() - 0.5) * 0.002;
      currentValue *= (1 + dailyReturn + noise);
      
      // Recovery phase after drawdown
      if (drawdownIndex > 0 && i < drawdowns[drawdownIndex - 1].position + 10) {
        currentValue *= (1 + recoveryRate / 100);
      }
    }
    
    data.push({
      date: new Date(2023, 0, i + 1).toISOString(),
      value: currentValue
    });
  }
  
  return data;
};

const alphaMomentumDrawdowns = [
  { size: 1.0, position: 30 },
  { size: 1.5, position: 120 },
  { size: 2.0, position: 240 }
];

const quantumVolatilityDrawdowns = Array.from({ length: 15 }, (_, i) => ({
  size: 1 + Math.random() * 2, // Random drawdown between 1% and 3%
  position: Math.floor(20 + (i * (365 - 40) / 15)) // Evenly spread throughout the year
}));

const kronosMacroDrawdowns = Array.from({ length: 9 }, (_, i) => ({
  size: 1 + Math.random(), // Random drawdown between 1% and 2%
  position: Math.floor(25 + (i * (365 - 50) / 9)) // Evenly spread throughout the year
}));

const strategies: Strategy[] = [
  {
    id: 'alpha-momentum',
    name: 'Alpha Momentum',
    description: 'Advanced momentum strategy with neural network-driven entry and exit signals',
    metrics: {
      winRate: 96,
      cagr: 158,
      maxDrawdown: 4.1,
      sharpe: 3.8
    },
    data: generateStrategyData(158, alphaMomentumDrawdowns)
  },
  {
    id: 'quantum-volatility',
    name: 'Quantum Volatility',
    description: 'Volatility harvesting strategy powered by quantum computing algorithms',
    metrics: {
      winRate: 87,
      cagr: 134,
      maxDrawdown: 3.9,
      sharpe: 3.4
    },
    data: generateStrategyData(134, quantumVolatilityDrawdowns)
  },
  {
    id: 'kronos-macro',
    name: 'Kronos Macro System',
    description: 'Enterprise-grade algorithmic trading system with institutional-level risk management',
    metrics: {
      winRate: 79,
      cagr: 108,
      maxDrawdown: 4.7,
      sharpe: 3.1
    },
    data: generateStrategyData(108, kronosMacroDrawdowns)
  }
];

const metricDefinitions = {
  winRate: "Percentage of profitable trades out of total trades executed.",
  sharpe: "A risk-adjusted return measure; higher values indicate better return per unit of risk.",
  cagr: "Compound Annual Growth Rate – the mean annual growth rate of an investment over a specified time period.",
  maxDrawdown: "The peak-to-trough decline during a specific recorded period of a trading strategy."
};

const TradingViewChart = () => {
  const [selectedStrategy, setSelectedStrategy] = useState<Strategy>(strategies[0]);
  const [showSubscribeModal, setShowSubscribeModal] = useState(false);

  const MetricDisplay = ({ label, value, definition }: { label: string; value: number | string; definition: string }) => (
    <div className="metric group relative bg-dark-card border border-dark-lighter">
      <div className="flex items-center">
        <span className="text-light">{label}: <span className="text-accent">{typeof value === 'number' ? `${value}%` : value}</span></span>
        <Info size={14} className="ml-1.5 text-accent opacity-50 group-hover:opacity-100 transition-opacity" />
      </div>
      <Tooltip content={definition} />
    </div>
  );

  return (
    <section id="chart" className="section bg-dark-light relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 bg-gradient-to-r from-accent to-primary-light bg-clip-text text-transparent">
              AI-Powered Trading Strategies
            </h2>
            <h3 className="text-2xl md:text-3xl font-display text-light-dark">
              Annualized Performance Metrics
            </h3>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Strategy Selection */}
          <div className="lg:col-span-1 space-y-4">
            {strategies.map((strategy) => (
              <motion.div
                key={strategy.id}
                className={`card cursor-pointer transition-all duration-300 ${
                  selectedStrategy.id === strategy.id ? 'border-accent' : ''
                }`}
                onClick={() => setSelectedStrategy(strategy)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-xl font-display font-semibold text-accent mb-2">
                  {strategy.name}
                </h3>
                <p className="text-light-dark text-sm mb-4">
                  {strategy.description}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <MetricDisplay 
                    label="Win Rate"
                    value={strategy.metrics.winRate}
                    definition={metricDefinitions.winRate}
                  />
                  <MetricDisplay 
                    label="CAGR"
                    value={strategy.metrics.cagr}
                    definition={metricDefinitions.cagr}
                  />
                  <MetricDisplay 
                    label="Drawdown"
                    value={strategy.metrics.maxDrawdown}
                    definition={metricDefinitions.maxDrawdown}
                  />
                  <MetricDisplay 
                    label="Sharpe"
                    value={strategy.metrics.sharpe.toFixed(1)}
                    definition={metricDefinitions.sharpe}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Chart */}
          <div className="lg:col-span-2">
            <div className="card">
              <h3 className="text-lg font-semibold mb-4">Strategy Performance</h3>
              <div className="h-[400px]">
                <StrategyChart data={selectedStrategy.data} />
              </div>
            </div>

            <motion.button
              className="btn-accent w-full mt-6"
              onClick={() => setShowSubscribeModal(true)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="flex items-center justify-center">
                Subscribe to {selectedStrategy.name}
                <ArrowRight size={18} className="ml-2" />
              </span>
            </motion.button>
          </div>
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
                Subscribe to {selectedStrategy.name}
              </h2>
              <p className="text-light-dark mb-6">
                Get access to our advanced trading strategies and start generating alpha today.
              </p>
              <div className="space-y-4 mb-6">
                <a
                  href={`mailto:arganabridgecapital@gmail.com?subject=Subscribe to ${selectedStrategy.name}`}
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