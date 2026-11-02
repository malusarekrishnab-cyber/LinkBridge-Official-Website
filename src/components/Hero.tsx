import { Download, Github, Smartphone } from 'lucide-react'
import { config } from '../config'
import { useI18n } from '../i18n'
import Illustration from './Illustration'

export default function Hero() {
  const { t } = useI18n()
  return (
    <section id="home" className="hero-bg relative overflow-hidden">
      <div className="grid-lines absolute inset-0" aria-hidden="true" />
      <div className="section relative grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <div className="mb-6 flex items-center gap-4">
            <img src={config.logo} alt="" width={64} height={64} className="rounded-2xl shadow-[0_0_40px_-8px_rgb(var(--violet))]" />
            <span className="font-display text-2xl font-semibold">{config.name}</span>
          </div>
          <h1 className="font-display text-5xl font-semibold leading-[1.05] sm:text-6xl">{config.tagline}</h1>
          <p className="mt-6 max-w-xl text-lg text-mute">{t.hero.intro}</p>
          <p className="mt-3 text-sm font-medium text-cyan">{t.hero.free}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href={config.downloads.windows.url} className="btn-primary text-lg"><Download size={20} />{t.hero.dlWin}</a>
            <a href={config.downloads.android.url} className="btn-primary text-lg"><Smartphone size={20} />{t.hero.dlAnd}</a>
            <a href={config.links.repo} target="_blank" rel="noreferrer" className="btn-ghost text-lg"><Github size={20} />{t.hero.github}<span className="sr-only"> ({t.common.external})</span></a>
          </div>
        </div>
        <Illustration label={t.hero.art} />
      </div>
    </section>
  )
}
