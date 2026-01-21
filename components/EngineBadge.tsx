import React, { useState } from 'react';

export const EngineBadge = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <a
            href="https://a47news.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-9 right-28 z-50 group cursor-none"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={`
        flex items-center
        bg-black/90 backdrop-blur-2xl border border-white/10
        rounded-full shadow-2xl shadow-black/50
        transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] overflow-hidden
        h-16
        ${isHovered ? 'w-auto pr-6' : 'w-16'}
      `}>
                {/* Logo Container - Perfectly Centered in Idle State */}
                <div className="w-16 h-16 flex items-center justify-center shrink-0 relative z-10">
                    <img
                        src="/Assets/Primary On Dark_Stack.png"
                        alt="A47 News"
                        className="w-8 h-8 object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                    />
                </div>

                {/* Text Content */}
                <div className={`
             flex flex-col whitespace-nowrap overflow-hidden transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]
             ${isHovered ? 'w-auto opacity-100 ml-0 translate-x-0' : 'w-0 opacity-0 -ml-4 -translate-x-4'}
        `}>
                    <div className="flex flex-col leading-none gap-0.5">
                        <span className="text-[9px] font-bold text-neutral-500 uppercase tracking-widest">
                            Live Production
                        </span>
                        <span className="text-lg font-bold text-white tracking-tight -ml-[1px]">
                            View Newsroom
                        </span>
                    </div>
                </div>
            </div>
        </a>
    );
};
