import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowDown, CheckCircle2 } from 'lucide-react';

const services = [
  {
    num: "01",
    title: "Websites",
    desc: "Awwwards-winning digital experiences. Fast, accessible, and stunning. We build platforms that convert.",
    plans: [
      { name: "Starter", price: "$2,500", features: ["Custom Design", "Responsive Layout", "Basic SEO", "5 Pages"] },
      { name: "Professional", price: "$5,000", features: ["Advanced Animations", "CMS Integration", "E-commerce setup", "Performance Optimization"] },
      { name: "Enterprise", price: "Custom", features: ["Full Web Application", "Custom Backend", "Ongoing Support", "Unlimited Revisions"] }
    ]
  },
  {
    num: "02",
    title: "Applications",
    desc: "Native and cross-platform apps that your users will actually want to keep on their home screen.",
    plans: [
      { name: "MVP", price: "$8,000", features: ["Core Feature Set", "Cross-Platform (React Native)", "Basic Backend", "App Store Submission"] },
      { name: "Pro App", price: "$15,000", features: ["Advanced Features", "Custom Animations", "Complex State Management", "Analytics Integration"] },
      { name: "Scale", price: "Custom", features: ["Dedicated Team", "Cloud Infrastructure", "Machine Learning integrations", "24/7 SLA"] }
    ]
  },
  {
    num: "03",
    title: "Marketing",
    desc: "Growth strategies tailored for the modern consumer. We don't just run ads, we build communities.",
    plans: [
      { name: "Kickstart", price: "$1,500/mo", features: ["Social Media Management", "2 Ad Campaigns", "Basic Analytics", "Monthly Report"] },
      { name: "Growth", price: "$3,500/mo", features: ["Omnichannel Strategy", "Content Creation", "SEO Optimization", "Weekly Syncs"] },
      { name: "Domination", price: "$8,000/mo", features: ["Full Fractional CMO", "Viral Campaigns", "Influencer Partnerships", "Daily Optimization"] }
    ]
  }
];

export default function Services() {
  const [activeService, setActiveService] = useState<number | null>(null);

  const toggleService = (index: number) => {
    setActiveService(activeService === index ? null : index);
  };

  return (
    <section id="services" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-12 justify-between items-end mb-20">
        <h2 className="font-display text-6xl md:text-8xl uppercase tracking-tighter w-full max-w-2xl leading-[0.9] text-text">
          What we <br/> <span className="text-brand">actually</span> do
        </h2>
        <p className="text-text-muted font-body max-w-xs md:pb-4 text-sm md:text-base">
          Full-stack execution from initial concept to viral launch. We are your technical co-founders. Click a service to view plans.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-border">
        {services.map((service, i) => (
          <div 
            key={i}
            onClick={() => toggleService(i)}
            className={`group border-b md:border-b-0 md:border-r border-border last:border-r-0 p-8 md:p-12 transition-colors relative cursor-pointer ${activeService === i ? 'bg-text/5' : 'hover:bg-text/5'}`}
          >
            <div className="absolute top-0 right-0 p-8">
               <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${activeService === i ? 'bg-brand text-brand-foreground rotate-180' : 'bg-text/10 text-text group-hover:bg-brand group-hover:text-brand-foreground group-hover:rotate-45'}`}>
                 <ArrowDown className="w-5 h-5" />
               </div>
            </div>
            
            <div className="transition-transform duration-500 group-hover:-translate-y-2">
              <div className="font-display text-brand text-6xl opacity-50 mb-12 transition-all duration-500 group-hover:opacity-100">{service.num}</div>
              <h3 className="font-display text-3xl uppercase tracking-tight mb-6 text-text">{service.title}</h3>
              <p className="font-body text-text-muted text-sm leading-relaxed mb-6">
                {service.desc}
              </p>
            </div>

            <AnimatePresence>
              {activeService === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-col gap-4 mt-6 pt-6 border-t border-border/50">
                    {service.plans.map((plan, pIdx) => (
                      <div key={pIdx} className="bg-bg p-5 rounded-xl border border-border/50 hover:border-brand/50 transition-colors">
                        <div className="flex justify-between items-center mb-4">
                          <h4 className="font-display text-lg uppercase tracking-tight text-text">{plan.name}</h4>
                          <span className="font-body font-semibold text-brand text-sm">{plan.price}</span>
                        </div>
                        <ul className="flex flex-col gap-2">
                          {plan.features.map((feature, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-2 text-text-muted text-xs font-body">
                              <CheckCircle2 className="w-4 h-4 text-brand shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
