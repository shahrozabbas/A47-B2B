
import React, { useState, useRef, useEffect } from 'react';
import { Button } from './ui/Button';

const STEPS = [
  {
    id: 'monitor',
    title: '01. SIGNAL MONITORING',
    desc: 'Automated Global Ingest',
    detail: {
      title: 'Real-time Signal Ledger',
      stats: [
        { l: 'Ingest Latency', v: '14ms', fill: '85%' },
        { l: 'Active Channels', v: '1,420', fill: '92%' },
        { l: 'Noise Filtering', v: '99.8%', fill: '99%' }
      ],
      description: 'The A47 core continuously indexes primary data streams from global wire services, social nodes, and proprietary satellite feeds. Every signal is cryptographically hashed at the moment of ingest.'
    }
  },
  {
    id: 'research',
    title: '02. CONTEXTUAL RESEARCH',
    desc: 'Graph Database Mapping',
    detail: {
      title: 'Knowledge Graph Synthesis',
      stats: [
        { l: 'Related Events', v: '42', fill: '65%' },
        { l: 'Historical Depth', v: '12y', fill: '88%' },
        { l: 'Entity Links', v: '890', fill: '76%' }
      ],
      description: 'Proprietary entity-resolution algorithms cross-reference new signals against 12 years of archival news data to provide instant historical context and identify recurring narratives.'
    }
  },
  {
    id: 'verify',
    title: '03. TRUTH VERIFICATION',
    desc: 'Multi-Model Validation',
    detail: {
      title: 'Integrity Protocol Alpha',
      stats: [
        { l: 'Confidence', v: '98.4%', fill: '98%' },
        { l: 'Primary Sources', v: '04', fill: '40%' },
        { l: 'Logic Check', v: 'Pass', fill: '100%' }
      ],
      description: 'Assets are subjected to multi-layered verification including metadata forensics, reverse-lookup validation, and source credibility scoring based on historical performance.'
    }
  },
  {
    id: 'voice',
    title: '04. TONAL ALIGNMENT',
    desc: 'Institutional Voice Sync',
    detail: {
      title: 'Stylistic Compliance Engine',
      stats: [
        { l: 'Complexity', v: 'Med', fill: '50%' },
        { l: 'Objectivity', v: 'High', fill: '95%' },
        { l: 'Brand Match', v: '100%', fill: '100%' }
      ],
      description: 'Advanced NLP adjusts vocabulary, syntax, and phrasing to ensure strict adherence to institutional style guides. Maintains consistent brand authority across all output segments.'
    }
  },
  {
    id: 'draft',
    title: '05. EDITORIAL SYNTHESIS',
    desc: 'Structured Drafting',
    detail: {
      title: 'Drafting & Governance',
      stats: [
        { l: 'Clarity Index', v: '88', fill: '88%' },
        { l: 'Readability', v: 'Grade 9', fill: '70%' },
        { l: 'Edit Time', v: '3m', fill: '15%' }
      ],
      description: 'A collaborative, high-performance editor allows journalists to finalize narratives with real-time feedback on legal compliance, clarity, and engagement metrics.'
    }
  },
  {
    id: 'publish',
    title: '06. GLOBAL PROPAGATION',
    desc: 'Edge-Optimized Delivery',
    detail: {
      title: 'Multi-Platform Gateway',
      stats: [
        { l: 'Destinations', v: '12', fill: '100%' },
        { l: 'Edge Sync', v: '04ms', fill: '99%' },
        { l: 'Compliance', v: 'Verified', fill: '100%' }
      ],
      description: 'One-click distribution to your entire ecosystem. Each asset is automatically reformatted and optimized for its destination, whether it be broadcast or mobile alerts.'
    }
  },
];

export const WorkflowSection: React.FC = () => {
  const [activeStepId, setActiveStepId] = useState(STEPS[0].id);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const hudRef = useRef<HTMLDivElement>(null);
  const activeStep = STEPS.find(s => s.id === activeStepId) || STEPS[0];

  const [isHovering, setIsHovering] = useState(false);

  // Idle Animation
  useEffect(() => {
    if (isHovering || !hudRef.current) return;

    let frameId: number;
    const start = Date.now();

    const animate = () => {
      const now = Date.now();
      const elapsed = now - start;
      const rotateX = Math.sin(elapsed / 2000) * 2; // Gentle breathing
      const rotateY = Math.cos(elapsed / 2500) * 2;

      if (hudRef.current && !isHovering) {
        hudRef.current.style.transform = `perspective(2000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [isHovering]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    setIsHovering(true);
    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    sectionRef.current.style.setProperty('--mouse-x', `${x}px`);
    sectionRef.current.style.setProperty('--mouse-y', `${y}px`);

    if (hudRef.current) {
      const hudRect = hudRef.current.getBoundingClientRect();
      const hudCenterX = hudRect.left + hudRect.width / 2;
      const hudCenterY = hudRect.top + hudRect.height / 2;

      const rotateY = (e.clientX - hudCenterX) / 80; // More sensitive
      const rotateX = (hudCenterY - e.clientY) / 80;

      hudRef.current.style.transform = `perspective(2000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const handleStepChange = (id: string) => {
    if (id === activeStepId) return;
    setIsTransitioning(true);
    setActiveStepId(id);
    setTimeout(() => setIsTransitioning(false), 50);
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="py-32 px-6 md:px-12 max-w-[1400px] mx-auto relative overflow-hidden bg-white"
      style={{
        '--mouse-x': '50%',
        '--mouse-y': '50%',
      } as React.CSSProperties}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02] transition-opacity duration-700"
        style={{
          backgroundImage: `
            radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(0, 115, 103, 0.15) 0%, transparent 500px),
            linear-gradient(#000 1px, transparent 1px), 
            linear-gradient(90deg, #000 1px, transparent 1px)
          `,
          backgroundSize: '100% 100%, 100px 100px, 100px 100px'
        }}
      />

      <div className="mb-20 space-y-8 relative z-10 max-w-4xl">
        <div className="flex items-center gap-4">
          <div className="h-px w-12 bg-brand/40" />
          <span className="text-[10px] font-black text-brand uppercase tracking-[0.5em]">System Process Flow</span>
        </div>
        <h2 className="font-heading text-5xl md:text-7xl font-bold text-neutral-900 tracking-tighter leading-[0.9]">
          Editorial flow, <br />
          <span className="font-serif italic font-normal text-brand">standardized.</span>
        </h2>
        <p className="text-neutral-500 text-xl max-w-2xl font-medium leading-relaxed">
          The A47 operating system defines the rigid precision standards required for high-stakes enterprise journalism at scale.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-16 relative">
        <div className="lg:col-span-4 relative group/nav">
          <div className="absolute left-[19px] top-8 bottom-8 w-[1px] bg-neutral-100" />
          <div className="space-y-4">
            {STEPS.map((step) => (
              <div
                key={step.id}
                onMouseEnter={() => handleStepChange(step.id)}
                className={`group relative pl-12 py-6 cursor-pointer transition-all duration-500 ${activeStepId === step.id ? 'opacity-100' : 'opacity-30 hover:opacity-100'
                  }`}
              >
                <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border bg-white flex items-center justify-center transition-all duration-500 z-10 ${activeStepId === step.id ? 'border-brand/40 shadow-sm shadow-brand/5' : 'border-neutral-100'
                  }`}>
                  <div className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${activeStepId === step.id ? 'bg-brand' : 'bg-neutral-200'
                    }`} />
                </div>
                <div className="space-y-1">
                  <h4 className={`text-xs font-black uppercase tracking-[0.2em] transition-colors ${activeStepId === step.id ? 'text-brand' : 'text-neutral-400'}`}>
                    {step.title}
                  </h4>
                  <p className={`text-lg font-bold transition-colors ${activeStepId === step.id ? 'text-neutral-900' : 'text-neutral-500'}`}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-8 sticky top-32 h-fit z-10 group/hud">
          <div className="absolute -top-12 right-0 opacity-40 group-hover/hud:opacity-100 transition-opacity duration-500 text-right">
            <div className="flex items-center justify-end gap-3">
              <span className="text-[8px] font-black text-neutral-400 uppercase tracking-[0.4em]">
                {`// REACTIVE_HUD_ENABLED`}
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-neutral-300 animate-pulse" />
            </div>
          </div>
          <div
            ref={hudRef}
            className="bg-neutral-50 rounded-[12px] border border-neutral-200 shadow-xl overflow-hidden transition-transform duration-700 ease-out"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="px-10 py-6 border-b border-neutral-200 bg-white flex items-center justify-between" style={{ transform: 'translateZ(10px)' }}>
              <div className="flex items-center gap-6">
                <div className="px-3 py-1 border border-neutral-200 rounded text-[9px] font-black text-neutral-400 uppercase tracking-widest">A47-OS // V4.2</div>
                <div className="h-4 w-px bg-neutral-200" />
                <span className="text-[10px] font-black text-neutral-900 uppercase tracking-widest">Process ID: {activeStepId.toUpperCase()}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-[9px] font-black text-neutral-400 uppercase tracking-widest">Status: Active</span>
                <div className="w-1.5 h-1.5 rounded-full bg-brand opacity-60" />
              </div>
            </div>
            <div key={activeStepId} className={`p-12 space-y-12 bg-white/50 transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
              <div className="space-y-6" style={{ transform: 'translateZ(20px)' }}>
                <h3 className="font-heading text-3xl font-bold text-neutral-900 tracking-tight italic font-serif">
                  {activeStep.detail.title}
                </h3>
                <p className="text-xl text-neutral-500 font-medium leading-relaxed max-w-2xl">
                  {activeStep.detail.description}
                </p>
              </div>
              <div className="grid grid-cols-3 gap-px border border-neutral-200 bg-neutral-200 overflow-hidden rounded-lg" style={{ transform: 'translateZ(15px)' }}>
                {activeStep.detail.stats.map((stat, i) => (
                  <div key={i} className="p-10 bg-white space-y-4">
                    <div className="text-[10px] font-black text-neutral-400 uppercase tracking-widest">{stat.l}</div>
                    <div className="text-4xl font-black text-neutral-900 tracking-tighter italic leading-none">{stat.v}</div>
                    <div className="w-full h-0.5 bg-neutral-50 relative overflow-hidden">
                      <div
                        className="absolute inset-y-0 left-0 bg-brand/40 transition-all duration-[1500ms]"
                        style={{ width: stat.fill }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
