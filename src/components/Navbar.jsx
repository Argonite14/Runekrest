import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logomark from './Logomark';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Archives', path: '/archives' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-background/60 backdrop-blur-md border-b border-glass-stroke shadow-none">
      <nav className="flex justify-between items-center px-6 md:px-margin-desktop py-4 max-w-container-max mx-auto">
        <Link to="/" className="flex items-center gap-2 font-headline-lg text-headline-lg text-primary select-none group">
          <Logomark className="w-7 h-7 text-primary transition-transform duration-500 group-hover:rotate-180" />
          <span className="tracking-tight">Runekrest</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `font-label-technical text-xs uppercase tracking-widest transition-colors duration-300 py-1 border-b ${
                  isActive
                    ? 'text-primary font-bold border-primary'
                    : 'text-on-surface-variant hover:text-primary border-transparent'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-4">
          <Link to="/archives" className="text-primary hover:opacity-75 transition-opacity py-1">
            <span className="material-symbols-outlined text-2xl select-none">shopping_bag</span>
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-primary hover:opacity-75 transition-opacity md:hidden"
            aria-label="Toggle Menu"
          >
            <span className="material-symbols-outlined text-3xl select-none">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[69px] bottom-0 bg-background/95 backdrop-blur-lg z-40 border-t border-glass-stroke flex flex-col justify-center items-center gap-8 py-10 animate-fade-in">
          <div className="absolute inset-0 noise-bg"></div>
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `font-label-technical text-lg uppercase tracking-[0.2em] transition-colors duration-300 ${
                  isActive ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-primary'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <div className="mt-8 font-label-technical text-[10px] text-outline/40 tracking-widest text-center">
            SYSTEM_PROTOCOL_STABLE // VERSION: 1.0.4v
          </div>
        </div>
      )}
    </header>
  );
}
