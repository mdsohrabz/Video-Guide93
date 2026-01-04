import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, LineChart, Line } from 'recharts';
import { Search, FileJson, ArrowRight, Database, Bot, Check, Terminal, Play, CheckCircle } from 'lucide-react';

const dataSignal = [
  { name: 'Mon', volume: 400 },
  { name: 'Tue', volume: 300 },
  { name: 'Wed', volume: 550 },
  { name: 'Thu', volume: 800 },
  { name: 'Fri', volume: 950 },
];

export const SignalVisual: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-slate-800/50 rounded-xl border border-slate-700 backdrop-blur-sm">
      <div className="w-full max-w-sm mb-6">
        <div className="flex items-center space-x-2 bg-slate-900 p-3 rounded-lg border border-slate-700 shadow-inner">
          <Search className="text-purple-400 w-5 h-5" />
          <span className="text-slate-400 text-sm">Social Media Growth...</span>
        </div>
      </div>
      
      <div className="w-full h-48">
        <h4 className="text-xs font-semibold text-slate-400 mb-2 uppercase tracking-widest text-center">Trend Volume Detected</h4>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={dataSignal}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
            <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#f8fafc' }}
              cursor={{ fill: '#334155', opacity: 0.4 }}
            />
            <Bar dataKey="volume" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 flex items-center space-x-2 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
        <span className="text-emerald-400 text-xs font-bold">Opportunity Found</span>
      </div>
    </div>
  );
};

export const ProcessVisual: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-row gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700 backdrop-blur-sm overflow-hidden relative">
      {/* Left: Chat Input */}
      <div className="flex-1 flex flex-col space-y-3 pt-4">
        <div className="bg-slate-700/50 p-3 rounded-tr-xl rounded-bl-xl rounded-br-xl text-xs text-slate-300 w-4/5 self-start border border-slate-600">
           Create an SOP for a viral dashboard app using n8n.
        </div>
        <div className="bg-indigo-600/20 p-3 rounded-tl-xl rounded-bl-xl rounded-br-xl text-xs text-indigo-200 w-4/5 self-end border border-indigo-500/30">
           Here is the architecture. Now, paste a Dribbble screenshot for the UI.
        </div>
        <div className="bg-slate-700/50 p-3 rounded-tr-xl rounded-bl-xl rounded-br-xl text-xs text-slate-300 w-3/5 self-start border border-slate-600 flex items-center gap-2">
           <div className="w-4 h-4 bg-purple-500 rounded-sm"></div> image.png
        </div>
      </div>

      {/* Right: UI Generation */}
      <div className="flex-1 bg-slate-900 rounded-lg border border-slate-700 p-2 relative shadow-xl transform rotate-1 scale-95 origin-top-right transition-transform hover:rotate-0 hover:scale-100">
         <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
         <div className="h-2 w-1/3 bg-slate-700 rounded mb-2 mt-2"></div>
         <div className="flex gap-2 mb-4">
            <div className="h-16 w-1/2 bg-slate-800 rounded border border-slate-700"></div>
            <div className="h-16 w-1/2 bg-slate-800 rounded border border-slate-700"></div>
         </div>
         <div className="h-2 w-full bg-slate-800 rounded mb-1"></div>
         <div className="h-2 w-2/3 bg-slate-800 rounded mb-1"></div>
         <div className="h-2 w-4/5 bg-slate-800 rounded"></div>
         
         <div className="absolute bottom-2 right-2 px-2 py-1 bg-blue-500/20 text-blue-400 text-[10px] rounded border border-blue-500/30">
            Generating UI...
         </div>
      </div>
    </div>
  );
};

export const EngineVisual: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-slate-800/50 rounded-xl border border-slate-700 backdrop-blur-sm relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-0 opacity-10 pointer-events-none">
             {Array.from({ length: 36 }).map((_, i) => (
                 <div key={i} className="border border-slate-400"></div>
             ))}
        </div>

        <div className="flex items-center justify-between w-full max-w-md z-10">
            {/* Input Node */}
            <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/20 border border-orange-400">
                    <Database className="text-white w-6 h-6" />
                </div>
                <span className="text-xs text-slate-400 mt-2 font-mono">Reddit</span>
            </div>

            {/* Connection Line 1 */}
            <div className="flex-1 h-0.5 bg-slate-600 mx-2 relative">
                 <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-2 h-2 bg-slate-400 rounded-full animate-ping"></div>
            </div>

            {/* Processor Node */}
            <div className="flex flex-col items-center">
                <div className="w-14 h-14 bg-pink-600 rounded-xl flex items-center justify-center shadow-lg shadow-pink-600/20 border border-pink-500">
                    <Bot className="text-white w-7 h-7" />
                </div>
                <span className="text-xs text-slate-400 mt-2 font-mono">AI Hooks</span>
            </div>

            {/* Connection Line 2 */}
            <div className="flex-1 h-0.5 bg-slate-600 mx-2 relative">
                <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-2 h-2 bg-slate-400 rounded-full animate-ping delay-100"></div>
            </div>

            {/* Output Node */}
             <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20 border border-blue-400">
                    <FileJson className="text-white w-6 h-6" />
                </div>
                <span className="text-xs text-slate-400 mt-2 font-mono">Dashboard</span>
            </div>
        </div>

        <div className="mt-8 px-4 py-2 bg-slate-900 rounded border border-slate-600 font-mono text-xs text-green-400 flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            MCP Protocol Active
        </div>
    </div>
  );
};

export const EnhanceVisual: React.FC = () => {
    return (
        <div className="w-full h-full flex flex-col p-0 bg-slate-900 rounded-xl border border-slate-700 overflow-hidden font-mono text-sm">
            {/* Toolbar */}
            <div className="bg-slate-800 px-4 py-2 flex items-center justify-between border-b border-slate-700">
                <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-slate-400 text-xs">debugger.ts — Cursor</div>
            </div>
            
            {/* Code Content */}
            <div className="p-4 flex-1 text-slate-300 space-y-1 relative">
                <div className="flex">
                    <span className="text-slate-600 w-6 text-right mr-4 select-none">1</span>
                    <span className="text-purple-400">const</span> <span className="text-blue-300">fetchData</span> = <span className="text-purple-400">async</span> () ={'>'} {'{'}
                </div>
                <div className="flex">
                    <span className="text-slate-600 w-6 text-right mr-4 select-none">2</span>
                    <span className="ml-4 text-slate-500">// Fix: Added error handling</span>
                </div>
                <div className="flex">
                    <span className="text-slate-600 w-6 text-right mr-4 select-none">3</span>
                    <span className="ml-4 text-purple-400">try</span> {'{'}
                </div>
                <div className="flex">
                    <span className="text-slate-600 w-6 text-right mr-4 select-none">4</span>
                    <span className="ml-8 text-blue-300">await</span> n8n.trigger(<span className="text-green-300">'scrape'</span>);
                </div>
                <div className="flex">
                    <span className="text-slate-600 w-6 text-right mr-4 select-none">5</span>
                    <span className="ml-4 text-purple-400">}</span> <span className="text-purple-400">catch</span> (e) {'{'}
                </div>
                <div className="flex bg-red-900/20 -mx-4 px-4 border-l-2 border-red-500">
                     <span className="text-slate-600 w-6 text-right mr-4 select-none">6</span>
                     <span className="ml-8 text-red-300">console.error("Scraping failed", e);</span>
                </div>
                 <div className="flex bg-green-900/20 -mx-4 px-4 border-l-2 border-green-500 animate-pulse">
                     <span className="text-slate-600 w-6 text-right mr-4 select-none">7</span>
                     <span className="ml-8 text-green-300">Auto-fix applied by Claude</span>
                </div>
                 <div className="flex">
                    <span className="text-slate-600 w-6 text-right mr-4 select-none">8</span>
                    <span className="ml-4 text-purple-400">}</span>
                </div>
                <div className="flex">
                    <span className="text-slate-600 w-6 text-right mr-4 select-none">9</span>
                    {'}'}
                </div>

                {/* Floating Success Toast */}
                <div className="absolute bottom-4 right-4 bg-slate-800 text-green-400 border border-green-500/50 shadow-lg px-4 py-2 rounded-lg flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-xs">Bug Resolved</span>
                </div>
            </div>
        </div>
    );
};