import React, { useState } from 'react';
import { Shield, ShieldAlert, ShieldCheck, Navigation, Sun, Moon, AlertTriangle, Lightbulb, MapPin, CheckCircle, Code, Layers, Sliders, Info, Zap } from 'lucide-react';

export const SafeRouteDemo: React.FC = () => {
  // Simulator States
  const [lighting, setLighting] = useState<number>(85); // 0-100
  const [checkpoints, setCheckpoints] = useState<number>(3); // 0-5
  const [roadCondition, setRoadCondition] = useState<number>(80); // 0-100
  const [traffic, setTraffic] = useState<number>(60); // 0-100
  const [timeOfDay, setTimeOfDay] = useState<'day' | 'dusk' | 'night'>('dusk');
  const [activeTab, setActiveTab] = useState<'simulator' | 'code' | 'concept'>('simulator');
  const [selectedRoute, setSelectedRoute] = useState<'A' | 'B' | 'C'>('A');

  // Pre-configured preset routes
  const routePresets = {
    A: { name: 'Main Highway Route', lighting: 90, checkpoints: 4, roadCondition: 90, traffic: 70, timeOfDay: 'dusk' as const },
    B: { name: 'Suburban Ring Road', lighting: 65, checkpoints: 2, roadCondition: 75, traffic: 40, timeOfDay: 'night' as const },
    C: { name: 'Short Shortcut Alley', lighting: 30, checkpoints: 0, roadCondition: 45, traffic: 15, timeOfDay: 'night' as const },
  };

  const applyPreset = (routeKey: 'A' | 'B' | 'C') => {
    setSelectedRoute(routeKey);
    const p = routePresets[routeKey];
    setLighting(p.lighting);
    setCheckpoints(p.checkpoints);
    setRoadCondition(p.roadCondition);
    setTraffic(p.traffic);
    setTimeOfDay(p.timeOfDay);
  };

  // Calculate composite safety score
  const calculateSafety = () => {
    const timePenalty = timeOfDay === 'night' ? 20 : timeOfDay === 'dusk' ? 10 : 0;
    const checkpointBonus = checkpoints * 6; // up to +30
    const raw = (lighting * 0.35) + (roadCondition * 0.25) + ((100 - traffic * 0.3) * 0.15) + checkpointBonus - timePenalty;
    return Math.min(100, Math.max(10, Math.round(raw)));
  };

  const score = calculateSafety();

  const getStatusDetails = (s: number) => {
    if (s >= 75) {
      return {
        label: 'Safe Route (Optimal)',
        color: 'text-emerald-400',
        bgColor: 'bg-emerald-500/10',
        borderColor: 'border-emerald-500/30',
        icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
        badge: 'bg-emerald-400/20 text-emerald-300 border-emerald-500/40',
        barColor: 'bg-emerald-400',
        advice: 'High visibility, frequent checkpoints, and good road conditions. Highly recommended for evening travel.',
      };
    } else if (s >= 55) {
      return {
        label: 'Moderate Risk (Exercise Caution)',
        color: 'text-amber-400',
        bgColor: 'bg-amber-500/10',
        borderColor: 'border-amber-500/30',
        icon: <AlertTriangle className="w-6 h-6 text-amber-400" />,
        badge: 'bg-amber-400/20 text-amber-300 border-amber-500/40',
        barColor: 'bg-amber-400',
        advice: 'Moderate lighting or fewer checkpoints detected. Maintain normal awareness and drive within speed limits.',
      };
    } else {
      return {
        label: 'High Risk Route (Avoid if possible)',
        color: 'text-rose-400',
        bgColor: 'bg-rose-500/10',
        borderColor: 'border-rose-500/30',
        icon: <ShieldAlert className="w-6 h-6 text-rose-400" />,
        badge: 'bg-rose-400/20 text-rose-300 border-rose-500/40',
        barColor: 'bg-rose-500',
        advice: 'Poor lighting, no security checkpoints, or rough roads. Consider switching to Route A (Main Highway).',
      };
    }
  };

  const status = getStatusDetails(score);

  return (
    <section id="saferoute" className="py-20 bg-zinc-950 relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Shield className="w-3.5 h-3.5" />
            Academic Concept Project
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-manrope text-white tracking-tight">
            SafeRoute <span className="text-gradient-amber">Safety Calculator</span>
          </h2>
          <p className="mt-3 text-zinc-400 font-sans text-sm sm:text-base leading-relaxed">
            An interactive concept designed by Liya Fathima C K to evaluate route safety based on multi-parameter environmental scores, lighting, traffic, and security checkpoints.
          </p>
        </div>

        {/* Studio Card Container */}
        <div className="glass-card rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl">
          
          {/* Studio Navigation Bar */}
          <div className="flex flex-wrap items-center justify-between border-b border-zinc-800 bg-zinc-900/60 px-6 py-4 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="text-xs font-mono text-zinc-400 ml-2">SafeRoute Concept v1.0 • Web App Prototype</span>
            </div>

            <div className="flex items-center gap-1 bg-zinc-950/80 p-1 rounded-xl border border-zinc-800 text-xs">
              <button
                id="saferoute-tab-sim"
                onClick={() => setActiveTab('simulator')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                  activeTab === 'simulator' ? 'bg-amber-500 text-zinc-950 font-semibold' : 'text-zinc-400 hover:text-white'
                }`}
              >
                <Sliders className="w-3.5 h-3.5" />
                Live Calculator
              </button>
              <button
                id="saferoute-tab-code"
                onClick={() => setActiveTab('code')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                  activeTab === 'code' ? 'bg-amber-500 text-zinc-950 font-semibold' : 'text-zinc-400 hover:text-white'
                }`}
              >
                <Code className="w-3.5 h-3.5" />
                C/Python Logic
              </button>
              <button
                id="saferoute-tab-concept"
                onClick={() => setActiveTab('concept')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                  activeTab === 'concept' ? 'bg-amber-500 text-zinc-950 font-semibold' : 'text-zinc-400 hover:text-white'
                }`}
              >
                <Info className="w-3.5 h-3.5" />
                Project Spec
              </button>
            </div>
          </div>

          {/* TAB 1: Live Interactive Calculator */}
          {activeTab === 'simulator' && (
            <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Left Controls & Preset Selection */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Preset Selector */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2 font-sans">
                    Select Preset Sample Route:
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {(Object.keys(routePresets) as Array<'A' | 'B' | 'C'>).map((key) => (
                      <button
                        key={key}
                        id={`saferoute-preset-${key}`}
                        onClick={() => applyPreset(key)}
                        className={`p-3 rounded-2xl text-left border text-xs transition-all ${
                          selectedRoute === key
                            ? 'bg-amber-500/15 border-amber-500 text-amber-300 font-medium'
                            : 'bg-zinc-900/50 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
                        }`}
                      >
                        <div className="font-bold font-manrope">Route {key}</div>
                        <div className="text-[11px] truncate opacity-80">{routePresets[key].name}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sliders Grid */}
                <div className="space-y-4 pt-2">
                  
                  {/* Lighting Slider */}
                  <div className="p-4 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-medium text-zinc-200 flex items-center gap-1.5">
                        <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
                        Road Street Lighting Level
                      </span>
                      <span className="font-mono text-amber-300 font-bold">{lighting}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={lighting}
                      onChange={(e) => setLighting(Number(e.target.value))}
                      className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                    />
                    <div className="flex justify-between text-[10px] text-zinc-500">
                      <span>Dark / Pitch Black</span>
                      <span>Moderate Streetlights</span>
                      <span>Well Lit Highway</span>
                    </div>
                  </div>

                  {/* Road Surface Slider */}
                  <div className="p-4 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-medium text-zinc-200 flex items-center gap-1.5">
                        <Navigation className="w-3.5 h-3.5 text-blue-400" />
                        Road Surface & Infrastructure Quality
                      </span>
                      <span className="font-mono text-blue-300 font-bold">{roadCondition}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={roadCondition}
                      onChange={(e) => setRoadCondition(Number(e.target.value))}
                      className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-blue-400"
                    />
                    <div className="flex justify-between text-[10px] text-zinc-500">
                      <span>Rough / Potholes</span>
                      <span>Average Asphalt</span>
                      <span>Paved & Well Marked</span>
                    </div>
                  </div>

                  {/* Security Checkpoints */}
                  <div className="p-4 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-medium text-zinc-200 flex items-center gap-1.5">
                        <Shield className="w-3.5 h-3.5 text-emerald-400" />
                        Police Patrol & Checkpoints
                      </span>
                      <span className="font-mono text-emerald-300 font-bold">{checkpoints} Active Points</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="5"
                      step="1"
                      value={checkpoints}
                      onChange={(e) => setCheckpoints(Number(e.target.value))}
                      className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                    />
                    <div className="flex justify-between text-[10px] text-zinc-500">
                      <span>0 (Isolated)</span>
                      <span>2 Patrols</span>
                      <span>5 (High Surveillance)</span>
                    </div>
                  </div>

                  {/* Time of Day */}
                  <div className="p-4 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 space-y-2">
                    <label className="block text-xs font-medium text-zinc-200">Travel Time Window:</label>
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        onClick={() => setTimeOfDay('day')}
                        className={`py-2 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 border transition ${
                          timeOfDay === 'day' ? 'bg-amber-400/20 border-amber-400 text-amber-300 font-semibold' : 'bg-zinc-900 border-zinc-800 text-zinc-400'
                        }`}
                      >
                        <Sun className="w-3.5 h-3.5" /> Daytime
                      </button>
                      <button
                        onClick={() => setTimeOfDay('dusk')}
                        className={`py-2 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 border transition ${
                          timeOfDay === 'dusk' ? 'bg-amber-500/20 border-amber-400 text-amber-300 font-semibold' : 'bg-zinc-900 border-zinc-800 text-zinc-400'
                        }`}
                      >
                        <Zap className="w-3.5 h-3.5" /> Dusk / Twilight
                      </button>
                      <button
                        onClick={() => setTimeOfDay('night')}
                        className={`py-2 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 border transition ${
                          timeOfDay === 'night' ? 'bg-indigo-500/20 border-indigo-400 text-indigo-300 font-semibold' : 'bg-zinc-900 border-zinc-800 text-zinc-400'
                        }`}
                      >
                        <Moon className="w-3.5 h-3.5" /> Late Night
                      </button>
                    </div>
                  </div>

                </div>

              </div>

              {/* Right Output Score & Indicator Card */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                
                {/* Composite Score Card */}
                <div className={`p-6 sm:p-8 rounded-3xl border ${status.borderColor} ${status.bgColor} relative overflow-hidden transition-all duration-300`}>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 font-sans">Calculated Route Safety</span>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${status.badge}`}>
                      {status.label}
                    </span>
                  </div>

                  {/* Big Number Score Display */}
                  <div className="flex items-baseline gap-3 my-4">
                    <span className={`text-6xl sm:text-7xl font-bold font-manrope tracking-tighter ${status.color}`}>
                      {score}
                    </span>
                    <span className="text-xl text-zinc-400 font-sans font-medium">/ 100</span>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-zinc-950/60 rounded-full h-3 p-0.5 border border-zinc-800 mb-6">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${status.barColor}`}
                      style={{ width: `${score}%` }}
                    />
                  </div>

                  {/* Recommendation Note */}
                  <div className="p-4 rounded-2xl bg-zinc-950/60 border border-white/5 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-semibold text-zinc-200">
                      {status.icon}
                      System Safety Advisory
                    </div>
                    <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                      {status.advice}
                    </p>
                  </div>

                </div>

                {/* Visual Route Path Node Graphic */}
                <div className="p-5 rounded-2xl glass-card border border-zinc-800 space-y-3">
                  <div className="flex items-center justify-between text-xs text-zinc-400">
                    <span className="font-semibold text-zinc-200">Route Map Node Visualization</span>
                    <span className="text-[10px] font-mono text-amber-400">Color-Coded Status</span>
                  </div>

                  <div className="flex items-center justify-between py-3 px-2">
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500 flex items-center justify-center text-emerald-400">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] text-zinc-400">Start Point</span>
                    </div>

                    <div className={`h-1 flex-1 mx-2 rounded-full ${status.barColor} transition-all duration-300 relative`}>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-2 py-0.5 rounded-full bg-zinc-950 border border-zinc-700 text-[9px] text-zinc-300 font-mono">
                        {score >= 75 ? 'Safe Corridor' : score >= 55 ? 'Caution Area' : 'High Risk Area'}
                      </div>
                    </div>

                    <div className="flex flex-col items-center gap-1">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center border ${status.borderColor} ${status.bgColor} ${status.color}`}>
                        <CheckCircle className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] text-zinc-400">Destination</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          )}

          {/* TAB 2: C / Python Logic Showcase */}
          {activeTab === 'code' && (
            <div className="p-6 sm:p-8 space-y-6 font-mono text-xs text-zinc-300">
              <div className="flex items-center justify-between text-zinc-400 font-sans">
                <span className="text-xs font-semibold text-amber-300 uppercase tracking-wider">
                  Sample Route Evaluation Algorithm (Data Structure Implementation)
                </span>
                <span className="text-xs text-zinc-500">C & Python Structured Logic</span>
              </div>

              <div className="bg-zinc-950 p-5 rounded-2xl border border-zinc-800 overflow-x-auto leading-relaxed text-zinc-300">
                <pre className="text-[12px]">
                  <code className="text-amber-300">{`// SafeRoute Core Calculation Logic (C Implementation Concept)
#include <stdio.h>

typedef struct {
    float lighting;       // 0.0 to 100.0
    float road_quality;   // 0.0 to 100.0
    int checkpoints;      // 0 to 5
    int is_night_time;    // 1 if late night, 0 otherwise
} RouteSegment;

int calculate_safety_score(RouteSegment seg) {
    float score = (seg.lighting * 0.35) + 
                  (seg.road_quality * 0.25) + 
                  (seg.checkpoints * 6.0);
                  
    if (seg.is_night_time) {
        score -= 20.0;
    }
    
    // Clamp score between 0 and 100
    if (score > 100.0) return 100;
    if (score < 0.0) return 0;
    return (int)score;
}`}</code>
                </pre>
              </div>

              <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                <strong>Project Highlight:</strong> In this concept, route segments are represented as graph edges with safety-weighted values. Shortest-path algorithms like Dijkstra's algorithm can be modified to find the <em>highest safety score route</em> rather than strictly the shortest distance.
              </p>
            </div>
          )}

          {/* TAB 3: Project Specifications */}
          {activeTab === 'concept' && (
            <div className="p-6 sm:p-8 space-y-6 font-sans text-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <div className="p-5 rounded-2xl bg-zinc-900/50 border border-zinc-800 space-y-3">
                  <h3 className="font-manrope font-bold text-base text-amber-300 flex items-center gap-2">
                    <Shield className="w-4 h-4" /> Key Objectives
                  </h3>
                  <ul className="space-y-2 text-xs text-zinc-300 list-disc pl-4 leading-relaxed">
                    <li>Empower commuters and travelers to identify routes based on safety parameters rather than just shortest distance.</li>
                    <li>Incorporate environmental factors including road lighting, traffic density, and proximity to police checkpoints.</li>
                    <li>Provide clear color-coded safety badges (Green, Yellow, Red) for fast decision-making.</li>
                  </ul>
                </div>

                <div className="p-5 rounded-2xl bg-zinc-900/50 border border-zinc-800 space-y-3">
                  <h3 className="font-manrope font-bold text-base text-emerald-400 flex items-center gap-2">
                    <Code className="w-4 h-4" /> Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="px-3 py-1 rounded-lg bg-zinc-800 text-zinc-200 border border-zinc-700">HTML5 Structure</span>
                    <span className="px-3 py-1 rounded-lg bg-zinc-800 text-zinc-200 border border-zinc-700">CSS3 Styling & Color Indicators</span>
                    <span className="px-3 py-1 rounded-lg bg-zinc-800 text-zinc-200 border border-zinc-700">JavaScript Logic (Learning Stage)</span>
                    <span className="px-3 py-1 rounded-lg bg-zinc-800 text-zinc-200 border border-zinc-700">C & Data Structures Concept</span>
                  </div>
                </div>

              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
