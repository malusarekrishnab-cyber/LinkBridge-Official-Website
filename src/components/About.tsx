import { Github, Mail } from 'lucide-react'
import { config } from '../config'
import { useI18n } from '../i18n'
import Reveal from './Reveal'
import SectionHead from './SectionHead'
export default function About() {
  const { t } = useI18n()
  return (
    <section id="about" className="section">
      <SectionHead title={t.about.title} />
      <Reveal className="glass flex flex-col gap-6 p-8 sm:flex-row sm:items-start">
        <div aria-hidden="true" className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full font-display text-3xl font-semibold text-white" style={{ backgroundImage: 'linear-gradient(135deg,#7c3aed,#22d3ee)' }}>KM</div>
        <div>
          <h3 className="font-display text-2xl font-semibold">{config.developer}</h3>
          <p className="text-cyan">{t.about.role}</p>
          <p className="mt-4 max-w-xl text-mute">{t.about.bio}</p>
          <p className="mt-3 max-w-xl text-mute">{t.about.open}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={config.links.github} target="_blank" rel="noreferrer" className="btn-ghost"><Github size={18} />{t.about.gh}</a>
            <a href={`mailto:${config.email}`} className="btn-ghost"><Mail size={18} />{t.about.mail}</a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
