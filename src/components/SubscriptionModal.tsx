import { X, CheckCircle, DollarSign } from 'lucide-react';
import { useState } from 'react';
import { Strategy } from '../types/strategy';

interface SubscriptionModalProps {
  onClose: () => void;
  strategy: Strategy;
}

const SubscriptionModal = ({ onClose, strategy }: SubscriptionModalProps) => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      price: '$199',
      period: '/month',
      features: [
        'Access to 1 strategy',
        'Weekly performance updates',
        'Basic backtesting tools',
        'Email support',
      ],
    },
    {
      id: 'pro',
      name: 'Professional',
      price: '$499',
      period: '/month',
      features: [
        'Access to 3 strategies',
        'Daily performance updates',
        'Advanced backtesting tools',
        'Priority email support',
        'Strategy customization',
      ],
      recommended: true,
    },
    {
      id: 'institutional',
      name: 'Institutional',
      price: '$1,999',
      period: '/month',
      features: [
        'Access to all strategies',
        'Real-time performance monitoring',
        'Enterprise backtesting suite',
        'Dedicated account manager',
        'Custom strategy development',
        'API access',
      ],
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would process the subscription
    console.log('Submitting subscription for', strategy.name);
    console.log('Selected plan:', selectedPlan);
    console.log('Form data:', formData);
    // Close modal after submission
    onClose();
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
                      <span className="text-sm">{feature}</span>
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
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-dark-lighter border border-dark-light rounded-md focus:outline-none focus:ring-1 focus:ring-accent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-dark-lighter border border-dark-light rounded-md focus:outline-none focus:ring-1 focus:ring-accent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company (Optional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-dark-lighter border border-dark-light rounded-md focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 bg-dark-lighter border border-dark-light rounded-md focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-end gap-4">
                <button 
                  type="button" 
                  onClick={onClose}
                  className="btn bg-dark-lighter hover:bg-dark-light text-light"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="btn-primary"
                  disabled={!selectedPlan}
                >
                  <DollarSign size={18} className="mr-2" />
                  Subscribe Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionModal;