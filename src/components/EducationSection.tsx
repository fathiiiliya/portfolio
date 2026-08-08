import React from 'react';
import { GraduationCap, Calendar, MapPin, BookOpen, CheckCircle, Award, Sparkles } from 'lucide-react';

export const EducationSection: React.FC = () => {
  const courses = [
    {
      title: 'Programming in C',
      desc: 'Fundamentals of structured programming, pointers, memory layout, functions, arrays, and standard libraries.',
      code: 'CS101',
    },
    {
      title: 'Python Programming',
      desc: 'High-level syntax, object-oriented concepts, algorithms, data structures, and script automation.',
      code: 'CS102',
    },
    {
      title: 'Data Structures',
      desc: 'Linear and non-linear data structures including linked lists, stacks, queues, trees, and searching/sorting.',
      code: 'CS201',
    },
    {
      title: 'Digital Electronics',
      desc: 'Logic gates, Boolean algebra, combinational and sequential circuits, flip-flops, and hardware fundamentals.',
      code: 'EC105',
    },
    {
      title: 'Mathematics for Computer Science',
      desc: 'Discrete mathematics, linear algebra, calculus, matrices, logic, and probability for computer applications.',
      code: 'MA103',
    },
  ];

  return (
    <section id="education" className="py-20 bg-zinc-950 relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            Academic Background
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-manrope text-white tracking-tight">
            Education & <span className="text-gradient-emerald">Coursework</span>
          </h2>
          <p className="mt-3 text-zinc-400 font-sans text-sm sm:text-base leading-relaxed">
            Pursuing Computer Science & Engineering with a strong focus on problem-solving, algorithms, and core software engineering concepts.
          </p>
        </div>

        {/* Education Highlight Card */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 border border-zinc-800 relative overflow-hidden mb-12 shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2 text-xs font-sans">
                <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 font-semibold">
                  Undergraduate Degree
                </span>
                <span className="text-zinc-500">•</span>
                <span className="text-zinc-400 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-zinc-400" /> 2025 – Present
                </span>
                <span className="text-zinc-500">•</span>
                <span className="text-zinc-400 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-zinc-400" /> Kerala, India
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-manrope text-white tracking-tight">
                Bachelor of Technology (B.Tech) – Computer Science & Engineering
              </h3>

              <p className="text-base text-zinc-300 font-sans font-medium flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-emerald-400" />
                LBS Institute of Technology for Women, Kerala
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800 text-xs space-y-2 lg:max-w-xs">
              <span className="text-amber-300 font-semibold uppercase tracking-wider block font-sans">
                Academic Commitment
              </span>
              <p className="text-zinc-300 leading-relaxed font-sans">
                Currently building a rock-solid foundation in core programming paradigms, data structures, and modern software development practices.
              </p>
            </div>
          </div>
        </div>

        {/* Relevant Coursework Grid */}
        <div>
          <h3 className="text-xl font-bold font-manrope text-white mb-6 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-amber-400" />
            Relevant Engineering Coursework
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {courses.map((course) => (
              <div
                key={course.title}
                className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 transition-all duration-200 flex flex-col justify-between space-y-3"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                      {course.code}
                    </span>
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                  </div>
                  <h4 className="text-base font-bold font-manrope text-white">{course.title}</h4>
                  <p className="mt-1 text-xs text-zinc-400 leading-relaxed font-sans">{course.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
