import { motion } from 'framer-motion'
import { niches } from '../data/niches'

export default function NicheSelector({ selected, custom, onSelect, onCustomChange }) {
  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2">
        {niches.map((n) => {
          const isActive = selected === n.label && !custom
          return (
            <motion.button
              key={n.label}
              onClick={() => {
                onSelect(n.label)
                onCustomChange('')
              }}
              whileHover={{ y: -3, scale: 1.04 }}
              whileTap={{ scale: 0.93 }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-sm font-medium transition-all"
              style={{
                border: `1.5px solid ${isActive ? 'var(--accent)' : 'var(--border)'}`,
                background: isActive ? 'var(--accent-soft)' : 'var(--surface)',
                color: isActive ? 'var(--text)' : 'var(--text-muted)',
                boxShadow: isActive ? '0 0 12px var(--accent-glow)' : 'none',
              }}
            >
              <span>{n.emoji}</span>
              <span>{n.label}</span>
            </motion.button>
          )
        })}
      </div>
      <input
        type="text"
        className="input-glow"
        placeholder="Ou digite outra opção..."
        value={custom}
        onChange={(e) => onCustomChange(e.target.value)}
        style={{ borderRadius: 12 }}
      />
    </div>
  )
}
