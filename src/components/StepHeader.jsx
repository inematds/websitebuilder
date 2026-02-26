export default function StepHeader({ n, title, sub }) {
  return (
    <div className="mb-5">
      <div className="flex items-center gap-3 mb-2">
        <span
          className="rainbow-border inline-flex items-center justify-center rounded-full text-xs font-bold text-white flex-shrink-0"
          style={{
            width: 28,
            height: 28,
            background: 'linear-gradient(var(--surface-raised), var(--surface-raised)) padding-box, conic-gradient(from var(--angle), #8b6cff, #c084fc, #f472b6, #fb923c, #facc15, #4ade80, #22d3ee, #818cf8, #8b6cff) border-box',
          }}
        >
          {n}
        </span>
        <h2
          className="font-semibold text-[1.0625rem] leading-snug"
          style={{ color: 'var(--text)' }}
        >
          {title}
        </h2>
      </div>
      {sub && (
        <p className="text-sm leading-relaxed ml-[40px]" style={{ color: 'var(--text-muted)' }}>
          {sub}
        </p>
      )}
    </div>
  )
}
