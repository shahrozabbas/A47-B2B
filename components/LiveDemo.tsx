
import React, { useState, useEffect } from 'react';

export const LiveDemo: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  // Simple auto-stepper to simulate "System Activity"
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 px-6 md:px-12 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/10 blur-[120px] rounded-full" />
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #e5e7eb 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="max-w-[1400px] mx-auto space-y-16 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 border-b border-neutral-100 pb-12">
          <div className="max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand/5 rounded-full border border-brand/10">
              <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
              <span className="text-[10px] font-black text-brand uppercase tracking-[0.3em]">Live Environment</span>
            </div>
            <h2 className="font-heading text-4xl md:text-6xl font-bold text-neutral-900 tracking-tight leading-[0.95]">
              The interface of <br />
              <span className="font-serif italic font-normal text-brand drop-shadow-sm">modern journalism.</span>
            </h2>
          </div>
          <p className="text-neutral-500 text-lg max-w-sm font-medium leading-relaxed pb-2">
            A high-fidelity workspace designed for precision, speed, and cross-platform distribution.
          </p>
        </div>

        {/* The "Operating System" Window */}
        <div className="relative group">
          {/* Window Glow */}
          <div className="absolute -inset-4 bg-brand/5 blur-3xl rounded-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

          <div className="relative glass rounded-[48px] border border-white/80 shadow-[0_80px_160px_-40px_rgba(0,115,103,0.12)] overflow-hidden h-[800px] flex flex-col transition-all duration-700 hover:shadow-[0_100px_200px_-50px_rgba(0,0,0,0.15)] ring-1 ring-black/5">

            {/* System Top Bar */}
            <div className="h-14 border-b border-neutral-100 bg-white/40 backdrop-blur-xl flex items-center justify-between px-8 shrink-0">
              <div className="flex items-center gap-6">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-400/20 border border-rose-400/30" />
                  <div className="w-3 h-3 rounded-full bg-amber-400/20 border border-amber-400/30" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400/20 border border-emerald-400/30" />
                </div>
                <div className="h-4 w-px bg-neutral-200" />
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-black text-neutral-400 uppercase tracking-widest">A47 Workbench</span>
                  <span className="text-[9px] font-bold text-neutral-300">v4.2.0-stable</span>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
                    <span className="text-[9px] font-black text-neutral-500 uppercase tracking-widest">Network Secure</span>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-neutral-900 flex items-center justify-center text-[10px] font-black text-white">AT</div>
              </div>
            </div>

            <div className="flex-1 flex overflow-hidden">
              {/* Sidebar: Navigation & Queue */}
              <div className="w-80 border-r border-neutral-100 flex flex-col bg-neutral-50/30 shrink-0">
                <div className="p-8 border-b border-neutral-100">
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400">Assignment Hub</span>
                    <button className="w-6 h-6 rounded-lg border border-neutral-200 flex items-center justify-center hover:bg-white transition-colors">
                      <svg className="w-3 h-3 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" /></svg>
                    </button>
                  </div>
                  <div className="space-y-1">
                    {['Daily Digest', 'Signals', 'Archived'].map((item, i) => (
                      <div key={item} className={`px-4 py-2.5 rounded-xl text-[11px] font-bold transition-all cursor-pointer flex items-center gap-3 ${i === 0 ? 'bg-white text-brand shadow-sm border border-brand/5' : 'text-neutral-400 hover:bg-white/50 hover:text-neutral-600'}`}>
                        <div className={`w-1 h-1 rounded-full ${i === 0 ? 'bg-brand' : 'bg-transparent'}`} />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-3 no-scrollbar relative group/queue">
                  {[
                    { title: 'Tech Giants Q4 Earnings', desk: 'Business', time: '2m', status: 'Live', active: true },
                    { title: 'City Council Budget Vote', desk: 'Politics', time: '12m', status: 'Review' },
                    { title: 'Climate Summit Opening', desk: 'Environment', time: '1h', status: 'Draft' },
                    { title: 'Local Championship Finals', desk: 'Sports', time: '2h', status: 'Draft' },
                  ].map((story, i) => (
                    <div key={i} className={`p-6 rounded-3xl border transition-all duration-500 group/item ${story.active
                      ? 'bg-white border-brand/20 shadow-xl shadow-black/5 ring-1 ring-brand/5'
                      : 'bg-transparent border-transparent hover:bg-white/40 hover:border-neutral-200 opacity-60 hover:opacity-100'
                      }`}>
                      <div className="flex justify-between items-start mb-3">
                        <span className={`text-[9px] font-black uppercase tracking-widest ${story.active ? 'text-brand' : 'text-neutral-400'}`}>{story.desk}</span>
                        <div className={`px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-tighter ${story.status === 'Live' ? 'bg-brand/10 text-brand' : 'bg-neutral-100 text-neutral-400'}`}>
                          {story.status}
                        </div>
                      </div>
                      <h4 className="text-xs font-bold text-neutral-800 leading-snug group-hover/item:text-brand transition-colors">{story.title}</h4>
                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex -space-x-1.5">
                          {[1, 2].map(u => <div key={u} className="w-5 h-5 rounded-full border-2 border-white bg-neutral-200" />)}
                        </div>
                        <span className="text-[9px] text-neutral-400 font-bold">{story.time} ago</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Main Content Area: Editor */}
              <div className="flex-1 bg-white/40 flex flex-col relative">
                {/* Floating Editor Tools */}
                <div className="absolute top-24 right-10 z-20 space-y-2 translate-x-4 opacity-60 hover:opacity-100 transition-all duration-300 group/tools">
                  {[
                    { icon: 'M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z', label: 'Refine' },
                    { icon: 'M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129', label: 'Translate' },
                    { icon: 'M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z', label: 'Ask AI' }
                  ].map((tool, i) => (
                    <div key={i} className="group/tool relative animate-float" style={{ animationDelay: `${i * 1.5}s` }}>
                      <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-2 py-1 bg-neutral-900 rounded text-[7px] font-black text-white uppercase tracking-widest opacity-0 group-hover/tool:opacity-100 transition-opacity whitespace-nowrap">
                        {tool.label}
                      </div>
                      <div className="w-10 h-10 bg-white shadow-lg shadow-black/5 border border-neutral-100 rounded-xl flex items-center justify-center text-neutral-400 hover:text-brand hover:border-brand/20 transition-all cursor-pointer hover:scale-110">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={tool.icon} /></svg>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-10 border-b border-neutral-100 flex items-center justify-between bg-white/20 backdrop-blur-md sticky top-0 z-10">
                  <div className="flex items-center gap-5">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-black text-neutral-400 uppercase tracking-widest">Editor Mode</span>
                      <div className="px-2.5 py-1 bg-neutral-900 rounded-lg text-white text-[9px] font-black uppercase tracking-widest">Collaborative</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-brand animate-pulse" />
                      <span className="text-[9px] font-black text-brand uppercase tracking-widest">Syncing Draft</span>
                    </div>
                    <div className="h-4 w-px bg-neutral-200" />
                    <button className="text-[10px] font-black text-neutral-400 uppercase tracking-widest hover:text-brand transition-colors">Preview</button>
                    <button className="bg-brand text-white px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg shadow-brand/20 transition-all active:scale-95">Publish</button>
                  </div>
                </div>

                <div className="flex-1 p-16 overflow-y-auto no-scrollbar space-y-12 max-w-4xl mx-auto w-full">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-px h-4 bg-brand" />
                      <span className="text-[9px] font-black text-brand uppercase tracking-widest">Headline • v2.1</span>
                    </div>
                    <h1 className="font-heading text-4xl font-bold text-neutral-900 tracking-tighter leading-[0.9] italic font-serif">
                      Tech Giants Report Record Q4 Earnings Amid AI Boom
                    </h1>
                  </div>

                  <div className="flex items-center gap-6 text-[11px] font-bold text-neutral-400 tracking-tight border-y border-neutral-50 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-neutral-100 flex items-center justify-center font-black text-[8px]">AT</div>
                      <span className="text-neutral-900">Alex Turner</span>
                    </div>
                    <div className="w-1 h-1 rounded-full bg-neutral-200" />
                    <span>Assigned to Business Desk</span>
                    <div className="w-1 h-1 rounded-full bg-neutral-200" />
                    <span className="flex items-center gap-2 text-brand">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      Verified Assets Included
                    </span>
                  </div>

                  <div className="space-y-8 relative">
                    <p className="text-xl text-neutral-600 leading-relaxed font-medium first-letter:text-6xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:text-brand first-letter:mt-1">
                      Leading technology companies reported stronger-than-expected quarterly results on Thursday, with several citing artificial intelligence as a key growth driver. The quarterly surge underscores the shifting priorities of global enterprises.
                    </p>

                    {/* Simulated Selection / AI Suggestion Overlay */}
                    <div className="relative p-6 bg-brand/5 rounded-3xl border border-brand/10 group/suggest cursor-pointer transition-all hover:bg-brand/[0.08]">
                      <div className="absolute top-0 right-6 -translate-y-1/2 bg-brand text-white text-[8px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg shadow-brand/20">AI Suggestion</div>
                      <p className="text-xl text-neutral-800 leading-relaxed font-semibold">
                        The earnings reports suggest that early <span className="text-brand decoration-brand/30 underline underline-offset-8 decoration-2">investments in AI infrastructure</span> are beginning to generate meaningful returns across markets.
                      </p>
                      <div className="mt-4 flex items-center gap-4">
                        <span className="text-[10px] font-black text-brand uppercase tracking-widest">Apply Tonal Shift (Professional)</span>
                        <div className="flex gap-1.5">
                          <div className="px-2 py-0.5 bg-brand text-white rounded text-[8px] font-black">Accept</div>
                          <div className="px-2 py-0.5 bg-white border border-neutral-200 text-neutral-400 rounded text-[8px] font-black">Ignore</div>
                        </div>
                      </div>
                    </div>

                    <p className="text-xl text-neutral-600 leading-relaxed font-medium">
                      Market analysts noted that while cloud services continue to provide a stable foundation, the incremental gains from generative AI applications have exceeded initial conservative estimates.
                    </p>
                  </div>
                </div>
              </div>

              {/* Sidebar: Metadata & Controls */}
              <div className="w-80 border-l border-neutral-100 bg-white/60 backdrop-blur-3xl flex flex-col p-8 space-y-10 shrink-0">
                {/* Voice Sync Visualizer */}
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400">Tone Alignment</span>
                    <span className="text-sm font-black text-brand italic">98.4%</span>
                  </div>

                  {/* Dynamic Waveform Simulation */}
                  <div className="h-16 w-full flex items-center justify-center gap-[3px]">
                    {[...Array(30)].map((_, i) => (
                      <div
                        key={i}
                        className="w-1 bg-brand/30 rounded-full transition-all duration-700"
                        style={{
                          height: `${10 + Math.random() * 80}%`,
                          animation: `float ${2 + Math.random() * 2}s ease-in-out infinite`,
                          animationDelay: `${i * 100}ms`,
                          backgroundColor: i > 10 && i < 22 ? 'var(--brand)' : ''
                        }}
                      />
                    ))}
                  </div>

                  <div className="p-4 bg-brand/5 rounded-2xl border border-brand/10">
                    <div className="text-[9px] font-black text-brand uppercase tracking-widest mb-1">Active Profile</div>
                    <div className="text-[11px] font-bold text-neutral-800">The Economist • Institutional</div>
                  </div>
                </div>

                <div className="space-y-6">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 block">Trust Architecture</span>
                  <div className="space-y-3">
                    {[
                      { l: 'SEC Filing #204-Q', s: 'Verified' },
                      { l: 'Primary Source (CEO)', s: 'Audio Synced' },
                      { l: 'Market Data Hub', s: 'Real-time' }
                    ].map((sig, i) => (
                      <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-neutral-100 shadow-sm hover:translate-x-1 transition-all">
                        <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600">
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[10px] font-bold text-neutral-800">{sig.l}</span>
                          <span className="text-[8px] font-black text-brand uppercase tracking-widest">{sig.s}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-auto space-y-6 border-t border-neutral-100 pt-8">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 block">Publication Flow</span>
                  <div className="space-y-4">
                    {[
                      { r: 'Legal Standards', s: 'Checking...', a: true },
                      { r: 'Ethics Review', s: 'Pending', a: false },
                    ].map((step, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <span className="text-xs font-bold text-neutral-800">{step.r}</span>
                        <div className="flex items-center gap-2">
                          <span className={`text-[8px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full ${step.a ? 'bg-amber-50 text-amber-600 animate-pulse' : 'bg-neutral-100 text-neutral-400'}`}>
                            {step.s}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Detail Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Latency', val: '12ms', desc: 'Sync lag' },
            { label: 'Uptime', val: '100%', desc: 'Nodes active' },
            { label: 'Security', val: 'AES-256', desc: 'Encrypted' },
            { label: 'Compute', val: '80Tf', desc: 'AI power' }
          ].map((stat, i) => (
            <div key={i} className="p-8 glass rounded-[32px] border border-white/60 hover:shadow-xl hover:shadow-black/5 transition-all text-center group/badge">
              <div className="text-3xl font-black text-neutral-900 mb-1">{stat.val}</div>
              <div className="text-[9px] font-black text-brand uppercase tracking-widest mb-2">{stat.label}</div>
              <p className="text-[10px] text-neutral-400 font-bold uppercase tracking-widest">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
