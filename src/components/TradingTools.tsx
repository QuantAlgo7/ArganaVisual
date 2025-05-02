import { motion } from 'framer-motion';
import { Brain, Zap, Gauge } from 'lucide-react';

const tools = [
  {
    title: 'Neural Network Analysis',
    description: 'Advanced pattern recognition powered by deep learning algorithms.',
    icon: Brain,
    chartUrl: 'https://images.pexels.com/photos/7567476/pexels-photo-7567476.jpeg'
  },
  {
    title: 'Quantum Signal Processing',
    description: 'Real-time market signal processing using quantum-inspired algorithms.',
    icon: Zap,
    chartUrl: 'https://images.pexels.com/photos/7567567/pexels-photo-7567567.jpeg'
  },
  {
    title: 'Performance Analytics',
    description: 'Comprehensive trading analytics with institutional-grade metrics.',
    icon: Gauge,
    chartUrl: 'https://images.pexels.com/photos/7567440/pexels-photo-7567440.jpeg'
  }
];

const TradingTools = () => {
  return (
    <section className="relative w-screen overflow-hidden bg-dark">
      {/* Gradient Border Effect */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-30"></div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-30"></div>
      
      {/* Content */}
      <div className="max-w-[2000px] mx-auto px-8 py-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 bg-gradient-to-r from-accent via-primary-light to-accent bg-clip-text text-transparent">
            Trading Tools
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              <div className="relative aspect-video mb-8 overflow-hidden rounded-lg bg-dark-lighter">
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-80 z-10"></div>
                <img 
                  src={tool.chartUrl} 
                  alt={tool.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <tool.icon className="text-accent mb-3" size={32} />
                  <h3 className="text-xl font-display font-bold text-light group-hover:text-accent transition-colors">
                    {tool.title}
                  </h3>
                </div>
              </div>
              
              <p className="text-light-dark text-sm">
                {tool.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Ambient Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 pointer-events-none"></div>
    </section>
  );
};

export default TradingTools;