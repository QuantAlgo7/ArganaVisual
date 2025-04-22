import { useState } from 'react';
import { ArrowRight, TrendingUp, Activity, BarChart4, Percent } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import StrategyChart from './charts/StrategyChart';
import DrawdownChart from './charts/DrawdownChart';

interface Strategy {
  id: string;
  name: string;
  description: string;
  metrics: {
    sharpe: number;
    cagr: number;
    maxDrawdown: number;
    winRate: number;
  };
  data: Array<{ date: string; value: number }>;
  drawdownData: Array<{ date: string; value: number }>;
}

const strategies: Strategy[] = [
  {
    id: 'alpha-momentum',
    name: 'Alpha Momentum',
    description: 'Advanced momentum strategy with neural network-driven entry and exit signals',
    metrics: {
      sharpe: 2.8,
      cagr: 24.5,
      maxDrawdown: 12.3,
      winRate: 68.5
    },
    data: Array.from({ length: 100 }, (_, i) => ({
      date: new Date(2023, 0, i + 1).toISOString(),
      value: 1000 * Math.exp(0.001 * i + 0.1 * Math.sin(i * 0.1))
    })),
    drawdownData: Array.from({ length: 100 }, (_, i) => ({
      date: new Date(2023, 0, i + 1).toISOString(),
      value: -Math.abs(5 * Math.sin(i * 0.1))
    }))
  },
  {
    id: 'quantum-volatility',
    name: 'Quantum Volatility',
    description: 'Volatility harvesting strategy powered by quantum computing algorithms',
    metrics: {
      sharpe: 3.1,
      cagr: 28.7,
      maxDrawdown: 15.2,
      winRate: 71.3
    },
    data: Array.from({ length: 100 }, (_, i) => ({
      date: new Date(2023, 0, i + 1).toISOString(),
      value: 1000 * Math.exp(0.002 * i + 0.15 * Math.cos(i * 0.1))
    })),
    drawdownData: Array.from({ length: 100 }, (_, i) => ({
      date: new Date(2023, 0, i + 1).toISOString(),
      value: -Math.abs(7 * Math.cos(i * 0.1))
    }))
  }
];

const TradingViewChart = () => {
  const [selectedStrategy, setSelectedStrategy] = useState<Strategy>(strategies[0]);
  const [showSubscribeModal, setShowSubscribeModal] = useState(false);

  return (
    <section id="chart" className="section bg-dark-light relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">
              AI-Powered Trading Strategies
            </h2>
            <p className="text-light-dark max-w-2xl">
              Experience the future of algorithmic trading with our neural network-driven strategies.
            </p>
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
                  <div className="metric">
                    <TrendingUp size={14} className="mr-1.5 text-accent" />
                    <span>Sharpe: {strategy.metrics.sharpe}</span>
                  </div>
                  <div className="metric">
                    <Activity size={14} className="mr-1.5 text-accent" />
                    <span>CAGR: {strategy.metrics.cagr}%</span>
                  </div>
                  <div className="metric">
                    <BarChart4 size={14} className="mr-1.5 text-accent" />
                    <span>DD: {strategy.metrics.maxDrawdown}%</span>
                  </div>
                  <div className="metric">
                    <Percent size={14} className="mr-1.5 text-accent" />
                    <span>Win: {strategy.metrics.winRate}%</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Charts */}
          <div className="lg:col-span-2 space-y-6">
            <div className="card">
              <h3 className="text-lg font-semibold mb-4">Strategy Performance</h3>
              <div className="h-[300px]">
                <StrategyChart data={selectedStrategy.data} />
              </div>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold mb-4">Drawdown Analysis</h3>
              <div className="h-[200px]">
                <DrawdownChart data={selectedStrategy.drawdownData} />
              </div>
            </div>

            <motion.button
              className="btn-accent w-full"
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