import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    id: "websites",
    num: "01",
    title: "Websites",
    desc: "Awwwards-winning digital experiences. Fast, accessible, and stunning. We build platforms that convert.",
  },
  {
    id: "applications",
    num: "02",
    title: "Applications",
    desc: "Native and cross-platform apps that your users will actually want to keep on their home screen.",
  },
  {
    id: "marketing",
    num: "03",
    title: "Marketing",
    desc: "Growth strategies tailored for the modern consumer. We don't just run ads, we build communities.",
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-12 justify-between items-end mb-20">
        <h2 className="font-display text-4xl sm:text-6xl md:text-8xl uppercase tracking-tighter w-full max-w-2xl leading-[1.0] sm:leading-[0.9] text-text">
          What we <br/> <span className="text-brand">actually</span> do
        </h2>
        <p className="text-text-muted font-body max-w-xs md:pb-4 text-sm md:text-base">
          Full-stack execution from initial concept to viral launch. We are your technical co-founders. Click a service to view plans and projects.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-border">
        {services.map((service, i) => (
          <Link 
            key={i}
            to={`/services/${service.id}`}
            className="group border-b md:border-b-0 md:border-r border-border last:border-r-0 p-8 md:p-12 transition-colors relative cursor-pointer hover:bg-text/5 block"
          >
            <div className="absolute top-0 right-0 p-8">
               <div className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 bg-text/10 text-text group-hover:bg-brand group-hover:text-brand-foreground group-hover:-rotate-45">
                 <ArrowRight className="w-5 h-5" />
               </div>
            </div>
            
            <div className="transition-transform duration-500 group-hover:-translate-y-2">
              <div className="font-display text-brand text-6xl opacity-50 mb-12 transition-all duration-500 group-hover:opacity-100">{service.num}</div>
              <h3 className="font-display text-3xl uppercase tracking-tight mb-6 text-text">{service.title}</h3>
              <p className="font-body text-text-muted text-sm leading-relaxed mb-6">
                {service.desc}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
