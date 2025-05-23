import { Strategy } from '../types/strategy';

// Helper function to generate random metrics


const strategyNames = [
  'QubitTrader',
];

const strategyImages = [
  'https://i.imgur.com/V22.png'
];

export const strategies: Strategy[] = [
  {
    id: 1,
    name: 'AlphaMomentum',
    category: 'momentum',
    shortDescription: '',
    longDescription: 'A dynamic trend-following and mean-reversion hybrid strategy that leverages layered momentum signals, volatility bands, and adaptive filters to detect high-probability bullish or bearish breakouts.',
    Architecture: 'A dynamic trend-following and mean-reversion hybrid strategy that leverages layered momentum signals, volatility bands, and adaptive filters to detect high-probability bullish or bearish breakouts.',
    marketApplication: 'BTCUSD, EURUSD, SP500',
    timeframes: ['M5', 'M10', 'M15', 'H1'],
    chartUrl: 'https://i.imgur.com/mxXpY95.png',
  },
  {
    id: 2,
    name: 'QuantumMean',
    category: 'mean-reversion',
    shortDescription: '',
    longDescription: 'Trend, reversal, swing, and volatility analysis',
    Architecture: 'Trend, reversal, swing, and volatility analysis',
    marketApplication: 'BTCUSD, EURUSD, SP500',
    timeframes: ['M3', 'M5', 'M15', 'H4'],
    chartUrl: 'https://i.imgur.com/GBtWTkp.png',
  },
  {
    id: 3,
    name: 'Best SMC Indicator MTF',
    category: 'volatility',
    shortDescription: '',
    longDescription: 'A precision tool designed to track institutional activity and structural price shifts with clarity.',
    Architecture: 'Order Blocks /Fair Value Gaps /BOS & CHOCH/ Order Blocks / Fair Value Gaps / BOS & CHOCH / Liquidity Pools / Mitigation Zones / Stop Hunts / Market Structure Swings / Volume Clusters / Supply & Demand Zones / Institutional Imbalance / Order Flow / Smart Money Traps / Wyckoff Phases / Price Rejection / Market Maker Manipulation / Entry/Exit Zones / Multi-Timeframe Confluence / Momentum Shifts / VWAP Zones',
    marketApplication: 'ALL',
    timeframes: ['ALL'],
    chartUrl: 'https://i.imgur.com/NvEtjh5.png',
  },
  {
    id: 4,
    name: 'AI Liquidity Indicator ',
    category: 'volatility',
    shortDescription: '',
    longDescription: 'An intelligent tool that maps out liquidity zones and sweep points using adaptive AI.',
    Architecture: 'Liquidity Zones / Sweeps / Volume Spikes / Order Flow Imbalance / AI Learning',
    marketApplication: 'ALL',
    timeframes: ['ALL'],
    chartUrl: 'https://i.imgur.com/H9aXN0Y.png',
  },
    {
    id: 5,
    name: 'TensorFlow',
    category: 'volatility',
    shortDescription: '',
    longDescription: 'Combines institutional price zones with momentum and trend confirmation for high-probability setups',
    Architecture: 'Liquidity Zones / Sweeps / Volume Spikes / Order Flow Imbalance / AI Learning',
    marketApplication: 'CRYPTO, NAS100, XAUUSD',
    timeframes: ['5M', '15M', '30M'],
    chartUrl: 'https://i.imgur.com/zcrzsEI.png',
  },
  {
    id: 6,
    name:   'QuantumEdge',
    category: 'volatility',
    shortDescription: '',
    longDescription: 'A dynamic trend-confirmation and volatility-adaptive hybrid strategy that combines Bollinger Band breakouts, ATR-smoothed trendlines, and EMA filters to identify high-probability momentum reversals with controlled risk.',
    Architecture: 'Liquidity Zones / Sweeps / Volume Spikes / Order Flow Imbalance / AI Learning',
    marketApplication: 'BTCUSD, ETHUSD, EURUSD, SP500',
    timeframes: ['M5', 'M30', 'H1', 'H4', '1D'],
    chartUrl: 'https://i.imgur.com/7Rlg9LC.png',
  },
  {
    id: 7,
    name:   'AlphaNet',
    category: 'volatility',
    shortDescription: '',
    longDescription: 'A neural-enhanced hybrid strategy combining momentum, machine learning, and regression forecasting to identify high-probability breakouts and reversals.',
    Architecture: 'Liquidity Zones / Sweeps / Volume Spikes / Order Flow Imbalance / AI Learning',
    marketApplication: 'BTCUSD, ETHUSD, EURUSD, US30',
    timeframes: ['M10', 'M15', 'M30', 'H1'],
    chartUrl: 'https://i.imgur.com/OATauk6.png',
  },
  {
    id: 9,
    name:  'Harmonic Quant',
    category: 'volatility',
    shortDescription: '',
    longDescription: 'A precision tool combining harmonic patterns with quantitative logic for advanced trade setups.',
    Architecture: 'Harmonic Patterns / Pattern Quality Filters / Statistical Validation / Reversal Zones / Momentum Confirmation / Volatility Adjustment',
    marketApplication: 'ALL',
    timeframes: ['ALL'],
    chartUrl: 'https://i.imgur.com/OPz5BQt.png',
  },
  {
    id: 10,
    name:  'All Price Action in One',
    category: 'volatility',
    shortDescription: '',
    longDescription: 'momentum with pure price action logic for cleaner signals',
    Architecture: 'Dynamic Zones / Divergence Detection / Price Structure Sync / Momentum Filters / Volatility Adaptation / Trend Confirmation',
    marketApplication: 'ALL',
    timeframes: ['ALL'],
    chartUrl: 'https://i.imgur.com/fSbeGfI.png',
  },
  {
    id: 11,
    name:  'MomentumPro',
    category: 'volatility',
    shortDescription: '',
    longDescription: 'momentum with pure price action logic for cleaner signals',
    Architecture: 'Dynamic Zones / Divergence Detection / Price Structure Sync / Momentum Filters / Volatility Adaptation / Trend Confirmation',
    marketApplication: 'ALL',
    timeframes: ['ALL'],
    chartUrl: 'https://i.imgur.com/SyMdR0Z.png',
  },
    {
    id: 12,
    name:  'StatArb Elite',
    category: 'volatility',
    shortDescription: '',
    longDescription: 'momentum with pure price action logic for cleaner signals',
    Architecture: 'Dynamic Zones / Divergence Detection / Price Structure Sync / Momentum Filters / Volatility Adaptation / Trend Confirmation',
    marketApplication: 'ALL',
    timeframes: ['ALL'],
    chartUrl: 'https://i.imgur.com/8IJvvZq.png',
  },
      {
    id: 13,
    name:  'MatCorrelation',
    category: 'volatility',
    shortDescription: '',
    longDescription: 'momentum with pure price action logic for cleaner signals',
    Architecture: 'Dynamic Zones / Divergence Detection / Price Structure Sync / Momentum Filters / Volatility Adaptation / Trend Confirmation',
    marketApplication: 'ALL',
    timeframes: ['ALL'],
    chartUrl: 'https://i.imgur.com/8Go3XOa.png',
  },
{
    id: 14,
    name:  'MatCorrelation',
    category: 'volatility',
    shortDescription: '',
    longDescription: 'momentum with pure price action logic for cleaner signals',
    Architecture: 'Dynamic Zones / Divergence Detection / Price Structure Sync / Momentum Filters / Volatility Adaptation / Trend Confirmation',
    marketApplication: 'ALL',
    timeframes: ['ALL'],
    chartUrl: 'https://i.imgur.com/8Go3XOa.png',
  },
  {
    id: 15,
    name:  'Macro-Risk',
    category: 'volatility',
    shortDescription: '',
    longDescription: 'momentum with pure price action logic for cleaner signals',
    Architecture: 'Dynamic Zones / Divergence Detection / Price Structure Sync / Momentum Filters / Volatility Adaptation / Trend Confirmation',
    marketApplication: 'ALL',
    timeframes: ['ALL'],
    chartUrl: 'https://i.imgur.com/j9Byl17.png',
  },
  
];