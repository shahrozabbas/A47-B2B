
import React from 'react';

const STACK = [
  {
    category: 'CMS GATEWAY',
    items: ['WordPress', 'Arc XP', 'Custom API'],
    status: 'Operational',
    desc: 'Bi-directional synchronization layer for legacy and modern publishing infrastructure. Native web-hook support.',
    technical: 'TLS 1.3 // REST // GraphQL'
  },
  {
    category: 'INTELLIGENCE NODES',
    items: ['Gemini 2.5', 'Perplexity', 'Reuters'],
    status: 'Operational',
    desc: 'Embedded signal extraction from verified global news repositories and multi-modal AI reasoning engines.',
    technical: 'Neural Engine // 12ms Latency'
  },
  {
    category: 'OPERATIONAL OPS',
    items: ['Slack', 'Teams', 'Jira'],
    status: 'Operational',
    desc: 'Automated state-tracking and real-time collaboration alerts. Map editorial events to organizational workflows.',
    technical: 'OAuth 2.0 // Webhooks'
  },
  {
    category: 'DIGITAL ASSET MGMT',
    items: ['Getty', 'Shutterstock', 'Pexels'],
    status: 'Optimizing',
    desc: 'Automated metadata extraction, rights management, and licensing verification for multi-platform distribution.',
    technical: 'IPTC Standards // Beta'
  },
];

export const Integrations: React.FC = () => {
  return (
    <section className="py-32 px-6 md:px-12 max-w-[1400px] mx-auto relative overflow-hidden bg-white">
      {/* Structural Decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-neutral-100" />
      <div className="absolute top-0 left-1/4 w-px h-full bg-neutral-50/50" />
      <div className="absolute top-0 left-3/4 w-px h-full bg-neutral-50/50" />

      <div className="relative z-10 flex flex-col md:flex-row items-baseline justify-between mb-20 gap-12">
        <div className="space-y-6 max-w-2xl">
          <div className="flex items-center gap-4">
            <div className="w-8 h-px bg-brand" />
            <span className="text-[10px] font-black text-brand uppercase tracking-[0.5em]">System Interoperability</span>
          </div>
          <h2 className="font-heading text-5xl md:text-7xl font-bold text-neutral-900 tracking-tighter leading-[0.9]">
            Plays well with your <br />
            <span className="font-serif italic font-normal text-brand">current stack.</span>
          </h2>
        </div>
        <p className="text-neutral-500 text-xl max-w-sm font-medium leading-relaxed italic">
          No displacement required. A47 integrates directly into your existing architecture via high-performance gateways.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 border border-neutral-200 divide-x divide-y divide-neutral-200 rounded-[4px] overflow-hidden shadow-2xl shadow-black/5 animate-premium-reveal">
        {STACK.map((s, i) => (
          <div
            key={i}
            className="group relative p-10 bg-white hover:bg-neutral-50 transition-all duration-700 flex flex-col justify-between min-h-[480px]"
          >
            {/* Corner Accent */}
            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-transparent group-hover:border-brand/20 transition-all duration-700" />

            <div className="space-y-12">
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <div className="text-[9px] font-black text-neutral-400 uppercase tracking-widest leading-none">Category</div>
                  <h4 className="text-xl font-bold text-neutral-900 tracking-tight italic font-serif">{s.category}</h4>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className={`px-2 py-0.5 rounded-[2px] text-[8px] font-black uppercase tracking-widest ${s.status === 'Optimizing' ? 'bg-amber-50 text-amber-600' : 'bg-brand/5 text-brand'
                    }`}>
                    {s.status}
                  </span>
                  <span className="text-[7px] font-black text-neutral-300 uppercase tracking-widest">v2.1</span>
                </div>
              </div>

              {/* Visual "Chips" */}
              <div className="flex flex-wrap gap-2">
                {s.items.map((item, idx) => (
                  <div key={idx} className="px-3 py-1.5 bg-neutral-100 rounded-[4px] border border-neutral-200 text-[10px] font-bold text-neutral-600 group-hover:bg-white group-hover:border-brand/20 group-hover:text-brand transition-all duration-500">
                    {item}
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <p className="text-sm text-neutral-500 font-medium leading-relaxed">
                  {s.desc}
                </p>
                <div className="flex items-center gap-3 text-[9px] font-black text-neutral-300 uppercase tracking-[0.2em] font-mono">
                  <svg className="w-3 h-3 text-brand opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  {s.technical}
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-neutral-100 flex items-center justify-between">
              <button className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 hover:text-brand transition-all flex items-center gap-2">
                Documentation
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </button>
              <div className="w-8 h-8 rounded bg-neutral-100 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-4 transition-all duration-700">
                <svg className="w-4 h-4 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Floating System Summary */}
      <div className="mt-20 flex flex-col md:flex-row items-center justify-between p-12 bg-neutral-900 rounded-[8px] text-white overflow-hidden relative group animate-premium-reveal [animation-delay:400ms]">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand/10 skew-x-12 translate-x-1/2 pointer-events-none" />

        <div className="relative z-10 space-y-2">
          <h3 className="font-heading text-xl font-bold tracking-tight">Enterprise Gateway Protocol</h3>
          <p className="text-sm text-white/50 font-medium">Standardizing multi-platform input streams for global news organizations.</p>
        </div>

        <div className="relative z-10 flex gap-8 items-center mt-8 md:mt-0">
          <div className="flex flex-col items-end">
            <span className="text-[10px] font-black text-brand uppercase tracking-widest">Active Links</span>
            <span className="text-2xl font-black italic">420+</span>
          </div>
          <div className="h-10 w-px bg-white/10" />
          <button className="px-8 py-3 bg-white text-neutral-900 rounded-[4px] text-[10px] font-black uppercase tracking-widest hover:bg-brand hover:text-white transition-all duration-500">
            Request Custom Driver
          </button>
        </div>
      </div>
    </section>
  );
};
