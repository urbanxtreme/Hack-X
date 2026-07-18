import { motion } from 'framer-motion'
import SectionWrapper, { SectionBadge, SectionTitle } from './SectionWrapper'
import { AlertTriangle, ShieldOff, Unplug, BatteryWarning } from 'lucide-react'

const problems = [
  {
    icon: AlertTriangle,
    title: 'Unexpected Machine Downtime',
    description: 'Unplanned outages cost manufacturers an average of $260,000 per hour. Without AI, you\'re always reacting, never predicting.',
    accentColor: '#ef4444',
  },
  {
    icon: ShieldOff,
    title: 'Worker Safety Risks',
    description: 'Manual safety monitoring leaves gaps. Incidents go undetected until it\'s too late, putting your workforce at risk.',
    accentColor: '#f59e0b',
  },
  {
    icon: Unplug,
    title: 'Disconnected Factory Systems',
    description: 'PLCs, ERPs, SCADA, and IoT devices operate in silos. No unified view means no unified intelligence.',
    accentColor: '#10b981',
  },
  {
    icon: BatteryWarning,
    title: 'Energy Waste & Production Loss',
    description: 'Without real-time energy intelligence, factories waste up to 30% of energy. Production inefficiencies remain invisible.',
    accentColor: '#8b5cf6',
  },
]

export default function Problem() {
  return (
    <SectionWrapper id="about">
      <div className="text-center section-header">
        <SectionBadge>The Problem</SectionBadge>
        <SectionTitle>
          Factories Generate Data. <span className="text-muted">But They Don't Generate Intelligence.</span>
        </SectionTitle>
      </div>

      <div className="problem-grid">
        {problems.map((problem, i) => (
          <motion.div
            key={problem.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="card card-hover problem-card"
          >
            <div className="problem-accent" style={{ background: `linear-gradient(90deg, ${problem.accentColor}22, transparent)` }} />
            <div className="problem-icon-box" style={{ backgroundColor: `${problem.accentColor}12` }}>
              <problem.icon size={24} style={{ color: problem.accentColor }} />
            </div>
            <h3 className="problem-title">{problem.title}</h3>
            <p className="problem-desc">{problem.description}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
