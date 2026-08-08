import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Sparkles, MessageSquare, ArrowUpRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setFormSubmitted(true);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('liyachembra@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText('+917510577971');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="py-20 bg-zinc-950 relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-manrope text-white tracking-tight">
            Let's Connect & <span className="text-gradient-amber">Collaborate</span>
          </h2>
          <p className="mt-3 text-zinc-400 font-sans text-sm sm:text-base leading-relaxed">
            Interested in offering an internship opportunity, discussing academic projects, or sharing feedback? Feel free to reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Contact Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="glass-card rounded-3xl p-6 border border-zinc-800 space-y-3 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={copyEmail}
                  className="inline-flex items-center gap-1 text-xs text-zinc-400 hover:text-amber-300 px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-800"
                >
                  <Copy className="w-3 h-3" />
                  {copiedEmail ? 'Copied!' : 'Copy'}
                </button>
              </div>

              <div>
                <span className="text-xs text-zinc-500 font-mono block">Direct Email</span>
                <a
                  href="mailto:liyachembra@gmail.com"
                  className="text-lg font-bold font-manrope text-white hover:text-amber-300 transition flex items-center gap-1.5"
                >
                  liyachembra@gmail.com
                  <ArrowUpRight className="w-4 h-4 text-zinc-500" />
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="glass-card rounded-3xl p-6 border border-zinc-800 space-y-3 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Phone className="w-5 h-5" />
                </div>
                <button
                  onClick={copyPhone}
                  className="inline-flex items-center gap-1 text-xs text-zinc-400 hover:text-emerald-300 px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-800"
                >
                  <Copy className="w-3 h-3" />
                  {copiedPhone ? 'Copied!' : 'Copy'}
                </button>
              </div>

              <div>
                <span className="text-xs text-zinc-500 font-mono block">Phone Contact</span>
                <a
                  href="tel:+917510577971"
                  className="text-lg font-bold font-manrope text-white hover:text-emerald-300 transition flex items-center gap-1.5"
                >
                  +91 7510577971
                  <ArrowUpRight className="w-4 h-4 text-zinc-500" />
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="glass-card rounded-3xl p-6 border border-zinc-800 space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-zinc-500 font-mono block">Location</span>
                  <span className="text-base font-bold font-manrope text-white">Kerala, India</span>
                </div>
              </div>
              <p className="text-xs text-zinc-400 font-sans pt-1">
                LBS Institute of Technology for Women, Kerala
              </p>
            </div>

          </div>

          {/* Right Message Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-zinc-800 relative">
              
              {!formSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center gap-2 mb-2">
                    <MessageSquare className="w-4 h-4 text-amber-400" />
                    <h3 className="text-lg font-bold font-manrope text-white">Send Direct Message</h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1 font-sans">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-4 py-3 rounded-2xl bg-zinc-900 border border-zinc-800 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-amber-400 transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1 font-sans">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. sarah@company.com"
                        className="w-full px-4 py-3 rounded-2xl bg-zinc-900 border border-zinc-800 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-amber-400 transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1 font-sans">
                      Message / Inquiry Details
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Hi Liya, I reviewed your SafeRoute project and portfolio..."
                      className="w-full px-4 py-3 rounded-2xl bg-zinc-900 border border-zinc-800 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-amber-400 transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-2xl bg-amber-400 hover:bg-amber-300 text-zinc-950 font-bold font-sans text-xs tracking-wider uppercase transition flex items-center justify-center gap-2 shadow-lg shadow-amber-500/10"
                  >
                    <Send className="w-4 h-4" />
                    Send Message to Liya
                  </button>
                </form>
              ) : (
                <div className="py-10 text-center space-y-4">
                  <div className="w-16 h-16 rounded-3xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-manrope text-white">Thank You, {name}!</h3>
                  <p className="text-xs text-zinc-300 max-w-md mx-auto font-sans leading-relaxed">
                    Your message has been received! Liya will respond to <strong className="text-amber-300">{email}</strong> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setName('');
                      setEmail('');
                      setMessage('');
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 hover:text-white transition"
                  >
                    Send Another Message
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
