import { ArrowUpRight, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative z-10 bg-text text-bg pt-32 pb-12 px-6 md:px-12 rounded-t-[40px] md:rounded-t-[80px] mt-20 transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-24 md:mb-32 border-b border-bg/10 pb-20">
          <div className="w-full md:w-1/2">
            <h2 className="font-display text-[15vw] md:text-[8vw] leading-[0.85] uppercase tracking-tighter mb-8">
              LET'S<br />TALK
            </h2>
            <p className="font-body text-bg/70 max-w-sm mb-12">
              Ready to disrupt your industry? Drop your email below and we'll get back to you within 24 hours.
            </p>
            <form className="flex items-center gap-2 max-w-md" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="hello@yourcompany.com"
                className="flex-1 bg-transparent border border-bg/20 rounded-full px-6 py-4 font-body text-sm outline-none focus:border-brand transition-colors placeholder:text-bg/30"
              />
              <button
                type="submit"
                className="w-14 h-14 shrink-0 rounded-full bg-brand text-brand-foreground flex items-center justify-center hover:scale-105 transition-transform"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>

          <div className="w-full md:w-auto flex flex-col gap-12 md:min-w-[300px]">
            <a href="mailto:hello@executiveplans.com" className="group flex items-center justify-between border-b border-bg/20 pb-4 hover:border-brand transition-colors">
              <span className="font-body text-xl font-medium tracking-tight group-hover:text-brand transition-colors">hello@executiveplans.com</span>
              <div className="w-10 h-10 rounded-full border border-bg/20 flex items-center justify-center group-hover:bg-brand group-hover:text-brand-foreground group-hover:border-brand transition-colors">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </a>

            <div>
              <h3 className="font-body text-sm font-semibold uppercase tracking-widest text-bg/40 mb-6">Socials</h3>
              <div className="flex flex-wrap gap-3 font-body font-medium text-sm tracking-wide uppercase">
                {['Instagram', 'Twitter / X', 'LinkedIn', 'Awwwards'].map((platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="group relative flex items-center overflow-hidden rounded-full border border-bg/20 px-6 py-3 transition-colors hover:border-brand"
                  >
                    <div className="wave-fill" />
                    <div className="relative z-10 flex items-center gap-2 transition-colors duration-500 group-hover:text-brand-foreground">
                      <span>{platform}</span>
                      <ArrowUpRight className="h-4 w-4 -translate-x-2 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-x-0 group-hover:opacity-100" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 font-body text-xs md:text-sm font-medium uppercase tracking-widest text-bg/40">
          <p>© {new Date().getFullYear()} Executive Plans</p>
          <p>All Rights Reserved</p>
          <p>Based in kota</p>
        </div>
      </div>
    </footer>
  );
}
