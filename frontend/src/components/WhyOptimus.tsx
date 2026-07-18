import { motion } from 'framer-motion'
import SectionWrapper, { SectionBadge, SectionTitle } from './SectionWrapper'
import { Check, X } from 'lucide-react'

const rows = [
  'Real-time Monitoring',
  'AI-Powered Insights',
  'Predictive Maintenance',
  'Worker Safety (CV)',
  'Unified Dashboard',
  'Energy Intelligence',
  'Explainable AI',
]

const traditional = [false, false, false, false, false, false, false]
const Optimus = [true, true, true, true, true, true, true]

export default function WhyOptimus() {
  return (
    <SectionWrapper>
      <div className="text-center section-header">
        <SectionBadge>Why Optimus</SectionBadge>
        <SectionTitle>
          Beyond Traditional <span className="text-muted">Monitoring</span>
        </SectionTitle>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="comparison-table card"
      >
        {/* Header */}
        <div className="comparison-header">
          <div className="comparison-cell comparison-cell-label">Feature</div>
          <div className="comparison-cell comparison-cell-center">Traditional Monitoring</div>
          <div className="comparison-cell comparison-cell-center comparison-cell-brand">Optimus AI</div>
        </div>

        {/* Rows */}
        {rows.map((row, i) => (
          <motion.div
            key={row}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="comparison-row"
          >
            <div className="comparison-cell comparison-cell-label">
              <span>{row}</span>
            </div>
            <div className="comparison-cell comparison-cell-center">
              {traditional[i] ? (
                <div className="check-circle check-success">
                  <Check size={14} />
                </div>
              ) : (
                <div className="check-circle check-none">
                  <X size={14} />
                </div>
              )}
            </div>
            <div className="comparison-cell comparison-cell-center comparison-cell-brand">
              {Optimus[i] ? (
                <div className="check-circle check-brand">
                  <Check size={14} />
                </div>
              ) : (
                <div className="check-circle check-none">
                  <X size={14} />
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  )
}
