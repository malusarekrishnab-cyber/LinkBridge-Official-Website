import React, { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import {
  Bell,
  MessageSquare,
  PhoneCall,
  Clipboard,
  FolderSync,
  Image,
  Tv,
  LayoutGrid,
  Camera,
  Volume2,
  MousePointer,
  Sliders,
  QrCode,
  ShieldCheck,
  Palette,
  Activity
} from 'lucide-react';

export const Features: React.FC = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: t.features.categories.all },
    { id: 'comm', label: t.features.categories.communication },
    { id: 'sync', label: t.features.categories.sync },
    { id: 'remote', label: t.features.categories.remote },
    { id: 'media', label: t.features.categories.media },
    { id: 'security', label: t.features.categories.security },
  ];

  const featureItems = [
    {
      id: 'notifications',
      category: 'comm',
      icon: Bell,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10 border-cyan-500/20',
      title: t.features.items.notifications.title,
      desc: t.features.items.notifications.desc,
    },
    {
      id: 'messages',
      category: 'comm',
      icon: MessageSquare,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10 border-blue-500/20',
      title: t.features.items.messages.title,
      desc: t.features.items.messages.desc,
    },
    {
      id: 'calls',
      category: 'comm',
      icon: PhoneCall,
      color: 'text-teal-400',
      bgColor: 'bg-teal-500/10 border-teal-500/20',
      title: t.features.items.calls.title,
      desc: t.features.items.calls.desc,
    },
    {
      id: 'clipboard',
      category: 'sync',
      icon: Clipboard,
      color: 'text-indigo-400',
      bgColor: 'bg-indigo-500/10 border-indigo-500/20',
      title: t.features.items.clipboard.title,
      desc: t.features.items.clipboard.desc,
    },
    {
      id: 'files',
      category: 'sync',
      icon: FolderSync,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10 border-cyan-500/20',
      title: t.features.items.files.title,
      desc: t.features.items.files.desc,
    },
    {
      id: 'photos',
      category: 'sync',
      icon: Image,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10 border-emerald-500/20',
      title: t.features.items.photos.title,
      desc: t.features.items.photos.desc,
    },
    {
      id: 'mirroring',
      category: 'remote',
      icon: Tv,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10 border-purple-500/20',
      title: t.features.items.mirroring.title,
      desc: t.features.items.mirroring.desc,
    },
    {
      id: 'phoneApps',
      category: 'remote',
      icon: LayoutGrid,
      color: 'text-violet-400',
      bgColor: 'bg-violet-500/10 border-violet-500/20',
      title: t.features.items.phoneApps.title,
      desc: t.features.items.phoneApps.desc,
    },
    {
      id: 'webcam',
      category: 'media',
      icon: Camera,
      color: 'text-amber-400',
      bgColor: 'bg-amber-500/10 border-amber-500/20',
      title: t.features.items.webcam.title,
      desc: t.features.items.webcam.desc,
    },
    {
      id: 'speaker',
      category: 'media',
      icon: Volume2,
      color: 'text-rose-400',
      bgColor: 'bg-rose-500/10 border-rose-500/20',
      title: t.features.items.speaker.title,
      desc: t.features.items.speaker.desc,
    },
    {
      id: 'remote',
      category: 'remote',
      icon: MousePointer,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10 border-blue-500/20',
      title: t.features.items.remote.title,
      desc: t.features.items.remote.desc,
    },
    {
      id: 'deck',
      category: 'remote',
      icon: Sliders,
      color: 'text-indigo-400',
      bgColor: 'bg-indigo-500/10 border-indigo-500/20',
      title: t.features.items.deck.title,
      desc: t.features.items.deck.desc,
    },
    {
      id: 'pairing',
      category: 'security',
      icon: QrCode,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10 border-emerald-500/20',
      title: t.features.items.pairing.title,
      desc: t.features.items.pairing.desc,
    },
    {
      id: 'deviceManagement',
      category: 'security',
      icon: ShieldCheck,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10 border-cyan-500/20',
      title: t.features.items.deviceManagement.title,
      desc: t.features.items.deviceManagement.desc,
    },
    {
      id: 'themes',
      category: 'media',
      icon: Palette,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10 border-purple-500/20',
      title: t.features.items.themes.title,
      desc: t.features.items.themes.desc,
    },
    {
      id: 'doctor',
      category: 'security',
      icon: Activity,
      color: 'text-teal-400',
      bgColor: 'bg-teal-500/10 border-teal-500/20',
      title: t.features.items.doctor.title,
      desc: t.features.items.doctor.desc,
    },
  ];

  const filteredItems = activeCategory === 'all'
    ? featureItems
    : featureItems.filter(item => item.category === activeCategory);

  return (
    <section id="features" className="py-24 relative bg-slate-950/50">
      {/* Decorative accent divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-4">
            {t.features.badge}
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            {t.features.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            {t.features.subtitle}
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-glow-cyan'
                  : 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="group relative rounded-2xl bg-slate-900/40 hover:bg-slate-900/80 p-6 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-glow-card flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl ${feature.bgColor} border flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110`}>
                    <Icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2.5 tracking-tight group-hover:text-cyan-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed font-normal">
                    {feature.desc}
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
