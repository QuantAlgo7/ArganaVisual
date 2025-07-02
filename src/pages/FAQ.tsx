import { useState } from 'react';
import { ChevronDown, ChevronUp, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
  documentation?: {
    url: string;
    label: string;
  };
}

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const navigate = useNavigate();
  const { t, isRTL } = useLanguage();

  const faqs: FAQItem[] = [
    {
      category: t('faq.categories.general'),
      question: "What is Argana Bridge Capital?",
      answer: "Argana Bridge Capital is a cutting-edge algorithmic trading platform that combines advanced neural networks, machine learning, and quantitative analysis to deliver institutional-grade trading strategies and indicators."
    },
    {
      category: t('faq.categories.general'),
      question: "How do I get started?",
      answer: "To get started, click the 'Get Access' button in the navigation bar and choose a subscription plan that best suits your needs. Once subscribed, you'll receive immediate access to our trading tools and indicators."
    },
    {
      category: t('faq.categories.payment'),
      question: "How can I pay with a credit card?",
      answer: "To pay with a credit card:\n\n1. Click on 'Get Access' or 'Subscribe Now'\n2. Select your desired plan\n3. Choose 'Card / PayPal' as your payment method\n4. You'll be redirected to our secure Gumroad checkout page\n5. Enter your card details and complete the purchase\n6. You'll receive instant access to your subscription\n\nWe accept all major credit cards including Visa, Mastercard, and American Express. All transactions are processed securely through Gumroad.",
      documentation: {
        url: "https://drive.google.com/file/d/1Hib5BBM9w8qQNdaD8QucZ2RXm27a7-uI/view",
        label: "Credit Card Payment Guide"
      }
    },
    {
      category: t('faq.categories.payment'),
      question: "How can I pay with cryptocurrency?",
      answer: "We accept USDT payments on multiple networks:\n\n1. Select 'Pay with Crypto' during checkout\n2. Choose your preferred network:\n   - TRON (TRC20)\n   - Ethereum (ERC20)\n   - Solana\n3. Send the exact USDT amount to the provided wallet address\n4. Important: Include your email in the transaction memo/reference\n5. Send the transaction hash to our support team\n6. Your access will be activated within 24 hours\n\nNote: Always double-check the wallet address before sending any payments.",
      documentation: {
        url: "https://drive.google.com/file/d/1qh4A9PWplHFu8W_BmR5nA9m3-1gCUK5T/view",
        label: "Crypto Payment Guide"
      }
    },
    {
      category: t('faq.categories.technical'),
      question: "Which platforms are supported?",
      answer: "Our indicators and strategies work with major trading platforms including TradingView, MetaTrader (MT4/MT5), NinjaTrader, and cTrader. We also support various brokers like ICMarkets, Exness, FTMO, and more."
    },
    {
      category: t('faq.categories.technical'),
      question: "Do you offer automated trading bots?",
      answer: "Yes, we offer fully automated trading bots as part of our premium packages. These bots are built on our proven strategies and can execute trades 24/7 with AI-optimized logic."
    },
    {
      category: t('faq.categories.subscription'),
      question: "What happens after I make a payment?",
      answer: "For card payments: You'll receive instant access via email with your login credentials and download instructions.\n\nFor crypto payments: Once we verify your transaction (usually within 24 hours), we'll send your access credentials to the email provided in the transaction memo."
    },
    {
      category: t('faq.categories.support'),
      question: "How can I get help if I have issues with payment?",
      answer: "For payment support:\n\n1. Email us at arganabridgecapital@gmail.com\n2. Join our Discord or Telegram community\n3. Include your transaction details or order number\n\nOur support team is available 24/7 to assist you with any payment-related issues."
    },
    {
      category: t('faq.categories.support'),
      question: "Do you offer installation support?",
      answer: "Yes, we provide detailed installation guides and direct support for setting up our indicators and strategies on your preferred platform."
    }
  ];

  const categories = [t('faq.categories.all'), ...Array.from(new Set(faqs.map(faq => faq.category)))];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const filteredFaqs = faqs.filter(faq => 
    activeCategory === t('faq.categories.all') || faq.category === activeCategory
  );

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-dark pt-24 pb-16" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className={`flex items-center justify-between mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <h1 className={`text-4xl md:text-5xl font-display font-bold bg-gradient-to-r from-accent via-primary-light to-accent bg-clip-text text-transparent ${isRTL ? 'text-right' : ''}`}>
              {t('faq.title')}
            </h1>
            <button
              onClick={handleHomeClick}
              className="btn-accent"
            >
              {t('faq.backToHome')}
            </button>
          </div>
          
          <p className={`text-light-dark mb-12 text-lg ${isRTL ? 'text-right' : ''}`}>
            {t('faq.description')}
          </p>

          {/* Category Filter */}
          <div className={`flex flex-wrap gap-3 mb-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full transition-all ${
                  activeCategory === category
                    ? 'bg-accent text-dark font-medium'
                    : 'bg-dark-lighter text-light-dark hover:bg-dark-light'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border border-dark-lighter rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className={`w-full px-6 py-4 flex items-center justify-between bg-dark-card hover:bg-dark-lighter transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  <span className={`${isRTL ? 'text-right' : 'text-left'} font-medium`}>{faq.question}</span>
                  {openItems.includes(index) ? (
                    <ChevronUp className="text-accent" />
                  ) : (
                    <ChevronDown className="text-accent" />
                  )}
                </button>

                <AnimatePresence>
                  {openItems.includes(index) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-dark-lighter"
                    >
                      <div className={`px-6 py-4 bg-dark-lighter/50 ${isRTL ? 'text-right' : ''}`}>
                        <p className="text-light-dark whitespace-pre-line">{faq.answer}</p>
                        {faq.documentation && (
                          <a
                            href={faq.documentation.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center mt-4 px-4 py-2 bg-accent text-dark rounded-md hover:bg-accent-light transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}
                          >
                            <Download size={16} className={`${isRTL ? 'ml-2' : 'mr-2'}`} />
                            {faq.documentation.label}
                          </a>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Contact Section */}
          <div className={`mt-12 p-6 bg-dark-card border border-dark-lighter rounded-lg text-center ${isRTL ? 'text-right' : ''}`}>
            <h2 className="text-xl font-semibold mb-3">{t('faq.stillHaveQuestions')}</h2>
            <p className="text-light-dark mb-4">
              {t('faq.supportDescription')}
            </p>
            <a
              href="mailto:arganabridgecapital@gmail.com"
              className="btn-accent inline-flex items-center"
            >
              {t('faq.contactSupport')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;