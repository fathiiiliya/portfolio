import React, { useState, useEffect } from 'react';
import { Shield, Sparkles, FileText, Mail, Menu, X, ArrowUpRight, Award, GraduationCap } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
  onNavigate: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'SafeRoute Project', id: 'saferoute' },
    { label: 'Skills & Stack', id: 'skills' },
    { label: 'Education', id: 'education' },
    { label: 'Strengths', id: 'strengths' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/80 py-3 shadow-xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <button
            id="nav-brand-btn"
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-3 group text-left focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 flex items-center justify-center font-manrope font-bold text-zinc-950 shadow-md shadow-amber-500/10 group-hover:scale-105 transition-transform">
              LF
            </div>
            <div>
              <div className="font-manrope font-bold text-base tracking-tight text-zinc-100 flex items-center gap-1.5">
                Liya Fathima C K
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" title="Available for opportunities" />
              </div>
              <p className="text-xs text-zinc-400 font-sans">B.Tech CS Student • LBSITW</p>
            </div>
          </button>

          {/* Desktop Nav Items */}
          <nav id="desktop-nav" className="hidden md:flex items-center gap-1 bg-zinc-900/60 p-1.5 rounded-full border border-zinc-800/80 backdrop-blur-sm">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className="px-4 py-1.5 text-xs font-medium text-zinc-300 hover:text-white hover:bg-zinc-800/60 rounded-full transition-all duration-200"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              id="nav-resume-btn"
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700/80 transition-all duration-200 hover:border-zinc-500"
            >
              <FileText className="w-3.5 h-3.5 text-amber-400" />
              View Resume
            </button>
            <button
              id="nav-contact-btn"
              onClick={() => handleNavClick('contact')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-zinc-950 transition-all duration-200 shadow-lg shadow-amber-500/10 font-sans"
            >
              <Mail className="w-3.5 h-3.5" />
              Hire Me
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              id="mobile-resume-btn"
              onClick={onOpenResume}
              className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-amber-400 text-xs flex items-center gap-1"
            >
              <FileText className="w-4 h-4" />
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div id="mobile-drawer" className="sm:hidden bg-zinc-950/95 backdrop-blur-xl border-b border-zinc-800 px-4 pt-3 pb-6 mt-3 space-y-3">
          <div className="grid grid-cols-2 gap-2 pb-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`mobile-nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className="text-left px-3 py-2 text-xs font-medium text-zinc-300 hover:text-white bg-zinc-900/60 rounded-lg border border-zinc-800/50"
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="flex flex-col gap-2 pt-2 border-t border-zinc-800/80">
            <button
              id="mobile-view-resume-cta"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-zinc-900 text-zinc-200 border border-zinc-700"
            >
              <FileText className="w-4 h-4 text-amber-400" />
              View Full Resume
            </button>
            <button
              id="mobile-contact-cta"
              onClick={() => handleNavClick('contact')}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-amber-400 text-zinc-950"
            >
              <Mail className="w-4 h-4" />
              Contact Liya
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
