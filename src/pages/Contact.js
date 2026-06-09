import { motion } from 'framer-motion';
import { profileData } from '../data/profile';
import { Mail, ArrowRight } from 'lucide-react';

const PageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.4 }
};

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Contact = () => {
  return (
    <motion.div {...PageTransition} className="max-w-3xl mx-auto py-12 md:py-32 text-center">
      <h2 className="text-primary font-mono text-sm tracking-wider uppercase mb-6">
        05. ¿Qué sigue?
      </h2>
      <h1 className="text-4xl md:text-6xl font-serif font-bold mb-8">
        Inicia la conversación
      </h1>
      <p className="text-lg text-white/70 leading-relaxed max-w-2xl mx-auto mb-16">
        Mi bandeja de entrada siempre está abierta. Ya sea para una pregunta, una colaboración, o simplemente para charlar sobre RAGs, IA local o arquitecturas de software corporativas.
      </p>
      
      <a 
        href={`mailto:${profileData.contact.email}`}
        className="inline-flex items-center space-x-3 bg-primary hover:bg-primary/90 text-white font-medium px-10 py-5 rounded-none transition-all group mb-24"
      >
        <span>Enviarme un correo</span>
        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
      </a>

      <div className="flex items-center justify-center space-x-8 border-t border-white/10 pt-12">
        <a 
          href={profileData.contact.github} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white/60 hover:text-white hover:-translate-y-1 transition-all"
        >
          <GithubIcon />
          <span className="sr-only">GitHub</span>
        </a>
        <a 
          href={profileData.contact.linkedin} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white/60 hover:text-[#0A66C2] hover:-translate-y-1 transition-all"
        >
          <LinkedinIcon />
          <span className="sr-only">LinkedIn</span>
        </a>
        <a 
          href={`mailto:${profileData.contact.email}`}
          className="text-white/60 hover:text-primary hover:-translate-y-1 transition-all"
        >
          <Mail size={24} />
          <span className="sr-only">Email</span>
        </a>
      </div>
    </motion.div>
  );
};

export default Contact;
