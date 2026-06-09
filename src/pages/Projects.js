import { useState } from 'react';
import { motion } from 'framer-motion';
import { projectsData } from '../data/projects';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

const PageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.4 }
};

const Projects = () => {
  // Extract all unique stacks
  const allTechs = Array.from(new Set(projectsData.flatMap(p => p.stack)));
  const [filter, setFilter] = useState('todas');

  const filteredProjects = projectsData.filter(p => 
    filter === 'todas' ? true : p.stack.includes(filter)
  );

  return (
    <motion.div {...PageTransition} className="max-w-6xl mx-auto py-12 md:py-24">
      <h2 className="text-3xl font-bold mb-8 flex items-center space-x-4">
        <span className="text-primary font-mono text-sm">04.</span>
        <span>Proyectos</span>
      </h2>

      <div className="flex flex-wrap gap-2 mb-12">
        <button
          onClick={() => setFilter('todas')}
          className={`px-3 py-1 text-xs font-mono uppercase transition-colors border ${
            filter === 'todas' 
              ? 'bg-primary text-white border-primary' 
              : 'border-white/20 text-white/60 hover:text-white hover:border-white/50'
          }`}
        >
          Todas
        </button>
        {allTechs.map(tech => (
          <button
            key={tech}
            onClick={() => setFilter(tech)}
            className={`px-3 py-1 text-xs font-mono transition-colors border ${
              filter === tech 
                ? 'bg-secondary text-black border-secondary' 
                : 'border-white/20 text-white/60 hover:text-white hover:border-white/50'
            }`}
          >
            {tech}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <div key={project.id} className="border border-white/10 bg-white/5 flex flex-col group hover:border-white/20 transition-all">
            <div className="p-8 flex-grow">
              <h3 className="text-2xl font-serif font-bold text-white mb-4 group-hover:text-primary transition-colors">
                {project.name}
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-mono text-muted uppercase tracking-wider mb-2 flex items-center gap-2">
                    <AlertCircle size={14} /> Problema
                  </h4>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-mono text-muted uppercase tracking-wider mb-2 flex items-center gap-2">
                    <CheckCircle2 size={14} /> Aprendizaje
                  </h4>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {project.learned}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <h4 className="text-xs font-mono text-secondary uppercase tracking-wider mb-2">
                    Honestidad: Qué haría diferente
                  </h4>
                  <p className="text-white/60 text-sm italic">
                    "{project.differentToday}"
                  </p>
                </div>
              </div>
            </div>
            
            <div className="px-8 py-4 bg-black/20 border-t border-white/5 flex flex-wrap gap-2 items-center">
              {project.stack.map(tech => (
                <span key={tech} className="text-xs font-mono text-white/50">
                  #{tech.toLowerCase().replace(/\s+/g, '-')}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
