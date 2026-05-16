import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden pt-20 transition-colors">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="z-10 text-center flex flex-col items-center">
        <div className="overflow-hidden mb-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-brand font-body text-sm md:text-base font-semibold tracking-[0.2em] uppercase"
          >
            Digital Agency for New Business
          </motion.div>
        </div>

        <h1 className="font-display text-[15vw] md:text-[12vw] leading-[0.8] uppercase tracking-tighter text-text flex flex-col items-center">
          <div className="overflow-hidden">
            <motion.span
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="block"
            >
              WE BUILD
            </motion.span>
          </div>
          <div className="overflow-hidden flex items-center gap-4 md:gap-8">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '10vw' }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
              className="h-[1vw] bg-brand hidden md:block"
            />
            <motion.span
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="block"
            >
              FUTURES
            </motion.span>
          </div>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12 text-text-muted max-w-sm text-center font-body text-sm md:text-base leading-relaxed"
        >
          Websites, Apps, and Marketing that don't suck. We translate your chaotic vision into digital reality.
        </motion.p>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-text-muted flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <span className="text-[10px] uppercase tracking-widest font-body">Scroll down</span>
        <div className="w-[1px] h-12 bg-border relative overflow-hidden">
          <motion.div
            className="w-full h-full bg-brand"
            animate={{ y: ['-100%', '100%'] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
          />
        </div>
      </motion.div>
    </section>
  );
}
