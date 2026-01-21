import React, { useState, useRef, useEffect, useMemo } from 'react';
import { GoogleGenAI } from '@google/genai';
import { Button } from './ui/Button';
import { BrandMark } from './ui/Logo';

export const EditorialAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; content: string }[]>([
    { role: 'assistant', content: "Hi! I'm the A47ai Assistant. I can help you verify sources, draft segments, or check editorial tone. What are we working on?" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const ai = useMemo(() => new GoogleGenAI({ apiKey: process.env.API_KEY }), []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsTyping(true);

    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: 'You are an expert editorial assistant for A47ai, a high-stakes newsroom platform. Help journalists verify claims, polish copy, and maintain objectivity. Use a helpful, precise, and professional tone.'
        }
      });
      setMessages(prev => [...prev, { role: 'assistant', content: response.text || "I apologize, I'm having trouble connecting to the network." }]);
    } catch (err) {
      console.error(err);
      setMessages(prev => [...prev, { role: 'assistant', content: "Editorial intelligence nodes offline. Please verify API configuration." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] animate-float-subtle" style={{ animationDelay: '2.5s' }}>
      {isOpen ? (
        <div className="w-80 sm:w-96 bg-white/60 backdrop-blur-3xl border border-white/80 rounded-3xl shadow-2xl flex flex-col animate-in slide-in-from-bottom-4 duration-300 overflow-hidden">
          <div className="p-4 bg-brand/90 text-white flex items-center justify-between backdrop-blur-md">
            <div className="flex items-center gap-3">
              <BrandMark className="w-5 h-5" light />
              <span className="text-[10px] font-black uppercase tracking-widest">A47ai Intelligence</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
          <div ref={scrollRef} className="flex-1 h-[400px] overflow-y-auto p-5 space-y-4 no-scrollbar bg-white/10">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-[13px] font-medium leading-relaxed shadow-sm ${m.role === 'user'
                    ? 'bg-brand text-white rounded-tr-none shadow-brand/20'
                    : 'bg-white/80 text-slate-700 border border-white/80 backdrop-blur-md rounded-tl-none shadow-black/5'
                  }`}>
                  {m.content}
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 border-t border-white/40 bg-white/20 backdrop-blur-md">
            <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Message A47ai..."
                className="flex-1 bg-white/40 border border-white/60 rounded-xl px-4 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-brand/40 transition-colors"
              />
              <button
                type="submit"
                disabled={isTyping}
                className="w-10 h-10 bg-brand text-white rounded-xl flex items-center justify-center hover:bg-brand-dark transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" /></svg>
              </button>
            </form>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 glass rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all group border border-white/20"
        >
          <img src="/assets/Clock.png" alt="Clock" className="w-10 h-10 relative z-10" />
        </button>
      )}
    </div>
  );
};