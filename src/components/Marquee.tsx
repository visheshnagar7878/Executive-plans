import { motion } from 'motion/react';
import React from 'react';

export default function Marquee() {
  const texts = [
    "NO BORING SHIT",
    "WE BREAK RULES",
    "GEN-Z OPTIMIZED",
    "DESIGN MEETS CODE",
    "EXECUTIVE PLANS",
  ];

  return (
    <section className="py-24 md:py-40 bg-brand text-brand-foreground overflow-hidden flex items-center transform -skew-y-3 origin-botom-left relative z-10 transition-colors">
      <div className="flex whitespace-nowrap">
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={i}
            className="flex items-center gap-8 md:gap-16 pr-8 md:pr-16"
            animate={{ x: "-100%" }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 20,
            }}
          >
            {texts.map((text, idx) => (
              <React.Fragment key={idx}>
                <span className="font-display text-5xl md:text-8xl tracking-tight uppercase">
                  {text}
                </span>
                <span className="w-4 h-4 md:w-6 md:h-6 bg-brand-foreground rounded-full" />
              </React.Fragment>
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
