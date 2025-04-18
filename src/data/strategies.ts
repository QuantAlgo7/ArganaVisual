import { Strategy } from '../types/strategy';

export const strategies: Strategy[] = [
  {
    id: 1,
    name: 'AlphaMomentum',
    shortDescription: 'Momentum-based strategy with volatility control',
    longDescription: 'AlphaMomentum is our flagship strategy that capitalizes on systematic momentum across multiple timeframes while implementing sophisticated volatility control mechanisms to adapt to changing market conditions.',
    logicDescription: 'The strategy employs a multi-layered approach to momentum detection, analyzing price action across daily, weekly, and monthly timeframes to identify persistent trends. A proprietary volatility model adjusts position sizing dynamically.',
    marketApplication: 'Performs exceptionally well in trending markets but includes defensive mechanisms for whipsaws and sudden reversals. Primarily applied to equity index futures, ETFs, and major forex pairs.',
    chartUrl: 'https://images.pexels.com/photos/6771900/pexels-photo-6771900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    metrics: {
      sharpe: 2.8,
      cagr: 17.5,
      maxDrawdown: 9.2,
      winRate: 68.3,
      sortino: 3.4,
      alpha: 11.2
    }
  },
  {
    id: 2,
    name: 'VolatilityGrid',
    shortDescription: 'Mean-reversion strategy for high-volatility environments',
    longDescription: 'VolatilityGrid exploits market inefficiencies during periods of elevated volatility through a sophisticated grid-based approach that capitalizes on price oscillations and emotional market behavior.',
    logicDescription: 'Advanced statistical models identify potential mean-reversion points and calculate optimal grid levels for entry and exit. Machine learning algorithms continually refine the grid spacing based on volatility regimes.',
    marketApplication: 'Designed to thrive in choppy, high-volatility markets where traditional trend-following strategies struggle. Applied to equity indices, commodities, and cryptocurrency markets.',
    chartUrl: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    metrics: {
      sharpe: 2.1,
      cagr: 14.8,
      maxDrawdown: 12.4,
      winRate: 73.6,
      sortino: 2.7,
      alpha: 9.7
    }
  },
  {
    id: 3,
    name: 'LiquiditySurge',
    shortDescription: 'Captures liquidity dislocations in market microstructure',
    longDescription: 'LiquiditySurge identifies and exploits temporary liquidity dislocations in market microstructure, capitalizing on order flow imbalances and institutional money movements across multiple asset classes.',
    logicDescription: 'Proprietary algorithms analyze order book depth, trade flow, and volume patterns to detect significant liquidity events. Neural networks trained on historical dislocations predict price reaction magnitude and direction.',
    marketApplication: 'Particularly effective around major market events, economic releases, and during periods of institutional repositioning. Applied to forex, futures, and large-cap equities with sufficient order book transparency.',
    chartUrl: 'https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    metrics: {
      sharpe: 3.1,
      cagr: 22.3,
      maxDrawdown: 11.8,
      winRate: 64.9,
      sortino: 3.8,
      alpha: 16.5
    }
  },
  {
    id: 4,
    name: 'QuantumEdge',
    shortDescription: 'Multi-strategy approach with regime detection',
    longDescription: 'QuantumEdge deploys an ensemble of algorithmically selected strategies based on real-time market regime detection, offering consistent performance across diverse market conditions through adaptive strategy allocation.',
    logicDescription: 'At its core, QuantumEdge employs a meta-algorithm that continuously evaluates market conditions and dynamically selects from a suite of specialized sub-strategies optimized for specific regimes.',
    marketApplication: 'Designed as an all-weather approach suitable for institutional allocations seeking consistent performance with reduced regime-change risk. Applied across global markets and multiple asset classes.',
    chartUrl: 'https://images.pexels.com/photos/5980845/pexels-photo-5980845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    metrics: {
      sharpe: 2.4,
      cagr: 16.2,
      maxDrawdown: 8.7,
      winRate: 71.2,
      sortino: 3.0,
      alpha: 10.8
    }
  },
  {
    id: 5,
    name: 'NeuralArbitrage',
    shortDescription: 'Statistical arbitrage powered by neural networks',
    longDescription: 'NeuralArbitrage uses advanced deep learning models to identify and capitalize on pricing inefficiencies between related financial instruments, exploiting correlations and mean-reversion principles with remarkable precision.',
    logicDescription: 'Custom-designed neural networks continuously analyze thousands of instrument relationships, identifying statistically significant deviations and predicting reversion probability and timeframe.',
    marketApplication: 'Particularly effective in markets with established correlations such as ETF pairs, commodity futures curves, and cryptocurrency cross-rates. Low correlation to traditional market factors provides excellent portfolio diversification.',
    chartUrl: 'https://images.pexels.com/photos/6770610/pexels-photo-6770610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    metrics: {
      sharpe: 3.5,
      cagr: 19.6,
      maxDrawdown: 7.3,
      winRate: 78.5,
      sortino: 4.2,
      alpha: 15.1
    }
  },
  {
    id: 6,
    name: 'AlphaHorizon',
    shortDescription: 'Long-term trend capture with intelligent positioning',
    longDescription: 'AlphaHorizon identifies and captures significant market trends through sophisticated pattern recognition and adaptive position management, designed for investors seeking capital appreciation with managed volatility.',
    logicDescription: 'The strategy employs proprietary algorithms to detect early-stage trend formations, filter false signals, and optimize entry timing. Dynamic position sizing adjusts exposure based on trend conviction and market conditions.',
    marketApplication: 'Well-suited for equity indices, commodities, and currencies where meaningful multi-month trends can develop. Defensive mechanisms provide significant drawdown protection during trend reversals.',
    chartUrl: 'https://images.pexels.com/photos/7788009/pexels-photo-7788009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    metrics: {
      sharpe: 1.9,
      cagr: 14.1,
      maxDrawdown: 13.5,
      winRate: 62.8,
      sortino: 2.3,
      alpha: 8.4
    }
  }
];