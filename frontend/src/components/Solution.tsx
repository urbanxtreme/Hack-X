import { motion } from 'framer-motion'
import SectionWrapper, { SectionBadge, SectionTitle, SectionDescription } from './SectionWrapper'
import { Server, Cpu, Wifi, Camera, Box, Brain, LayoutDashboard, Lightbulb } from 'lucide-react'

const nodes = [
  { icon: Server, label: 'Machines & PLCs', sublabel: 'Industrial Equipment', color: '#3b82f6' },
  { icon: Wifi, label: 'IoT Sensors', sublabel: 'Real-time Data', color: '#06b6d4' },
  { icon: Camera, label: 'CCTV & Vision', sublabel: 'Computer Vision AI', color: '#a855f7' },
  { icon: Box, label: 'Edge Hub', sublabel: 'Optimus Edge', color: '#0f172a' },
  { icon: Brain, label: 'Optimus AI', sublabel: 'AI Processing Engine', color: '#10b981', highlight: true },
  { icon: LayoutDashboard, label: 'Factory Dashboard', sublabel: 'Unified Control', color: '#059669' },
  { icon: Lightbulb, label: 'Recommendations', sublabel: 'Actionable Intelligence', color: '#f59e0b' },
]

export default function Solution() {
  return (
    <SectionWrapper id="solutions">
      <div className="text-center section-header">
        <SectionBadge>The Solution</SectionBadge>
        <SectionTitle>
          Meet <span className="gradient-text">Optimus AI</span>
        </SectionTitle>
        <div className="flex-center">
          <SectionDescription>
            Optimus acts as the AI brain of your factory — connecting every machine, sensor, camera, and system into one intelligent decision-making platform.
          </SectionDescription>
        </div>
      </div>

      {/* Architecture Flow */}
      <div className="solution-flow">
        {nodes.map((node, i) => (
          <div key={node.label} className="solution-node-wrapper">
            {/* Connecting line */}
            {i < nodes.length - 1 && (
              <div className="solution-connector">
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: '100%' }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.15, duration: 0.4 }}
                  className="connector-line"
                />
                <motion.div
                  className="connector-dot"
                  animate={{ top: ['0%', '100%'], opacity: [0, 1, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3, repeatDelay: 1 }}
                />
              </div>
            )}

            {/* Node */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + i * 0.1, duration: 0.5 }}
              className="solution-node-row"
            >
              <div className={`solution-node card card-hover ${node.highlight ? 'solution-node-highlight' : ''}`}>
                <div className="solution-node-icon" style={{ backgroundColor: `${node.color}15` }}>
                  <node.icon size={24} style={{ color: node.color }} />
                </div>
                <div>
                  <h4 className={`solution-node-label ${node.highlight ? 'gradient-text' : ''}`}>
                    {node.label}
                  </h4>
                  <p className="solution-node-sublabel">{node.sublabel}</p>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
