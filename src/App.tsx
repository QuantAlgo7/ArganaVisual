import React, { useState, useEffect } from 'react';
import { BarChart3, Globe2, Shield, TrendingUp, Users2, Wallet, X, Check, Diamond, Star, Sparkles } from 'lucide-react';

function App() {
  const [currentImage, setCurrentImage] = useState(0);
  const [showPricing, setShowPricing] = useState(false);
  
  const tradingImages = [
    "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&h=600",
    "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?auto=format&fit=crop&w=1200&h=600",
    "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&h=600"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % tradingImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const pricingPlans = [
    {
      name: "Essential",
      price: "24.99",
      yearlyPrice: "299.88",
      savings: "35%",
      icon: <Shield className="w-8 h-8 text-blue-400" />,
      description: "Start out strong & automate price action, the most essential part of your charts.",
      features: [
        "Price Action Concepts toolkit + screener",
        "Community access w/ price action alerts",
        "Custom Alert Creator for PAC toolkit",
        "Alert Scripting for Price Action Concepts",
        "24/7 support & active toolkit updates"
      ]
    },
    {
      name: "Premium",
      price: "39.99",
      yearlyPrice: "479.88",
      savings: "40%",
      icon: <Diamond className="w-8 h-8 text-blue-500" />,
      description: "The most powerful set of tools & signals ever created for technical traders.",
      features: [
        "All Essential features, plus:",
        "Signals & Overlays toolkit + screener",
        "Oscillator Matrix toolkit + screener",
        "Full scanner alerts & user strategies",
        "Custom Alert Creator for all 3 toolkits",
        "Alert Scripting functionality for all 3 toolkits"
      ]
    },
    {
      name: "Ultimate",
      price: "59.99",
      yearlyPrice: "719.88",
      savings: "50%",
      popular: true,
      icon: <Sparkles className="w-8 h-8 text-purple-400" />,
      description: "For data-driven traders who want professional backtesting with AI.",
      features: [
        "All Premium features, plus:",
        "AI Backtesting Assistant platform access",
        "Full suite w/ 3 Backtesters on TradingView",
        "Deep optimization engine for signal settings",
        "Scanners, bots, & backtests shared weekly",
        "Priority 24/7 support & active product updates"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16">
        <nav className="flex justify-between items-center mb-16">
          <div className="text-2xl font-bold">Argana Bridge Capital</div>
          <div className="space-x-6">
            <a href="#features" className="hover:text-blue-400">Features</a>
            <a href="#about" className="hover:text-blue-400">About</a>
            <a href="#contact" className="hover:text-blue-400">Contact</a>
            <button 
              onClick={() => setShowPricing(true)}
              className="bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue-700"
            >
              Get Started
            </button>
          </div>
        </nav>

        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold mb-6">
            Professional Trading Signals for Modern Investors
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of traders receiving real-time market analysis and expert trading signals
          </p>
          <button 
            onClick={() => setShowPricing(true)}
            className="bg-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700"
          >
            Start Trading Now
          </button>
        </div>
      </header>

      {/* Trading Charts Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Real-Time Trading Signals</h2>
          <div className="relative overflow-hidden rounded-xl shadow-2xl">
            <div className="aspect-w-2 aspect-h-1">
              <img 
                src={tradingImages[currentImage]} 
                alt="Trading Chart" 
                className="w-full h-full object-cover transition-opacity duration-500"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent p-8">
              <div className="text-xl font-semibold">Live Trading Signals</div>
              <p className="text-gray-300">Get real-time market analysis and trading opportunities</p>
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {tradingImages.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    currentImage === index ? 'bg-blue-500' : 'bg-gray-500'
                  }`}
                  onClick={() => setCurrentImage(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose Argana Bridge Capital</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <TrendingUp className="w-12 h-12 text-blue-500" />,
                title: "Expert Analysis",
                description: "Get professional market analysis and trading signals in real-time"
              },
              {
                icon: <Globe2 className="w-12 h-12 text-blue-500" />,
                title: "Global Markets",
                description: "Access signals for forex, cryptocurrencies, stocks, and commodities"
              },
              {
                icon: <BarChart3 className="w-12 h-12 text-blue-500" />,
                title: "Advanced Analytics",
                description: "Detailed technical analysis and market insights"
              },
              {
                icon: <Shield className="w-12 h-12 text-blue-500" />,
                title: "Risk Management",
                description: "Professional risk management strategies and guidelines"
              },
              {
                icon: <Users2 className="w-12 h-12 text-blue-500" />,
                title: "Community",
                description: "Join a community of successful traders and investors"
              },
              {
                icon: <Wallet className="w-12 h-12 text-blue-500" />,
                title: "Portfolio Management",
                description: "Comprehensive portfolio tracking and management tools"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-xl">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "15K+", label: "Active Traders" },
              { value: "95%", label: "Success Rate" },
              { value: "24/7", label: "Support" },
              { value: "50+", label: "Markets" }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-blue-500 mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Start Trading with Confidence</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join Argana Bridge Capital today and get access to professional trading signals,
            expert analysis, and a community of successful traders.
          </p>
          <button 
            onClick={() => setShowPricing(true)}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100"
          >
            Get Started Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Argana Bridge Capital</h3>
              <p className="text-gray-400">
                Professional trading signals and market analysis for modern investors.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#features" className="hover:text-blue-400">Features</a></li>
                <li><a href="#about" className="hover:text-blue-400">About</a></li>
                <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Markets</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Forex</li>
                <li>Cryptocurrencies</li>
                <li>Stocks</li>
                <li>Commodities</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>support@arganabridge.com</li>
                <li>+1 (555) 123-4567</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Argana Bridge Capital. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Pricing Modal */}
      {showPricing && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-800 flex justify-between items-center">
              <h2 className="text-2xl font-bold">Choose Your Plan</h2>
              <button 
                onClick={() => setShowPricing(false)}
                className="p-2 hover:bg-gray-800 rounded-lg"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pricingPlans.map((plan, index) => (
                  <div 
                    key={index}
                    className={`relative bg-gray-800 rounded-xl p-6 ${
                      plan.popular ? 'ring-2 ring-blue-500' : ''
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <span className="bg-blue-500 text-sm font-semibold px-3 py-1 rounded-full">
                          Popular
                        </span>
                      </div>
                    )}
                    <div className="flex items-center gap-3 mb-4">
                      {plan.icon}
                      <h3 className="text-xl font-semibold">{plan.name}</h3>
                    </div>
                    <div className="mb-4">
                      <div className="flex items-baseline">
                        <span className="text-sm">$</span>
                        <span className="text-4xl font-bold">{plan.price}</span>
                        <span className="text-gray-400 ml-1">/ mo</span>
                      </div>
                      <div className="text-sm text-gray-400">${plan.yearlyPrice} / yr</div>
                      <div className="text-sm text-blue-400 mt-1">
                        You save {plan.savings} a year
                      </div>
                    </div>
                    <p className="text-gray-300 mb-6">{plan.description}</p>
                    <button className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-lg mb-6">
                      Subscribe Now
                    </button>
                    <div className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 text-center text-sm text-gray-400">
                      30-day money-back guarantee
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;