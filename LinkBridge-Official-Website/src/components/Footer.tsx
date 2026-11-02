import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { CONFIG } from '../config';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from './GithubIcon';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-900">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src="/icon.svg" alt="LinkBridge Logo" className="w-10 h-10 rounded-xl" />
              <div>
                <span className="text-xl font-bold text-white tracking-tight">
                  {CONFIG.appName}
                </span>
                <span className="block text-xs text-slate-400">
                  {CONFIG.tagline}
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6 max-w-sm">
              {t.footer.description}
            </p>
            <div className="flex items-center gap-3">
              <a
                href={CONFIG.repository.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
                title="GitHub Repository"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <span className="text-xs text-slate-400 font-mono">
                {CONFIG.version}
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              {t.footer.linksHeading}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><a href="#features" className="hover:text-cyan-400 transition-colors">{t.nav.features}</a></li>
              <li><a href="#screenshots" className="hover:text-cyan-400 transition-colors">{t.nav.screenshots}</a></li>
              <li><a href="#how-it-works" className="hover:text-cyan-400 transition-colors">{t.nav.howItWorks}</a></li>
              <li><a href="#download" className="hover:text-cyan-400 transition-colors">{t.nav.downloads}</a></li>
              <li><a href="#security" className="hover:text-cyan-400 transition-colors">{t.nav.security}</a></li>
            </ul>
          </div>

          {/* Documentation & Resources */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              {t.footer.resourcesHeading}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a
                  href={CONFIG.repository.securityModelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors inline-flex items-center gap-1"
                >
                  <span>Security Model</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a
                  href={CONFIG.repository.licenseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors inline-flex items-center gap-1"
                >
                  <span>{CONFIG.repository.licenseName} License</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a
                  href={CONFIG.repository.releasesUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors inline-flex items-center gap-1"
                >
                  <span>Releases Archive</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
            </ul>
          </div>

          {/* Community & Support */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              {t.footer.communityHeading}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a
                  href={CONFIG.repository.issuesUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors inline-flex items-center gap-1"
                >
                  <span>Report Bug / Issue</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a
                  href={CONFIG.repository.discussionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors inline-flex items-center gap-1"
                >
                  <span>Community Discussions</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONFIG.developer.email}`}
                  className="hover:text-cyan-400 transition-colors"
                >
                  <span>{CONFIG.developer.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Attribution & Copyright bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div>
            <p className="text-slate-400">
              {t.footer.copyright}
            </p>
          </div>

          {/* STRICT REQUIREMENT: Attribution sentence in ONE place only:
              "LinkBridge by Krushna B Malusare. Based on the open-source NectarLink by thtbee. Adds the Obsidian Cyan and Midnight Purple themes."
              Link only "NectarLink by thtbee" to https://github.com/thtbee/nectarlink
          */}
          <div className="text-center md:text-right text-slate-400">
            <span>LinkBridge by Krushna B Malusare. Based on the open-source </span>
            <a
              href={CONFIG.attribution.nectarlinkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline font-medium"
            >
              NectarLink by thtbee
            </a>
            <span>. Adds the Obsidian Cyan and Midnight Purple themes.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
