import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const TradingViewChart = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load TradingView widget script
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    script.onload = initWidget;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const initWidget = () => {
    if (containerRef.current && window.TradingView) {
      new window.TradingView.widget({
        width: containerRef.current.offsetWidth,
        height: 500,
        symbol: 'BINANCE:BTCUSDT',
        interval: '30',
        timezone: 'Etc/UTC',
        theme: 'dark',
        style: '1',
        locale: 'en',
        toolbar_bg: '#121212',
        enable_publishing: false,
        hide_top_toolbar: false,
        hide_legend: false,
        save_image: false,
        container_id: 'tradingview-widget',
        backgroundColor: '#121212',
        gridColor: '#1E1E1E',
      });
    }
  };

  return (
    <section id="chart" className="section bg-dark-light relative">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">
              Live Market Analysis
            </h2>
            <p className="text-light-dark max-w-2xl">
              Real-time data visualization powered by our algorithmic intelligence. Track market movements with institutional-grade tools.
            </p>
          </div>
          <a href="#" className="flex items-center text-accent mt-4 md:mt-0 hover:underline">
            <span>Advanced Analytics</span>
            <ArrowRight size={16} className="ml-2" />
          </a>
        </div>

        <div 
          className="rounded-xl overflow-hidden border border-dark-lighter bg-dark-card"
          style={{ boxShadow: '0 8px 30px rgba(0, 0, 0, 0.5)' }}
        >
          <div 
            ref={containerRef} 
            id="tradingview-widget"
            style={{ height: '500px' }}
            className="w-full"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default TradingViewChart;

// Add TypeScript declaration for TradingView
declare global {
  interface Window {
    TradingView: any;
  }
}