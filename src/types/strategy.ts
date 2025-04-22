export interface Strategy {
  id: number;
  name: string;
  shortDescription: string;
  longDescription: string;
  logicDescription: string;
  marketApplication: string;
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