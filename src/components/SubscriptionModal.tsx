import { useState } from 'react';
import { X, MessageCircle, CreditCard, Wallet, Copy, Check, ArrowLeft } from 'lucide-react';
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

const SubscriptionModal = ({ onClose, strategy }: SubscriptionModalProps) => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);
  const [showCryptoAddresses, setShowCryptoAddresses] = useState(false);
  const [copiedNetwork, setCopiedNetwork] = useState<string | null>(null);
  const { t, isRTL } = useLanguage();

  const plans = [
    {
      id: 'core',
      name: t('subscription.plans.core.name'),
      price: '$39',
      period: '/month',
      features: t('subscription.plans.core.features'),
    },
    {
      id: 'strategy',
      name: t('subscription.plans.strategy.name'),
      price: '$79',
      period: '/month',
      features: t('subscription.plans.strategy.features'),
      recommended: true,
    },
    {
      id: 'autonomous',
      name: t('subscription.plans.autonomous.name'),
      price: '$99',
      period: '/month',
      features: t('subscription.plans.autonomous.features'),
      promotion: {
        label: t('subscription.limitedTime'),
        originalPrice: '$149/month'
      }
    },
  ];

  const handlePaymentMethodSelect = (method: 'crypto' | 'card') => {
    if (method === 'card') {
      window.location.href = 'https://arganabridgecapital.gumroad.com/l/eijwo?_gl=1*qb9rlx*_ga*MTUxNDU5NDU1OC4xNzQ4NzE4OTg5*_ga_6LJN6D94N6*czE3NDg5NTEwMTAkbzMkZzEkdDE3NDg5NTU3OTMkajQxJGwwJGgw';
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

  return (
    <div className="fixed inset-0 bg-dark/90 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div 
        className="bg-dark-card border border-dark-lighter rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
        onClick={stopPropagation}
        dir={isRTL ? 'rtl' : 'ltr'}
      >
        <div className={`sticky top-0 z-10 bg-dark-card flex justify-between items-center border-b border-dark-lighter p-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <h2 className="text-2xl font-display font-semibold">
            {t('subscription.title')} <span className="text-accent">{strategy.name}</span>
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
          {/* Promotional Banner */}
          <div className="mb-8 relative overflow-hidden rounded-lg bg-gradient-to-r from-accent/20 via-accent/10 to-accent/20 border border-accent/30">
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
            <div className="relative p-6 text-center">
              <div className="animate-pulse">
                <span className="text-accent text-2xl font-display font-bold">{t('subscription.limitedOffer')}</span>
              </div>
              <p className="text-light-dark mt-2">{t('subscription.oneTimePayment')}</p>
            </div>
          </div>

          {!showPaymentOptions ? (
            <>
              <h3 className={`text-xl font-semibold mb-6 ${isRTL ? 'text-right' : ''}`}>{t('subscription.selectPlan')}</h3>
              
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
                        {t('subscription.recommended')}
                      </div>
                    )}
                    {plan.promotion && (
                      <div className="absolute -top-3 right-4 bg-accent text-dark px-3 py-1 rounded-full text-xs font-semibold animate-pulse">
                        {plan.promotion.label}
                      </div>
                    )}
                    
                    <h4 className={`text-lg font-display font-semibold mb-2 ${isRTL ? 'text-right' : ''}`}>{plan.name}</h4>
                    <div className={`mb-4 ${isRTL ? 'text-right' : ''}`}>
                      {plan.promotion ? (
                        <div>
                          <span className="text-2xl font-display font-bold">{plan.price}</span>
                          <span className="text-light-dark text-sm">{plan.period}</span>
                          <div className="mt-1">
                            <span className="text-sm text-light-dark line-through mr-2">{plan.promotion.originalPrice}</span>
                            <span className="text-xs text-accent">{t('subscription.save')}</span>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <span className="text-2xl font-display font-bold">{plan.price}</span>
                          <span className="text-light-dark text-sm">{plan.period}</span>
                        </div>
                      )}
                    </div>
                    
                    <ul className={`space-y-2 mb-4 ${isRTL ? 'text-right' : ''}`}>
                      {plan.features.map((feature: string, index: number) => (
                        <li key={index} className={`flex items-start ${isRTL ? 'flex-row-reverse' : ''}`}>
                          <Check size={16} className={`text-accent ${isRTL ? 'ml-2' : 'mr-2'} mt-0.5 flex-shrink-0`} />
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
                      {selectedPlan === plan.id ? t('subscription.selected') : t('subscription.selectPlan2')}
                    </button>
                  </div>
                ))}
              </div>
              
              <button 
                onClick={() => selectedPlan && setShowPaymentOptions(true)}
                className={`btn-primary w-full ${isRTL ? 'flex-row-reverse' : ''}`}
                disabled={!selectedPlan}
              >
                <MessageCircle size={18} className={`${isRTL ? 'ml-2' : 'mr-2'}`} />
                {t('subscription.continueToPayment')}
              </button>
            </>
          ) : !showCryptoAddresses ? (
            <div className="py-4">
              <h3 className={`text-xl font-semibold mb-6 ${isRTL ? 'text-right' : ''}`}>{t('subscription.paymentMethod')}</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div 
                  className="card cursor-pointer hover:border-accent"
                  onClick={() => handlePaymentMethodSelect('crypto')}
                >
                  <Wallet size={24} className={`text-accent mb-4 ${isRTL ? 'ml-auto' : ''}`} />
                  <h4 className={`text-lg font-semibold mb-2 ${isRTL ? 'text-right' : ''}`}>{t('subscription.crypto.title')}</h4>
                  <p className={`text-light-dark text-sm mb-4 ${isRTL ? 'text-right' : ''}`}>
                    {t('subscription.crypto.description')}
                  </p>
                  <div className={`text-xs text-accent ${isRTL ? 'text-right' : ''}`}>{t('subscription.crypto.recommended')}</div>
                </div>

                <div 
                  className="card cursor-pointer hover:border-accent"
                  onClick={() => handlePaymentMethodSelect('card')}
                >
                  <CreditCard size={24} className={`text-accent mb-4 ${isRTL ? 'ml-auto' : ''}`} />
                  <h4 className={`text-lg font-semibold mb-2 ${isRTL ? 'text-right' : ''}`}>{t('subscription.card.title')}</h4>
                  <p className={`text-light-dark text-sm mb-4 ${isRTL ? 'text-right' : ''}`}>
                    {t('subscription.card.description')}
                  </p>
                  <div className={`text-xs text-accent ${isRTL ? 'text-right' : ''}`}>{t('subscription.card.processed')}</div>
                </div>
              </div>

              <button 
                onClick={() => setShowPaymentOptions(false)}
                className="btn bg-dark-lighter hover:bg-dark-light text-light w-full mt-6"
              >
                {t('subscription.backToPlans')}
              </button>
            </div>
          ) : (
            <div className="py-4">
              <div className={`flex items-center mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <button
                  onClick={() => setShowCryptoAddresses(false)}
                  className={`${isRTL ? 'ml-4' : 'mr-4'} text-light-dark hover:text-accent transition-colors`}
                >
                  <ArrowLeft size={24} />
                </button>
                <h3 className="text-xl font-semibold">{t('subscription.cryptoDetails.title')}</h3>
              </div>

              <div className="space-y-6">
                {/* Mobile-optimized wallet address cards */}
                <div className="card bg-dark-lighter">
                  <h4 className={`text-lg font-semibold mb-4 ${isRTL ? 'text-right' : ''}`}>USDT TRC20 (TRON)</h4>
                  <div className="flex flex-col space-y-2">
                    <div className="bg-dark p-4 rounded-lg break-all font-mono text-sm text-light-dark">
                      {walletAddresses.trc20}
                    </div>
                    <button
                      onClick={() => copyToClipboard(walletAddresses.trc20, 'trc20')}
                      className={`w-full btn-accent flex items-center justify-center mt-2 ${isRTL ? 'flex-row-reverse' : ''}`}
                    >
                      {copiedNetwork === 'trc20' ? (
                        <span className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                          <Check size={20} className={`${isRTL ? 'ml-2' : 'mr-2'}`} />
                          {t('subscription.cryptoDetails.copied')}
                        </span>
                      ) : (
                        <span className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                          <Copy size={20} className={`${isRTL ? 'ml-2' : 'mr-2'}`} />
                          {t('subscription.cryptoDetails.copyAddress')}
                        </span>
                      )}
                    </button>
                  </div>
                </div>

                <div className="card bg-dark-lighter">
                  <h4 className={`text-lg font-semibold mb-4 ${isRTL ? 'text-right' : ''}`}>USDT Solana</h4>
                  <div className="flex flex-col space-y-2">
                    <div className="bg-dark p-4 rounded-lg break-all font-mono text-sm text-light-dark">
                      {walletAddresses.solana}
                    </div>
                    <button
                      onClick={() => copyToClipboard(walletAddresses.solana, 'solana')}
                      className={`w-full btn-accent flex items-center justify-center mt-2 ${isRTL ? 'flex-row-reverse' : ''}`}
                    >
                      {copiedNetwork === 'solana' ? (
                        <span className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                          <Check size={20} className={`${isRTL ? 'ml-2' : 'mr-2'}`} />
                          {t('subscription.cryptoDetails.copied')}
                        </span>
                      ) : (
                        <span className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                          <Copy size={20} className={`${isRTL ? 'ml-2' : 'mr-2'}`} />
                          {t('subscription.cryptoDetails.copyAddress')}
                        </span>
                      )}
                    </button>
                  </div>
                </div>

                <div className="card bg-dark-lighter">
                  <h4 className={`text-lg font-semibold mb-4 ${isRTL ? 'text-right' : ''}`}>USDT ERC20 (Ethereum)</h4>
                  <div className="flex flex-col space-y-2">
                    <div className="bg-dark p-4 rounded-lg break-all font-mono text-sm text-light-dark">
                      {walletAddresses.ethereum}
                    </div>
                    <button
                      onClick={() => copyToClipboard(walletAddresses.ethereum, 'ethereum')}
                      className={`w-full btn-accent flex items-center justify-center mt-2 ${isRTL ? 'flex-row-reverse' : ''}`}
                    >
                      {copiedNetwork === 'ethereum' ? (
                        <span className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                          <Check size={20} className={`${isRTL ? 'ml-2' : 'mr-2'}`} />
                          {t('subscription.cryptoDetails.copied')}
                        </span>
                      ) : (
                        <span className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                          <Copy size={20} className={`${isRTL ? 'ml-2' : 'mr-2'}`} />
                          {t('subscription.cryptoDetails.copyAddress')}
                        </span>
                      )}
                    </button>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-dark rounded-lg border border-accent/20">
                  <h4 className={`font-semibold text-accent mb-2 ${isRTL ? 'text-right' : ''}`}>{t('subscription.cryptoDetails.instructions.title')}</h4>
                  <ol className={`list-decimal list-inside space-y-2 text-light-dark ${isRTL ? 'text-right' : ''}`}>
                    <li>{t('subscription.cryptoDetails.instructions.step1')}</li>
                    <li>{t('subscription.cryptoDetails.instructions.step2')}</li>
                    <li>{t('subscription.cryptoDetails.instructions.step3')}</li>
                    <li>{t('subscription.cryptoDetails.instructions.step4')}</li>
                  </ol>
                </div>
              </div>

              <button 
                onClick={() => setShowCryptoAddresses(false)}
                className="btn bg-dark-lighter hover:bg-dark-light text-light w-full mt-6"
              >
                {t('subscription.backToPaymentMethods')}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionModal;