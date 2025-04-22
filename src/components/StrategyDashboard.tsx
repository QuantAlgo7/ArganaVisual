import { useState } from 'react';
import { DollarSign } from 'lucide-react';
import SubscriptionModal from './SubscriptionModal';
import StrategyCard from './StrategyCard';
import { strategies } from '../data/strategies';
import { useNavigate } from 'react-router-dom';

const StrategyDashboard = () => {
  const [selectedStrategy, setSelectedStrategy] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

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
            onClick={() => navigate('/strategies')}
          >
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