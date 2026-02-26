import { motion } from 'framer-motion'

export default function Divider() {
  return (
    <motion.div
      className="relative my-10"
      whileHover={{ opacity: 1 }}
      initial={{ opacity: 0.6 }}
    >
      <motion.div
        className="h-px w-full"
        style={{
          background:
            'linear-gradient(to right, transparent, var(--border) 30%, var(--border) 70%, transparent)',
        }}
        whileHover={{
          boxShadow: '0 0 8px 1px var(--accent-glow)',
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  )
}
