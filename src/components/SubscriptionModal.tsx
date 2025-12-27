import { useState, useEffect, useRef } from 'react';
import { X, MessageCircle, CreditCard, Wallet, Copy, Check, ArrowLeft, Star, Zap, Users, TrendingUp, Brain, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Strategy } from '../types/strategy';
import { useLanguage } from '../contexts/LanguageContext';

interface SubscriptionModalProps {
  onClose: () => void;
  strategy: Strategy;
}

const walletAddresses = {
  trc20: 'TDT1F3YH23jKgEpk2wipZW8HyFwaoZkvAg',
  solana: '9Jhpc818unJ7yAXXbdoz6ufFvsNDPg5FcQVJ6Q3LLoaY',
  ethereum: '0x7bE8581d7391Dc67095Dc0f6De129e7E5e7Fc6bE'
};

// Neural Network Background Component
const NeuralNetworkBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Neural network nodes
    const nodes: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      connections: number[];
    }> = [];

    // Create nodes
    for (let i = 0; i < 50; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 3 + 1,
        connections: []
      });
    }

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw nodes
      nodes.forEach((node, i) => {
        // Update position
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Keep in bounds
        node.x = Math.max(0, Math.min(canvas.width, node.x));
        node.y = Math.max(0, Math.min(canvas.height, node.y));

        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 245, 196, ${0.3 + Math.sin(Date.now() * 0.001 + i) * 0.2})`;
        ctx.fill();

        // Draw connections
        nodes.forEach((otherNode, j) => {
          if (i !== j) {
            const dx = node.x - otherNode.x;
            const dy = node.y - otherNode.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
              const opacity = (100 - distance) / 100 * 0.2;
              ctx.beginPath();
              ctx.moveTo(node.x, node.y);
              ctx.lineTo(otherNode.x, otherNode.y);
              ctx.strokeStyle = `rgba(0, 245, 196, ${opacity})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-30"
      style={{ background: 'transparent' }}
    />
  );
};

const SubscriptionModal = ({ onClose, strategy }: SubscriptionModalProps) => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>('pro');
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);
  const [showCryptoAddresses, setShowCryptoAddresses] = useState(false);
  const [copiedNetwork, setCopiedNetwork] = useState<string | null>(null);
  const { t, isRTL } = useLanguage();

  const plans = [
    {
      id: 'pro',
      name: 'Pro',
      price: '$99',
      period: '/month',
      description: 'Most popular choice for serious traders',
      icon: Zap,
      features: [
        'Everything in Starter',
        'PLUS systematic strategies',
        'Long & short trade signals',
        'Advanced market analysis',
        'Priority support',
        'Weekly market insights'
      ],
      popular: true,
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      id: 'elite',
      name: 'Elite',
      price: '$149',
      period: '/month',
      description: 'For professional traders and institutions',
      icon: Brain,
      features: [
        'Everything in Pro',
        'PLUS advanced systematic trading strategies',
        'Additional premium long & short setups',
        'Real-time alerts & notifications',
        'Custom indicator configurations',
        'Direct access to our research team',
        'Monthly strategy review calls'
      ],
      popular: false,
      gradient: 'from-orange-500 to-red-500',
    },
    {
      id: 'consultation',
      name: 'Consultation',
      price: 'Custom',
      period: 'pricing',
      description: 'Tailored solutions for your specific needs',
      icon: Phone,
      features: [
        'Custom plan for traders/investors',
        'Strategy automation solutions',
        'Custom trading solutions',
        'Dedicated account manager',
        'Price based on scope & request',
        'Full implementation support'
      ],
      popular: false,
      isCustom: true,
      gradient: 'from-green-500 to-teal-500',
    },
  ];

  const handlePaymentMethodSelect = (method: 'crypto' | 'card') => {
    if (method === 'card') {
      // Redirect to appropriate Whop checkout based on selected plan
      let checkoutUrl = '';
      switch (selectedPlan) {
        case 'pro':
          checkoutUrl = 'https://whop.com/argana-bridge-capital-7/argana-quant-edge/';
          break;
        case 'elite':
          checkoutUrl = 'https://whop.com/argana-bridge-capital-7/argana-quant-edge/';
          break;
        default:
          // Fallback to pro plan if no plan selected
          checkoutUrl = 'https://whop.com/argana-bridge-capital-7/argana-quant-edge/';
      }
      window.location.href = checkoutUrl;
    } else {
      setShowCryptoAddresses(true);
    }
  };

  const copyToClipboard = async (text: string, network: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedNetwork(network);
      setTimeout(() => setCopiedNetwork(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleConsultationContact = () => {
    window.location.href = 'mailto:arganabridgecapital@gmail.com?subject=Consultation Request - Custom Trading Solutions';
  };

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div 
        className="bg-dark-card border border-dark-lighter rounded-2xl w-full max-w-7xl max-h-[95vh] overflow-y-auto shadow-2xl relative"
        onClick={stopPropagation}
        dir={isRTL ? 'rtl' : 'ltr'}
      >
        {/* Neural Network Background */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl">
          <NeuralNetworkBackground />
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5"></div>
        </div>

        {/* Header */}
        <div className={`sticky top-0 z-10 bg-dark-card/95 backdrop-blur-sm border-b border-dark-lighter flex justify-between items-center p-6 rounded-t-2xl ${isRTL ? 'flex-row-reverse' : ''}`}>
          <div>
            <h2 className="text-3xl font-display font-bold bg-gradient-to-r from-accent to-primary-light bg-clip-text text-transparent">
              Choose Your Plan
            </h2>
            <p className="text-light-dark mt-1">Select the perfect plan for your trading journey</p>
          </div>
          <button 
            onClick={onClose}
            className="text-light-dark hover:text-accent transition-colors p-2 rounded-full hover:bg-dark-lighter"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6 relative z-10">
          {!showPaymentOptions ? (
            <>
              {/* Plans Grid */}
              <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mb-8">
                {plans.map((plan) => {
                  const Icon = plan.icon;
                  return (
                    <motion.div
                      key={plan.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: plans.indexOf(plan) * 0.1 }}
                      className={`relative bg-dark-lighter/50 backdrop-blur-sm border-2 rounded-xl p-6 cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-accent/10 group ${
                        selectedPlan === plan.id 
                          ? 'border-accent shadow-lg shadow-accent/20 bg-dark-lighter/80' 
                          : 'border-dark-light hover:border-accent/50'
                      } ${plan.popular ? 'ring-2 ring-accent/30' : ''}`}
                      onClick={() => setSelectedPlan(plan.id)}
                    >
                      {plan.popular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <span className="bg-gradient-to-r from-accent to-primary-light text-dark px-4 py-1 rounded-full text-sm font-medium flex items-center animate-pulse">
                            <Star size={14} className="mr-1" />
                            Most Popular
                          </span>
                        </div>
                      )}
                      
                      {/* Glow effect */}
                      
                      <div className="text-center mb-6 relative z-10">
                        <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${plan.gradient} rounded-lg mb-4 shadow-lg`}>
                          <Icon className="text-white" size={24} />
                        </div>
                        <h3 className="text-xl font-display font-bold text-light mb-2">{plan.name}</h3>
                        <p className="text-light-dark text-sm mb-4">{plan.description}</p>
                        <div className="mb-4">
                          <span className="text-4xl font-bold bg-gradient-to-r from-accent to-primary-light bg-clip-text text-transparent">
                            {plan.price}
                          </span>
                          <span className="text-light-dark ml-1">{plan.period}</span>
                        </div>
                      </div>
                      
                      <ul className="space-y-3 mb-6 relative z-10">
                        {plan.features.map((feature, index) => (
                          <li key={index} className="flex items-start text-sm">
                            <Check size={16} className="text-accent mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-light-dark">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {plan.isCustom ? (
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            handleConsultationContact();
                          }}
                          className={`w-full py-3 px-4 bg-gradient-to-r ${plan.gradient} text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 relative z-10`}
                        >
                          Contact Us
                        </button>
                      ) : (
                        <button 
                          className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-300 relative z-10 ${
                            selectedPlan === plan.id
                              ? 'bg-gradient-to-r from-accent to-primary-light text-dark hover:shadow-lg hover:shadow-accent/30'
                              : 'bg-dark-light text-light-dark hover:bg-dark-lighter border border-dark-light hover:border-accent/50'
                          }`}
                        >
                          {selectedPlan === plan.id ? 'Selected' : 'Select Plan'}
                        </button>
                      )}
                    </motion.div>
                  );
                })}
              </div>

              {/* Trust Elements */}
              <div className="bg-dark-lighter/30 backdrop-blur-sm border border-dark-light rounded-xl p-6 mb-8">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Users className="text-accent mx-auto mb-2" size={32} />
                    <h4 className="font-semibold text-light mb-1">10,000+ Traders</h4>
                    <p className="text-light-dark text-sm">Trust our platform worldwide</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <TrendingUp className="text-green-400 mx-auto mb-2" size={32} />
                    <h4 className="font-semibold text-light mb-1">85% Win Rate</h4>
                    <p className="text-light-dark text-sm">Average across all strategies</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <Brain className="text-purple-400 mx-auto mb-2" size={32} />
                    <h4 className="font-semibold text-light mb-1">AI-Powered</h4>
                    <p className="text-light-dark text-sm">Advanced algorithms & ML</p>
                  </motion.div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="mb-8">
                <h3 className="text-xl font-display font-bold text-light mb-4">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  <motion.div 
                    className="bg-dark-lighter/50 backdrop-blur-sm border border-dark-light rounded-lg p-4 hover:border-accent/30 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <h4 className="font-semibold text-light mb-2">Can I change my plan later?</h4>
                    <p className="text-light-dark text-sm">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
                  </motion.div>
                  <motion.div 
                    className="bg-dark-lighter/50 backdrop-blur-sm border border-dark-light rounded-lg p-4 hover:border-accent/30 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 }}
                  >
                    <h4 className="font-semibold text-light mb-2">Do you offer a money-back guarantee?</h4>
                    <p className="text-light-dark text-sm">We offer a 30-day money-back guarantee for all plans. No questions asked.</p>
                  </motion.div>
                  <motion.div 
                    className="bg-dark-lighter/50 backdrop-blur-sm border border-dark-light rounded-lg p-4 hover:border-accent/30 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.0 }}
                  >
                    <h4 className="font-semibold text-light mb-2">What platforms do you support?</h4>
                    <p className="text-light-dark text-sm">Our tools work with TradingView, MetaTrader 4/5, NinjaTrader, and most major trading platforms.</p>
                  </motion.div>
                </div>
              </div>
              
              {selectedPlan && selectedPlan !== 'consultation' && (
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 }}
                >
                  <button 
                    onClick={() => setShowPaymentOptions(true)}
                    className="bg-gradient-to-r from-accent to-primary-light text-dark px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 inline-flex items-center"
                  >
                    <MessageCircle size={20} className="mr-2" />
                    Continue to Payment
                  </button>
                </motion.div>
              )}
            </>
          ) : !showCryptoAddresses ? (
            <div className="py-4">
              <h3 className="text-2xl font-display font-bold text-light mb-6 text-center">Choose Payment Method</h3>
              
              <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <motion.div 
                  className="bg-dark-lighter/50 backdrop-blur-sm border-2 border-dark-light rounded-xl p-6 cursor-pointer hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 transition-all group"
                  onClick={() => handlePaymentMethodSelect('crypto')}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <Wallet size={32} className="text-accent mb-4 relative z-10" />
                  <h4 className="text-lg font-semibold text-light mb-2 relative z-10">Pay with Crypto</h4>
                  <p className="text-light-dark text-sm mb-4 relative z-10">
                    Pay using USDT on TRON, SOLANA, or ETHEREUM network
                  </p>
                  <div className="text-xs text-accent font-medium relative z-10">Recommended • Lower fees</div>
                </motion.div>

                <motion.div 
                  className="bg-dark-lighter/50 backdrop-blur-sm border-2 border-dark-light rounded-xl p-6 cursor-pointer hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 transition-all group"
                  onClick={() => handlePaymentMethodSelect('card')}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-500 to-teal-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <CreditCard size={32} className="text-green-400 mb-4 relative z-10" />
                  <h4 className="text-lg font-semibold text-light mb-2 relative z-10">Card / PayPal</h4>
                  <p className="text-light-dark text-sm mb-4 relative z-10">
                    Secure payment via credit card or PayPal
                  </p>
                  <div className="text-xs text-green-400 font-medium relative z-10">Instant access</div>
                  <div className="text-xs text-green-400 font-medium relative z-10">Instant access • Processed by Whop</div>
                </motion.div>
              </div>

              <div className="text-center mt-8">
                <button 
                  onClick={() => setShowPaymentOptions(false)}
                  className="text-light-dark hover:text-accent transition-colors"
                >
                  ← Back to Plans
                </button>
              </div>
            </div>
          ) : (
            <div className="py-4">
              <div className="flex items-center mb-6">
                <button
                  onClick={() => setShowCryptoAddresses(false)}
                  className="mr-4 text-light-dark hover:text-accent transition-colors"
                >
                  <ArrowLeft size={24} />
                </button>
                <h3 className="text-2xl font-display font-bold text-light">Crypto Payment Details</h3>
              </div>

              <div className="space-y-6 max-w-2xl mx-auto">
                {/* Wallet address cards */}
                <motion.div 
                  className="bg-dark-lighter/50 backdrop-blur-sm border border-dark-light rounded-xl p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h4 className="text-lg font-semibold text-light mb-4">USDT TRC20 (TRON)</h4>
                  <div className="bg-dark/50 p-4 rounded-lg break-all font-mono text-sm text-light-dark mb-4 border border-dark-light">
                    {walletAddresses.trc20}
                  </div>
                  <button
                    onClick={() => copyToClipboard(walletAddresses.trc20, 'trc20')}
                    className="w-full bg-gradient-to-r from-accent to-primary-light text-dark py-2 px-4 rounded-lg hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 flex items-center justify-center font-medium"
                  >
                    {copiedNetwork === 'trc20' ? (
                      <>
                        <Check size={20} className="mr-2" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy size={20} className="mr-2" />
                        Copy Address
                      </>
                    )}
                  </button>
                </motion.div>

                <motion.div 
                  className="bg-dark-lighter/50 backdrop-blur-sm border border-dark-light rounded-xl p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h4 className="text-lg font-semibold text-light mb-4">USDT Solana</h4>
                  <div className="bg-dark/50 p-4 rounded-lg break-all font-mono text-sm text-light-dark mb-4 border border-dark-light">
                    {walletAddresses.solana}
                  </div>
                  <button
                    onClick={() => copyToClipboard(walletAddresses.solana, 'solana')}
                    className="w-full bg-gradient-to-r from-accent to-primary-light text-dark py-2 px-4 rounded-lg hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 flex items-center justify-center font-medium"
                  >
                    {copiedNetwork === 'solana' ? (
                      <>
                        <Check size={20} className="mr-2" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy size={20} className="mr-2" />
                        Copy Address
                      </>
                    )}
                  </button>
                </motion.div>

                <motion.div 
                  className="bg-dark-lighter/50 backdrop-blur-sm border border-dark-light rounded-xl p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h4 className="text-lg font-semibold text-light mb-4">USDT ERC20 (Ethereum)</h4>
                  <div className="bg-dark/50 p-4 rounded-lg break-all font-mono text-sm text-light-dark mb-4 border border-dark-light">
                    {walletAddresses.ethereum}
                  </div>
                  <button
                    onClick={() => copyToClipboard(walletAddresses.ethereum, 'ethereum')}
                    className="w-full bg-gradient-to-r from-accent to-primary-light text-dark py-2 px-4 rounded-lg hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 flex items-center justify-center font-medium"
                  >
                    {copiedNetwork === 'ethereum' ? (
                      <>
                        <Check size={20} className="mr-2" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy size={20} className="mr-2" />
                        Copy Address
                      </>
                    )}
                  </button>
                </motion.div>

                <motion.div 
                  className="bg-accent/10 border border-accent/30 rounded-xl p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <h4 className="font-semibold text-accent mb-3">Payment Instructions:</h4>
                  <ol className="list-decimal list-inside space-y-2 text-light-dark text-sm">
                    <li>Send the exact amount in USDT to the address above</li>
                    <li>Include your email in the transaction memo/reference</li>
                    <li>Email the transaction hash to: arganabridgecapital@gmail.com</li>
                    <li>Your access will be activated within 24 hours</li>
                  </ol>
                </motion.div>
              </div>

              <div className="text-center mt-8">
                <button 
                  onClick={() => setShowCryptoAddresses(false)}
                  className="text-light-dark hover:text-accent transition-colors"
                >
                  ← Back to Payment Methods
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-dark-lighter p-6 bg-dark-lighter/30 backdrop-blur-sm rounded-b-2xl relative z-10">
          <div className="text-center text-sm text-light-dark">
            <p>🔒 Secure payments • 30-day money-back guarantee • Cancel anytime</p>
            <p className="mt-2">Questions? Contact us at <a href="mailto:arganabridgecapital@gmail.com" className="text-accent hover:underline">arganabridgecapital@gmail.com</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionModal;