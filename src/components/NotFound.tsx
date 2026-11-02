import { config } from '../config'
import { useI18n } from '../i18n'
export default function NotFound() {
  const { t } = useI18n()
  return (
    <main id="main" className="hero-bg flex min-h-screen flex-col items-center justify-center px-5 text-center">
      <img src={config.logo} alt="" width={72} height={72} className="mb-6 rounded-2xl" />
      <p className="font-display text-7xl font-semibold text-cyan">404</p>
      <h1 className="mt-3 font-display text-3xl font-semibold">{t.nf.title}</h1>
      <p className="mt-3 max-w-md text-mute">{t.nf.body}</p>
      <a href="/" className="btn-primary mt-8">{t.nf.home}</a>
    </main>
  )
}
