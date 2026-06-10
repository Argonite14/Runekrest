import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setTimeout(() => {
        setEmail('');
        setSubmitted(false);
      }, 4000);
    }
  };

  return (
    <footer className="bg-obsidian-deep border-t border-glass-stroke relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-4 before:h-1 before:bg-primary py-24 z-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-6 md:px-margin-desktop max-w-container-max mx-auto">
        {/* Col 1: Brand Info */}
        <div className="mb-12 md:mb-0">
          <div className="font-headline-lg text-headline-lg text-primary mb-8 select-none">Runekrest</div>
          <p class="font-label-technical text-on-surface-variant text-xs leading-loose max-w-xs">
            Engineering technical artifacts for the modern age. Every piece is a testament to the enduring power of ancient soul and modern precision.
          </p>
          <div className="flex gap-4 mt-8">
            <a href="#" className="w-10 h-10 border border-glass-stroke flex items-center justify-center text-primary hover:bg-primary hover:text-obsidian-deep transition-all duration-300">
              <span className="material-symbols-outlined text-lg select-none">share</span>
            </a>
            <a href="#" className="w-10 h-10 border border-glass-stroke flex items-center justify-center text-primary hover:bg-primary hover:text-obsidian-deep transition-all duration-300">
              <span className="material-symbols-outlined text-lg select-none">rss_feed</span>
            </a>
          </div>
        </div>

        {/* Col 2: Ecosystem */}
        <div className="mb-8 md:mb-0">
          <h4 className="font-label-technical text-primary uppercase tracking-[0.3em] mb-8 select-none">Ecosystem</h4>
          <ul className="space-y-4 font-label-technical text-on-surface-variant text-xs">
            <li><Link to="/archives" className="hover:text-primary transition-all underline decoration-primary/30">Archives</Link></li>
            <li><a href="#" className="hover:text-primary transition-all underline decoration-primary/30">Specifications</a></li>
            <li><a href="#" className="hover:text-primary transition-all underline decoration-primary/30">Journal</a></li>
            <li><a href="#" className="hover:text-primary transition-all underline decoration-primary/30">Legal Protocol</a></li>
          </ul>
        </div>

        {/* Col 3: Contact Inquiries */}
        <div className="mb-8 md:mb-0">
          <h4 className="font-label-technical text-primary uppercase tracking-[0.3em] mb-8 select-none">Contact</h4>
          <ul className="space-y-4 font-label-technical text-on-surface-variant text-xs">
            <li><Link to="/contact" className="hover:text-primary transition-all underline decoration-primary/30">Support Terminal</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-all underline decoration-primary/30">Forge Inquiries</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-all underline decoration-primary/30">Collaborations</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-all underline decoration-primary/30">Press Matrix</Link></li>
          </ul>
        </div>

        {/* Col 4: Email Registry */}
        <div>
          <h4 className="font-label-technical text-primary uppercase tracking-[0.3em] mb-8 select-none">Registry</h4>
          <p className="font-label-technical text-[10px] text-outline mb-6 leading-relaxed">
            Join the internal network to receive early access to technical drops and journal entries.
          </p>
          <form onSubmit={handleSubmit} className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={submitted}
              className="w-full bg-surface-container-low border-0 border-b border-burnished-gold py-3 px-0 font-label-technical text-[10px] text-primary focus:ring-0 focus:border-primary placeholder:text-outline/40 uppercase disabled:opacity-50"
              placeholder={submitted ? "REGISTRY_CONNECTED" : "ENCRYPTED@MAIL.COM"}
              required
            />
            {!submitted && (
              <button type="submit" className="absolute right-0 top-1/2 -translate-y-1/2 text-primary hover:opacity-80 transition-opacity">
                <span className="material-symbols-outlined select-none">chevron_right</span>
              </button>
            )}
            {submitted && (
              <span className="material-symbols-outlined absolute right-0 top-1/2 -translate-y-1/2 text-green-500 animate-pulse select-none">
                done
              </span>
            )}
          </form>
        </div>
      </div>

      {/* Footer Meta Details */}
      <div className="mt-24 px-6 md:px-margin-desktop max-w-container-max mx-auto pt-8 border-t border-outline/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="font-label-technical text-[10px] text-outline tracking-widest uppercase select-none">
          © {new Date().getFullYear()} RUNEKREST ENGINEERING. ALL RIGHTS RESERVED.
        </span>
        <div className="flex items-center gap-6 font-label-technical text-[8px] text-outline/50 tracking-[0.3em] uppercase select-none">
          <span>System: 1.0.4v</span>
          <span>Uptime: 99.9%</span>
        </div>
      </div>
    </footer>
  );
}
