import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { CONFIG } from '../config';
import { Mail, MessageCircle, AlertCircle, User, ExternalLink } from 'lucide-react';

export const ContactSupport: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 relative bg-slate-950/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-4">
            <Mail className="w-3.5 h-3.5" />
            {t.contact.badge}
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            {t.contact.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            {t.contact.subtitle}
          </p>
        </div>

        {/* 4 Clean Action Cards - strictly no fake contact forms */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Direct Email */}
          <div className="rounded-2xl bg-slate-900/50 p-6 border border-slate-800 flex flex-col justify-between hover:border-cyan-500/50 transition-all hover:shadow-glow-card">
            <div>
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-5">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-white text-base mb-2">
                {t.contact.emailCard.title}
              </h3>
              <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                {t.contact.emailCard.desc}
              </p>
            </div>
            <a
              href={`mailto:${CONFIG.developer.email}`}
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-colors"
            >
              <span>{t.contact.emailCard.btn}</span>
            </a>
          </div>

          {/* GitHub Issues */}
          <div className="rounded-2xl bg-slate-900/50 p-6 border border-slate-800 flex flex-col justify-between hover:border-rose-500/50 transition-all hover:shadow-glow-card">
            <div>
              <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 mb-5">
                <AlertCircle className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-white text-base mb-2">
                {t.contact.issuesCard.title}
              </h3>
              <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                {t.contact.issuesCard.desc}
              </p>
            </div>
            <a
              href={CONFIG.repository.issuesUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-colors"
            >
              <span>{t.contact.issuesCard.btn}</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>

          {/* GitHub Discussions */}
          <div className="rounded-2xl bg-slate-900/50 p-6 border border-slate-800 flex flex-col justify-between hover:border-purple-500/50 transition-all hover:shadow-glow-card">
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-5">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-white text-base mb-2">
                {t.contact.discussionsCard.title}
              </h3>
              <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                {t.contact.discussionsCard.desc}
              </p>
            </div>
            <a
              href={CONFIG.repository.discussionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-colors"
            >
              <span>{t.contact.discussionsCard.btn}</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>

          {/* Developer Profile */}
          <div className="rounded-2xl bg-slate-900/50 p-6 border border-slate-800 flex flex-col justify-between hover:border-emerald-500/50 transition-all hover:shadow-glow-card">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-5">
                <User className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-white text-base mb-2">
                {t.contact.profileCard.title}
              </h3>
              <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                {t.contact.profileCard.desc}
              </p>
            </div>
            <a
              href={CONFIG.developer.githubProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-colors"
            >
              <span>{t.contact.profileCard.btn}</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
