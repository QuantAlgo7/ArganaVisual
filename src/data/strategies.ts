import { Strategy } from '../types/strategy';

// Helper function to generate random metrics
const generateMetrics = (base: number) => ({
  sharpe: Number((2 + Math.random() * 2).toFixed(2)),
  cagr: Number((12 + Math.random() * 15).toFixed(2)),
  maxDrawdown: Number((5 + Math.random() * 10).toFixed(2)),
  winRate: Number((60 + Math.random() * 20).toFixed(2)),
  sortino: Number((2.5 + Math.random() * 2).toFixed(2)),
  alpha: Number((8 + Math.random() * 10).toFixed(2))
});

const strategyNames = [
  'DeepArbitrage',
  'TensorFlow',
  'QuantumEdge',
  'AlphaNet',
  'Harmonic Quant',
  'All Price Action in One',
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
];

// Remplace ces URLs avec tes vraies images si disponibles
const strategyImages = [
  'https://i.imgur.com/H9aXN0Y.png',
  'https://i.imgur.com/zcrzsEI.png',
  'https://i.imgur.com/7Rlg9LC.png',
  'https://i.imgur.com/OATauk6.png',
  'https://i.imgur.com/OPz5BQt.png',
  'https://i.imgur.com/fSbeGfI.png',
  'https://i.imgur.com/G7.png',
  'https://i.imgur.com/H8.png',
  'https://i.imgur.com/I9.png',
  'https://i.imgur.com/J10.png',
  'https://i.imgur.com/K11.png',
  'https://i.imgur.com/L12.png',
  'https://i.imgur.com/M13.png',
  'https://i.imgur.com/N14.png',
  'https://i.imgur.com/O15.png',
  'https://i.imgur.com/P16.png',
  'https://i.imgur.com/Q17.png',
  'https://i.imgur.com/R18.png',
  'https://i.imgur.com/S19.png',
  'https://i.imgur.com/T20.png',
  'https://i.imgur.com/U21.png',
  'https://i.imgur.com/V22.png'
];

export const strategies: Strategy[] = [
  {
    id: 1,
    name: 'AlphaMomentum',
    category: 'momentum',
    shortDescription: 'Momentum-based strategy with volatility control',
    longDescription: 'AlphaMomentum is our flagship strategy that capitalizes on systematic momentum across multiple timeframes while implementing sophisticated volatility control mechanisms.',
    logicDescription: 'The strategy employs a multi-layered approach to momentum detection, analyzing price action across daily, weekly, and monthly timeframes to identify persistent trends.',
    marketApplication: 'Performs exceptionally well in trending markets with defensive mechanisms for whipsaws and sudden reversals.',
    chartUrl: 'https://i.imgur.com/mxXpY95.png',
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
    chartUrl: 'https://i.imgur.com/GBtWTkp.png',
    metrics: generateMetrics(2)
  },
  {
    id: 3,
    name: 'Best Price Action Toolkit',
    category: 'volatility',
    shortDescription: 'Deep learning-based volatility prediction and trading',
    longDescription: 'Harnesses the power of neural networks to predict and capitalize on volatility patterns across markets.',
    logicDescription: 'Employs deep learning models trained on historical volatility patterns to predict future market movements.',
    marketApplication: 'Particularly effective in high-volatility environments and during market regime changes.',
    chartUrl: 'https://i.imgur.com/NvEtjh5.png',
    metrics: generateMetrics(3)
  },
  // Génère les 22 autres dynamiquement
  ...strategyNames.map((name, i) => ({
    id: i + 4,
    name,
    category: ['momentum', 'mean-reversion', 'volatility', 'arbitrage'][Math.floor(Math.random() * 4)] as Strategy['category'],
    shortDescription: `Advanced ${['momentum', 'mean-reversion', 'volatility', 'arbitrage'][Math.floor(Math.random() * 4)]} strategy with neural network optimization`,
    longDescription: 'Sophisticated trading strategy leveraging cutting-edge AI and machine learning techniques.',
    logicDescription: 'Utilizes deep learning models and advanced statistical methods to identify trading opportunities.',
    marketApplication: 'Suitable for institutional-grade trading across multiple asset classes.',
    chartUrl: strategyImages[i],
    metrics: generateMetrics(i + 4)
  }))
];
