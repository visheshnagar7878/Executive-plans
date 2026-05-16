import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: "NEON DREAMS",
    category: "E-Commerce Experience",
    color: "bg-purple-600",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop"
  },
  {
    title: "VIRTUAL X",
    category: "SaaS Platform",
    color: "bg-blue-600",
    image: "https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?q=80&w=2000&auto=format&fit=crop"
  },
  {
    title: "STREETWEAR CULT",
    category: "Mobile App",
    color: "bg-red-600",
    image: "https://images.unsplash.com/photo-1523398002811-999aa8d9512e?q=80&w=2000&auto=format&fit=crop"
  }
];

export default function Work() {
  return (
    <section id="work" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-20 border-b border-border pb-12">
        <h2 className="font-display text-6xl md:text-8xl uppercase tracking-tighter leading-[0.9] text-text">
          Selected<br/>Works
        </h2>
        <a href="#" className="hidden md:flex items-center gap-4 group font-body uppercase tracking-widest text-sm font-medium hover:text-brand transition-colors text-text">
          View All Archives
          <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:border-brand transition-colors">
            <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform" />
          </div>
        </a>
      </div>

      <div className="flex flex-col gap-12 md:gap-24">
        {projects.map((project, i) => (
          <div key={i} className="group cursor-pointer">
            <div className={`w-full aspect-[4/3] md:aspect-[21/9] rounded-3xl md:rounded-[40px] overflow-hidden relative mb-8`}>
               <div className="absolute inset-0 bg-text/10 group-hover:bg-transparent transition-colors z-10" />
               <motion.img 
                 src={project.image} 
                 alt={project.title}
                 className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                 whileHover={{ scale: 1.05 }}
                 transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
               />
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                 <div className="w-32 h-32 rounded-full bg-brand text-brand-foreground flex items-center justify-center font-display text-xl uppercase tracking-widest rotate-12 group-hover:rotate-0 transition-transform duration-500">
                   View
                 </div>
               </div>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 px-4 text-text">
              <h3 className="font-display text-4xl md:text-5xl uppercase tracking-tight group-hover:text-brand transition-colors">{project.title}</h3>
              <p className="font-body text-text-muted uppercase tracking-widest text-sm font-medium">{project.category}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
