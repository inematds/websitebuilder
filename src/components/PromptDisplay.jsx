import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function PromptDisplay({ prompt }) {
  const [expanded, setExpanded] = useState(false)

  const wordCount = useMemo(() => {
    if (!prompt.trim()) return 0
    return prompt.trim().split(/\s+/).length
  }, [prompt])

  const isEmpty = !prompt.trim()

  return (
    <div className="space-y-3">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="pulse-dot" />
          <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--text-dim)' }}>
            Seu prompt
          </span>
        </div>
        {!isEmpty && (
          <span
            className="font-mono text-xs"
            style={{ color: 'var(--text-dim)' }}
          >
            {wordCount} palavras
          </span>
        )}
      </div>

      {/* Prompt box */}
      <div
        className="relative rounded-xl overflow-hidden"
        style={{
          border: '1.5px solid var(--border)',
          background: 'var(--input-bg)',
        }}
      >
        <motion.div
          animate={{ height: isEmpty ? 80 : expanded ? 480 : 160 }}
          transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
          className="overflow-y-auto"
          style={{ scrollbarWidth: 'thin' }}
        >
          <pre
            className="font-mono text-[13px] leading-[1.75] p-4 whitespace-pre-wrap break-words select-text"
            style={{ color: isEmpty ? 'var(--text-dim)' : 'var(--text-muted)', margin: 0 }}
          >
            {isEmpty
              ? 'Preencha os campos acima para gerar seu prompt...'
              : prompt}
          </pre>
        </motion.div>

        {/* Fade at bottom when collapsed */}
        <AnimatePresence>
          {!expanded && !isEmpty && (
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-10 pointer-events-none"
              style={{
                background: 'linear-gradient(to top, var(--input-bg), transparent)',
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          )}
        </AnimatePresence>
      </div>

      {/* Expand / Collapse button */}
      {!isEmpty && (
        <div className="flex justify-center">
          <motion.button
            onClick={() => setExpanded((v) => !v)}
            className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg"
            style={{
              color: 'var(--text-dim)',
              border: '1px solid var(--border)',
              background: 'var(--surface)',
            }}
            whileHover={{ color: 'var(--text)', borderColor: 'var(--border-hover)' }}
            whileTap={{ scale: 0.95 }}
          >
            {expanded ? (
              <>
                <ChevronUp size={13} /> Recolher
              </>
            ) : (
              <>
                <ChevronDown size={13} /> Expandir
              </>
            )}
          </motion.button>
        </div>
      )}
    </div>
  )
}
