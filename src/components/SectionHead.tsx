import Reveal from './Reveal'
export default function SectionHead({ title, intro }: { title: string; intro?: string }) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">{title}</h2>
      {intro && <p className="mt-4 text-lg text-mute">{intro}</p>}
    </Reveal>
  )
}
