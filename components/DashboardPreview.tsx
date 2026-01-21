
import React, { useState } from 'react';
import { NewsRole, Source, VerificationResult, VoiceAnalysis } from '../types';
import { verifySource, analyzeVoice } from '../services/geminiService';
import { Logo } from './ui/Logo';

const INITIAL_SOURCES: Source[] = [
  { id: '1', name: 'SEC Filing Q4-2024', type: 'Official', status: 'verified', url: '#' },
  { id: '2', name: 'Reuters Wire Service', type: 'Wire', status: 'verified', url: '#' },
  { id: '3', name: 'Global Market Intel', type: 'Data', status: 'verified', url: '#' },
  { id: '4', name: 'Industry Expert (Interview)', type: 'Primary', status: 'pending', url: '#' },
];

export const DashboardPreview: React.FC = () => {
  const [activeRole, setActiveRole] = useState<NewsRole>(NewsRole.EDITORIAL);
  const [sources, setSources] = useState<Source[]>(INITIAL_SOURCES);
  const [activeTab, setActiveTab] = useState('Sources');
  const [loadingId, setLoadingId] = useState<string | null>(null);
  const [selectedResult, setSelectedResult] = useState<VerificationResult | null>(null);
  const [voiceProfile, setVoiceProfile] = useState<VoiceAnalysis | null>(null);
  const [isScanningVoice, setIsScanningVoice] = useState(false);

  const handleVerify = async (source: Source) => {
    if (source.status === 'verified' && selectedResult) {
      setSelectedResult(null);
      return;
    }
    
    setLoadingId(source.id);
    setSelectedResult(null);
    const result = await verifySource(source.name, source.type);
    
    setSources(prev => prev.map(s => 
      s.id === source.id ? { ...s, status: result.score > 70 ? 'verified' : 'flagged' } : s
    ));
    setSelectedResult(result);
    setLoadingId(null);
  };

  const handleScanVoice = async () => {
    setIsScanningVoice(true);
    const sample = "Today we observed a significant uptick in market volatility as enterprise leaders gathered for the annual summit. Our reporting remains objective, focusing on raw data points and verified testimonies rather than speculative narratives.";
    const analysis = await analyzeVoice(sample);
    setVoiceProfile(analysis);
    setIsScanningVoice(false);
  };

  return (
    <div className="w-full max-w-2xl bg-white/40 backdrop-blur-3xl rounded-[40px] border border-white/80 shadow-2xl shadow-black/5 overflow-hidden flex flex-col transition-all duration-700 hover:shadow-black/10 relative group">
      
      {/* Role Toolbar */}
      <div className="flex items-center px-8 py-5 border-b border-white/40 bg-white/10 relative">
        <div className="absolute -left-2 top-1/2 -translate-y-1/2 flex items-center gap-2 rotate-90 origin-left">
           <span className="text-[7px] font-black text-neutral-400 uppercase tracking-widest whitespace-nowrap opacity-40 group-hover:opacity-100 transition-opacity underline decoration-brand/30 underline-offset-4">Perspective Nodes</span>
        </div>
        <div className="flex gap-2 overflow-x-auto no-scrollbar pl-4">
          {Object.values(NewsRole).map((role) => (
            <button
              key={role}
              onClick={() => setActiveRole(role)}
              className={`text-[8px] font-black tracking-[0.2em] uppercase px-5 py-2 rounded-full transition-all whitespace-nowrap border ${
                activeRole === role 
                  ? 'bg-neutral-900 text-white border-neutral-900 shadow-md' 
                  : 'text-neutral-400 border-white/80 bg-white/60 hover:text-neutral-600'
              }`}
            >
              {role}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto max-h-[540px] no-scrollbar relative">
        {/* News Desk Header */}
        <div className="px-10 py-8 flex items-center justify-between sticky top-0 bg-white/60 backdrop-blur-2xl z-20 border-b border-white/40">
          <div className="flex items-center gap-4">
            <div className="w-2.5 h-2.5 rounded-full bg-brand shadow-[0_0_12px_rgba(0,115,103,0.3)] animate-pulse" />
            <h3 className="text-neutral-900 text-base font-bold tracking-tight italic">Publisher Profile</h3>
          </div>
          <div className="flex -space-x-2">
             {[1,2,3].map(i => (
               <div key={i} className={`w-8 h-8 rounded-full border-2 border-white bg-neutral-100 flex items-center justify-center text-[9px] font-black text-neutral-400 shadow-sm transition-transform hover:-translate-y-1`}>U</div>
             ))}
          </div>
        </div>

        {/* Local Tab Nav */}
        <div className="flex px-10 border-b border-white/20 bg-white/10">
          {['Sources', 'Voice & Tone', 'Audit'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-6 py-5 text-[10px] font-black uppercase tracking-[0.2em] transition-colors ${
                activeTab === tab ? 'text-brand' : 'text-neutral-400 hover:text-neutral-600'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-brand rounded-t-full transition-all duration-300" />
              )}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="p-10 space-y-5 relative min-h-[400px]">
          {activeTab === 'Sources' && (
            <>
              {sources.map((source, index) => (
                <div key={source.id} className={`space-y-4 opacity-0 animate-reveal stagger-${index + 1}`}>
                  <div 
                    className={`relative flex items-center justify-between p-6 rounded-3xl border transition-all duration-500 group cursor-pointer overflow-hidden ${
                      loadingId === source.id ? 'bg-white/40 border-brand/20' : 
                      source.status === 'verified' ? 'bg-brand/5 border-brand/10 hover:bg-brand/10' : 
                      'bg-white/50 border-white/80 hover:border-brand/30 hover:bg-white/80 shadow-sm'
                    }`}
                    onClick={() => handleVerify(source)}
                  >
                    {loadingId === source.id && (
                      <div className="absolute left-0 right-0 h-[2px] bg-brand/30 shadow-[0_0_10px_brand] animate-scan z-10 pointer-events-none" />
                    )}
                    <div className="flex items-center gap-5 relative z-10">
                      <div className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${
                        source.status === 'verified' ? 'bg-brand shadow-[0_0_10px_rgba(0,115,103,0.4)] scale-110' : 
                        source.status === 'flagged' ? 'bg-rose-400 animate-pulse' : 'bg-neutral-200'
                      }`} />
                      <div>
                        <h4 className="text-sm font-bold text-neutral-800 group-hover:text-brand transition-colors">{source.name}</h4>
                        <p className="text-[10px] text-neutral-400 font-bold uppercase tracking-[0.2em] mt-0.5">{source.type}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 relative z-10">
                      {loadingId === source.id ? (
                        <div className="flex gap-1.5 items-center">
                           <span className="text-[8px] font-black uppercase text-brand tracking-widest animate-pulse">Analyzing</span>
                           <div className="animate-spin rounded-full h-3 w-3 border-[1.5px] border-brand border-t-transparent" />
                        </div>
                      ) : (
                        <div className="flex items-center gap-3">
                           <span className={`text-[8px] font-black uppercase tracking-[0.25em] px-3.5 py-1.5 rounded-full transition-all ${
                             source.status === 'verified' ? 'bg-brand text-white shadow-lg shadow-brand/20' : 
                             source.status === 'flagged' ? 'bg-rose-50 text-rose-600' : 'bg-white text-neutral-400 border border-white/80'
                           }`}>
                             {source.status}
                           </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {selectedResult && source.status === 'verified' && !loadingId && sources.indexOf(source) === sources.findIndex(s => s.status === 'verified') && (
                    <div className="p-8 glass-dark rounded-[32px] animate-in slide-in-from-top-4 duration-700 mx-2 shadow-2xl relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-4 opacity-10"><Logo light /></div>
                      <div className="relative z-10 space-y-6">
                        <div className="flex items-center justify-between">
                          <div className="text-[9px] font-black text-brand uppercase tracking-[0.3em] animate-pulse">Reputation Score</div>
                          <div className="text-2xl font-black text-white italic">{selectedResult.score}%</div>
                        </div>
                        <p className="text-sm text-neutral-300 leading-relaxed font-medium animate-reveal">{selectedResult.summary}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </>
          )}

          {activeTab === 'Voice & Tone' && (
            <div className="animate-reveal space-y-8">
              {!voiceProfile && !isScanningVoice ? (
                <div className="text-center py-20 bg-neutral-50 rounded-[32px] border border-dashed border-neutral-200 group/scan relative overflow-hidden">
                  <div className="absolute inset-0 bg-brand/5 scale-x-0 group-hover/scan:scale-x-100 transition-transform origin-left duration-700 pointer-events-none" />
                  <p className="text-sm text-neutral-500 font-medium mb-6 relative z-10">No Voice Profile found. Sync your publisher history.</p>
                  <button 
                    onClick={handleScanVoice}
                    className="relative z-10 px-8 py-3 bg-brand text-white rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg shadow-brand/20 active:scale-95 transition-all"
                  >
                    Scan Historical Content
                  </button>
                  <div className="mt-4 text-[7px] font-black text-brand uppercase tracking-[0.4em] opacity-40 animate-pulse">Verification Required</div>
                </div>
              ) : isScanningVoice ? (
                <div className="py-20 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full border-4 border-brand border-t-transparent animate-spin mb-8" />
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand animate-pulse">Deep Stylistic Extraction...</p>
                </div>
              ) : (
                <div className="space-y-10">
                   <div className="flex items-center justify-between">
                      <h4 className="text-xl font-bold text-neutral-900 font-serif italic">Profile: {voiceProfile.profile.voiceName}</h4>
                      <div className="px-4 py-1.5 bg-brand/10 text-brand rounded-full text-[10px] font-black uppercase tracking-widest">Active Sync</div>
                   </div>

                   <div className="grid grid-cols-2 gap-4">
                      {[
                        { label: 'Formality', value: voiceProfile.profile.formality },
                        { label: 'Objectivity', value: voiceProfile.profile.objectivity },
                        { label: 'Complexity', value: voiceProfile.profile.complexity },
                        { label: 'Urgency', value: voiceProfile.profile.urgency },
                      ].map((attr) => (
                        <div key={attr.label} className="p-6 bg-white rounded-3xl border border-neutral-100 shadow-sm space-y-4 hover:border-brand/30 transition-all group">
                           <div className="flex justify-between items-center">
                              <span className="text-[10px] font-black text-neutral-400 uppercase tracking-widest">{attr.label}</span>
                              <span className="text-xs font-black text-neutral-900">{attr.value}%</span>
                           </div>
                           <div className="w-full h-1.5 bg-neutral-100 rounded-full overflow-hidden">
                              <div className="h-full bg-brand transition-all duration-1000" style={{ width: `${attr.value}%` }} />
                           </div>
                        </div>
                      ))}
                   </div>

                   <div className="p-8 bg-neutral-900 rounded-[32px] text-white space-y-4">
                      <div className="text-[9px] font-black text-brand uppercase tracking-widest">Alignment Recommendations</div>
                      <ul className="space-y-3">
                         {voiceProfile.suggestedAdjustments.map((adj, i) => (
                           <li key={i} className="flex items-center gap-3 text-sm font-medium opacity-80">
                              <div className="w-1.5 h-1.5 rounded-full bg-brand" />
                              {adj}
                           </li>
                         ))}
                      </ul>
                   </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'Audit' && (
             <div className="flex flex-col items-center justify-center py-24 opacity-30 animate-reveal">
                <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-neutral-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                </div>
                <p className="text-[10px] font-black text-neutral-400 uppercase tracking-[0.4em]">Historical Logs Restricted</p>
             </div>
          )}
        </div>
      </div>

      <div className="px-10 py-5 bg-white/20 border-t border-white/40 flex items-center justify-between backdrop-blur-md">
        <div className="text-[8px] text-neutral-400 font-black uppercase tracking-[0.5em] flex items-center gap-3">
          <div className="flex gap-1"><div className="w-1 h-1 rounded-full bg-brand animate-ping" /></div>
          A47 Voice Sync Active
        </div>
      </div>
    </div>
  );
};
