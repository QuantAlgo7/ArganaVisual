import { useState, useEffect } from 'react';
import { DollarSign } from 'lucide-react';
import SubscriptionModal from './SubscriptionModal';
import StrategyCard from './StrategyCard';
import { strategies } from '../data/strategies';
import { useNavigate } from 'react-router-dom';

const platforms = [
  { name: 'ICMarkets' },
  { name: 'Exness' },
  { name: 'FTMO' },
  { name: 'Binance' },
  { name: 'Bybit' },
  { name: 'OKX' },
  { name: 'Kraken' },
  { name: 'MT4' },
  { name: 'MT5' },
  { name: 'cTrader' },
  { name: 'Deriv' },
  { name: 'Oanda' },
  { name: 'FxPro' },
  { name: 'Pepperstone' },
  { name: 'XM' },
  { name: 'FXCM' },
  { name: 'Axi' },
  { name: 'Tickmill' },
  { name: 'easyMarkets' },
  { name: 'Swissquote' }
];

const StrategyDashboard = () => {
  const [selectedStrategy, setSelectedStrategy] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prev) => (prev + 1) % (platforms.length * 200));
    }, 30);

    return () => clearInterval(interval);
  }, []);

  const handleBuyClick = (id: number) => {
    setSelectedStrategy(id);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleViewAllStrategies = () => {
    navigate('/strategies');
    window.scrollTo(0, 0);
  };

  return (
    <section id="strategies" className="section bg-dark relative">
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Algorithmic Trading Strategies
          </h2>
          <p className="text-light-dark">
            Our proprietary trading algorithms leverage neural networks and machine learning to identify market inefficiencies and generate consistent alpha.
          </p>
        </div>

        {/* Strategy cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {strategies.slice(0, 6).map((strategy) => (
            <StrategyCard 
              key={strategy.id}
              strategy={strategy}
              onBuyClick={() => handleBuyClick(strategy.id)}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button 
            className="btn-primary"
            onClick={handleViewAllStrategies}
          >
            <DollarSign size={18} className="mr-2" />
            View All Trading Strategies
          </button>
        </div>

        {/* Platform Band */}
        <div className="mt-24">
          <h3 className="text-2xl md:text-4xl font-display font-bold text-center mb-12 bg-gradient-to-r from-accent via-primary-light to-secondary bg-clip-text text-transparent">
            Works With All Your Favorite Platforms
          </h3>
          
          <div className="relative h-24 overflow-hidden bg-dark-lighter/30 backdrop-blur-sm rounded-xl">
            <div 
              className="absolute flex items-center space-x-16 transition-transform duration-500 py-4"
              style={{ 
                transform: `translateX(-${scrollPosition}px)`,
                width: `${platforms.length * 200}px`
              }}
            >
              {[...platforms, ...platforms].map((platform, index) => (
                <div 
                  key={`${platform.name}-${index}`}
                  className="w-40 h-16 flex items-center justify-center"
                >
                  <span className="font-mono text-xl font-bold tracking-[0.2em] bg-gradient-to-r from-accent via-primary-light to-accent bg-clip-text text-transparent hover:scale-110 transition-transform duration-300 uppercase">
                    {platform.name}
                  </span>
                </div>
              ))}
            </div>
            
            {/* Gradient Overlays */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-dark to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-dark to-transparent z-10" />
          </div>
        </div>
      </div>

      {/* Subscription Modal */}
      {showModal && (
        <SubscriptionModal 
          onClose={closeModal} 
          strategy={strategies.find(s => s.id === selectedStrategy) || strategies[0]} 
        />
      )}
    </section>
  );
};

export default StrategyDashboard;