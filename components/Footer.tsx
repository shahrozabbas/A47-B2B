import React, { useState } from 'react';
import { Logo } from './ui/Logo';

export const Footer = () => {
    const [hoveredSection, setHoveredSection] = useState<string | null>(null);

    const sections = [
        {
            id: 'intelligence',
            title: 'Intelligence',
            links: ['Signals', 'Audit Engine', 'Network', 'Sources'],
            gradient: 'from-blue-900/40 to-indigo-900/40'
        },
        {
            id: 'workflow',
            title: 'Workflow',
            links: ['Drafting', 'Verification', 'Collaboration', 'History'],
            gradient: 'from-emerald-900/40 to-teal-900/40'
        },
        {
            id: 'distribution',
            title: 'Distribution',
            links: ['Channels', 'API', 'Embargo', 'Analytics'],
            gradient: 'from-rose-900/40 to-orange-900/40'
        },
        {
            id: 'security',
            title: 'Security',
            links: ['Encryption', 'Compliance', 'Audit Logs', 'SSO'],
            gradient: 'from-slate-900/40 to-zinc-900/40'
        }
    ];

    return (
        <footer className="relative w-full bg-neutral-950 text-white overflow-hidden">

            {/* Visual Background Layer */}
            <div className="absolute inset-0 z-0 transition-all duration-1000 ease-in-out">
                {sections.map((section) => (
                    <div
                        key={section.id}
                        className={`absolute inset-0 bg-gradient-to-br ${section.gradient} transition-opacity duration-700 ease-in-out ${hoveredSection === section.id ? 'opacity-100' : 'opacity-0'
                            }`}
                    />
                ))}
                {/* Default subtle grain or gradient */}
                <div className={`absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-900/50 to-neutral-950 transition-opacity duration-700 ${hoveredSection ? 'opacity-0' : 'opacity-100'}`} />
            </div>

            {/* Shapes/Blobs for depth */}
            <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-white/5 blur-[150px] rounded-full pointer-events-none mix-blend-overlay" />

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12 pt-24 md:pt-32 flex-1 flex flex-col h-full">

                {/* Top: Header & CTA */}
                <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-12">
                    <div className="space-y-6 max-w-lg">
                        <Logo light />
                        <h2 className="text-4xl md:text-5xl font-heading font-medium tracking-tight text-neutral-300 leading-tight">
                            Institutional trust,<br />
                            <span className="text-white font-bold">delivered at speed.</span>
                        </h2>
                    </div>

                    <div className="flex flex-col items-end gap-2">
                        <button className="px-8 py-4 bg-white text-black rounded-full text-sm font-bold uppercase tracking-widest hover:bg-brand hover:text-white transition-all transform hover:scale-105 shadow-xl shadow-white/5">
                            Start Verification
                        </button>
                        <span className="text-[10px] text-neutral-500 uppercase tracking-widest font-bold pr-4">Trial requires manual approval</span>
                    </div>
                </div>

                {/* Middle: The Visual Index */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm">
                    {sections.map((section) => (
                        <div
                            key={section.id}
                            className="relative p-8 md:p-12 group transition-colors hover:bg-white/5 border-b md:border-b-0 border-r border-white/5 last:border-r-0 border-neutral-800"
                            onMouseEnter={() => setHoveredSection(section.id)}
                            onMouseLeave={() => setHoveredSection(null)}
                        >
                            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-3">
                                <span className={`w-2 h-2 rounded-full transition-colors duration-300 ${hoveredSection === section.id ? 'bg-brand shadow-[0_0_10px_theme(colors.brand)]' : 'bg-neutral-700'}`} />
                                {section.title}
                            </h3>
                            <ul className="space-y-3">
                                {section.links.map(link => (
                                    <li key={link}>
                                        <a href="#" className="block text-sm text-neutral-400 hover:text-white hover:translate-x-1 transition-all duration-300">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>

                            {/* Hover Arrow */}
                            <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 text-brand">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom: Technical Data */}
                <div className="flex-1 flex items-end pb-12 mt-12">
                    <div className="w-full flex flex-col md:flex-row justify-between items-end gap-8 border-t border-white/10 pt-8">

                        <div className="flex gap-12 text-[10px] uppercase tracking-widest font-bold text-neutral-500">
                            <div className="flex flex-col gap-1">
                                <span>London</span>
                                <span className="text-white">14:32 GMT</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span>New York</span>
                                <span className="text-white">09:32 EST</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span>System Status</span>
                                <span className="text-emerald-500 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                    Operational
                                </span>
                            </div>
                        </div>

                        <div className="flex gap-8">
                            {['Privacy', 'Terms', 'Sitemap', 'Cookies'].map(item => (
                                <a key={item} href="#" className="text-[10px] uppercase tracking-widest font-bold text-neutral-500 hover:text-white transition-colors">
                                    {item}
                                </a>
                            ))}
                        </div>

                        <div className="text-[10px] uppercase tracking-widest font-bold text-neutral-600">
                            © 2026 A47 Inc.
                        </div>

                    </div>
                </div>
            </div>

        </footer>
    );
};
