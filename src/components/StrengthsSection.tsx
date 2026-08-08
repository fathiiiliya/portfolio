import React from 'react';
import { Zap, Brain, Target, Compass, Users, Clock, Languages, Globe2, Sparkles } from 'lucide-react';

export const StrengthsSection: React.FC = () => {
  const strengths = [
    {
      title: 'Quick Learner',
      desc: 'Rapidly absorbs new concepts, programming syntax, frameworks, and developer workflows.',
      icon: <Zap className="w-5 h-5 text-amber-400" />,
      color: 'border-amber-500/30 bg-amber-500/5',
    },
    {
      title: 'Analytical Thinking',
      desc: 'Breaks down complex problem statements into structured logic and modular algorithmic steps.',
      icon: <Brain className="w-5 h-5 text-blue-400" />,
      color: 'border-blue-500/30 bg-blue-500/5',
    },
    {
      title: 'Problem-Solving Mindset',
      desc: 'Driven by curiosity to debug, troubleshoot code, and optimize algorithmic efficiency.',
      icon: <Target className="w-5 h-5 text-emerald-400" />,
      color: 'border-emerald-500/30 bg-emerald-500/5',
    },
    {
      title: 'Willingness to Adapt',
      desc: 'Enthusiastic about exploring emerging web stacks, developer tools, and modern software paradigms.',
      icon: <Compass className="w-5 h-5 text-indigo-400" />,
      color: 'border-indigo-500/30 bg-indigo-500/5',
    },
    {
      title: 'Team Collaboration',
      desc: 'Works effectively in group projects, peer discussions, and collaborative academic settings.',
      icon: <Users className="w-5 h-5 text-purple-400" />,
      color: 'border-purple-500/30 bg-purple-500/5',
    },
    {
      title: 'Time Management',
      desc: 'Disciplined approach to balancing rigorous B.Tech coursework, self-learning, and project builds.',
      icon: <Clock className="w-5 h-5 text-cyan-400" />,
      color: 'border-cyan-500/30 bg-cyan-500/5',
    },
  ];

  return (
    <section id="strengths" className="py-20 bg-zinc-950 relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Core Competencies
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-manrope text-white tracking-tight">
            Key Strengths & <span className="text-gradient-amber">Languages</span>
          </h2>
          <p className="mt-3 text-zinc-400 font-sans text-sm sm:text-base leading-relaxed">
            Personal attributes and soft skills that complement technical proficiency for effective team contribution.
          </p>
        </div>

        {/* Strengths Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {strengths.map((item) => (
            <div
              key={item.title}
              className={`p-6 rounded-3xl border ${item.color} backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 space-y-3`}
            >
              <div className="w-10 h-10 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold font-manrope text-white">{item.title}</h3>
              <p className="text-xs text-zinc-300 leading-relaxed font-sans">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Languages Card */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <Languages className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-manrope text-white">Multilingual Proficiency</h3>
              <p className="text-xs text-zinc-400 font-sans">Effective communication across regional and global technical environments</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-5 py-3 rounded-2xl bg-zinc-900 border border-zinc-800 text-center">
              <span className="text-sm font-bold font-manrope text-white block">English</span>
              <span className="text-[10px] text-zinc-400 uppercase tracking-wider font-mono">Professional / Fluent</span>
            </div>
            <div className="px-5 py-3 rounded-2xl bg-zinc-900 border border-zinc-800 text-center">
              <span className="text-sm font-bold font-manrope text-white block">Malayalam</span>
              <span className="text-[10px] text-amber-400 uppercase tracking-wider font-mono">Native / Fluent</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
