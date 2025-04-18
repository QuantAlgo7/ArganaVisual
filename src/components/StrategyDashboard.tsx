import { useState } from 'react';
import { LineChart, TrendingUp, BarChart4, AlertCircle, DollarSign } from 'lucide-react';
import SubscriptionModal from './SubscriptionModal';
import StrategyCard from './StrategyCard';
import { strategies } from '../data/strategies';

const StrategyDashboard = () => {
  const [selectedStrategy, setSelectedStrategy] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleBuyClick = (id: number) => {
    setSelectedStrategy(id);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
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

        {/* Strategy stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
          <div className="card flex flex-col items-center text-center p-6">
            <LineChart className="text-accent mb-3" size={32} />
            <h3 className="font-display font-semibold text-xl mb-1">12.6%</h3>
            <p className="text-light-dark text-sm">Average Annual Return</p>
          </div>
          
          <div className="card flex flex-col items-center text-center p-6">
            <TrendingUp className="text-accent mb-3" size={32} />
            <h3 className="font-display font-semibold text-xl mb-1">2.53</h3>
            <p className="text-light-dark text-sm">Sharpe Ratio</p>
          </div>
          
          <div className="card flex flex-col items-center text-center p-6">
            <BarChart4 className="text-accent mb-3" size={32} />
            <h3 className="font-display font-semibold text-xl mb-1">8.2%</h3>
            <p className="text-light-dark text-sm">Maximum Drawdown</p>
          </div>
          
          <div className="card flex flex-col items-center text-center p-6">
            <AlertCircle className="text-accent mb-3" size={32} />
            <h3 className="font-display font-semibold text-xl mb-1">71.4%</h3>
            <p className="text-light-dark text-sm">Win Rate</p>
          </div>
        </div>

        {/* Strategy cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {strategies.map((strategy) => (
            <StrategyCard 
              key={strategy.id}
              strategy={strategy}
              onBuyClick={() => handleBuyClick(strategy.id)}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button className="btn-primary">
            <DollarSign size={18} className="mr-2" />
            View All Trading Strategies
          </button>
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