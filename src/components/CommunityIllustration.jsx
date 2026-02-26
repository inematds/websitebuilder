import { motion } from 'framer-motion'

const nodes = [
  { cx: 160, cy: 80,  r: 18, delay: 0 },
  { cx: 300, cy: 55,  r: 14, delay: 0.15 },
  { cx: 420, cy: 90,  r: 16, delay: 0.3 },
  { cx: 80,  cy: 160, r: 13, delay: 0.45 },
  { cx: 230, cy: 150, r: 20, delay: 0.1 },
  { cx: 370, cy: 170, r: 15, delay: 0.25 },
  { cx: 490, cy: 140, r: 12, delay: 0.4 },
  { cx: 130, cy: 240, r: 16, delay: 0.2 },
  { cx: 310, cy: 255, r: 13, delay: 0.35 },
  { cx: 450, cy: 235, r: 17, delay: 0.05 },
  { cx: 560, cy: 195, r: 11, delay: 0.5 },
  { cx: 200, cy: 320, r: 14, delay: 0.3 },
  { cx: 390, cy: 310, r: 16, delay: 0.15 },
]

const edges = [
  [0, 1], [1, 2], [0, 4], [1, 4], [2, 5], [2, 6],
  [3, 4], [3, 7], [4, 5], [4, 7], [4, 8], [5, 6],
  [5, 9], [6, 10], [7, 8], [7, 11], [8, 9], [8, 11],
  [9, 10], [9, 12], [10, 12], [11, 12],
]

const pulseNodes = [4, 8, 2, 9]

// Simple person icon path centered at (0,0), fits in ~20px radius
function PersonIcon({ cx, cy, r, accent }) {
  const scale = r / 18
  return (
    <g transform={`translate(${cx},${cy})`}>
      {/* Head */}
      <circle r={5 * scale} cy={-5 * scale} fill={accent} opacity={0.9} />
      {/* Body */}
      <path
        d={`M${-6 * scale},${4 * scale} Q${-7 * scale},${12 * scale} 0,${13 * scale} Q${7 * scale},${12 * scale} ${6 * scale},${4 * scale} Z`}
        fill={accent}
        opacity={0.75}
      />
    </g>
  )
}

export default function CommunityIllustration() {
  const accent  = '#8b6cff'
  const accent2 = '#c084fc'
  const accent3 = '#22d3ee'

  return (
    <div
      className="w-full rounded-xl overflow-hidden relative"
      style={{
        aspectRatio: '16/7',
        background: 'linear-gradient(135deg, #0c0c18 0%, #110820 50%, #0c0c18 100%)',
        border: '1px solid rgba(139,108,255,0.2)',
      }}
    >
      <svg
        viewBox="0 0 640 280"
        preserveAspectRatio="xMidYMid meet"
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      >
        <defs>
          {/* Glow filters */}
          <filter id="glow-purple" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="glow-cyan" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>

          {/* Background radial glows */}
          <radialGradient id="bg-orb-1" cx="35%" cy="40%" r="40%">
            <stop offset="0%" stopColor="#8b6cff" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#8b6cff" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="bg-orb-2" cx="72%" cy="55%" r="35%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
          </radialGradient>

          {/* Edge gradient */}
          <linearGradient id="edge-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8b6cff" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#c084fc" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.5" />
          </linearGradient>

          {/* Node gradients */}
          <radialGradient id="node-grad-purple" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#c084fc" />
            <stop offset="100%" stopColor="#6d28d9" />
          </radialGradient>
          <radialGradient id="node-grad-cyan" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#67e8f9" />
            <stop offset="100%" stopColor="#0891b2" />
          </radialGradient>
          <radialGradient id="node-grad-pink" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#f9a8d4" />
            <stop offset="100%" stopColor="#be185d" />
          </radialGradient>
        </defs>

        {/* Background orbs */}
        <rect width="640" height="280" fill="url(#bg-orb-1)" />
        <rect width="640" height="280" fill="url(#bg-orb-2)" />

        {/* Grid dots pattern */}
        {Array.from({ length: 9 }).map((_, row) =>
          Array.from({ length: 20 }).map((_, col) => (
            <circle
              key={`${row}-${col}`}
              cx={col * 34 + 12}
              cy={row * 34 + 12}
              r={1}
              fill="#8b6cff"
              opacity={0.08}
            />
          ))
        )}

        {/* Edges */}
        {edges.map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a].cx} y1={nodes[a].cy}
            x2={nodes[b].cx} y2={nodes[b].cy}
            stroke="url(#edge-grad)"
            strokeWidth="1"
            opacity="0.35"
          />
        ))}

        {/* Pulse rings on key nodes */}
        {pulseNodes.map((ni) => (
          <motion.circle
            key={`pulse-${ni}`}
            cx={nodes[ni].cx}
            cy={nodes[ni].cy}
            r={nodes[ni].r}
            fill="none"
            stroke={accent}
            strokeWidth="1.5"
            animate={{ r: [nodes[ni].r, nodes[ni].r + 14], opacity: [0.5, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: nodes[ni].delay + 0.5, ease: 'easeOut' }}
          />
        ))}

        {/* Nodes */}
        {nodes.map((n, i) => {
          const gradId = i % 3 === 0 ? 'node-grad-purple' : i % 3 === 1 ? 'node-grad-cyan' : 'node-grad-pink'
          const isPulse = pulseNodes.includes(i)
          return (
            <motion.g key={i} filter={isPulse ? 'url(#glow-purple)' : undefined}>
              {/* Node circle background */}
              <circle
                cx={n.cx} cy={n.cy} r={n.r}
                fill="#16161c"
                stroke={i % 3 === 1 ? accent3 : accent}
                strokeWidth="1.5"
                opacity="0.9"
              />
              {/* Inner fill */}
              <circle
                cx={n.cx} cy={n.cy} r={n.r - 3}
                fill={`url(#${gradId})`}
                opacity="0.25"
              />
              {/* Person icon */}
              <PersonIcon
                cx={n.cx} cy={n.cy}
                r={n.r}
                accent={i % 3 === 1 ? accent3 : i % 3 === 2 ? '#f9a8d4' : accent2}
              />
            </motion.g>
          )
        })}

        {/* Travelling data packets along edges */}
        {[edges[1], edges[4], edges[8], edges[13], edges[17]].map(([a, b], i) => (
          <motion.circle
            key={`packet-${i}`}
            r={2.5}
            fill={i % 2 === 0 ? accent2 : accent3}
            filter="url(#glow-cyan)"
            animate={{
              cx: [nodes[a].cx, nodes[b].cx, nodes[a].cx],
              cy: [nodes[a].cy, nodes[b].cy, nodes[a].cy],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              delay: i * 0.7,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* Center label */}
        <g filter="url(#glow-purple)">
          <text
            x="230" y="152"
            textAnchor="middle"
            fontSize="13"
            fontWeight="700"
            fontFamily="Inter, sans-serif"
            fill="#f2f2f5"
            opacity="0.95"
          >
            Comunidade IA
          </text>
          <text
            x="230" y="168"
            textAnchor="middle"
            fontSize="8.5"
            fontFamily="Inter, sans-serif"
            fill="#b8b8c4"
            opacity="0.7"
          >
            inema.vip
          </text>
        </g>

        {/* Corner badge */}
        <g>
          <rect x="490" y="245" width="132" height="24" rx="12"
            fill="rgba(139,108,255,0.15)"
            stroke="rgba(139,108,255,0.35)"
            strokeWidth="1"
          />
          <text x="556" y="261" textAnchor="middle"
            fontSize="9" fontWeight="600" fontFamily="Inter, sans-serif"
            fill="#c084fc"
          >
            IA · Automação · Sites
          </text>
        </g>
      </svg>
    </div>
  )
}
