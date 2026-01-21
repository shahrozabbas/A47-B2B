
import React, { useState, useEffect } from 'react';
import { Button } from './components/ui/Button';
import { DashboardPreview } from './components/DashboardPreview';
import { EditorialAssistant } from './components/EditorialAssistant';
import { Logo, BrandMark } from './components/ui/Logo';
import { Cursor } from './components/ui/Cursor';
import { WorkflowSection } from './components/WorkflowSection';
import { Footer } from './components/Footer';
import { TrustedBy } from './components/TrustedBy';
import { LiveDemo } from './components/LiveDemo';
import { MultiFormat } from './components/MultiFormat';
import { Integrations } from './components/Integrations';
import { Pricing } from './components/Pricing';
import { EngineBadge } from './components/EngineBadge';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative min-h-screen font-sans selection:bg-brand/10 selection:text-brand">
      <Cursor />
      <div className="relative z-10 bg-white min-h-screen overflow-hidden">
        {/* Refined Background Blobs */}
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
          <div className="absolute top-[-15%] right-[-10%] w-[60vw] h-[60vw] bg-brand/5 blur-[160px] rounded-full animate-pulse-soft" />
          <div className="absolute bottom-[5%] left-[-10%] w-[50vw] h-[50vw] bg-emerald-500/5 blur-[140px] rounded-full" />
        </div>

        {/* Navigation */}
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled ? 'py-3 px-6 md:px-12' : 'py-8 px-6 md:px-12'
          }`}>
          <div className={`max-w-[1400px] mx-auto flex items-center justify-between transition-all duration-500 ${scrolled ? 'glass rounded-full px-8 py-3 shadow-lg shadow-black/5' : ''
            }`}>
            <div className="flex items-center gap-12">
              <Logo />
              <div className="hidden lg:flex items-center gap-10">
                {['Workflow', 'Capabilities', 'Pricing'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => scrollToSection(e, item.toLowerCase())}
                    className="text-[10px] font-bold tracking-[0.2em] uppercase text-neutral-400 hover:text-brand transition-all cursor-pointer"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-6">
              {/* Live Newsroom Link */}
              <a
                href="https://a47news.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-100 hover:bg-neutral-200 transition-colors border border-neutral-200 group"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-600 group-hover:text-black transition-colors">
                  Live Newsroom
                </span>
              </a>

              <button className="hidden sm:inline-flex text-[10px] font-bold uppercase tracking-widest text-neutral-400 hover:text-neutral-900 transition-colors cursor-pointer">Client Area</button>
              <Button
                variant="primary"
                size="sm"
                className="rounded-full shadow-lg shadow-brand/10 cursor-pointer"
                onClick={(e) => scrollToSection(e, 'pricing')}
              >
                Book Demo
              </Button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <main className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-12 max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-3 px-4 py-1.5 glass rounded-full border border-white/60 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
                  <span className="text-[9px] font-black text-neutral-500 uppercase tracking-[0.25em]">A47 Enterprise Newsroom OS</span>
                </div>

                <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight text-neutral-900 leading-[1.05]">
                  Verified <span className="font-serif italic font-normal text-brand">publishing</span> for global scale.
                </h1>

                <p className="text-lg md:text-xl text-neutral-500 max-w-lg leading-relaxed font-medium">
                  The unified operating system for high-stakes journalism. Verify sources, automate distribution, and protect standards in one interface.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-8">
                <Button
                  size="lg"
                  className="rounded-full px-12 py-6 text-base shadow-xl shadow-brand/20 cursor-pointer"
                  onClick={(e) => scrollToSection(e, 'pricing')}
                >
                  Get Started
                </Button>
                <a
                  href="#workflow"
                  onClick={(e) => scrollToSection(e, 'workflow')}
                  className="group flex items-center gap-3 text-[11px] font-bold uppercase tracking-widest text-neutral-400 hover:text-brand transition-all cursor-pointer"
                >
                  Learn the workflow
                  <div className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center group-hover:border-brand/40 group-hover:bg-brand/5 transition-all">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </div>
                </a>
              </div>

              <div className="pt-8 grid grid-cols-3 gap-8">
                {[
                  { label: 'Latency', value: '<200ms' },
                  { label: 'Accuracy', value: '99.9%' },
                  { label: 'Uptime', value: '100%' }
                ].map(stat => (
                  <div key={stat.label}>
                    <div className="text-2xl font-bold font-sans text-neutral-900">{stat.value}</div>
                    <div className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Scroll Indicator */}
              <div className="absolute bottom-0 left-0 animate-bounce">
                <div className="flex flex-col items-center gap-2 opacity-40">
                  <span className="text-[8px] uppercase tracking-widest text-neutral-500 font-bold">Scroll</span>
                  <div className="w-px h-8 bg-neutral-300" />
                </div>
              </div>
            </div>

            <div className="relative animate-float">
              <div className="absolute -inset-20 bg-brand/5 blur-[120px] rounded-full pointer-events-none" />
              <DashboardPreview />
            </div>
          </div>
        </main>

        <section id="workflow">
          <WorkflowSection />
        </section>

        <TrustedBy />

        <LiveDemo />

        <MultiFormat />

        <Integrations />

        <section id="pricing">
          <Pricing />
        </section>

        <EditorialAssistant />
        <EngineBadge />
      </div>

      <Footer />
    </div>
  );
};

export default App;
