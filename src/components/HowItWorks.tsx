import { useI18n } from '../i18n'
import Reveal from './Reveal'
import SectionHead from './SectionHead'
export default function HowItWorks() {
  const { t } = useI18n()
  return (
    <section id="how" className="section">
      <SectionHead title={t.how.title} intro={t.how.intro} />
      <ol className="relative grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {t.how.steps.map((s, i) => (
          <li key={i}><Reveal delay={(i % 3) * 0.05} className="glass h-full p-6">
            <span className="mb-3 flex h-9 w-9 items-center justify-center rounded-full font-display font-semibold text-white" style={{ backgroundImage: 'linear-gradient(135deg,#7c3aed,#2563eb)' }}>{i + 1}</span>
            <h3 className="font-display text-lg font-semibold">{s.t}</h3><p className="mt-2 text-mute">{s.d}</p>
          </Reveal></li>
        ))}
      </ol>
    </section>
  )
}
