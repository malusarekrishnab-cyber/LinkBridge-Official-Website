import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { CONFIG } from '../config';
import {
  ShieldCheck,
  Lock,
  Key,
  UserX,
  Sliders,
  CheckCircle,
  ExternalLink
} from 'lucide-react';

export const SecuritySection: React.FC = () => {
  const { t } = useLanguage();

  const cardIcons = [
    Lock,
    ShieldCheck,
    Key,
    UserX,
    Sliders,
    CheckCircle,
  ];

  return (
    <section id="security" className="py-24 relative bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-semibold mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            {t.security.badge}
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            {t.security.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-400 mb-8">
            {t.security.subtitle}
          </p>

          <a
            href={CONFIG.repository.securityModelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 border border-teal-500/40 hover:border-teal-400 text-teal-300 text-xs sm:text-sm font-semibold transition-colors"
          >
            <span>{t.security.technicalDocsBtn}</span>
            <ExternalLink className="w-4 h-4 text-teal-400" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.security.cards.map((card, idx) => {
            const Icon = cardIcons[idx % cardIcons.length];
            return (
              <div
                key={idx}
                className="rounded-2xl bg-slate-900/40 p-6 sm:p-8 border border-slate-800/80 hover:border-teal-500/40 transition-all duration-300 hover:shadow-glow-card flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
