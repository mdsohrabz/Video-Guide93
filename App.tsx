import React, { useState, useEffect } from 'react';
import { STEPS } from './constants';
import StepSection from './components/StepSection';
import { Sparkles, ChevronDown, PlayCircle } from 'lucide-react';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-50 selection:bg-indigo-500/30">
      
      {/* Sticky Header */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/90 backdrop-blur-md border-b border-slate-800 py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Sparkles className="text-white w-5 h-5" />
            </div>
            <span className="font-bold text-lg tracking-tight">SPEE<span className="text-indigo-400">Framework</span></span>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-400">
            {STEPS.map(step => (
              <a key={step.id} href={`#${step.id}`} className="hover:text-white transition-colors">
                <span className="text-indigo-500 mr-1">{step.letter}</span>{step.title}
              </a>
            ))}
          </div>
          <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors backdrop-blur-sm border border-white/5 flex items-center gap-2">
             <PlayCircle className="w-4 h-4" />
             Watch Tutorial
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 font-medium text-sm animate-fade-in-up">
            New Tutorial • AI App Building
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400">
            Build a Viral Trend Dashboard
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            A step-by-step guide to mastering the <span className="text-indigo-400 font-bold">SPEE</span> framework: Signal, Process, Engine, and Enhance.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
             <a href="#signal" className="px-8 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-full transition-all shadow-lg shadow-indigo-500/25 w-full sm:w-auto">
               Start Learning
             </a>
             <button className="px-8 py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-full border border-slate-700 transition-all w-full sm:w-auto">
               View Logic
             </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-slate-500 w-8 h-8" />
        </div>
      </header>

      {/* Steps Container */}
      <main className="relative z-10 pb-20">
        {STEPS.map((step, index) => (
          <div key={step.id} id={step.id}>
             <StepSection step={step} index={index} />
          </div>
        ))}
      </main>

      <footer className="py-12 border-t border-slate-800 bg-slate-900 text-center">
         <div className="text-slate-500 text-sm">
           © 2024 SPEE Tutorial. Built with React & Tailwind.
         </div>
      </footer>
    </div>
  );
};

export default App;