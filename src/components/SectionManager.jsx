import { Reorder, motion } from 'framer-motion'
import * as LucideIcons from 'lucide-react'
import { GripVertical, Plus, X } from 'lucide-react'
import { allSections } from '../data/sections'

function SectionIcon({ iconName, size = 14 }) {
  const Icon = LucideIcons[iconName]
  return Icon ? <Icon size={size} /> : null
}

export default function SectionManager({ sections, onChange }) {
  const available = allSections.filter((s) => !sections.includes(s.name))

  function remove(name) {
    onChange(sections.filter((s) => s !== name))
  }

  function add(name) {
    onChange([...sections, name])
  }

  return (
    <div className="space-y-4">
      {/* Active sections — drag to reorder */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <div className="pulse-dot" />
          <span className="text-xs font-medium uppercase tracking-widest" style={{ color: 'var(--text-dim)' }}>
            Sua página — arraste para reordenar
          </span>
        </div>

        <Reorder.Group
          axis="y"
          values={sections}
          onReorder={onChange}
          className="space-y-2"
        >
          {sections.map((name) => {
            const sec = allSections.find((s) => s.name === name)
            return (
              <Reorder.Item
                key={name}
                value={name}
                className="drag-item flex items-center gap-2 rounded-xl px-3 py-2.5"
                style={{
                  background: 'var(--surface-raised)',
                  border: '1.5px solid var(--border)',
                }}
                whileDrag={{
                  scale: 1.03,
                  zIndex: 50,
                  boxShadow: '0 8px 30px rgba(0,0,0,0.4)',
                  border: '1.5px solid var(--accent)',
                }}
              >
                <GripVertical size={14} style={{ color: 'var(--text-dim)', flexShrink: 0 }} />
                {sec && (
                  <span style={{ color: 'var(--accent)', flexShrink: 0 }}>
                    <SectionIcon iconName={sec.icon} />
                  </span>
                )}
                <span className="flex-1 text-sm font-medium" style={{ color: 'var(--text)' }}>
                  {name}
                </span>
                <motion.button
                  onClick={() => remove(name)}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center justify-center rounded-lg"
                  style={{
                    width: 22,
                    height: 22,
                    background: 'var(--surface-hover)',
                    color: 'var(--text-dim)',
                    flexShrink: 0,
                  }}
                >
                  <X size={11} strokeWidth={2.5} />
                </motion.button>
              </Reorder.Item>
            )
          })}
        </Reorder.Group>
      </div>

      {/* Available sections to add */}
      {available.length > 0 && (
        <div>
          <p className="text-xs font-medium uppercase tracking-widest mb-2" style={{ color: 'var(--text-dim)' }}>
            Adicionar seções
          </p>
          <div className="flex flex-wrap gap-2">
            {available.map((sec) => (
              <motion.button
                key={sec.name}
                onClick={() => add(sec.name)}
                className="section-available"
                whileHover={{ y: -2, scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
              >
                <Plus size={12} style={{ color: 'var(--accent)' }} />
                <SectionIcon iconName={sec.icon} size={12} />
                <span>{sec.name}</span>
              </motion.button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
