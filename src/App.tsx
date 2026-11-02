import { lazy, Suspense } from 'react'
import { useI18n } from './i18n'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Downloads from './components/Downloads'
import HowItWorks from './components/HowItWorks'
import Privacy from './components/Privacy'
import Footer from './components/Footer'
import NotFound from './components/NotFound'

const Screenshots = lazy(() => import('./components/Screenshots'))
const About = lazy(() => import('./components/About'))
const Faq = lazy(() => import('./components/Faq'))
const Contact = lazy(() => import('./components/Contact'))

export default function App() {
  const { t } = useI18n()
  const path = window.location.pathname.replace(/\/index\.html$/, '/')
  if (path !== '/') return <NotFound />
  const fallback = <div className="section skeleton rounded-2xl" role="status" aria-label={t.common.loading} style={{ minHeight: 240 }} />
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded-lg focus:bg-surface focus:px-4 focus:py-2">{t.common.skip}</a>
      <Header />
      <main id="main">
        <Hero />
        <Features />
        <Suspense fallback={fallback}><Screenshots /></Suspense>
        <Downloads />
        <HowItWorks />
        <Privacy />
        <Suspense fallback={fallback}><About /><Faq /><Contact /></Suspense>
      </main>
      <Footer />
    </>
  )
}
