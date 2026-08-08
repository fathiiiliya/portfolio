import React from 'react';
import { ArrowUp, Heart, FileText, Mail, Phone, MapPin, GraduationCap } from 'lucide-react';

interface FooterProps {
  onOpenResume: () => void;
  onNavigate: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume, onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-950 text-zinc-400 border-t border-zinc-900 py-12 font-sans relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-zinc-900">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center font-manrope font-bold text-zinc-950 text-sm shadow-md">
                LF
              </div>
              <span className="font-manrope font-bold text-lg text-white">Liya Fathima C K</span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              Computer Science & Engineering Student at LBS Institute of Technology for Women, Kerala. Eager to contribute to innovative software engineering projects.
            </p>
            <div className="flex items-center gap-2 text-xs text-zinc-500 font-mono">
              <MapPin className="w-3.5 h-3.5 text-amber-400" /> Kerala, India
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-200 block font-mono">Quick Navigation</span>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('saferoute')} className="hover:text-amber-300 transition">
                  SafeRoute Calculator
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('skills')} className="hover:text-amber-300 transition">
                  Skills & Technical Matrix
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('education')} className="hover:text-amber-300 transition">
                  Education & LBSITW
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('strengths')} className="hover:text-amber-300 transition">
                  Core Strengths
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Actions */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-200 block font-mono">Connect Directly</span>
            <div className="space-y-2 text-xs">
              <p>Email: <a href="mailto:liyachembra@gmail.com" className="text-zinc-200 hover:text-amber-300 underline">liyachembra@gmail.com</a></p>
              <p>Phone: <a href="tel:+917510577971" className="text-zinc-200 hover:text-amber-300">+91 7510577971</a></p>
            </div>
            <div className="pt-2 flex items-center gap-2">
              <button
                onClick={onOpenResume}
                className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-semibold text-amber-400 hover:bg-zinc-800 transition flex items-center gap-1.5"
              >
                <FileText className="w-3.5 h-3.5" />
                View Resume
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="px-3 py-1.5 rounded-lg bg-amber-400 text-zinc-950 text-xs font-semibold hover:bg-amber-300 transition flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5" />
                Contact
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p className="flex items-center gap-1">
            © {new Date().getFullYear()} Liya Fathima C K. Personal Portfolio.
          </p>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition flex items-center gap-1.5"
            title="Scroll to top"
          >
            <span className="text-[10px] font-mono uppercase">Back to Top</span>
            <ArrowUp className="w-4 h-4 text-amber-400" />
          </button>
        </div>
      </div>
    </footer>
  );
};
