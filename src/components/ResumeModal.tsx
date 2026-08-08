import React, { useState } from 'react';
import { X, Printer, Copy, Check, Download, FileText, Mail, Phone, MapPin, ExternalLink, GraduationCap, Award, Briefcase } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const text = `
LIYA FATHIMA C K
B.Tech Computer Science & Engineering Student
Kerala, India | liyachembra@gmail.com | +91-7510577971

PROFESSIONAL SUMMARY
Motivated Computer Science and Engineering student with interest in software development, problem solving, and technologies. Currently building foundation in programming, data structures, and web development. Passionate about continuous learning and eager to apply technical knowledge through internships, projects, and real-world software development opportunities.

EDUCATION
Bachelor of Technology (B.Tech) – Computer Science & Engineering
LBS Institute of Technology for Women, Kerala (2025 – Present)
Relevant Coursework:
• Programming in C
• Python Programming
• Data Structures
• Digital Electronics
• Mathematics for Computer Science

TECHNICAL SKILLS
Programming Languages: C, Python
Tools: Microsoft Excel, Visual Studio Code
Web Basics: HTML, CSS, JavaScript (Learning Stage)

ACADEMIC PROJECT
SafeRoute (Concept Project)
Designed a web-based application concept to help users identify safer travel routes.
Key features:
• Route safety score based on multiple parameters
• Consideration of road conditions, lighting, traffic, checkpoints, and accident history
• Color-coded safety indicator for easier decision-making
Technologies: HTML, CSS, JavaScript (Learning Stage)

STRENGTHS
• Quick learner
• Analytical thinking
• Problem-solving mindset
• Willingness to learn new technologies
• Team collaboration
• Time management

LANGUAGES
• English
• Malayalam

CAREER OBJECTIVE
To obtain an internship or entry-level software development opportunity where I can strengthen my programming skills, contribute to meaningful projects, and continue developing as a Computer Science professional.
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-zinc-900 border border-zinc-800 rounded-3xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-zinc-800 bg-zinc-950/80 shrink-0">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-amber-400" />
            <h2 className="text-lg font-bold font-manrope text-white">Liya Fathima C K — Official Resume</h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-700 transition"
              title="Copy plain text"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? 'Copied' : 'Copy Text'}
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-amber-400 text-zinc-950 hover:bg-amber-300 transition"
              title="Print / Save PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              Print / Save PDF
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-zinc-800 text-zinc-400 hover:text-white transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Resume Paper Container */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-zinc-950 text-zinc-100 font-sans leading-relaxed text-sm">
          
          {/* Header Document Block */}
          <div className="border-b border-zinc-800 pb-6">
            <h1 className="text-3xl sm:text-4xl font-extrabold font-manrope text-white tracking-tight">
              LIYA FATHIMA C K
            </h1>
            <p className="text-base text-amber-400 font-medium mt-1 font-sans">
              B.Tech Computer Science & Engineering Student
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-3 text-xs text-zinc-400 font-mono">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-zinc-400" /> Kerala, India
              </span>
              <span>•</span>
              <a href="mailto:liyachembra@gmail.com" className="flex items-center gap-1 text-zinc-300 hover:text-amber-300 underline">
                <Mail className="w-3.5 h-3.5 text-zinc-400" /> liyachembra@gmail.com
              </a>
              <span>•</span>
              <a href="tel:+917510577971" className="flex items-center gap-1 text-zinc-300 hover:text-amber-300">
                <Phone className="w-3.5 h-3.5 text-zinc-400" /> +91-7510577971
              </a>
            </div>
          </div>

          {/* Section: Professional Summary */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-2 border-b border-zinc-800 pb-1 font-mono">
              PROFESSIONAL SUMMARY
            </h3>
            <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
              Motivated Computer Science and Engineering student with interest in software development, problem solving, and technologies. Currently building foundation in programming, data structures, and web development. Passionate about continuous learning and eager to apply technical knowledge through internships, projects, and real-world software development opportunities.
            </p>
          </div>

          {/* Section: Education */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-3 border-b border-zinc-800 pb-1 font-mono">
              EDUCATION
            </h3>
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between font-manrope font-bold text-white text-base">
                <span>Bachelor of Technology (B.Tech) – Computer Science & Engineering</span>
                <span className="text-xs font-mono text-amber-300 font-normal">2025 – Present</span>
              </div>
              <p className="text-xs text-zinc-400 font-sans">LBS Institute of Technology for Women, Kerala</p>

              <div className="pt-2">
                <span className="text-xs font-semibold text-zinc-300 block mb-1">Relevant Coursework:</span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-xs text-zinc-400 list-disc pl-4">
                  <li>Programming in C</li>
                  <li>Python Programming</li>
                  <li>Data Structures</li>
                  <li>Digital Electronics</li>
                  <li>Mathematics for Computer Science</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section: Technical Skills */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-3 border-b border-zinc-800 pb-1 font-mono">
              TECHNICAL SKILLS
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800">
                <span className="font-semibold text-white block mb-1">Programming Languages (basics):</span>
                <p className="text-zinc-400">C, Python</p>
              </div>
              <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800">
                <span className="font-semibold text-white block mb-1">Tools & Software:</span>
                <p className="text-zinc-400">Microsoft Excel, Visual Studio Code</p>
              </div>
            </div>
          </div>

          {/* Section: Academic Project */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-3 border-b border-zinc-800 pb-1 font-mono">
              ACADEMIC PROJECT
            </h3>
            <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-2">
              <div className="flex items-center justify-between font-bold text-white text-sm">
                <span>SafeRoute (Concept Project)</span>
                <span className="text-[10px] font-mono text-amber-400 border border-amber-500/30 px-2 py-0.5 rounded">
                  Web Application Concept
                </span>
              </div>
              <p className="text-xs text-zinc-300">
                Designed a web-based application concept to help users identify safer travel routes.
              </p>
              <div className="text-xs text-zinc-400 space-y-1 pt-1">
                <span className="font-semibold text-zinc-300 block">Key Features:</span>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Route safety score based on multiple parameters</li>
                  <li>Consideration of road conditions, lighting, traffic, checkpoints, and accident history</li>
                  <li>Color-coded safety indicator for easier decision-making</li>
                </ul>
              </div>
              <p className="text-xs text-zinc-400 pt-1 font-mono">
                <strong className="text-zinc-300 font-sans">Technologies:</strong> HTML, CSS, JavaScript (Learning Stage)
              </p>
            </div>
          </div>

          {/* Section: Strengths & Languages */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-2 border-b border-zinc-800 pb-1 font-mono">
                STRENGTHS
              </h3>
              <ul className="list-disc pl-4 text-xs text-zinc-300 space-y-1">
                <li>Quick learner</li>
                <li>Analytical thinking</li>
                <li>Problem-solving mindset</li>
                <li>Willingness to learn new technologies</li>
                <li>Team collaboration</li>
                <li>Time management</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-2 border-b border-zinc-800 pb-1 font-mono">
                LANGUAGES
              </h3>
              <ul className="list-disc pl-4 text-xs text-zinc-300 space-y-1">
                <li>English</li>
                <li>Malayalam</li>
              </ul>
            </div>
          </div>

          {/* Section: Career Objective */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-2 border-b border-zinc-800 pb-1 font-mono">
              CAREER OBJECTIVE
            </h3>
            <p className="text-xs text-zinc-300 leading-relaxed italic">
              "To obtain an internship or entry-level software development opportunity where I can strengthen my programming skills, contribute to meaningful projects, and continue developing as a Computer Science professional."
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};
