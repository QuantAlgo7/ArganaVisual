import { Strategy } from '../types/strategy';

// Helper function to generate random metrics within reasonable ranges
const generateMetrics = (base: number) => ({
  sharpe: 2 + Math.random() * 2,
  cagr: 12 + Math.random() * 15,
  maxDrawdown: 5 + Math.random() * 10,
  winRate: 60 + Math.random() * 20,
  sortino: 2.5 + Math.random() * 2,
  alpha: 8 + Math.random() * 10
});

export const strategies: Strategy[] = [
  {
    id: 1,
    name: 'AlphaMomentum',
    category: 'momentum',
    shortDescription: 'Momentum-based strategy with volatility control',
    longDescription: 'AlphaMomentum is our flagship strategy that capitalizes on systematic momentum across multiple timeframes while implementing sophisticated volatility control mechanisms.',
    logicDescription: 'The strategy employs a multi-layered approach to momentum detection, analyzing price action across daily, weekly, and monthly timeframes to identify persistent trends.',
    marketApplication: 'Performs exceptionally well in trending markets with defensive mechanisms for whipsaws and sudden reversals.',
    chartUrl: 'https://images.pexels.com/photos/6771900/pexels-photo-6771900.jpeg',
    metrics: generateMetrics(1)
  },
  {
    id: 2,
    name: 'QuantumMean',
    category: 'mean-reversion',
    shortDescription: 'Advanced mean reversion with quantum computing optimization',
    longDescription: 'QuantumMean leverages quantum computing algorithms to identify optimal mean reversion points across multiple assets.',
    logicDescription: 'Utilizes quantum-inspired algorithms to process vast amounts of market data and identify statistical arbitrage opportunities.',
    marketApplication: 'Ideal for highly liquid markets with established statistical relationships.',
    chartUrl: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg',
    metrics: generateMetrics(2)
  },
  // Add 23 more strategies with similar structure but unique names and descriptions
  {
    id: 3,
    name: 'NeuralVolatility',
    category: 'volatility',
    shortDescription: 'Deep learning-based volatility prediction and trading',
    longDescription: 'Harnesses the power of neural networks to predict and capitalize on volatility patterns across markets.',
    logicDescription: 'Employs deep learning models trained on historical volatility patterns to predict future market movements.',
    marketApplication: 'Particularly effective in high-volatility environments and during market regime changes.',
    chartUrl: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg',
    metrics: generateMetrics(3)
  },
  // ... Continue with more strategies
].concat(
  Array.from({ length: 22 }, (_, i) => ({
    id: i + 4,
    name: [
      'DeepArbitrage',
      'TensorFlow',
      'QuantumEdge',
      'AlphaNet',
      'NeuralQuant',
      'WaveRider',
      'MomentumPro',
      'StatArb Elite',
      'VolMatrix',
      'TrendMaster',
      'QubitTrader',
      'NeuralFlow',
      'QuantumLeap',
      'AlphaWave',
      'DeepMomentum',
      'MetaTrader',
      'QuantumFlow',
      'NeuralArb',
      'AlphaQuant',
      'WaveMaster',
      'TensorQuant',
      'DeepFlow'
    ][i],
    category: ['momentum', 'mean-reversion', 'volatility', 'arbitrage'][Math.floor(Math.random() * 4)] as Strategy['category'],
    shortDescription: `Advanced ${['momentum', 'mean-reversion', 'volatility', 'arbitrage'][Math.floor(Math.random() * 4)]} strategy with neural network optimization`,
    longDescription: 'Sophisticated trading strategy leveraging cutting-edge AI and machine learning techniques.',
    logicDescription: 'Utilizes deep learning models and advanced statistical methods to identify trading opportunities.',
    marketApplication: 'Suitable for institutional-grade trading across multiple asset classes.',
    chartUrl: 'https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg',
    metrics: generateMetrics(i + 4)
  }))
);