import { styles } from '../data/styles'
import { allSections } from '../data/sections'

/**
 * Generates an optimized prompt (in English) to be pasted into an AI website builder.
 * @param {Object} state
 * @param {string} state.description   - Free-form description of the site
 * @param {string} state.nicheSelected - Selected niche button label (PT)
 * @param {string} state.nicheCustom   - Custom niche typed by user
 * @param {string|null} state.vibe     - Style ID ('clean'|'bold'|'warm'|'playful'|'luxury'|'vibrant')
 * @param {string[]} state.sections    - Ordered array of section names (PT)
 * @param {string} state.cta           - CTA button text
 * @returns {string} The generated prompt
 */
export function generatePrompt({ description, nicheSelected, nicheCustom, vibe, sections, cta }) {
  const niche = nicheCustom.trim() || nicheSelected || 'a business'
  const ctaText = cta.trim() || 'Get Started'
  const styleData = styles.find((s) => s.id === vibe)

  const lines = []

  lines.push('Build me a beautiful, complete, single-page website.\n')

  if (description.trim()) {
    lines.push(`**What it's for:** ${description.trim()}\n`)
  }

  lines.push(`**Type of business:** ${niche}`)
  lines.push(`**Main button text:** "${ctaText}"\n`)

  if (styleData) {
    lines.push(`**Visual style:** ${styleData.label}`)
    lines.push(styleData.description + '\n')
  }

  lines.push(
    "Pick a color palette that feels right for this type of business. Don't overthink it — just choose colors that look great together and fit the vibe.\n"
  )

  if (sections.length > 0) {
    lines.push('**Page sections (build them in this order):**')
    sections.forEach((sectionName, i) => {
      const sectionData = allSections.find((s) => s.name === sectionName)
      const desc = sectionData ? sectionData.desc : ''
      lines.push(`${i + 1}. **${sectionName}** — ${desc}`)
    })
    lines.push('')
  }

  lines.push('**Important:**')
  lines.push('- Make it fully responsive (looks great on phone and desktop)')
  lines.push(
    '- Use real, realistic placeholder text — not lorem ipsum. Write copy that actually fits this business.'
  )
  lines.push('- Add smooth, subtle animations (fade in on scroll, hover effects on buttons and cards)')
  lines.push(`- The "${ctaText}" button should appear above the fold and repeat near the bottom`)
  lines.push('- Keep the code clean and production-ready. Single page, no routing.')
  lines.push('- Use React with Tailwind CSS')

  return lines.join('\n')
}
