import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navLinks = ['Services', 'Work', 'About'];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl px-6 py-4 flex justify-between items-center z-50 transition-colors bg-bg/60 backdrop-blur-xl border border-border/50 rounded-full shadow-lg shadow-black/5"
      >
        <a 
          href="#" 
          onClick={scrollToTop}
          className="font-display text-xl md:text-2xl uppercase tracking-tighter text-text leading-none flex items-center hover:scale-105 transition-transform"
        >
          EXECUTIVE<span className="hidden md:inline ml-1 text-brand">PLANS</span>
        </a>
        
        <div className="hidden md:flex gap-8 items-center text-sm font-body font-medium uppercase tracking-widest text-text">
          {navLinks.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="group relative py-1 hover:text-brand transition-colors">
              {item}
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-brand origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <button 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="w-10 h-10 rounded-full bg-text/5 flex items-center justify-center backdrop-blur-md border border-text/10 hover:bg-brand hover:text-brand-foreground hover:border-brand transition-colors text-text"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          
          <button 
            className="md:hidden w-10 h-10 rounded-full bg-text/5 flex items-center justify-center backdrop-blur-md border border-text/10 hover:bg-brand hover:text-brand-foreground hover:border-brand transition-colors text-text"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-bg/95 backdrop-blur-3xl flex flex-col items-center justify-center pt-20"
          >
            <div className="flex flex-col gap-8 text-center">
              {navLinks.map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-display text-4xl uppercase tracking-tighter text-text hover:text-brand transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
