import { ExternalLink, Globe, KeyRound, Lock, ToggleRight } from 'lucide-react'
import { config } from '../config'
import { useI18n } from '../i18n'
import Reveal from './Reveal'
import SectionHead from './SectionHead'
const icons = [Lock, KeyRound, ToggleRight, Globe]
export default function Privacy() {
  const { t } = useI18n()
  return (
    <section id="privacy" className="section">
      <SectionHead title={t.privacy.title} intro={t.privacy.intro} />
      <div className="grid gap-4 md:grid-cols-2">
        {t.privacy.items.map((p, i) => { const Icon = icons[i]; return (
          <Reveal key={i} className="glass glow flex gap-4 p-6">
            <span className="h-fit rounded-xl bg-violet/15 p-2.5 text-cyan"><Icon size={22} aria-hidden="true" /></span>
            <div><h3 className="font-display text-lg font-semibold">{p.t}</h3><p className="mt-1.5 text-mute">{p.d}</p></div>
          </Reveal>) })}
      </div>
      <p className="mt-6 max-w-2xl text-mute">{t.privacy.note}</p>
      <a href={config.links.security} target="_blank" rel="noreferrer" className="btn-ghost mt-4"><ExternalLink size={18} />{t.privacy.link}</a>
    </section>
  )
}
