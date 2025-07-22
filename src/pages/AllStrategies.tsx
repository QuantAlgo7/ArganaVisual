import { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Search, TrendingUp, Activity, BarChart2, Zap, Maximize2, X, Clock, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SubscriptionModal from '../components/SubscriptionModal';
import { strategies } from '../data/strategies';
import { useLanguage } from '../contexts/LanguageContext';

const AllStrategies = () => {
  const [selectedStrategy, setSelectedStrategy] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const navigate = useNavigate();
  const { t, isRTL } = useLanguage();

  const categories = [
    { id: 'all', name: t('allStrategies.categories.all'), icon: Brain },
    { id: 'Indicator', name: t('allStrategies.categories.indicator'), icon: TrendingUp },
    { id: 'Strategy', name: t('allStrategies.categories.strategy'), icon: Activity },
    { id: 'Toolkit', name: t('allStrategies.categories.toolkit'), icon: BarChart2 },
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


  return (
    <div className="min-h-screen bg-dark overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/20 to-secondary/30 opacity-30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,245,196,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      </div>
      
      <div className="container mx-auto px-4 py-24 relative">
        <div className={`flex items-center justify-between mb-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className={isRTL ? 'text-right' : 'text-left'}
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold">
              <span className="bg-gradient-to-r from-accent via-primary-light to-secondary bg-clip-text text-transparent">
                {t('allStrategies.title')}
              </span>
            </h1>
          </motion.div>
          <button
            onClick={() => navigate('/')}
            className={`btn-accent flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}
          >
            <ArrowLeft className={`${isRTL ? 'ml-2' : 'mr-2'}`} size={20} />
            {t('allStrategies.backToHome')}
          </button>
        </div>

        <div className="max-w-6xl mx-auto mb-12">
          <div className={`flex flex-col md:flex-row gap-6 items-center justify-between ${isRTL ? 'md:flex-row-reverse' : ''}`}>
            <div className={`flex flex-wrap gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center px-4 py-2 rounded-full transition-all ${
                    activeCategory === category.id
                      ? 'bg-accent text-dark font-medium'
                      : 'bg-dark-lighter text-light-dark hover:bg-dark-light'
                  } ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  <category.icon size={16} className={`${isRTL ? 'ml-2' : 'mr-2'}`} />
                  {category.name}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-72">
              <Search className={`absolute ${isRTL ? 'right-4' : 'left-4'} top-1/2 -translate-y-1/2 text-accent`} size={20} />
              <input
                type="text"
                placeholder={t('allStrategies.search')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full bg-dark-card border border-dark-lighter rounded-full py-2 ${isRTL ? 'pr-12 pl-4' : 'pl-12 pr-4'} focus:outline-none focus:border-accent transition-colors`}
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
                hoveredCard === indicator.id ? 'md:col-span-2 md:row-span-2 z-10 shadow-2xl shadow-accent/20' : ''
              }`}
              dir={isRTL ? 'rtl' : 'ltr'}
              onMouseEnter={() => setHoveredCard(indicator.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`flex justify-between items-start mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className={isRTL ? 'text-right' : ''}>
                  <h3 className={`text-xl font-display font-semibold text-accent mb-1 flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <Brain className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                    {indicator.name}
                  </h3>
                  <p className="text-light-dark text-sm">
                    {indicator.shortDescription}
                  </p>
                </div>
                <div className="text-light-dark p-1">
                  <Maximize2 
                    size={18} 
                    className={`transition-all duration-300 ${hoveredCard === indicator.id ? 'text-accent scale-110' : ''}`}
                  />
                </div>
              </div>

              <div className={`relative -mx-6 -mt-6 mb-6 overflow-hidden transition-all duration-500 ${
                hoveredCard === indicator.id ? 'h-64' : 'h-48'
              }`}>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark z-10" />
                <img 
                  src={indicator.chartUrl} 
                  alt={indicator.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'} z-20`}>
                  <span className={`text-xs px-3 py-1 rounded-full backdrop-blur-sm ${
                    indicator.indicatorType === 'Indicator' ? 'bg-blue-500/10 text-blue-400' :
                    indicator.indicatorType === 'Strategy' ? 'bg-green-500/10 text-green-400' :
                    'bg-purple-500/10 text-purple-400'
                  }`}>
                    {indicator.indicatorType}
                  </span>
                </div>
              </div>

              {hoveredCard === indicator.id && (
                <div className={`mt-6 space-y-4 animate-in fade-in duration-300 ${isRTL ? 'text-right' : ''}`}>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">{t('allStrategies.description')}</h4>
                    <p className="text-light-dark">{indicator.longDescription}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">{t('allStrategies.architecture')}</h4>
                    <p className="text-light-dark">{indicator.indicatorArchitecture}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">{t('allStrategies.marketApplication')}</h4>
                    <p className="text-light-dark">{indicator.marketApplication}</p>
                  </div>
                  <div>
                    <h4 className={`text-lg font-semibold mb-2 flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <Clock size={18} className={`${isRTL ? 'ml-2' : 'mr-2'} text-accent`} />
                      {t('allStrategies.timeframes')}
                    </h4>
                    <div className={`flex flex-wrap gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
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
                    {/* Additional metrics can be added here */}
                  </div>
                </div>
              )}

              <button 
                onClick={() => {
                  setSelectedStrategy(indicator.id);
                  setShowModal(true);
                }}
                className={`btn-accent w-full mt-6 transition-all duration-300 ${
                  hoveredCard === indicator.id ? 'bg-accent text-dark hover:bg-accent-light' : 'group-hover:bg-accent group-hover:text-dark'
                } ${isRTL ? 'flex-row-reverse' : ''}`}
              >
                <Zap size={16} className={`${isRTL ? 'ml-2' : 'mr-2'}`} />
                {t('allStrategies.subscribeNow')}
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