import { Maximize2 } from 'lucide-react';
import { useState } from 'react';
import { Strategy } from '../types/strategy';
import { useLanguage } from '../contexts/LanguageContext';

interface StrategyCardProps {
  strategy: Strategy;
  onBuyClick: () => void;
}

const StrategyCard = ({ strategy, onBuyClick }: StrategyCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { t, isRTL } = useLanguage();

  return (
    <div 
      className={`card overflow-hidden transition-all duration-500 ease-in-out ${isHovered ? 'transform scale-110 origin-top z-10 shadow-2xl shadow-accent/20 border-accent' : 'hover:border-accent/50'}`} 
      dir={isRTL ? 'rtl' : 'ltr'}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`flex justify-between items-start mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
        <div className={isRTL ? 'text-right' : ''}>
          <h3 className="text-xl font-display font-semibold text-accent mb-1">
            {strategy.name}
          </h3>
          <p className="text-light-dark text-sm">
            {strategy.shortDescription}
          </p>
        </div>
        <div className="text-light-dark p-1">
          <Maximize2 
            size={18} 
            className={`transition-all duration-300 ${isHovered ? 'text-accent scale-110' : ''}`}
          />
        </div>
      </div>

      {/* Strategy performance chart */}
      {strategy.chartUrl && (
        <div 
          className={`w-full mb-6 overflow-hidden rounded-md bg-dark-light transition-all duration-500 ${
            isHovered ? 'h-56' : 'h-32'
          }`}
          style={{ 
            backgroundImage: `url(${strategy.chartUrl})`, 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
      )}

      {isHovered && (
        <div className={`my-4 animate-in fade-in duration-500 ${isRTL ? 'text-right' : ''}`}>
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
        className={`btn-accent w-full mt-2 transition-all duration-300 ${
          isHovered ? 'bg-accent text-dark hover:bg-accent-light' : ''
        }`}
      >
        {t('strategies.subscribeToStrategy')}
      </button>
    </div>
  );
};

export default StrategyCard;