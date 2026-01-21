import React from 'react';
import { Button } from './ui/Button';

export const Pricing: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-neutral-950 text-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-[100vw] bg-brand/10 blur-[200px] rounded-full -z-10" />

      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-20 space-y-6">
          <span className="text-brand text-[10px] font-black uppercase tracking-[0.5em]">Scale</span>
          <h2 className="font-heading text-4xl md:text-6xl font-bold tracking-tight">Deployment Packages</h2>
          <p className="text-neutral-500 text-lg font-medium">From agile desks to global news networks.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 items-end">
          <div className="bg-white/5 backdrop-blur-xl p-12 rounded-[48px] border border-white/10 flex flex-col space-y-12 transition-all hover:bg-white/10 group">
            <div className="space-y-4">
              <h4 className="font-heading text-2xl font-bold font-serif italic">The Pilot</h4>
              <p className="text-sm text-neutral-400 font-medium">Launch a single desk in days.</p>
            </div>
            <div className="space-y-4 flex-1">
              {['Up to 12 journalists', '2 Active desks', 'Basic signal intel', 'Standard SLA'].map((f, i) => (
                <div key={i} className="flex items-center gap-4 text-xs font-bold text-neutral-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand" />
                  {f}
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full rounded-2xl py-6 border-white/20 text-white hover:bg-white hover:text-black">Request Access</Button>
          </div>
          <div className="bg-brand p-12 rounded-[56px] flex flex-col space-y-12 shadow-[0_64px_96px_-32px_rgba(0,115,103,0.4)] relative transform lg:scale-105">
            <div className="absolute top-8 right-12 px-3 py-1 bg-white/20 rounded-full text-[9px] font-black uppercase tracking-widest text-white">Recommended</div>
            <div className="space-y-4">
              <h4 className="font-heading text-2xl font-bold font-serif italic">Newsroom</h4>
              <p className="text-sm text-white/80 font-medium">The standard for modern media.</p>
            </div>
            <div className="space-y-4 flex-1">
              {['Unlimited journalists', 'Unlimited desks', 'Deep signal intelligence', 'Custom workflows', 'Audit engine', '24/7 Priority support'].map((f, i) => (
                <div key={i} className="flex items-center gap-4 text-xs font-bold text-white">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  {f}
                </div>
              ))}
            </div>
            <Button variant="primary" className="w-full rounded-2xl py-6 bg-neutral-900 text-white border-none shadow-2xl">Deploy Platform</Button>
          </div>
          <div className="bg-white/5 backdrop-blur-xl p-12 rounded-[48px] border border-white/10 flex flex-col space-y-12 transition-all hover:bg-white/10 group">
            <div className="space-y-4">
              <h4 className="font-heading text-2xl font-bold font-serif italic">Enterprise</h4>
              <p className="text-sm text-neutral-400 font-medium">Global infrastructure and safety.</p>
            </div>
            <div className="space-y-4 flex-1">
              {['Multi-tenant architecture', 'On-premise deployments', 'Dedicated success team', 'Custom data terms'].map((f, i) => (
                <div key={i} className="flex items-center gap-4 text-xs font-bold text-neutral-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand" />
                  {f}
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full rounded-2xl py-6 border-white/20 text-white hover:bg-white hover:text-black">Enterprise Sales</Button>
          </div>
        </div>
        <p className="text-center mt-20 text-[10px] font-black text-neutral-600 uppercase tracking-[0.5em]">Compliant with global privacy and journalistic standards.</p>
      </div>
    </section>
  );
};