import { motion } from 'framer-motion'
import SectionWrapper, { SectionBadge, SectionTitle, SectionDescription } from './SectionWrapper'
import {
  Activity, Wrench, Shield, Zap, Eye, MessageSquare,
  BarChart3, ClipboardList, Bell, Users
} from 'lucide-react'

const features = [
  { icon: Activity, title: 'Machine Health Monitoring', description: 'Real-time vibration, temperature, and performance tracking across all machines with AI anomaly detection.', color: '#0f172a' },
  { icon: Wrench, title: 'Predictive Maintenance', description: 'AI predicts failures 72 hours before they occur, reducing unplanned downtime by up to 45%.', color: '#06b6d4' },
  { icon: Shield, title: 'Worker Safety AI', description: 'Computer vision monitors PPE compliance, restricted zones, and unsafe behaviors in real-time.', color: '#10b981' },
  { icon: Zap, title: 'Energy Optimization', description: 'Track energy consumption per machine, zone, and shift. Identify waste patterns and optimize usage.', color: '#f59e0b' },
  { icon: Eye, title: 'Computer Vision', description: 'Automated quality inspection, defect detection, and production line monitoring through CCTV feeds.', color: '#8b5cf6' },
  { icon: MessageSquare, title: 'AI Factory Copilot', description: 'Natural language interface to query factory data, get recommendations, and resolve issues instantly.', color: '#06b6d4' },
  { icon: BarChart3, title: 'Production Analytics', description: 'OEE, throughput, cycle time, and yield analysis with benchmarking across production lines.', color: '#0f172a' },
  { icon: ClipboardList, title: 'Digital Maintenance Logs', description: 'Digitize and automate maintenance records. Track work orders, parts inventory, and technician performance.', color: '#059669' },
  { icon: Bell, title: 'Smart Alerts', description: 'Context-aware notifications with priority levels. Escalation workflows and automated responses.', color: '#ef4444' },
  { icon: Users, title: 'Role-Based Dashboards', description: 'Custom views for operators, supervisors, managers, and executives with relevant KPIs and controls.', color: '#6366f1' },
]

export default function Features() {
  return (
    <SectionWrapper id="features">
      <div className="text-center section-header">
        <SectionBadge>Core Features</SectionBadge>
        <SectionTitle>
          Everything Your Factory Needs. <span className="text-muted">In One Platform.</span>
        </SectionTitle>
        <div className="flex-center">
          <SectionDescription>
            From machine health to worker safety, energy management to AI analytics — Optimus unifies every aspect of factory intelligence.
          </SectionDescription>
        </div>
      </div>

      <div className="features-grid">
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.4 }}
            className="card card-hover feature-card"
          >
            <div className="feature-icon-box" style={{ backgroundColor: `${feature.color}10` }}>
              <feature.icon size={20} style={{ color: feature.color }} />
            </div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-desc">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
