import { motion } from 'framer-motion';
import { profileData } from '../data/profile';
import { BookOpen, Cpu, Globe } from 'lucide-react';

const PageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.4 }
};

const About = () => {
  return (
    <motion.div {...PageTransition} className="max-w-4xl mx-auto py-12 md:py-24">
      <h2 className="text-3xl font-bold mb-12 flex items-center space-x-4">
        <span className="text-primary font-mono text-sm">02.</span>
        <span>Sobre mí</span>
      </h2>

      <div className="space-y-16">
        <section className="space-y-4 text-lg text-white/80 leading-relaxed">
          <p>{profileData.about.history}</p>
        </section>

        <section className="p-8 border border-primary/20 bg-primary/5 relative">
          <Globe className="absolute top-4 right-4 text-primary/20" size={64} />
          <h3 className="text-xl font-serif font-bold text-white mb-4">Filosofía de construcción</h3>
          <p className="text-white/80 leading-relaxed relative z-10">
            {profileData.about.philosophy}
          </p>
        </section>

        <section>
          <h3 className="text-xl font-bold text-white mb-6 flex items-center space-x-3">
            <BookOpen className="text-secondary" size={24} />
            <span>En este momento</span>
          </h3>
          <div className="p-6 border border-white/10 bg-white/5">
            <p className="text-white/80 leading-relaxed">
              {profileData.about.currently}
            </p>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default About;
