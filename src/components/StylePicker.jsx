import { motion, AnimatePresence } from 'framer-motion'
import { Check } from 'lucide-react'
import { styles } from '../data/styles'
import MockupPreview from './MockupPreview'

export default function StylePicker({ selected, onSelect }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {styles.map((style, i) => {
        const isActive = selected === style.id
        return (
          <motion.button
            key={style.id}
            onClick={() => onSelect(style.id)}
            className="relative rounded-xl overflow-hidden text-left focus:outline-none"
            style={{
              aspectRatio: '5 / 4',
              border: `2px solid ${isActive ? 'var(--accent)' : 'var(--border)'}`,
              boxShadow: isActive
                ? '0 0 0 1px var(--accent), 0 0 20px var(--accent-glow)'
                : 'none',
              background: 'var(--surface)',
            }}
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: i * 0.07, duration: 0.3 }}
            whileHover={{ scale: 1.03, boxShadow: '0 4px 20px rgba(0,0,0,0.4)' }}
            whileTap={{ scale: 0.97 }}
          >
            {/* Mockup preview fills card */}
            <div className="absolute inset-0">
              <MockupPreview style={style} />
            </div>

            {/* Label at bottom */}
            <div
              className="absolute bottom-0 left-0 right-0 px-2 py-1.5 text-xs font-semibold"
              style={{
                background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                color: '#fff',
              }}
            >
              {style.label}
            </div>

            {/* Check badge */}
            <AnimatePresence>
              {isActive && (
                <motion.div
                  className="absolute top-2 right-2 rounded-full flex items-center justify-center"
                  style={{
                    width: 20,
                    height: 20,
                    background: 'var(--accent)',
                  }}
                  initial={{ scale: 0, rotate: -90 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: -90 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <Check size={11} strokeWidth={3} color="#fff" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        )
      })}
    </div>
  )
}
