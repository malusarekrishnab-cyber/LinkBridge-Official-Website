import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { en, type Dict } from './en'
import { mr } from './mr'

export type Lang = 'en' | 'mr'
const dicts: Record<Lang, Dict> = { en, mr }
const Ctx = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: Dict }>({ lang: 'en', setLang: () => {}, t: en })

function initial(): Lang {
  try { const v = localStorage.getItem('lb-lang'); if (v === 'mr' || v === 'en') return v } catch { /* storage unavailable */ }
  return 'en'
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setL] = useState<Lang>(initial)
  const setLang = (l: Lang) => { setL(l); try { localStorage.setItem('lb-lang', l) } catch { /* ignore */ } }
  useEffect(() => { document.documentElement.lang = lang }, [lang])
  const value = useMemo(() => ({ lang, setLang, t: dicts[lang] }), [lang])
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}
export const useI18n = () => useContext(Ctx)
