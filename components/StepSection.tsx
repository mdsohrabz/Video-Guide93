import React from 'react';
import { StepData } from '../types';
import { STEP_ICONS } from '../constants';
import { SignalVisual, ProcessVisual, EngineVisual, EnhanceVisual } from './Visuals';

interface StepSectionProps {
  step: StepData;
  index: number;
}

const StepSection: React.FC<StepSectionProps> = ({ step, index }) => {
  const isEven = index % 2 === 0;

  const renderVisual = () => {
    switch (step.id) {
      case 'signal': return <SignalVisual />;
      case 'process': return <ProcessVisual />;
      case 'engine': return <EngineVisual />;
      case 'enhance': return <EnhanceVisual />;
      default: return null;
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6 relative border-b border-slate-800/50">
      {/* Background Glow */}
      <div className={`absolute top-1/2 ${isEven ? 'left-0' : 'right-0'} w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none`} />

      <div className={`max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}>
        
        {/* Content Side */}
        <div className={`space-y-8 ${!isEven ? 'lg:col-start-2' : ''} z-10`}>
          <div className="inline-flex items-center space-x-3 bg-slate-800/80 backdrop-blur border border-slate-700 rounded-full px-4 py-1.5 shadow-lg">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-600 text-white font-bold text-sm shadow-indigo-500/50 shadow-md">
              {step.letter}
            </span>
            <span className="text-indigo-300 font-medium tracking-wide text-sm uppercase">Step {index + 1}</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            {step.title}
            <span className="block text-xl md:text-2xl text-slate-400 mt-2 font-normal">
              {step.description}
            </span>
          </h2>

          <div className="space-y-4">
            {step.details.map((detail, i) => (
              <div key={i} className="flex items-start space-x-3 group">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-purple-400 transition-colors" />
                <p className="text-slate-300 leading-relaxed text-lg">{detail}</p>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-slate-800">
            <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Tools Used</h4>
            <div className="flex flex-wrap gap-3">
              {step.tools.map((tool) => (
                <span key={tool} className="px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-md border border-slate-700 hover:border-slate-500 transition-colors">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Visual Side */}
        <div className={`relative h-[400px] w-full z-10 ${!isEven ? 'lg:col-start-1' : ''}`}>
           <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-2xl blur-xl transform translate-y-4"></div>
           <div className="relative h-full w-full bg-slate-900/80 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-10 bg-slate-800/50 border-b border-white/5 flex items-center px-4 space-x-2">
                 <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                 <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                 <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                 <div className="ml-4 text-[10px] text-slate-500 uppercase font-mono tracking-widest">
                    {step.title}_System_View
                 </div>
              </div>
              <div className="p-2 h-[calc(100%-40px)] w-full">
                {renderVisual()}
              </div>
           </div>
           
           {/* Decorative Icon Float */}
           <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-slate-800 rounded-2xl border border-slate-700 shadow-xl flex items-center justify-center text-indigo-400 transform rotate-12">
              {STEP_ICONS[step.id]}
           </div>
        </div>

      </div>
    </section>
  );
};

export default StepSection;