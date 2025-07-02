import { Maximize2 } from 'lucide-react';
import { useState } from 'react';
import { Strategy } from '../types/strategy';
import { useLanguage } from '../contexts/LanguageContext';

interface StrategyCardProps {
  strategy: Strategy;
  onBuyClick: () => void;
}

const StrategyCard = ({ strategy, onBuyClick }: StrategyCardProps) => {
  const [expanded, setExpanded] = useState(false);
  const { t, isRTL } = useLanguage();

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`card overflow-hidden transition-all duration-300 ${expanded ? 'md:col-span-2 md:row-span-2' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <div className={`flex justify-between items-start mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
        <div className={isRTL ? 'text-right' : ''}>
          <h3 className="text-xl font-display font-semibold text-accent mb-1">
            {strategy.name}
          </h3>
          <p className="text-light-dark text-sm">
            {strategy.shortDescription}
          </p>
        </div>
        <button 
          onClick={toggleExpand}
          className="text-light-dark hover:text-accent transition-colors p-1"
          aria-label="Expand strategy card"
        >
          <Maximize2 size={18} />
        </button>
      </div>

      {/* Strategy performance chart */}
      {strategy.chartUrl && (
        <div 
          className="w-full h-32 mb-6 overflow-hidden rounded-md bg-dark-light"
          style={{ 
            backgroundImage: `url(${strategy.chartUrl})`, 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
      )}

      {expanded && (
        <div className={`my-4 ${isRTL ? 'text-right' : ''}`}>
          <p className="text-light-dark mb-4">
            {strategy.longDescription}
          </p>
          <h4 className="font-semibold text-light mb-2">Strategy Logic:</h4>
          <p className="text-light-dark mb-4">
            {strategy.indicatorArchitecture}
          </p>
          <h4 className="font-semibold text-light mb-2">Market Application:</h4>
          <p className="text-light-dark">
            {strategy.marketApplication}
          </p>
        </div>
      )}
      
      <button 
        onClick={onBuyClick} 
        className="btn-accent w-full mt-2"
      >
        {t('strategies.subscribeToStrategy')}
      </button>
    </div>
  );
};

export default StrategyCard;