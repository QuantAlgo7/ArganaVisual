import { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Search, TrendingUp, Activity, BarChart2, Zap, Maximize2, X, Clock, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SubscriptionModal from '../components/SubscriptionModal';
import { strategies } from '../data/strategies';

const categories = [
  { id: 'all', name: 'All', icon: Brain },
  { id: 'Indicator', name: 'Indicator', icon: TrendingUp },
  { id: 'Strategy', name: 'Strategy', icon: Activity },
  { id: 'Toolkit', name: 'Toolkit', icon: BarChart2 },
];

const getIndicatorType = (strategy: any, index: number) => {
  if (index <= 1) {
    return 'Strategy';
  }
  if (index == 2 ) {
    return 'Indicator';
  }
  if (index == 3 ) {
    return 'Indicator';
  }
  if (index == 4 ) {
    return 'Strategy';
  }
  if (index == 5 ) {
    return 'Strategy';
  }
  if (index == 6 ) {
    return 'Strategy';
  }
  if (index == 7 ) {
    return 'Indicator';
  }
  if (index == 8 ) {
    return 'Indicator';
  }
  if (index == 9 ) {
    return 'Strategy';
  }
  if (index == 10 ) {
    return 'Toolkit';
  }
  if (index == 11 ) {
    return 'Toolkit';
  }
  if (index == 12 ) {
    return 'Toolkit';
  }
  if (index == 13 ) {
    return 'Toolkit';
  }
  const types = ['Strategy', 'Toolkit'];
  return types[Math.floor(Math.random() * types.length)];
};

const AllStrategies = () => {
  const [selectedStrategy, setSelectedStrategy] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const navigate = useNavigate();

  const indicatorsWithType = strategies.map((strategy, index) => ({
    ...strategy,
    indicatorType: getIndicatorType(strategy, index)
  }));

  const filteredIndicators = indicatorsWithType.filter(indicator =>
    (activeCategory === 'all' || indicator.indicatorType === activeCategory) &&
    (indicator.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    indicator.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()))
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

  const handleCardExpand = (id: number) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-dark overflow-hidden">
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/20 to-secondary/30 opacity-30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,245,196,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      </div>
      
      <div className="container mx-auto px-4 py-24 relative">
        <div className="flex items-center justify-between mb-8">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-left"
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold">
              <span className="bg-gradient-to-r from-accent via-primary-light to-secondary bg-clip-text text-transparent">
                Advanced Trading Indicators
              </span>
            </h1>
          </motion.div>
          <button
            onClick={() => navigate('/')}
            className="btn-accent flex items-center"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Home
          </button>
        </div>

        <div className="max-w-6xl mx-auto mb-12">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="flex flex-wrap gap-3">
              {categories.map(category => (
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

            <div className="relative w-full md:w-72">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-accent" size={20} />
              <input
                type="text"
                placeholder="Search indicators..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-dark-card border border-dark-lighter rounded-full py-2 pl-12 pr-4 focus:outline-none focus:border-accent transition-colors"
              />
            </div>
          </div>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredIndicators.map((indicator) => (
            <motion.div
              key={indicator.id}
              variants={item}
              className={`card group cursor-pointer hover:border-accent transition-all duration-300 backdrop-blur-sm overflow-hidden ${
                expandedCard === indicator.id ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-display font-semibold text-accent mb-1 flex items-center">
                    <Brain className="w-5 h-5 mr-2" />
                    {indicator.name}
                  </h3>
                  <p className="text-light-dark text-sm">
                    {indicator.shortDescription}
                  </p>
                </div>
                <button 
                  onClick={() => handleCardExpand(indicator.id)}
                  className="text-light-dark hover:text-accent transition-colors p-1"
                  aria-label={expandedCard === indicator.id ? "Collapse details" : "Expand details"}
                >
                  {expandedCard === indicator.id ? (
                    <X size={18} />
                  ) : (
                    <Maximize2 size={18} />
                  )}
                </button>
              </div>

              <div className="relative h-48 -mx-6 -mt-6 mb-6 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark z-10" />
                <img 
                  src={indicator.chartUrl} 
                  alt={indicator.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 z-20">
                  <span className={`text-xs px-3 py-1 rounded-full backdrop-blur-sm ${
                    indicator.indicatorType === 'Indicator' ? 'bg-blue-500/10 text-blue-400' :
                    indicator.indicatorType === 'Strategy' ? 'bg-green-500/10 text-green-400' :
                    'bg-purple-500/10 text-purple-400'
                  }`}>
                    {indicator.indicatorType}
                  </span>
                </div>
              </div>

              {expandedCard === indicator.id && (
                <div className="mt-6 space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Description</h4>
                    <p className="text-light-dark">{indicator.longDescription}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Indicator Architecture</h4>
                    <p className="text-light-dark">{indicator.indicatorArchitecture}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Market Application</h4>
                    <p className="text-light-dark">{indicator.marketApplication}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 flex items-center">
                      <Clock size={18} className="mr-2 text-accent" />
                      Timeframes
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {indicator.timeframes.map((timeframe) => (
                        <span 
                          key={timeframe}
                          className="px-3 py-1 bg-dark-lighter rounded-full text-sm text-accent"
                        >
                          {timeframe}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                    <div className="bg-dark-lighter p-4 rounded-lg">

                    </div>
                  </div>
                </div>
              )}

              <button 
                onClick={() => {
                  setSelectedStrategy(indicator.id);
                  setShowModal(true);
                }}
                className="btn-accent w-full mt-6 group-hover:bg-accent group-hover:text-dark"
              >
                <Zap size={16} className="mr-2" />
                Subscribe Now
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>

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