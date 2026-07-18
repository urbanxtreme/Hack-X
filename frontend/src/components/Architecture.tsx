import { motion } from 'framer-motion'
import SectionWrapper, { SectionBadge, SectionTitle, SectionDescription } from './SectionWrapper'
import { Factory, Cloud, Brain, Eye, BarChart3, LayoutDashboard, FileText, Lightbulb, Server } from 'lucide-react'

const archNodes = [
  { icon: Factory, label: 'Factory', sublabel: 'Equipment & Sensors', color: '#3b82f6' },
  { icon: Server, label: 'Optimus Edge', sublabel: 'Edge Computing Hub', color: '#06b6d4' },
  { icon: Cloud, label: 'Cloud AI', sublabel: 'Scalable Infrastructure', color: '#0f172a' },
  { icon: Brain, label: 'Machine Learning', sublabel: 'Predictive Models', color: '#8b5cf6' },
  { icon: Eye, label: 'Computer Vision', sublabel: 'Visual Analytics', color: '#ec4899' },
  { icon: BarChart3, label: 'Analytics Engine', sublabel: 'Deep Insights', color: '#0f172a' },
  { icon: LayoutDashboard, label: 'Dashboard', sublabel: 'Unified Interface', color: '#10b981' },
  { icon: FileText, label: 'Reports', sublabel: 'Automated Outputs', color: '#f59e0b' },
  { icon: Lightbulb, label: 'Recommendations', sublabel: 'Actionable Intelligence', color: '#06b6d4' },
]

export default function Architecture() {
  return (
    <SectionWrapper id="architecture">
      <div className="text-center section-header">
        <SectionBadge>Platform Architecture</SectionBadge>
        <SectionTitle>
          End-to-End <span className="gradient-text">Intelligence Pipeline</span>
        </SectionTitle>
        <div className="flex-center">
          <SectionDescription>
            From raw sensor data to actionable recommendations — see how Optimus processes and transforms factory data.
          </SectionDescription>
        </div>
      </div>

      {/* Architecture flow grid */}
      <div className="arch-grid">
        {archNodes.map((node, i) => (
          <motion.div
            key={node.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            className="card card-hover arch-card"
          >
            <div className="arch-step-num" style={{ backgroundColor: `${node.color}15`, color: node.color, borderColor: `${node.color}30` }}>
              {i + 1}
            </div>
            <div className="arch-icon" style={{ backgroundColor: `${node.color}12` }}>
              <node.icon size={20} style={{ color: node.color }} />
            </div>
            <h4 className="arch-label">{node.label}</h4>
            <p className="arch-sublabel">{node.sublabel}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
