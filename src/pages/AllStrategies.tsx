import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Brain, Search, TrendingUp, Activity, BarChart2, Zap } from 'lucide-react';
import SubscriptionModal from '../components/SubscriptionModal';
import { strategies } from '../data/strategies';

const riskCategories = [
  { id: 'all', name: 'All Strategies', icon: Brain },
  { id: 'high', name: 'High Risk', icon: TrendingUp },
  { id: 'medium', name: 'Medium Risk', icon: Activity },
  { id: 'low', name: 'Low Risk', icon: BarChart2 },
];

// Assign risk levels to strategies based on metrics
const getStrategyRiskLevel = (strategy: any) => {
  const riskScore = (strategy.metrics.maxDrawdown * 0.4) + 
                   (100 - strategy.metrics.winRate) * 0.3 + 
                   (30 - strategy.metrics.sharpe) * 0.3;
  
  if (riskScore > 40) return 'high';
  if (riskScore > 20) return 'medium';
  return 'low';
};

const AllStrategies = () => {
  const [selectedStrategy, setSelectedStrategy] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  // Assign risk levels to strategies
  const strategiesWithRisk = strategies.map(strategy => ({
    ...strategy,
    riskLevel: getStrategyRiskLevel(strategy)
  }));

  const filteredStrategies = strategiesWithRisk.filter(strategy =>
    (activeCategory === 'all' || strategy.riskLevel === activeCategory) &&
    (strategy.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    strategy.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-dark overflow-hidden">
      {/* Neural Network Background */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/20 to-secondary/30 opacity-30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,245,196,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      </div>
      
      <div className="container mx-auto px-4 py-24 relative">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            <span className="bg-gradient-to-r from-accent via-primary-light to-secondary bg-clip-text text-transparent">
              Complete List of Our Advanced Trading Strategies
            </span>
          </h1>
          <p className="text-xl text-light-dark max-w-3xl mx-auto">
            Explore our comprehensive suite of AI-powered trading algorithms, each leveraging state-of-the-art neural networks for unparalleled market analysis and execution.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Risk Category Filters */}
            <div className="flex flex-wrap gap-3">
              {riskCategories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center px-4 py-2 rounded-full transition-all ${
                    activeCategory === category.id
                      ? 'bg-accent text-dark font-medium'
                      : 'bg-dark-lighter text-light-dark hover:bg-dark-light'
                  }`}
                >
                  <category.icon size={16} className="mr-2" />
                  {category.name}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-72">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-accent" size={20} />
              <input
                type="text"
                placeholder="Search strategies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-dark-card border border-dark-lighter rounded-full py-2 pl-12 pr-4 focus:outline-none focus:border-accent transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Strategy Grid */}
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredStrategies.map((strategy) => (
            <motion.div
              key={strategy.id}
              variants={item}
              className="card group cursor-pointer hover:border-accent transition-all duration-300 backdrop-blur-sm"
              onClick={() => {
                setSelectedStrategy(strategy.id);
                setShowModal(true);
              }}
            >
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-center justify-between">
                  <Brain className="text-accent w-12 h-12" />
                  <span className={`text-xs px-3 py-1 rounded-full ${
                    strategy.riskLevel === 'high' ? 'bg-red-500/10 text-red-400' :
                    strategy.riskLevel === 'medium' ? 'bg-yellow-500/10 text-yellow-400' :
                    'bg-green-500/10 text-green-400'
                  }`}>
                    {strategy.riskLevel.charAt(0).toUpperCase() + strategy.riskLevel.slice(1)} Risk
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-display font-semibold text-accent mb-2">
                {strategy.name}
              </h3>
              
              <p className="text-light-dark text-sm mb-4 line-clamp-2">
                {strategy.shortDescription}
              </p>

              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-dark-lighter rounded-lg p-2 text-center">
                  <span className="text-accent text-lg font-mono">{strategy.metrics.winRate}%</span>
                  <p className="text-xs text-light-dark">Win Rate</p>
                </div>
                <div className="bg-dark-lighter rounded-lg p-2 text-center">
                  <span className="text-accent text-lg font-mono">{strategy.metrics.sharpe}</span>
                  <p className="text-xs text-light-dark">Sharpe</p>
                </div>
                <div className="bg-dark-lighter rounded-lg p-2 text-center">
                  <span className="text-accent text-lg font-mono">{strategy.metrics.cagr}%</span>
                  <p className="text-xs text-light-dark">CAGR</p>
                </div>
                <div className="bg-dark-lighter rounded-lg p-2 text-center">
                  <span className="text-accent text-lg font-mono">{strategy.metrics.maxDrawdown}%</span>
                  <p className="text-xs text-light-dark">Max DD</p>
                </div>
              </div>

              <button className="btn-accent w-full group-hover:bg-accent group-hover:text-dark">
                Learn More
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Subscription Modal */}
      {showModal && (
        <SubscriptionModal 
          onClose={() => setShowModal(false)} 
          strategy={strategies.find(s => s.id === selectedStrategy) || strategies[0]} 
        />
      )}
    </div>
  );
};

export default AllStrategies;