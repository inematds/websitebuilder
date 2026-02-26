// Rich JSX mockup preview for each visual style
export default function MockupPreview({ style }) {
  const { bg, accent, navBg, cardBg, id } = style

  const isDark = ['bold', 'luxury', 'vibrant'].includes(id)
  const textColor   = isDark ? '#f2f2f5' : '#1a1a2e'
  const subColor    = isDark ? '#94a3b8' : '#64748b'
  const borderColor = isDark ? `${accent}30` : `${accent}25`

  /* ── style-specific decorative elements ── */
  const Decoration = () => {
    if (id === 'bold') return (
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 80, height: 80,
          top: '10%', right: '-15%',
          background: `radial-gradient(circle, ${accent}55 0%, transparent 70%)`,
          filter: 'blur(12px)',
        }}
      />
    )
    if (id === 'vibrant') return (
      <>
        <div className="absolute pointer-events-none" style={{
          width: 70, height: 70, top: '-5%', left: '-10%',
          background: `radial-gradient(circle, #e879f966 0%, transparent 70%)`,
          filter: 'blur(14px)',
        }} />
        <div className="absolute pointer-events-none" style={{
          width: 50, height: 50, bottom: '10%', right: '-5%',
          background: `radial-gradient(circle, #22d3ee55 0%, transparent 70%)`,
          filter: 'blur(10px)',
        }} />
      </>
    )
    if (id === 'luxury') return (
      <div className="absolute pointer-events-none" style={{
        bottom: 0, left: 0, right: 0, height: 2,
        background: `linear-gradient(90deg, transparent, ${accent}88, transparent)`,
      }} />
    )
    if (id === 'warm') return (
      <div className="absolute pointer-events-none" style={{
        top: '30%', right: '-5%',
        width: 40, height: 40,
        borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
        background: `${accent}22`,
        border: `1px solid ${accent}44`,
      }} />
    )
    if (id === 'playful') return (
      <>
        {[{ top: '8%', right: '8%', r: 6 }, { top: '45%', left: '5%', r: 4 }].map((c, i) => (
          <div key={i} className="absolute rounded-full pointer-events-none"
            style={{ width: c.r * 2, height: c.r * 2, top: c.top, left: c.left, right: c.right,
              background: accent, opacity: 0.35 }}
          />
        ))}
      </>
    )
    return null
  }

  /* ── hero accent element (image placeholder or gradient block) ── */
  const HeroVisual = () => {
    if (id === 'vibrant') return (
      <div className="w-12 h-8 rounded-lg" style={{
        background: `linear-gradient(135deg, #8b6cff, #e879f9, #22d3ee)`,
        opacity: 0.8,
      }} />
    )
    if (id === 'luxury') return (
      <div className="w-10 h-10 rounded-full" style={{
        border: `1.5px solid ${accent}`,
        background: `linear-gradient(135deg, ${accent}22, transparent)`,
      }} />
    )
    if (id === 'playful') return (
      <div className="w-12 h-8 rounded-2xl" style={{
        background: `linear-gradient(135deg, ${accent}55, #f472b644)`,
        border: `1px solid ${accent}44`,
      }} />
    )
    return (
      <div className="w-10 h-8 rounded-lg" style={{
        background: `${accent}22`,
        border: `1px solid ${accent}44`,
      }} />
    )
  }

  return (
    <div
      className="w-full h-full rounded-lg overflow-hidden flex flex-col relative"
      style={{ background: bg, border: `1px solid ${borderColor}` }}
    >
      <Decoration />

      {/* ── Navbar ── */}
      <div
        className="flex items-center justify-between px-2.5 py-2 relative z-10"
        style={{ background: navBg, borderBottom: `1px solid ${borderColor}` }}
      >
        {/* Logo */}
        <div className="flex items-center gap-1">
          <div className="w-4 h-4 rounded-sm" style={{ background: accent }} />
          <div className="w-8 h-1 rounded-full" style={{ background: textColor, opacity: 0.7 }} />
        </div>
        {/* Nav links */}
        <div className="flex gap-1.5">
          {[10, 8, 12].map((w, i) => (
            <div key={i} className="h-1 rounded-full" style={{ width: w, background: subColor, opacity: 0.45 }} />
          ))}
        </div>
        {/* CTA mini */}
        <div className="px-1.5 py-0.5 rounded text-[0px]" style={{
          background: accent, width: 18, height: 8, borderRadius: 4,
        }} />
      </div>

      {/* ── Hero ── */}
      <div className="flex items-center justify-between px-2.5 py-3 relative z-10" style={{ flex: '1 1 auto' }}>
        <div className="flex flex-col gap-1.5">
          {/* Headline */}
          <div className="flex flex-col gap-1">
            <div className="rounded-full" style={{ width: 64, height: 7, background: textColor, opacity: 0.85 }} />
            <div className="rounded-full" style={{ width: 48, height: 5, background: textColor, opacity: 0.6 }} />
          </div>
          {/* Sub */}
          <div className="rounded-full" style={{ width: 52, height: 4, background: subColor, opacity: 0.4 }} />
          {/* Button */}
          <div className="rounded-md" style={{
            width: 36, height: 10, marginTop: 2,
            background: accent,
            boxShadow: `0 2px 8px ${accent}44`,
          }} />
        </div>
        {/* Visual element */}
        <div className="flex-shrink-0">
          <HeroVisual />
        </div>
      </div>

      {/* ── Divider ── */}
      <div style={{ height: 1, background: borderColor, margin: '0 10px' }} />

      {/* ── Cards row ── */}
      <div className="flex gap-1.5 px-2 py-2 relative z-10">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="flex-1 rounded-md p-1.5 flex flex-col gap-1"
            style={{
              background: cardBg,
              border: `1px solid ${borderColor}`,
            }}
          >
            {/* Icon */}
            <div style={{
              width: 14, height: 14, borderRadius: 4,
              background: `${accent}44`,
              border: `1px solid ${accent}66`,
            }} />
            <div className="rounded-full" style={{ width: '90%', height: 3.5, background: subColor, opacity: 0.5 }} />
            <div className="rounded-full" style={{ width: '65%', height: 3, background: subColor, opacity: 0.3 }} />
          </div>
        ))}
      </div>
    </div>
  )
}
