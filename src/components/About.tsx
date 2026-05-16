import { motion } from 'motion/react';

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
    </section>
  );
}
