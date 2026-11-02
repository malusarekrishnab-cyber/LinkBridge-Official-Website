import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { CONFIG } from '../config';
import { Mail, Code2, ExternalLink } from 'lucide-react';
import { GithubIcon } from './GithubIcon';

export const AboutDeveloper: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="developer" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl bg-slate-900/60 border border-slate-800 p-8 sm:p-12 relative overflow-hidden shadow-2xl">
            {/* Ambient background glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-600/10 blur-[100px] pointer-events-none rounded-full" />

            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Developer Avatar (Initials circular badge per requirement) */}
              <div className="relative group">
                <div className="w-32 h-32 rounded-3xl bg-gradient-to-tr from-cyan-500 via-indigo-600 to-purple-600 p-[2px] shadow-glow-cyan">
                  <div className="w-full h-full rounded-3xl bg-slate-950 flex flex-col items-center justify-center">
                    <span className="text-3xl font-black font-mono tracking-tighter bg-gradient-to-r from-cyan-400 to-indigo-300 bg-clip-text text-transparent">
                      KM
                    </span>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400 mt-1">
                      Author
                    </span>
                  </div>
                </div>
              </div>

              {/* Developer Info */}
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-3">
                  <Code2 className="w-3.5 h-3.5" />
                  {t.developer.openSourceBadge}
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-1">
                  {CONFIG.developer.name}
                </h3>
                <p className="text-sm font-medium text-cyan-400 mb-4">
                  {t.developer.role}
                </p>

                <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                  {t.developer.bio}
                </p>

                {/* Direct Action Links */}
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                  <a
                    href={CONFIG.developer.githubProfileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs sm:text-sm font-semibold transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>{t.developer.githubBtn}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </a>

                  <a
                    href={`mailto:${CONFIG.developer.email}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-semibold transition-colors"
                  >
                    <Mail className="w-4 h-4 text-cyan-400" />
                    <span>{CONFIG.developer.email}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
