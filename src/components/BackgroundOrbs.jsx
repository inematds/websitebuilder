import { motion } from 'framer-motion'

const orbs = [
  {
    style: { top: '-10%', left: '-5%', width: 480, height: 480 },
    gradient: 'radial-gradient(circle, rgba(139,108,255,0.18) 0%, transparent 70%)',
    animate: {
      x: [0, 30, -20, 10, 0],
      y: [0, -20, 30, -10, 0],
      scale: [1, 1.08, 0.95, 1.05, 1],
      opacity: [0.7, 0.9, 0.6, 0.85, 0.7],
    },
    duration: 18,
  },
  {
    style: { top: '30%', right: '-8%', width: 360, height: 360 },
    gradient: 'radial-gradient(circle, rgba(192,132,252,0.14) 0%, transparent 70%)',
    animate: {
      x: [0, -25, 15, -10, 0],
      y: [0, 20, -30, 15, 0],
      scale: [1, 0.93, 1.07, 0.97, 1],
      opacity: [0.6, 0.8, 0.5, 0.75, 0.6],
    },
    duration: 22,
  },
  {
    style: { bottom: '10%', left: '10%', width: 300, height: 300 },
    gradient: 'radial-gradient(circle, rgba(244,114,182,0.12) 0%, transparent 70%)',
    animate: {
      x: [0, 20, -15, 25, 0],
      y: [0, -15, 20, -10, 0],
      scale: [1, 1.05, 0.98, 1.03, 1],
      opacity: [0.5, 0.7, 0.4, 0.65, 0.5],
    },
    duration: 26,
  },
  {
    style: { top: '60%', right: '20%', width: 200, height: 200 },
    gradient: 'radial-gradient(circle, rgba(139,108,255,0.10) 0%, transparent 70%)',
    animate: {
      x: [0, -10, 20, -5, 0],
      y: [0, 25, -10, 15, 0],
      scale: [1, 1.1, 0.9, 1.05, 1],
      opacity: [0.4, 0.6, 0.3, 0.55, 0.4],
    },
    duration: 20,
  },
]

export default function BackgroundOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            ...orb.style,
            background: orb.gradient,
          }}
          animate={orb.animate}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
