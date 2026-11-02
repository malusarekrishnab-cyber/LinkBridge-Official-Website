import React, { useState, useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { CONFIG } from '../config';
import {
  Sun,
  Moon,
  Menu,
  X,
  Download,
  Languages
} from 'lucide-react';
import { GithubIcon } from './GithubIcon';

export const Navbar: React.FC = () => {
  const { t, language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.features, href: '#features' },
    { name: t.nav.screenshots, href: '#screenshots' },
    { name: t.nav.howItWorks, href: '#how-it-works' },
    { name: t.nav.downloads, href: '#download' },
    { name: t.nav.security, href: '#security' },
    { name: t.nav.faq, href: '#faq' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <>
      {/* Top scroll progress indicator bar */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-950/80 dark:bg-slate-950/85 backdrop-blur-md border-b border-white/10 shadow-lg'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo & Name */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-lg p-1">
            <img
              src="/icon.svg"
              alt="LinkBridge Logo"
              className="w-10 h-10 rounded-xl shadow-md transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white dark:text-white flex items-center gap-2">
                {CONFIG.appName}
                <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-mono">
                  {CONFIG.version}
                </span>
              </span>
              <span className="text-[11px] text-slate-400 tracking-wider uppercase font-medium">
                {CONFIG.tagline}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-cyan-400 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Controls: Language Toggle, Theme Toggle, GitHub & CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Switcher */}
            <div className="flex items-center bg-slate-900/80 border border-slate-700/60 rounded-lg p-1 text-xs">
              <Languages className="w-3.5 h-3.5 text-slate-400 ml-1.5 mr-1" />
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 rounded transition-colors ${
                  language === 'en'
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Switch to English"
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('mr')}
                className={`px-2 py-1 rounded transition-colors ${
                  language === 'mr'
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="मराठी मध्ये बदला"
              >
                मराठी
              </button>
            </div>

            {/* Dark / Light Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2 rounded-lg bg-slate-900/80 border border-slate-700/60 text-slate-300 hover:text-cyan-400 transition-colors"
              title={theme === 'dark' ? 'Switch to Light mode' : 'Switch to Dark mode'}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* GitHub Repo Button */}
            <a
              href={CONFIG.repository.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900/80 border border-slate-700/60 text-slate-300 hover:text-white transition-colors"
              title={t.nav.viewOnGithub}
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            {/* Download CTA Button */}
            <a
              href="#download"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-semibold text-xs tracking-wide uppercase transition-all shadow-glow-cyan hover:shadow-cyan-500/50"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{t.nav.downloadNow}</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setLanguage(language === 'en' ? 'mr' : 'en')}
              className="px-2 py-1 text-xs rounded bg-slate-900 border border-slate-800 text-cyan-400 font-bold"
            >
              {language === 'en' ? 'मराठी' : 'EN'}
            </button>

            <button
              onClick={toggleTheme}
              className="p-2 rounded bg-slate-900 border border-slate-800 text-slate-300"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-950/95 border-b border-slate-800 px-6 py-6 space-y-4 backdrop-blur-xl">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-slate-300 hover:text-cyan-400 font-medium py-1"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
              <a
                href={CONFIG.repository.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 text-sm"
              >
                <GithubIcon className="w-4 h-4" />
                <span>{t.nav.viewOnGithub}</span>
              </a>

              <a
                href="#download"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-600 text-slate-950 font-bold text-sm"
              >
                <Download className="w-4 h-4" />
                <span>{t.nav.downloadNow}</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
