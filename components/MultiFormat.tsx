
import React, { useState, useEffect, useRef } from 'react';

const FORMATS = [
  { id: 'web', title: 'DIGITAL ARTICLE', tag: 'P-WEB', color: '#007367', icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
  { id: 'push', title: 'PUSH ALERTS', tag: 'P-PUSH', color: '#10b981', icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z' },
  { id: 'email', title: 'NEWSLETTER', tag: 'P-SMTP', color: '#059669', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
  { id: 'social', title: 'SOCIAL THREAD', tag: 'P-SOCL', color: '#34d399', icon: 'M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z' },
  { id: 'tv', title: 'BROADCAST SCRIPT', tag: 'P-LIVE', color: '#007367', icon: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
  { id: 'live', title: 'LIVE UPDATES', tag: 'P-SYNC', color: '#10b981', icon: 'M12 8v4l3 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z' },
  { id: 'audio', title: 'AUDIO BRIEF', tag: 'P-AUDO', color: '#059669', icon: 'M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z' },
  { id: 'global', title: 'GLOBAL EDITIONS', tag: 'P-GLOB', color: '#34d399', icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9' },
];

export const MultiFormat: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    // Sequential reveal timer
    const interval = setInterval(() => {
      setVisibleCount((prev) => {
        if (prev >= FORMATS.length) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 450); // Speed of the materialization chain

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-32 px-6 md:px-12 bg-white relative overflow-hidden group">
      <div className="max-w-[1400px] mx-auto relative">
        <div className="text-center mb-24 space-y-8">
          <h2 className="font-heading text-6xl md:text-8xl font-bold text-neutral-900 tracking-tighter leading-[0.85]">
            One input. <br />
            <span className="font-serif italic font-normal text-brand drop-shadow-sm">Infinite destinations.</span>
          </h2>
          <p className="text-neutral-500 text-xl max-w-2xl mx-auto font-medium leading-relaxed italic">
            The A47 Engine deconstructs signals into atomic primitives before reassembling them as platform-native assets.
          </p>
        </div>

        <div className="relative min-h-[850px] flex items-center justify-center scale-90 md:scale-100">

          {/* Subtle Interaction Cue */}
          <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-20 transition-all duration-1000 ${visibleCount === FORMATS.length ? 'opacity-100' : 'opacity-0'}`}>
            <div className="flex flex-col items-center gap-3">
              <span className="text-[10px] font-black text-brand uppercase tracking-[0.4em] animate-pulse">Interactive Network</span>
              <div className="w-px h-12 bg-gradient-to-b from-brand to-transparent" />
            </div>
          </div>

          {/* Liquid Signal Web - Materializing Connections */}
          <div className="absolute inset-0 pointer-events-none">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 1000 700" fill="none">
              {FORMATS.map((f, i) => {
                const angle = (i * (360 / FORMATS.length) - 90) * (Math.PI / 180);
                const x2 = 500 + Math.cos(angle) * 380;
                const y2 = 350 + Math.sin(angle) * 260;
                const isRevealed = i < visibleCount;

                return (
                  <g key={`path-${f.id}`}>
                    <path
                      d={`M 500 350 C 500 350, ${500 + Math.cos(angle) * 150} ${350 + Math.sin(angle) * 100}, ${x2} ${y2}`}
                      stroke="#f1f5f9"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d={`M 500 350 C 500 350, ${500 + Math.cos(angle) * 150} ${350 + Math.sin(angle) * 100}, ${x2} ${y2}`}
                      stroke={f.color}
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeDasharray="1000"
                      strokeDashoffset={isRevealed ? "0" : "1000"}
                      className="transition-all duration-[1500ms] ease-out opacity-60"
                    />
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Central Engine Core */}
          <div className="relative z-20">
            <div className="relative w-64 h-64 rounded-full glass border border-white/80 shadow-[0_40px_80px_-20px_rgba(0,115,103,0.3)] flex flex-col items-center justify-center overflow-hidden ring-8 ring-white/20">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand/10 via-transparent to-white/30" />

              <div className="relative z-10 text-center space-y-4">
                <div className="relative flex items-center justify-center">
                  <div className="absolute inset-0 bg-brand/20 blur-2xl rounded-full" />
                  <svg className="w-16 h-16 mx-auto text-brand relative z-10 drop-shadow-sm" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-black uppercase tracking-[0.5em] text-neutral-900">A47 Engine</span>
                  <div className="flex items-center justify-center gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full ${visibleCount === FORMATS.length ? 'bg-brand' : 'bg-neutral-300'} transition-colors duration-500`} />
                    <span className="text-[8px] font-black text-neutral-400 uppercase tracking-widest">
                      {visibleCount < FORMATS.length ? `Materializing: ${visibleCount}/${FORMATS.length}` : 'Network Online'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="absolute inset-6 border border-dashed border-brand/5 rounded-full animate-[spin_40s_linear_infinite]" />
              <div className="absolute left-0 right-0 h-1/2 bg-gradient-to-b from-transparent via-brand/[0.03] to-transparent animate-scan" />
            </div>

            {/* Interaction Hint Badge */}
            <div className={`absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap px-4 py-1.5 bg-neutral-900 rounded-full text-[8px] font-black text-white uppercase tracking-[0.3em] transition-all duration-1000 ${visibleCount === FORMATS.length ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              Hover nodes to inspect signal
            </div>
          </div>

          {/* Sequential Destinations */}
          {FORMATS.map((f, i) => {
            const angle = (i * (360 / FORMATS.length) - 90) * (Math.PI / 180);
            const x = Math.cos(angle) * 380;
            const y = Math.sin(angle) * 260;
            const isRevealed = i < visibleCount;

            return (
              <div
                key={f.id}
                className={`absolute transition-all duration-[1200ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isRevealed ? 'opacity-100 translate-x-0 translate-y-0 scale-100 blur-0' : 'opacity-0 scale-50 blur-xl'
                  }`}
                style={{
                  transform: isRevealed ? `translate(${x}px, ${y}px)` : `translate(${x * 0.2}px, ${y * 0.2}px)`,
                  zIndex: 10
                }}
              >
                <button
                  className={`w-44 bg-white/70 backdrop-blur-3xl border rounded-[32px] px-2 py-8 group/vessel transition-all duration-500 text-left outline-none ${isRevealed ? 'border-neutral-100 shadow-xl shadow-black/5' : 'border-transparent'
                    } hover:scale-105 hover:bg-white hover:border-brand/40 hover:shadow-2xl active:scale-95`}
                >
                  <div className="flex flex-col items-center gap-5 relative">
                    <div
                      className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 relative ${isRevealed ? 'bg-brand shadow-lg shadow-brand/20 text-white' : 'bg-neutral-50 text-neutral-300'
                        } group-hover/vessel:scale-110`}
                      style={{ backgroundColor: isRevealed ? f.color : undefined }}
                    >
                      {/* Pulse Ring */}
                      {isRevealed && (
                        <div className="absolute inset-0 rounded-full border border-brand/50 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite] opacity-30" />
                      )}
                      <svg className="w-6 h-6 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={f.icon} />
                      </svg>
                    </div>

                    <div className="space-y-2 text-center">
                      <h4 className={`text-[10px] font-black uppercase tracking-[0.2em] transition-colors ${isRevealed ? 'text-neutral-900' : 'text-neutral-400'
                        } group-hover/vessel:text-brand`}>
                        {f.title}
                      </h4>

                      {/* Status Pulse */}
                      <div className="flex items-center justify-center gap-2">
                        <div className={`w-1 h-1 rounded-full ${isRevealed ? 'bg-brand animate-pulse' : 'bg-neutral-200'}`} style={{ backgroundColor: isRevealed ? f.color : undefined }} />
                        <span className={`text-[7px] font-black uppercase tracking-widest ${isRevealed ? 'text-neutral-400' : 'text-neutral-200'}`}>
                          {isRevealed ? 'Active Sync' : 'Offline'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Corner Accent Node */}
                  <div className="absolute top-4 left-6">
                    <div
                      className={`w-2 h-2 rounded-full transition-all duration-1000 ${isRevealed ? 'shadow-[0_0_12px_rgba(0,115,103,0.5)] scale-110' : 'bg-neutral-200 scale-75'
                        }`}
                      style={{ backgroundColor: isRevealed ? f.color : undefined }}
                    />
                  </div>
                </button>
              </div>
            );
          })}
        </div>

        {/* System Statistics */}
        <div className="mt-40 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { l: 'Throughput', v: '4.2', u: 'Pb/s' },
            { l: 'Cycle Time', v: '0.04', u: 'ms' },
            { l: 'Destinations', v: '∞', u: 'API' },
            { l: 'Integrity', v: '99.9', u: '%' },
          ].map((stat, i) => (
            <div
              key={i}
              className={`group p-8 border-l border-neutral-100 space-y-3 hover:bg-neutral-50 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              style={{ transitionDelay: `${800 + (i * 100)}ms` }}
            >
              <div className="text-[10px] font-black text-neutral-400 uppercase tracking-[0.4em]">{stat.l}</div>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-black text-neutral-900 italic font-serif leading-none tracking-tight">{stat.v}</span>
                <span className="text-[10px] font-black text-brand uppercase tracking-widest">{stat.u}</span>
              </div>
              <div className="w-full h-[1px] bg-neutral-100 relative overflow-hidden">
                <div className="absolute inset-y-0 left-0 bg-brand/20 w-full animate-[shimmer_3s_infinite]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
