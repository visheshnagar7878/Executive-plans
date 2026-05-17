import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'motion/react';
import { Settings } from 'lucide-react';

// Welding Torch Emitter with Smoke and Intense Flashes
const WeldingTorch = ({ className, angleOffset = 0 }: { className?: string, angleOffset?: number }) => {
  const [sparks, setSparks] = useState<number[]>([]);
  const [smoke, setSmoke] = useState<number[]>([]);
  const flashControls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      // Trigger a massive burst of sparks
      const numSparks = Math.floor(Math.random() * 30) + 20;
      setSparks(Array.from({ length: numSparks }, (_, i) => Date.now() + i));
      
      // Trigger a puff of smoke occasionally
      if (Math.random() > 0.4) {
        setSmoke((prev) => [...prev, Date.now()]);
      }

      // Trigger intense ambient light flash
      flashControls.start({
        opacity: [0, 0.8, 0.2, 1, 0],
        scale: [1, 1.5, 1.2, 2, 1],
        transition: { duration: 0.3 }
      });
      
      setTimeout(() => setSparks([]), 1500);
      setTimeout(() => setSmoke([]), 4000); // Smoke lasts longer
    }, Math.random() * 800 + 400);

    return () => clearInterval(interval);
  }, [flashControls]);

  return (
    <div className={`absolute w-10 h-10 flex items-center justify-center ${className}`}>
      {/* Ambient flash lighting when welding */}
      <motion.div 
        className="absolute w-32 h-32 bg-blue-500/20 rounded-full blur-[30px] pointer-events-none z-0"
        initial={{ opacity: 0 }}
        animate={flashControls}
      />

      {/* Intense center light of the weld */}
      <motion.div 
        className="absolute w-8 h-8 bg-blue-100 rounded-full blur-[6px] z-20" 
        animate={{ scale: [1, 1.4, 0.8, 1.2, 1], opacity: [0.7, 1, 0.5, 1, 0.8] }}
        transition={{ duration: 0.1, repeat: Infinity, repeatType: "mirror" }}
      />
      <div className="absolute w-3 h-3 bg-white rounded-full shadow-[0_0_40px_20px_rgba(59,130,246,1)] z-30" />
      
      {/* Smoke */}
      {smoke.map((id) => (
        <motion.div
          key={`smoke-${id}`}
          className="absolute w-16 h-16 bg-neutral-500/10 rounded-full blur-[15px] z-10"
          initial={{ x: 0, y: 0, scale: 0.5, opacity: 0.5 }}
          animate={{
            y: -150 - Math.random() * 100,
            x: (Math.random() - 0.5) * 100,
            scale: [0.5, 3, 5],
            opacity: [0.5, 0.2, 0]
          }}
          transition={{ duration: 3, ease: "easeOut" }}
        />
      ))}

      {/* Sparks */}
      {sparks.map((id) => {
        const baseAngle = (Math.random() * 90 - 45); 
        const finalAngle = (baseAngle + angleOffset) * (Math.PI / 180);
        
        // Faster velocity
        const velocity = Math.random() * 450 + 150; 
        
        const targetX = Math.sin(finalAngle) * velocity;
        const initialYVelocity = -Math.cos(finalAngle) * velocity;
        const gravityDrop = Math.random() * 300 + 150; 

        const size = Math.random() * 5 + 2;
        const colors = ['#fef08a', '#fb923c', '#ffffff', '#eab308'];
        const sparkColor = colors[Math.floor(Math.random() * colors.length)];

        // Simulate motion blur by stretching the spark slightly based on angle
        const rotation = Math.atan2(initialYVelocity, targetX) * (180 / Math.PI);

        return (
          <motion.div
            key={`spark-${id}`}
            className="absolute rounded-full z-20"
            style={{ 
              width: size * 2, // stretched
              height: size * 0.5, // thinned
              backgroundColor: sparkColor, 
              boxShadow: `0 0 ${size * 4}px ${sparkColor}`,
              rotate: rotation
            }}
            initial={{ x: 0, y: 0, opacity: 1 }}
            animate={{ 
              x: [0, targetX * 0.8, targetX], 
              y: [0, initialYVelocity * 0.8, initialYVelocity + gravityDrop], 
              opacity: [1, 1, 0],
              scale: [1, Math.random() * 0.5 + 0.5, 0]
            }}
            transition={{ 
              duration: Math.random() * 0.4 + 0.3,
              ease: "easeOut",
              times: [0, 0.4, 1] 
            }}
          />
        );
      })}
    </div>
  );
};

// Flickering Text Component
const FlickeringText = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <motion.div
      className={className}
      animate={{ opacity: [1, 1, 0.4, 1, 0.8, 1, 1, 0.2, 1] }}
      transition={{ 
        duration: Math.random() * 2 + 2, 
        repeat: Infinity, 
        repeatType: "mirror",
        times: [0, 0.1, 0.15, 0.2, 0.25, 0.3, 0.8, 0.85, 1]
      }}
    >
      {children}
    </motion.div>
  );
};

export default function ConstructionZone() {
  return (
    <section className="relative w-full py-24 md:py-48 overflow-hidden bg-[#030303] border-y-8 border-yellow-500 flex flex-col items-center justify-center min-h-[500px] md:min-h-[700px]">
      
      {/* Animated Caution Tape Top */}
      <motion.div 
        className="absolute top-0 left-0 w-[200%] h-4 opacity-[0.3] z-0"
        style={{ 
          backgroundImage: 'repeating-linear-gradient(45deg, #eab308, #eab308 30px, #000 30px, #000 60px)',
        }}
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      />
      
      {/* Animated Caution Tape Bottom */}
      <motion.div 
        className="absolute bottom-0 left-0 w-[200%] h-4 opacity-[0.3] z-0"
        style={{ 
          backgroundImage: 'repeating-linear-gradient(-45deg, #eab308, #eab308 30px, #000 30px, #000 60px)',
        }}
        animate={{ x: ['-50%', '0%'] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      />

      {/* Giant Background Gears - Interlocking */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-20 scale-50 md:scale-100">
        <motion.div 
          className="absolute text-neutral-800"
          style={{ x: -250, y: -100 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          <Settings size={600} strokeWidth={0.5} />
        </motion.div>
        
        <motion.div 
          className="absolute text-neutral-800"
          style={{ x: 250, y: 150 }}
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          <Settings size={600} strokeWidth={0.5} />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center flex flex-col items-center">
        <FlickeringText className="mb-6 drop-shadow-[0_0_30px_rgba(234,179,8,0.4)]">
          <h2 className="font-display text-4xl md:text-7xl font-black uppercase tracking-tighter text-yellow-500 leading-none">
            System
            <br />
            Under
            <br />
            Construction
          </h2>
        </FlickeringText>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p className="font-body text-yellow-400/80 text-xs md:text-sm max-w-md mx-auto uppercase tracking-[0.4em] border border-yellow-500/30 py-3 px-8 rounded-sm bg-yellow-500/10 backdrop-blur-md shadow-[0_0_20px_rgba(234,179,8,0.1)]">
            Warning // Heavy Machinery
          </p>
        </motion.div>
      </div>

      {/* Welding Torches */}
      <WeldingTorch className="bottom-8 md:bottom-16 left-1/2 -translate-x-1/2" angleOffset={0} />
      <WeldingTorch className="top-10 left-5 md:left-10" angleOffset={135} />
      <WeldingTorch className="top-20 right-5 md:right-10" angleOffset={-135} />
      
      {/* Desktop only torches to save mobile performance */}
      <div className="hidden md:block">
        <WeldingTorch className="bottom-32 left-32" angleOffset={45} />
        <WeldingTorch className="bottom-24 right-24" angleOffset={-45} />

        {/* Additional sparks in the background to add depth */}
        <WeldingTorch className="top-1/2 left-10 opacity-30 blur-[2px] scale-75" angleOffset={90} />
        <WeldingTorch className="top-1/3 right-10 opacity-30 blur-[2px] scale-75" angleOffset={-90} />
      </div>

    </section>
  );
}
