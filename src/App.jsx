import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { ArrowDownRight } from 'lucide-react'

import BackgroundOrbs from './components/BackgroundOrbs'
import StepHeader from './components/StepHeader'
import Divider from './components/Divider'
import NicheSelector from './components/NicheSelector'
import StylePicker from './components/StylePicker'
import SectionManager from './components/SectionManager'
import PromptDisplay from './components/PromptDisplay'
import CopyButton from './components/CopyButton'
import CommunityIllustration from './components/CommunityIllustration'

import { defaultSections } from './data/sections'
import { generatePrompt } from './utils/generatePrompt'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: [0.4, 0, 0.2, 1] },
})

const inView = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
}

export default function App() {
  const [description, setDescription] = useState('')
  const [nicheSelected, setNicheSelected] = useState('')
  const [nicheCustom, setNicheCustom] = useState('')
  const [vibe, setVibe] = useState(null)
  const [sections, setSections] = useState(defaultSections)
  const [cta, setCta] = useState('')

  const prompt = useMemo(
    () => generatePrompt({ description, nicheSelected, nicheCustom, vibe, sections, cta }),
    [description, nicheSelected, nicheCustom, vibe, sections, cta]
  )

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)' }}>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative flex flex-col items-center justify-center text-center pt-20 pb-16 px-4 overflow-hidden">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            backgroundImage: `linear-gradient(var(--accent) 1px, transparent 1px), linear-gradient(90deg, var(--accent) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            opacity: 0.03,
          }}
        />

        <BackgroundOrbs />

        {/* Fade out at bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
          style={{ background: 'linear-gradient(to top, var(--bg), transparent)' }}
        />

        <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center gap-4">
          {/* Avatar */}
          <motion.div {...fadeUp(0)}>
            <div
              className="w-20 h-20 rounded-full overflow-hidden ring-2 flex items-center justify-center text-4xl"
              style={{
                ringColor: 'var(--accent)',
                boxShadow: '0 0 20px var(--accent-glow)',
                background: 'var(--surface)',
              }}
            >
              🚀
            </div>
          </motion.div>

          {/* H1 */}
          <motion.h1
            className="font-extrabold tracking-tight leading-[1.05]"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 3.75rem)' }}
            {...fadeUp(0.1)}
          >
            <span style={{ color: 'var(--text)' }}>Construa seu </span>
            <span className="text-shimmer">site perfeito</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-base sm:text-lg leading-relaxed max-w-sm"
            style={{ color: 'var(--text-muted)' }}
            {...fadeUp(0.2)}
          >
            Escolha seu estilo. Selecione suas seções.
            <br />
            Gere um prompt pronto para qualquer builder de IA.
          </motion.p>
        </div>
      </section>

      {/* ── MAIN FORM ────────────────────────────────────────── */}
      <main className="max-w-xl mx-auto px-4 pb-24">

        {/* Step 1 */}
        <motion.section className="py-2" {...inView}>
          <StepHeader n={1} title="Para que é o site?" />
          <textarea
            className="input-glow"
            rows={3}
            placeholder="ex: Uma landing page para minha clínica odontológica em São Paulo que oferece clareamento e estética dental..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </motion.section>

        <Divider />

        {/* Step 2 */}
        <motion.section className="py-2" {...inView}>
          <StepHeader
            n={2}
            title="Qual tipo de negócio?"
            sub="Escolha um ou digite o seu abaixo"
          />
          <NicheSelector
            selected={nicheSelected}
            custom={nicheCustom}
            onSelect={setNicheSelected}
            onCustomChange={setNicheCustom}
          />
        </motion.section>

        <Divider />

        {/* Step 3 */}
        <motion.section className="py-2" {...inView}>
          <StepHeader
            n={3}
            title="Escolha um estilo"
            sub="Isso define toda a aparência do site"
          />
          <StylePicker selected={vibe} onSelect={setVibe} />
        </motion.section>

        <Divider />

        {/* Step 4 */}
        <motion.section className="py-2" {...inView}>
          <StepHeader
            n={4}
            title="Monte sua página"
            sub="Adicione seções e arraste para reordenar"
          />
          <SectionManager sections={sections} onChange={setSections} />
        </motion.section>

        <Divider />

        {/* Step 5 */}
        <motion.section className="py-2" {...inView}>
          <StepHeader
            n={5}
            title="O que o botão deve dizer?"
            sub="A ação principal que você quer que os visitantes façam"
          />
          <input
            type="text"
            className="input-glow"
            placeholder='ex: Agende uma Consulta Gratuita, Solicite um Orçamento, Começar Agora'
            value={cta}
            onChange={(e) => setCta(e.target.value)}
            style={{ borderRadius: 12 }}
          />
        </motion.section>

        <Divider />

        {/* Prompt output */}
        <motion.section className="py-2 space-y-4" {...inView}>
          <PromptDisplay prompt={prompt} />
          <CopyButton prompt={prompt} />
        </motion.section>

      </main>

      {/* ── PASTE INTO ───────────────────────────────────────── */}
      <section className="px-4 py-8 flex flex-col items-center gap-4">
        <div className="rainbow-strip w-full max-w-xl" />

        <motion.p
          className="text-center text-sm"
          style={{ color: 'var(--text-muted)' }}
          {...inView}
        >
          Cole em{' '}
          <span style={{ color: 'var(--text)', fontWeight: 600 }}>Lovable</span>,{' '}
          <span style={{ color: 'var(--text)', fontWeight: 600 }}>Bolt</span>,{' '}
          <span style={{ color: 'var(--text)', fontWeight: 600 }}>v0</span> ou qualquer builder de IA
        </motion.p>

        <p
          className="text-xs uppercase tracking-widest"
          style={{ color: 'var(--text-dim)' }}
        >
          Continue rolando
        </p>

        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ color: 'var(--text-dim)' }}
        >
          <ArrowDownRight size={18} />
        </motion.div>
      </section>

      {/* ── GO DEEPER ────────────────────────────────────────── */}
      <section className="max-w-xl mx-auto px-4 py-12">
        <motion.div
          className="rounded-2xl p-6 space-y-4"
          style={{ border: '1.5px solid var(--border)', background: 'var(--surface)' }}
          whileHover={{
            borderColor: 'var(--accent)',
            boxShadow: '0 0 30px var(--accent-glow)',
          }}
          transition={{ duration: 0.3 }}
          {...inView}
        >
          <h3 className="text-xl font-bold" style={{ color: 'var(--text)' }}>
            Vá mais fundo
          </h3>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            Entre na comunidade para sistemas de IA, automações e sites que realmente funcionam.
          </p>

          <CommunityIllustration />

          <motion.a
            href="https://inema.vip"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold"
            style={{
              background: 'var(--accent)',
              color: '#fff',
              boxShadow: '0 4px 20px var(--accent-glow)',
            }}
            whileHover={{ boxShadow: '0 6px 30px var(--accent-glow)', scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Acessar inema.vip
            <ArrowDownRight size={14} style={{ transform: 'rotate(-45deg)' }} />
          </motion.a>
        </motion.div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────── */}
      <footer className="text-center py-8 px-4">
        <p className="text-sm" style={{ color: 'var(--text-dim)' }}>
          Feito com <span className="text-cyan-400">💙</span> para a comunidade brasileira de IA
        </p>
      </footer>

    </div>
  )
}
