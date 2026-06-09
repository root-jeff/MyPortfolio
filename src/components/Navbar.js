import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Inicio', path: '/' },
    { name: 'Sobre Mí', path: '/sobre-mi' },
    { name: 'Timeline', path: '/timeline' },
    { name: 'Proyectos', path: '/proyectos' },
    { name: 'Contacto', path: '/contacto' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-[var(--color-brand-bg)]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex items-center justify-between h-20">
          <NavLink to="/" className="text-xl font-serif font-bold tracking-wider hover:text-primary transition-colors">
            JP.
          </NavLink>

          {/* Desktop */}
          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `relative text-sm font-medium transition-colors ${
                    isActive ? 'text-white' : 'text-muted hover:text-white'
                  }`
                }
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 top-full mt-1 h-[2px] w-full bg-primary"
                  />
                )}
              </NavLink>
            ))}
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-primary transition-colors p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute w-full bg-[var(--color-brand-bg)] border-b border-white/5 shadow-2xl"
          >
            <div className="px-6 py-4 space-y-4">
              {links.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block text-base font-medium ${
                      isActive ? 'text-primary' : 'text-muted'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
