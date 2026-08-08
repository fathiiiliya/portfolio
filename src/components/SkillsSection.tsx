import React, { useState } from 'react';
import { Code2, Terminal, Cpu, Layout, FileSpreadsheet, GitBranch, Sparkles, CheckCircle2, BookOpen } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'languages' | 'web' | 'tools'>('all');

  const skills = [
    {
      name: 'C Programming',
      category: 'languages',
      level: 'Fundamental / Coursework',
      icon: <Terminal className="w-5 h-5 text-amber-400" />,
      desc: 'Control structures, functions, pointers, arrays, memory management, and file I/O.',
      highlight: 'Core CS Foundation',
      badgeColor: 'bg-amber-500/10 text-amber-300 border-amber-500/30',
    },
    {
      name: 'Python Programming',
      category: 'languages',
      level: 'Intermediate / Active',
      icon: <Code2 className="w-5 h-5 text-blue-400" />,
      desc: 'Data manipulation, object-oriented concepts, algorithmic problem solving, and scripting.',
      highlight: 'High-level Problem Solving',
      badgeColor: 'bg-blue-500/10 text-blue-300 border-blue-500/30',
    },
    {
      name: 'Data Structures',
      category: 'languages',
      level: 'Academic Focus',
      icon: <Cpu className="w-5 h-5 text-emerald-400" />,
      desc: 'Arrays, linked lists, stacks, queues, trees, searching and sorting algorithms.',
      highlight: 'Algorithmic Thinking',
      badgeColor: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
    },
    {
      name: 'HTML & CSS',
      category: 'web',
      level: 'Practical Web Design',
      icon: <Layout className="w-5 h-5 text-indigo-400" />,
      desc: 'Semantic HTML markup, CSS styling, flexbox, grid layouts, and responsive design concepts.',
      highlight: 'UI Layouts',
      badgeColor: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/30',
    },
    {
      name: 'JavaScript',
      category: 'web',
      level: 'Learning Stage',
      icon: <Sparkles className="w-5 h-5 text-yellow-400" />,
      desc: 'DOM manipulation, event handling, variables, basic async operations, and web interactivity.',
      highlight: 'Active Learning',
      badgeColor: 'bg-yellow-500/10 text-yellow-300 border-yellow-500/30',
    },
    {
      name: 'Visual Studio Code',
      category: 'tools',
      level: 'Primary IDE',
      icon: <Code2 className="w-5 h-5 text-cyan-400" />,
      desc: 'Code editing, extensions, debugging, terminal usage, and workspace management.',
      highlight: 'Daily Editor',
      badgeColor: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30',
    },
    {
      name: 'Microsoft Excel',
      category: 'tools',
      level: 'Data Tools',
      icon: <FileSpreadsheet className="w-5 h-5 text-green-400" />,
      desc: 'Data organization, formulas, tabulations, charts, and basic data analysis.',
      highlight: 'Data Management',
      badgeColor: 'bg-green-500/10 text-green-300 border-green-500/30',
    },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="py-20 bg-zinc-950 relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5" />
            Technical Matrix
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-manrope text-white tracking-tight">
            Programming & <span className="text-gradient-amber">Technical Skills</span>
          </h2>
          <p className="mt-3 text-zinc-400 font-sans text-sm sm:text-base leading-relaxed">
            Building a versatile technical toolkit through B.Tech coursework and hands-on software development projects.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: 'all', label: 'All Skill Areas' },
            { id: 'languages', label: 'Programming Languages' },
            { id: 'web', label: 'Web Technologies' },
            { id: 'tools', label: 'Tools & Environments' },
          ].map((cat) => (
            <button
              key={cat.id}
              id={`skills-filter-${cat.id}`}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 border ${
                activeCategory === cat.id
                  ? 'bg-amber-400 text-zinc-950 border-amber-400 shadow-lg shadow-amber-500/10 font-sans'
                  : 'bg-zinc-900/60 text-zinc-400 border-zinc-800 hover:border-zinc-700 hover:text-zinc-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="glass-card glass-card-hover rounded-3xl p-6 border border-zinc-800 flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                    {skill.icon}
                  </div>
                  <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border ${skill.badgeColor}`}>
                    {skill.highlight}
                  </span>
                </div>

                <h3 className="text-lg font-bold font-manrope text-white mb-1">{skill.name}</h3>
                <p className="text-xs text-amber-400 font-mono mb-3">{skill.level}</p>
                <p className="text-xs text-zinc-400 leading-relaxed font-sans">{skill.desc}</p>
              </div>

              <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-500 font-mono">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Active Coursework
                </span>
                <span>Verified</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
