
import React from 'react';

const CLIENTS = [
  { name: 'Global Post', region: 'North America' },
  { name: 'Vanguard Journal', region: 'Europe' },
  { name: 'Continental News', region: 'Asia-Pacific' },
  { name: 'Associated Press', region: 'Global' },
  { name: 'Epoch Standard', region: 'Global' },
  { name: 'The Daily Ledger', region: 'Middle East' },
  { name: 'Metropolis Daily', region: 'South America' },
];

export const TrustedBy: React.FC = () => {
  return (
    <div className="py-16 border-y border-neutral-100 bg-neutral-50/30 overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
        {/* Left Label */}
        <div className="shrink-0 flex items-center gap-4">
          <div className="w-1.5 h-1.5 rounded-full bg-brand" />
          <h3 className="text-[10px] font-black text-neutral-400 uppercase tracking-[0.4em] whitespace-nowrap">
            Institutional Partners
          </h3>
        </div>

        {/* Marquee Wrapper */}
        <div className="flex-1 relative overflow-hidden flex items-center">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-neutral-50/80 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-neutral-50/80 to-transparent z-10" />

          <div className="flex animate-[data-stream_30s_linear_infinite] gap-16 items-center">
            {[...CLIENTS, ...CLIENTS].map((client, i) => (
              <div
                key={i}
                className="flex flex-col gap-1 items-center shrink-0 group transition-all duration-500 hover:scale-105"
              >
                <span className="text-xl font-black text-neutral-300 group-hover:text-neutral-900 transition-colors tracking-tighter">
                  {client.name.toUpperCase()}
                </span>
                <span className="text-[8px] font-black text-neutral-300/50 uppercase tracking-widest group-hover:text-brand/50 transition-colors">
                  {client.region}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Subtle Bottom Accent */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand/10 to-transparent" />
    </div>
  );
};
