import { Bug, Github, Mail, MessagesSquare } from 'lucide-react'
import { config } from '../config'
import { useI18n } from '../i18n'
import Reveal from './Reveal'
import SectionHead from './SectionHead'
export default function Contact() {
  const { t } = useI18n(); const c = t.contact
  const items = [
    { Icon: Mail, title: c.email, d: c.emailD, href: `mailto:${config.email}`, label: config.email, ext: false },
    { Icon: Bug, title: c.issues, d: c.issuesD, href: config.links.issues, label: 'GitHub Issues', ext: true },
    ...(config.showDiscussions ? [{ Icon: MessagesSquare, title: c.disc, d: c.discD, href: config.links.discussions, label: 'GitHub Discussions', ext: true }] : []),
    { Icon: Github, title: c.profile, d: c.profileD, href: config.links.github, label: 'malusarekrishnab-cyber', ext: true },
  ]
  return (
    <section id="contact" className="section">
      <SectionHead title={c.title} intro={c.intro} />
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map(({ Icon, title, d, href, label, ext }) => (
          <Reveal key={title}><a href={href} {...(ext ? { target: '_blank', rel: 'noreferrer' } : {})} className="glass glow flex h-full gap-4 p-6">
            <span className="h-fit rounded-xl bg-violet/15 p-2.5 text-cyan"><Icon size={22} aria-hidden="true" /></span>
            <span><span className="block font-display text-lg font-semibold">{title}</span><span className="block text-mute">{d}</span><span className="mt-1 block break-all text-sm font-medium text-cyan">{label}</span></span>
          </a></Reveal>
        ))}
      </div>
      <p className="mt-6 text-mute"><a href={config.links.securityPolicy} target="_blank" rel="noreferrer" className="underline hover:text-cyan">{c.security}</a></p>
    </section>
  )
}
