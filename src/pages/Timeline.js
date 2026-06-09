import { useState } from 'react';
import { motion } from 'framer-motion';
import { timelineData } from '../data/timeline';
import { Lightbulb, Wrench, BookOpen } from 'lucide-react';

const PageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.4 }
};

const getIcon = (type) => {
  switch (type.toLowerCase()) {
    case 'aprendí': return <Lightbulb size={20} className="text-secondary" />;
    case 'construí': return <Wrench size={20} className="text-primary" />;
    case 'estudio': return <BookOpen size={20} className="text-cyan-400" />;
    default: return <Wrench size={20} />;
  }
};

const categories = ['todos', 'frontend', 'backend', 'devops', 'ia'];

const Timeline = () => {
  const [filter, setFilter] = useState('todos');

  const filteredData = timelineData.filter(item => 
    filter === 'todos' ? true : item.category === filter
  );

  return (
    <motion.div {...PageTransition} className="max-w-4xl mx-auto py-12 md:py-24">
      <h2 className="text-3xl font-bold mb-8 flex items-center space-x-4">
        <span className="text-primary font-mono text-sm">03.</span>
        <span>Timeline</span>
      </h2>

      <div className="flex flex-wrap gap-2 mb-12">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 text-sm font-mono uppercase tracking-wider transition-colors border ${
              filter === cat 
                ? 'bg-white text-black border-white' 
                : 'border-white/20 text-white/60 hover:text-white hover:border-white/50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="relative border-l border-white/10 ml-4 md:ml-0 pl-8 md:pl-12 space-y-16">
        {filteredData.map((node, index) => (
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            key={index} 
            className="relative"
          >
            <div className="absolute -left-[41px] md:-left-[57px] top-1 p-2 rounded-full bg-[var(--color-brand-bg)] border border-white/10">
              {getIcon(node.type)}
            </div>
            
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
              <h3 className="text-xl font-bold text-white mb-1 md:mb-0">{node.title}</h3>
              <span className="text-primary font-mono text-sm">{node.year}</span>
            </div>
            
            <span className="inline-block px-2 py-1 bg-white/5 text-xs font-mono text-white/50 uppercase tracking-wider mb-4 border border-white/5">
              {node.type}
            </span>
            
            <p className="text-white/70 leading-relaxed">
              {node.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Timeline;
