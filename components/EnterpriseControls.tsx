
import React from 'react';

export const EnterpriseControls: React.FC = () => {
  return (
    <section className="py-32 px-6 md:px-12 bg-[#F8F9FA]/60 backdrop-blur-md border-y border-white/40">
      <div className="max-w-[1300px] mx-auto space-y-16">
        <div className="text-center space-y-4">
          <span className="text-brand text-[11px] font-bold uppercase tracking-[0.3em]">Enterprise Controls</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Editorial control, standards, and accountability.</h2>
          <p className="text-slate-500 font-medium">Define who can do what, enforce review gates, and maintain complete traceability.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Permissions Table */}
          <div className="bg-white/40 backdrop-blur-2xl border border-white/80 rounded-[32px] overflow-hidden p-8 shadow-xl shadow-black/5">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-8">Role-Based Permissions</div>
            <table className="w-full">
              <thead className="text-[10px] font-black text-slate-400 uppercase tracking-widest text-left">
                <tr>
                  <th className="pb-4 font-black">Role</th>
                  <th className="pb-4 text-center">Create</th>
                  <th className="pb-4 text-center">Edit</th>
                  <th className="pb-4 text-center">Submit</th>
                  <th className="pb-4 text-center">Approve</th>
                  <th className="pb-4 text-center">Publish</th>
                </tr>
              </thead>
              <tbody className="text-xs font-bold text-slate-700">
                {[
                  { role: 'Reporter', c: true, e: true, s: true, a: false, p: false },
                  { role: 'Editor', c: true, e: true, s: true, a: true, p: false },
                  { role: 'Standards', c: false, e: false, s: false, a: true, p: true },
                  { role: 'Admin', c: true, e: true, s: true, a: true, p: true },
                ].map((row, i) => (
                  <tr key={i} className="border-t border-white/40">
                    <td className="py-5">{row.role}</td>
                    <td className="py-5 text-center">{row.c ? <div className="w-2 h-2 rounded-full bg-brand shadow-sm shadow-brand/40 mx-auto"/> : <span className="text-slate-300">—</span>}</td>
                    <td className="py-5 text-center">{row.e ? <div className="w-2 h-2 rounded-full bg-brand shadow-sm shadow-brand/40 mx-auto"/> : <span className="text-slate-300">—</span>}</td>
                    <td className="py-5 text-center">{row.s ? <div className="w-2 h-2 rounded-full bg-brand shadow-sm shadow-brand/40 mx-auto"/> : <span className="text-slate-300">—</span>}</td>
                    <td className="py-5 text-center">{row.a ? <div className="w-2 h-2 rounded-full bg-brand shadow-sm shadow-brand/40 mx-auto"/> : <span className="text-slate-300">—</span>}</td>
                    <td className="py-5 text-center">{row.p ? <div className="w-2 h-2 rounded-full bg-brand shadow-sm shadow-brand/40 mx-auto"/> : <span className="text-slate-300">—</span>}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Approval Workflow UI */}
          <div className="bg-slate-900/90 backdrop-blur-2xl rounded-[32px] p-8 text-white space-y-8 flex flex-col justify-center border border-white/10 shadow-2xl">
            <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Approval Workflow</div>
            <div className="space-y-6">
               <div className="flex items-center gap-6 p-6 bg-white/5 rounded-2xl border border-white/5 backdrop-blur-md">
                  <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center font-black text-sm text-white shadow-lg shadow-brand/20">1</div>
                  <div>
                    <div className="text-sm font-bold">Reporter</div>
                    <div className="text-[10px] text-white/40 font-bold uppercase tracking-wider mt-1">Creates & Submits</div>
                  </div>
               </div>
               <div className="w-[1px] h-6 bg-white/10 ml-11" />
               <div className="flex items-center gap-6 p-6 bg-white/5 rounded-2xl border border-white/5 backdrop-blur-md">
                  <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center font-black text-sm text-white shadow-lg shadow-brand/20">2</div>
                  <div>
                    <div className="text-sm font-bold">Desk Editor</div>
                    <div className="text-[10px] text-white/40 font-bold uppercase tracking-wider mt-1">Reviews & Approves</div>
                  </div>
               </div>
            </div>
            <div className="text-[10px] font-bold text-brand italic">
              Custom workflows available — Configure approval chains for different story types, desks, or sensitivity levels.
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-8 text-[10px] font-bold uppercase tracking-widest text-slate-400">
           <span className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-brand shadow-sm shadow-brand/40"/> Role-based access control (RBAC)</span>
           <span className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-brand shadow-sm shadow-brand/40"/> Approval gates at every stage</span>
           <span className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-brand shadow-sm shadow-brand/40"/> Complete audit logs</span>
           <span className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-brand shadow-sm shadow-brand/40"/> Full version history</span>
        </div>
      </div>
    </section>
  );
};
