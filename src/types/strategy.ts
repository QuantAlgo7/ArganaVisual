export interface Strategy {
  id: number;
  name: string;
  shortDescription: string;
  longDescription: string;
  indicatorArchitecture: string; // Changed from logicDescription
  marketApplication: string;
  timeframes: string[];
  chartUrl: string;
  category: 'momentum' | 'mean-reversion' | 'volatility' | 'arbitrage';
  metrics: {
    sharpe: number;
    cagr: number;
    maxDrawdown: number;
    winRate: number;
    sortino: number;
    alpha: number;
  };
}