import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useEffect } from 'react';
import FlowingRiver from '../components/FlowingRiver';

const serviceData = {
  websites: {
    title: "Websites",
    desc: "Awwwards-winning digital experiences. Fast, accessible, and stunning. We build platforms that convert.",
    plans: [
      { name: "Starter", price: "$2,500", features: ["Custom Design", "Responsive Layout", "Basic SEO", "5 Pages"] },
      { name: "Professional", price: "$5,000", features: ["Advanced Animations", "CMS Integration", "E-commerce setup", "Performance Optimization"] },
      { name: "Enterprise", price: "Custom", features: ["Full Web Application", "Custom Backend", "Ongoing Support", "Unlimited Revisions"] }
    ],
    projects: [
      {
        title: "NEON DREAMS",
        category: "E-Commerce Experience",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop"
      },
      {
        title: "CREATIVE FOLIO",
        category: "Portfolio Website",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop"
      }
    ]
  },
  applications: {
    title: "Applications",
    desc: "Native and cross-platform apps that your users will actually want to keep on their home screen.",
    plans: [
      { name: "MVP", price: "$8,000", features: ["Core Feature Set", "Cross-Platform (React Native)", "Basic Backend", "App Store Submission"] },
      { name: "Pro App", price: "$15,000", features: ["Advanced Features", "Custom Animations", "Complex State Management", "Analytics Integration"] },
      { name: "Scale", price: "Custom", features: ["Dedicated Team", "Cloud Infrastructure", "Machine Learning integrations", "24/7 SLA"] }
    ],
    projects: [
      {
        title: "VIRTUAL X",
        category: "SaaS Platform",
        image: "https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?q=80&w=2000&auto=format&fit=crop"
      },
      {
        title: "STREETWEAR CULT",
        category: "Mobile App",
        image: "https://images.unsplash.com/photo-1523398002811-999aa8d9512e?q=80&w=2000&auto=format&fit=crop"
      }
    ]
  },
  marketing: {
    title: "Marketing",
    desc: "Growth strategies tailored for the modern consumer. We don't just run ads, we build communities.",
    plans: [
      { name: "Kickstart", price: "$1,500/mo", features: ["Social Media Management", "2 Ad Campaigns", "Basic Analytics", "Monthly Report"] },
      { name: "Growth", price: "$3,500/mo", features: ["Omnichannel Strategy", "Content Creation", "SEO Optimization", "Weekly Syncs"] },
      { name: "Domination", price: "$8,000/mo", features: ["Full Fractional CMO", "Viral Campaigns", "Influencer Partnerships", "Daily Optimization"] }
    ],
    projects: [
      {
        title: "GLOBAL REACH",
        category: "Ad Campaign",
        image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=2000&auto=format&fit=crop"
      },
      {
        title: "SOCIAL BUZZ",
        category: "Social Media Strategy",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2000&auto=format&fit=crop"
      }
    ]
  }
};

export default function ServiceDetail() {
  const { serviceId } = useParams<{ serviceId: string }>();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  const service = serviceId && serviceId in serviceData ? serviceData[serviceId as keyof typeof serviceData] : null;

  if (!service) {
    return (
      <div className="min-h-screen pt-32 px-6 flex flex-col items-center justify-center relative z-0">
        <FlowingRiver />
        <h1 className="font-display text-4xl text-text mb-6">Service not found</h1>
        <Link to="/#services" className="text-brand flex items-center gap-2 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to Services
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto min-h-screen relative z-0">
      <FlowingRiver />
      <div className="relative z-10">
        <Link to="/#services" className="inline-flex items-center gap-2 text-text-muted hover:text-brand transition-colors mb-12 font-body uppercase tracking-widest text-sm">
          <ArrowLeft className="w-4 h-4" /> Back to Services
        </Link>

        <div className="mb-20">
          <h1 className="font-display text-6xl md:text-8xl uppercase tracking-tighter leading-[0.9] text-text mb-6">
            {service.title}
          </h1>
          <p className="font-body text-text-muted text-xl max-w-2xl leading-relaxed">
            {service.desc}
          </p>
        </div>

        <div className="mb-32">
        <h2 className="font-display text-4xl uppercase tracking-tight text-text mb-12 border-b border-border pb-6">
          Pricing & Plans
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {service.plans.map((plan, idx) => (
            <div key={idx} className="bg-bg/80 backdrop-blur-md p-8 rounded-2xl border border-border shadow-2xl shadow-black/5 hover:border-brand transition-all duration-500 flex flex-col h-full relative z-10">
              <div className="mb-8">
                <h4 className="font-display text-2xl uppercase tracking-tight text-text mb-2">{plan.name}</h4>
                <span className="font-body font-bold text-brand text-2xl">{plan.price}</span>
              </div>
              <ul className="flex flex-col gap-4 mb-8 flex-grow">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 text-text-muted font-body">
                    <CheckCircle2 className="w-5 h-5 text-brand shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 rounded-xl bg-brand text-brand-foreground font-body uppercase tracking-widest text-sm hover:scale-[1.02] active:scale-[0.98] transition-all mt-auto shadow-lg shadow-brand/20 font-bold">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="flex justify-between items-end mb-12 border-b border-border pb-6">
          <h2 className="font-display text-4xl uppercase tracking-tight text-text">
            Related Projects
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {service.projects.map((project, i) => (
            <div key={i} className="group cursor-pointer">
              <div className={`w-full aspect-[4/3] rounded-3xl overflow-hidden relative mb-6`}>
                 <div className="absolute inset-0 bg-text/10 group-hover:bg-transparent transition-colors z-10" />
                 <motion.img 
                   src={project.image} 
                   alt={project.title}
                   className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                   whileHover={{ scale: 1.05 }}
                   transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                 />
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                   <div className="w-24 h-24 rounded-full bg-brand text-brand-foreground flex items-center justify-center font-display text-lg uppercase tracking-widest rotate-12 group-hover:rotate-0 transition-transform duration-500">
                     View
                   </div>
                 </div>
              </div>
              
              <div className="flex flex-col justify-between items-start gap-2 px-2 text-text">
                <h3 className="font-display text-3xl uppercase tracking-tight group-hover:text-brand transition-colors">{project.title}</h3>
                <p className="font-body text-text-muted uppercase tracking-widest text-xs font-medium">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}
