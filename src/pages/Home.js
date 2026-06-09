import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { profileData } from '../data/profile';
import { skillsData } from '../data/skills';
import { ArrowRight, Code2, Database, Terminal, Cpu } from 'lucide-react';

const PageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.4 }
};

const getCategoryIcon = (category) => {
  switch (category.toLowerCase()) {
    case 'frontend': return <Code2 size={16} className="text-secondary" />;
    case 'backend': return <Terminal size={16} className="text-primary" />;
    case 'base de datos': return <Database size={16} className="text-emerald-400" />;
    case 'devops': return <Cpu size={16} className="text-rose-400" />;
    case 'ia': return <Cpu size={16} className="text-cyan-400" />;
    default: return <Code2 size={16} />;
  }
};

const getLevelColor = (level) => {
  switch (level.toLowerCase()) {
    case 'fluido': return 'bg-primary/20 text-primary border-primary/30';
    case 'cómodo': return 'bg-secondary/20 text-secondary border-secondary/30';
    case 'explorando': return 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30';
    default: return 'bg-white/10 text-white';
  }
};

const Home = () => {
  return (
    <motion.div {...PageTransition} className="max-w-5xl mx-auto py-12 md:py-24">
      {/* Hero Section */}
      <div className="space-y-6 mb-24">
        <h2 className="text-primary font-mono text-sm tracking-wider uppercase">
          Hola, mi nombre es
        </h2>
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          {profileData.name}. <br />
          <span className="text-muted">{profileData.role}.</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted font-serif italic max-w-3xl leading-relaxed">
          {profileData.tagline}
        </p>
        
        <div className="pt-8">
          <Link 
            to="/timeline" 
            className="inline-flex items-center space-x-2 bg-primary hover:bg-primary/90 text-white font-medium px-8 py-4 rounded-none transition-all group"
          >
            <span>Explora mi camino</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Progress Bar / Journey snippet */}
      <div className="border-l border-white/10 pl-6 space-y-12 mb-24">
        <div className="relative">
          <div className="absolute -left-[29px] top-1 h-4 w-4 rounded-full bg-primary ring-4 ring-[var(--color-brand-bg)]" />
          <p className="text-sm font-mono text-muted mb-2">Años construyendo</p>
          <h3 className="text-2xl font-serif">3+ años de experiencia</h3>
        </div>
        <div className="relative">
          <div className="absolute -left-[29px] top-1 h-4 w-4 rounded-full bg-secondary ring-4 ring-[var(--color-brand-bg)]" />
          <p className="text-sm font-mono text-muted mb-2">Tecnologías core</p>
          <h3 className="text-2xl font-serif">Python, .NET, React, SQL</h3>
        </div>
        <div className="relative">
          <div className="absolute -left-[29px] top-1 h-4 w-4 rounded-full bg-cyan-500 ring-4 ring-[var(--color-brand-bg)]" />
          <p className="text-sm font-mono text-muted mb-2">Actualmente aprendiendo</p>
          <h3 className="text-2xl font-serif">LLMs locales (Ollama), RAGs, Self-hosting</h3>
        </div>
      </div>

      {/* Skills Grid */}
      <div>
        <h3 className="text-2xl font-bold mb-8 flex items-center space-x-4">
          <span className="text-primary font-mono text-sm">01.</span>
          <span>Stack Técnico</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillsData.map((skill, index) => (
            <div 
              key={index}
              className="p-4 border border-white/5 bg-white/5 backdrop-blur-sm flex flex-col justify-between hover:border-white/20 transition-colors"
            >
              <div className="flex items-center space-x-3 mb-4">
                {getCategoryIcon(skill.category)}
                <span className="font-medium text-white/90">{skill.name}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-muted uppercase">{skill.category}</span>
                <span className={`text-xs px-2 py-1 border ${getLevelColor(skill.level)}`}>
                  {skill.level}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
