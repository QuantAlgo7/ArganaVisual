import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

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
  const [scrollPosition, setScrollPosition] = useState(0);
  const { t, isRTL } = useLanguage();

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prev) => (prev + 1) % (platforms.length * 200));
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="strategies" className="section bg-dark relative" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container mx-auto relative z-10">
        {/* Platform Band */}
        <div>
          <h3 className="text-2xl md:text-4xl font-display font-bold text-center mb-12 bg-gradient-to-r from-accent via-primary-light to-secondary bg-clip-text text-transparent">
            {t('strategies.platformsTitle')}
          </h3>
          
          <div className="relative h-24 overflow-hidden bg-dark-lighter/30 backdrop-blur-sm rounded-xl">
            <div 
              className={`absolute flex items-center space-x-16 transition-transform duration-500 py-4 ${isRTL ? 'flex-row-reverse' : ''}`}
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
            <div className={`absolute inset-y-0 ${isRTL ? 'right-0' : 'left-0'} w-32 bg-gradient-to-${isRTL ? 'l' : 'r'} from-dark to-transparent z-10`} />
            <div className={`absolute inset-y-0 ${isRTL ? 'left-0' : 'right-0'} w-32 bg-gradient-to-${isRTL ? 'r' : 'l'} from-dark to-transparent z-10`} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategyDashboard;