import { Maximize2, TrendingUp, Activity, Percent, BarChart4 } from 'lucide-react';
import { useState } from 'react';
import { Strategy } from '../types/strategy';

interface StrategyCardProps {
  strategy: Strategy;
  onBuyClick: () => void;
}

const StrategyCard = ({ strategy, onBuyClick }: StrategyCardProps) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`card overflow-hidden transition-all duration-300 ${expanded ? 'md:col-span-2 md:row-span-2' : ''}`}>
      <div className="flex justify-between items-start mb-4">
        <div>
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
      <div 
        className="w-full h-32 mb-6 overflow-hidden rounded-md bg-dark-light"
        style={{ 
          backgroundImage: `url(${strategy.chartUrl})`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      {/* Key metrics */}
      <div className="mb-4">
        <div className="flex flex-wrap">
          <div className="metric">
            <TrendingUp size={14} className="mr-1.5 text-accent" />
            <span>Sharpe: {strategy.metrics.sharpe}</span>
          </div>
          <div className="metric">
            <Activity size={14} className="mr-1.5 text-accent" />
            <span>CAGR: {strategy.metrics.cagr}%</span>
          </div>
          <div className="metric">
            <BarChart4 size={14} className="mr-1.5 text-accent" />
            <span>Drawdown: {strategy.metrics.maxDrawdown}%</span>
          </div>
          <div className="metric">
            <Percent size={14} className="mr-1.5 text-accent" />
            <span>Win Rate: {strategy.metrics.winRate}%</span>
          </div>
        </div>
      </div>

      {expanded && (
        <div className="my-4">
          <p className="text-light-dark mb-4">
            {strategy.longDescription}
          </p>
          <h4 className="font-semibold text-light mb-2">Strategy Logic:</h4>
          <p className="text-light-dark mb-4">
            {strategy.logicDescription}
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
        Subscribe to Strategy
      </button>
    </div>
  );
};

export default StrategyCard;