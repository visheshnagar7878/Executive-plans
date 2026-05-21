import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Magnetic from './Magnetic';

export default function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center text-center">
      <div className="w-4 h-4 bg-brand rounded-full mb-8 animate-pulse" />
      <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tighter leading-tight max-w-4xl text-text">
        We are a collective of digital natives, obsessed with pushing the boundaries of what's possible on the web.
      </h2>
      <p className="mt-8 font-body text-text-muted max-w-2xl leading-relaxed">
        Based out of nowhere and everywhere. We work with ambitious brands to create experiences that don't just exist, but dominate. No templates. No fluff. Just raw execution and strategic brilliance.
      </p>
      <div className="mt-12">
        <Magnetic>
          <Link
            to="/about"
            className="flex items-center gap-4 group font-body uppercase tracking-widest text-sm font-medium hover:text-brand transition-colors text-text border border-border/60 rounded-full px-8 py-4 bg-text/5 backdrop-blur-sm shadow-sm"
          >
            Meet the Builders & Manifesto
            <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover:border-brand transition-colors bg-bg">
              <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform" />
            </div>
          </Link>
        </Magnetic>
      </div>
    </section>
  );
}
