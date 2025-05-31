import { X, CheckCircle, DollarSign } from 'lucide-react';
import { useState } from 'react';
import { Strategy } from '../types/strategy';

interface SubscriptionModalProps {
  onClose: () => void;
  strategy: Strategy;
}

const SubscriptionModal = ({ onClose, strategy }: SubscriptionModalProps) => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const plans = [
    {
      id: 'core',
      name: 'Premuim Indicator Access',
      price: '$39',
      period: '/month',
      features: [
        'Full access to our proprietary indicator suite',
        'Mix smart indicators and receive a new custom one every month',
        'Custom Alert',
        'Community access',
        '24/7 support & active toolkit updates',
      ],
    },
    {
      id: 'strategy',
      name: 'Premuim Strategy Access',
      price: '$79',
      period: '/month',
      features: [
        'Everything in Core Access',
        'Full access to our portfolio of algorithmic trading strategies',
        'Backtested models across multiple asset classes',
        'Optimized for various market regimes',
        'Custom Alert',
        'Community access',
        '24/7 support & active toolkit updates',
      ],
      recommended: true,
    },
    {
      id: 'autonomous',
      name: 'Fully Automated Bots',
      price: '$149',
      period: '/month',
      features: [
        'Everything in Strategy Access',
        'Access to fully autonomous trading systems (automated bots)',
        'Execute trades 24/7 with AI-optimized logic — no manual input required',
        'Plug-and-play architecture compatible with major broker platforms',
        'Community access',
        '24/7 support & active toolkit updates',
        '🔹 **One new strategy. 100% yours. Every month.**',
      ],
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = 'https://t.me/Arganabridgecapital';
  };

  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className="fixed inset-0 bg-dark/90 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div 
        className="bg-dark-card border border-dark-lighter rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
        onClick={stopPropagation}
      >
        <div className="sticky top-0 z-10 bg-dark-card flex justify-between items-center border-b border-dark-lighter p-6">
          <h2 className="text-2xl font-display font-semibold">
            Subscribe to <span className="text-accent">{strategy.name}</span>
          </h2>
          <button 
            onClick={onClose}
            className="text-light-dark hover:text-accent transition-colors"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-semibold mb-6">Select a Subscription Plan</h3>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {plans.map((plan) => (
              <div 
                key={plan.id}
                className={`card relative cursor-pointer transition-all duration-300 ${
                  selectedPlan === plan.id ? 'border-accent' : ''
                } ${plan.recommended ? 'border-primary md:-mt-4 md:mb-4' : ''}`}
                onClick={() => setSelectedPlan(plan.id)}
              >
                {plan.recommended && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary px-3 py-1 rounded-full text-xs font-semibold">
                    Recommended
                  </div>
                )}
                
                <h4 className="text-lg font-display font-semibold mb-2">{plan.name}</h4>
                <div className="mb-4">
                  <span className="text-2xl font-display font-bold">{plan.price}</span>
                  <span className="text-light-dark text-sm">{plan.period}</span>
                </div>
                
                <ul className="space-y-2 mb-4">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle size={16} className="text-accent mr-2 mt-0.5 flex-shrink-0" />
                      <span className={`text-sm ${feature.includes('One new strategy') ? 'text-accent font-bold' : ''}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  className={`w-full py-2 rounded transition-colors ${
                    selectedPlan === plan.id 
                      ? 'bg-accent text-dark font-medium' 
                      : 'bg-dark-lighter text-light hover:bg-dark-light'
                  }`}
                >
                  {selectedPlan === plan.id ? 'Selected' : 'Select Plan'}
                </button>
              </div>
            ))}
          </div>
          
          <div className="border-t border-dark-lighter pt-6">
            <h3 className="text-xl font-semibold mb-6">Payment Information</h3>
            
            <div className="space-y-4">
              <div className="p-4 bg-dark-lighter rounded-lg">
                <p className="text-sm font-medium mb-2">USDT TRON</p>
                <p className="font-mono text-accent break-all">TDT1F3YH23jKgEpk2wipZW8HyFwaoZkvAg</p>
              </div>
              
              <div className="p-4 bg-dark-lighter rounded-lg">
                <p className="text-sm font-medium mb-2">USDT SOLANA</p>
                <p className="font-mono text-accent break-all">9Jhpc818unJ7yAXXbdoz6ufFvsNDPg5FcQVJ6Q3LLoaY</p>
              </div>
              
              <div className="p-4 bg-dark-lighter rounded-lg">
                <p className="text-sm font-medium mb-2">USDT ETHEREUM</p>
                <p className="font-mono text-accent break-all">0x7bE8581d7391Dc67095Dc0f6De129e7E5e7Fc6bE</p>
              </div>
            </div>
            
            <div className="flex justify-end mt-6">
              <button 
                onClick={handleSubmit}
                className="btn-primary"
                disabled={!selectedPlan}
              >
                <DollarSign size={18} className="mr-2" />
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionModal;