import { motion } from 'framer-motion'
import SectionWrapper, { SectionBadge, SectionTitle, SectionDescription } from './SectionWrapper'
import { Car, Factory, Shirt, Hammer, UtensilsCrossed, Cpu, FlaskRound } from 'lucide-react'

const industries = [
  { icon: Car, name: 'Automotive', description: 'Precision manufacturing with real-time quality control, robotic arm monitoring, and supply chain optimization.', color: '#0f172a' },
  { icon: Factory, name: 'Manufacturing', description: 'End-to-end production visibility with OEE tracking, machine health scoring, and predictive maintenance.', color: '#06b6d4' },
  { icon: Shirt, name: 'Textiles', description: 'Loom monitoring, fabric quality inspection, dye process control, and energy optimization for weaving units.', color: '#8b5cf6' },
  { icon: Hammer, name: 'Steel & Cement', description: 'High-temperature environment monitoring, heavy equipment tracking, and emissions compliance management.', color: '#f59e0b' },
  { icon: UtensilsCrossed, name: 'Food Processing', description: 'HACCP compliance monitoring, cold chain management, hygiene tracking, and batch traceability.', color: '#10b981' },
  { icon: Cpu, name: 'Electronics', description: 'Cleanroom monitoring, SMT line analytics, component-level quality tracking, and yield optimization.', color: '#0f172a' },
  { icon: FlaskRound, name: 'Pharmaceutical', description: 'GMP compliance, batch process monitoring, environmental controls, and regulatory audit trails.', color: '#f43f5e' },
]

export default function Industries() {
  return (
    <SectionWrapper id="industries">
      <div className="text-center section-header">
        <SectionBadge>Industries</SectionBadge>
        <SectionTitle>
          Built for <span className="gradient-text">Every Factory</span>
        </SectionTitle>
        <div className="flex-center">
          <SectionDescription>
            Optimus adapts to the unique needs of diverse manufacturing verticals.
          </SectionDescription>
        </div>
      </div>

      <div className="industries-grid">
        {industries.map((industry, i) => (
          <motion.div
            key={industry.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.4 }}
            className="card card-hover industry-card"
          >
            <div className="industry-icon" style={{ backgroundColor: `${industry.color}10` }}>
              <industry.icon size={24} style={{ color: industry.color }} />
            </div>
            <h3 className="industry-name">{industry.name}</h3>
            <p className="industry-desc">{industry.description}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
