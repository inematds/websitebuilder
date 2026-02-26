import { useState } from 'react'
import { motion } from 'framer-motion'
import { Copy, Check } from 'lucide-react'

export default function CopyButton({ prompt }) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    if (!prompt.trim()) return
    try {
      await navigator.clipboard.writeText(prompt)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    } catch {
      // fallback: select all in a textarea
      const el = document.createElement('textarea')
      el.value = prompt
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    }
  }

  const isEmpty = !prompt.trim()

  return (
    <motion.button
      onClick={handleCopy}
      disabled={isEmpty}
      className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold text-sm transition-all"
      style={
        copied
          ? {
              background: 'rgba(34,197,94,0.15)',
              color: '#4ade80',
              border: '1.5px solid rgba(34,197,94,0.4)',
              boxShadow: '0 0 30px rgba(34,197,94,0.12)',
            }
          : isEmpty
          ? {
              background: 'var(--surface)',
              color: 'var(--text-dim)',
              border: '1.5px solid var(--border)',
              cursor: 'not-allowed',
            }
          : {
              // white button with rainbow border
              color: '#0c0c10',
              cursor: 'pointer',
            }
      }
      // Rainbow border applied via className when not copied and not empty
      {...(!copied && !isEmpty
        ? { className: 'rainbow-border-white w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold text-sm' }
        : {})}
      whileHover={!isEmpty && !copied ? { boxShadow: '0 6px 44px rgba(139,108,255,0.35)' } : {}}
      whileTap={!isEmpty ? { scale: 0.97 } : {}}
    >
      {copied ? (
        <>
          <Check size={16} />
          Copiado — cole no seu builder de IA
        </>
      ) : (
        <>
          <Copy size={16} />
          Copiar Prompt
        </>
      )}
    </motion.button>
  )
}
