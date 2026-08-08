import React from 'react';
import { ArrowRight, Play, MapPin, Sparkles, Code2, ShieldCheck, Cpu, Terminal, Compass, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onExploreProject: () => void;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProject, onOpenResume }) => {
  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-grid-pattern">
      {/* Ambient background glow spheres */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headline & Intro */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Location & Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-lg">
              <span className="flex items-center gap-1.5 text-xs uppercase tracking-wider font-sans text-zinc-300">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                Kerala, India
                <span className="text-zinc-600">•</span>
                <span className="text-amber-300 font-medium">B.Tech CS Student</span>
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-medium tracking-tighter font-manrope leading-[0.98] text-white">
              Designing Safer &<br />
              <span className="text-gradient-amber font-semibold">Intelligent Software</span><br />
              That Matters.
            </h1>

            {/* Professional Bio Statement */}
            <p className="text-base sm:text-lg text-zinc-300/90 max-w-xl font-sans leading-relaxed">
              Hi, I'm <strong className="text-white font-semibold">Liya Fathima C K</strong>. A motivated Computer Science student building strong foundations in programming, data structures, and web technologies. Creator of <span className="text-amber-300 underline underline-offset-4 decoration-amber-500/40 font-medium">SafeRoute</span> concept.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row gap-3.5 sm:gap-4 pt-2">
              <button
                id="hero-saferoute-cta"
                onClick={onExploreProject}
                className="group inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm font-semibold bg-white text-zinc-950 hover:bg-zinc-200 transition-all duration-300 shadow-xl shadow-white/5 font-sans"
              >
                <span>Try SafeRoute Demo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-zinc-950" />
              </button>

              <button
                id="hero-resume-cta"
                onClick={onOpenResume}
                className="group inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm font-semibold text-zinc-300 border border-white/15 hover:border-white/40 hover:bg-white/5 hover:text-white transition-all duration-300 font-sans"
              >
                <Code2 className="w-4 h-4 text-amber-400" />
                <span>View Resume & Credentials</span>
              </button>
            </div>

            {/* Quick Skills Pills */}
            <div className="pt-4 flex flex-wrap items-center gap-2 text-xs text-zinc-400 font-sans">
              <span className="text-zinc-500 uppercase text-[10px] tracking-widest font-semibold mr-1">Focus Areas:</span>
              <span className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300">C Programming</span>
              <span className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300">Python</span>
              <span className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300">Data Structures</span>
              <span className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300">Web Basics (HTML/CSS/JS)</span>
            </div>

          </div>

          {/* Right Column: Stats & Highlight Glass Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="overflow-hidden rounded-3xl glass-card p-6 sm:p-8 relative shadow-2xl shadow-black/60 border border-white/10">
              <div className="absolute -top-12 -right-12 w-36 h-36 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
              
              {/* Institution Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <Compass className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-manrope font-bold text-white tracking-tight">LBSITW</div>
                  <div className="text-xs text-zinc-400 font-sans">LBS Institute of Technology for Women, Kerala</div>
                </div>
              </div>

              {/* Status Bar */}
              <div className="space-y-2 mb-6">
                <div className="flex items-center justify-between text-xs font-sans">
                  <span className="text-zinc-400">Degree Progress (2025–Present)</span>
                  <span className="text-amber-400 font-semibold">Active Enrollment</span>
                </div>
                <div className="h-2 bg-zinc-900 rounded-full overflow-hidden border border-zinc-800">
                  <div className="h-full bg-gradient-to-r from-amber-400 to-emerald-400 rounded-full w-2/5" />
                </div>
              </div>

              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent my-4" />

              {/* Key Highlights Grid */}
              <div className="grid grid-cols-3 gap-2 text-center py-2">
                <div className="p-2 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-xl sm:text-2xl font-manrope font-bold text-white">B.Tech</div>
                  <div className="text-[10px] text-zinc-400 uppercase tracking-wider mt-0.5">CSE Stream</div>
                </div>
                <div className="p-2 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-xl sm:text-2xl font-manrope font-bold text-amber-300">100%</div>
                  <div className="text-[10px] text-zinc-400 uppercase tracking-wider mt-0.5">Dedication</div>
                </div>
                <div className="p-2 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-xl sm:text-2xl font-manrope font-bold text-emerald-400">2</div>
                  <div className="text-[10px] text-zinc-400 uppercase tracking-wider mt-0.5">Languages</div>
                </div>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 pt-4">
                <span className="inline-flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 font-sans">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  Eager for Internships
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 font-sans">
                  <ShieldCheck className="w-3 h-3" />
                  SafeRoute Project
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300 font-sans">
                  English & Malayalam
                </span>
              </div>
            </div>

            {/* Marquee Banner */}
            <div className="overflow-hidden glass-card rounded-2xl p-3 border border-white/5 relative">
              <p className="text-[11px] uppercase tracking-wider text-zinc-400 font-semibold mb-2 px-1">Tech Tools Ticker</p>
              <div className="relative overflow-hidden w-full" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
                <div className="flex gap-6 whitespace-nowrap animate-marquee">
                  <span className="text-xs font-mono text-zinc-300 flex items-center gap-1"><Terminal className="w-3 h-3 text-amber-400"/> C Language</span>
                  <span className="text-xs font-mono text-zinc-300 flex items-center gap-1"><Code2 className="w-3 h-3 text-blue-400"/> Python</span>
                  <span className="text-xs font-mono text-zinc-300 flex items-center gap-1"><Cpu className="w-3 h-3 text-emerald-400"/> Data Structures</span>
                  <span className="text-xs font-mono text-zinc-300 flex items-center gap-1"><Sparkles className="w-3 h-3 text-amber-400"/> HTML5 / CSS3</span>
                  <span className="text-xs font-mono text-zinc-300 flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-cyan-400"/> JavaScript</span>
                  <span className="text-xs font-mono text-zinc-300 flex items-center gap-1"><Terminal className="w-3 h-3 text-amber-400"/> VS Code</span>
                  <span className="text-xs font-mono text-zinc-300 flex items-center gap-1"><Code2 className="w-3 h-3 text-green-400"/> MS Excel</span>

                  {/* Repeat for seamless marquee */}
                  <span className="text-xs font-mono text-zinc-300 flex items-center gap-1"><Terminal className="w-3 h-3 text-amber-400"/> C Language</span>
                  <span className="text-xs font-mono text-zinc-300 flex items-center gap-1"><Code2 className="w-3 h-3 text-blue-400"/> Python</span>
                  <span className="text-xs font-mono text-zinc-300 flex items-center gap-1"><Cpu className="w-3 h-3 text-emerald-400"/> Data Structures</span>
                  <span className="text-xs font-mono text-zinc-300 flex items-center gap-1"><Sparkles className="w-3 h-3 text-amber-400"/> HTML5 / CSS3</span>
                  <span className="text-xs font-mono text-zinc-300 flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-cyan-400"/> JavaScript</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
