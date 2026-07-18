import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import SectionWrapper, { SectionBadge, SectionTitle, SectionDescription } from './SectionWrapper'
import { ChevronLeft, ChevronRight, Activity, Shield, Zap, Wrench, BarChart3, FileText, TrendingUp } from 'lucide-react'

const dashboards = [
  {
    name: 'Overview', icon: BarChart3, stats: [
      { label: 'Total Machines', value: '52', change: '+2' },
      { label: 'Active Workers', value: '184', change: '+12' },
      { label: 'Production Rate', value: '94.7%', change: '+1.2%' },
      { label: 'OEE Score', value: '87.3%', change: '+0.8%' },
    ], chart: [65, 72, 58, 80, 75, 90, 85, 78, 92, 88, 95, 87]
  },
  {
    name: 'Machine Monitoring', icon: Activity, stats: [
      { label: 'Online', value: '47', change: '' },
      { label: 'Warning', value: '3', change: '' },
      { label: 'Critical', value: '1', change: '' },
      { label: 'Offline', value: '1', change: '' },
    ], chart: [88, 92, 85, 90, 78, 95, 82, 91, 87, 94, 89, 93]
  },
  {
    name: 'Worker Safety', icon: Shield, stats: [
      { label: 'Safety Score', value: '98.2%', change: '+0.4%' },
      { label: 'PPE Compliance', value: '97.8%', change: '+1.1%' },
      { label: 'Zone Violations', value: '2', change: '-3' },
      { label: 'Incidents Today', value: '0', change: '' },
    ], chart: [95, 96, 94, 97, 98, 96, 97, 98, 97, 99, 98, 98]
  },
  {
    name: 'Energy', icon: Zap, stats: [
      { label: 'Total Usage', value: '847 kW', change: '-5%' },
      { label: 'Peak Load', value: '1.2 MW', change: '' },
      { label: 'Efficiency', value: '91.4%', change: '+2.1%' },
      { label: 'Cost Today', value: '$2,340', change: '-$180' },
    ], chart: [70, 75, 82, 88, 85, 90, 78, 72, 68, 74, 80, 85]
  },
  {
    name: 'Maintenance', icon: Wrench, stats: [
      { label: 'Open Orders', value: '8', change: '' },
      { label: 'Completed', value: '142', change: '+5' },
      { label: 'MTTR', value: '2.4h', change: '-0.3h' },
      { label: 'Predicted', value: '3', change: '' },
    ], chart: [45, 52, 48, 60, 55, 42, 50, 58, 62, 48, 55, 60]
  },
  {
    name: 'Reports', icon: FileText, stats: [
      { label: 'Generated', value: '24', change: '' },
      { label: 'Automated', value: '18', change: '' },
      { label: 'Scheduled', value: '6', change: '' },
      { label: 'Downloads', value: '89', change: '' },
    ], chart: [30, 45, 40, 55, 50, 65, 60, 70, 68, 75, 72, 80]
  },
  {
    name: 'Analytics', icon: TrendingUp, stats: [
      { label: 'Anomalies', value: '4', change: '-2' },
      { label: 'Predictions', value: '12', change: '+3' },
      { label: 'Accuracy', value: '96.8%', change: '+0.5%' },
      { label: 'Models', value: '8', change: '' },
    ], chart: [82, 85, 88, 87, 90, 92, 91, 93, 95, 94, 96, 97]
  },
]

export default function DashboardPreview() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIdx, setActiveIdx] = useState(0)

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return
    const cardWidth = 420
    const newIdx = dir === 'left' ? Math.max(0, activeIdx - 1) : Math.min(dashboards.length - 1, activeIdx + 1)
    setActiveIdx(newIdx)
    scrollRef.current.scrollTo({ left: newIdx * cardWidth, behavior: 'smooth' })
  }

  return (
    <SectionWrapper>
      <div className="text-center section-header">
        <SectionBadge>Dashboard Preview</SectionBadge>
        <SectionTitle>
          One Platform. <span className="text-muted">Complete Visibility.</span>
        </SectionTitle>
        <div className="flex-center">
          <SectionDescription>
            Purpose-built dashboards for every role and function in your factory.
          </SectionDescription>
        </div>
      </div>

      {/* Tab nav */}
      <div className="dashboard-tabs">
        {dashboards.map((d, i) => (
          <button
            key={d.name}
            onClick={() => {
              setActiveIdx(i)
              scrollRef.current?.scrollTo({ left: i * 420, behavior: 'smooth' })
            }}
            className={`dashboard-tab ${activeIdx === i ? 'dashboard-tab-active' : ''}`}
          >
            <d.icon size={14} />
            {d.name}
          </button>
        ))}
      </div>

      {/* Scroll container */}
      <div className="dashboard-scroll-wrapper">
        <div
          ref={scrollRef}
          className="dashboard-scroll"
          onScroll={() => {
            if (!scrollRef.current) return
            const newIdx = Math.round(scrollRef.current.scrollLeft / 420)
            setActiveIdx(Math.min(newIdx, dashboards.length - 1))
          }}
        >
          {dashboards.map((dashboard, i) => (
            <motion.div
              key={dashboard.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="card dashboard-card"
            >
              {/* Dashboard header */}
              <div className="dashboard-titlebar">
                <div className="window-controls">
                  <div className="window-dot dot-danger" />
                  <div className="window-dot dot-warning" />
                  <div className="window-dot dot-success" />
                </div>
                <span className="window-title">Optimus — {dashboard.name}</span>
              </div>

              <div className="dashboard-content">
                {/* Stats grid */}
                <div className="dashboard-kpis">
                  {dashboard.stats.map((stat) => (
                    <div key={stat.label} className="kpi-card">
                      <p className="kpi-label">{stat.label}</p>
                      <div className="kpi-value-row">
                        <span className="kpi-value">{stat.value}</span>
                        {stat.change && (
                          <span className="kpi-change text-success">{stat.change}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chart */}
                <div className="kpi-card">
                  <div className="chart-bars chart-bars-medium">
                    {dashboard.chart.map((h, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + idx * 0.04 }}
                        className="chart-bar"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation arrows */}
        <button onClick={() => scroll('left')} className="scroll-arrow scroll-arrow-left glass">
          <ChevronLeft size={20} />
        </button>
        <button onClick={() => scroll('right')} className="scroll-arrow scroll-arrow-right glass">
          <ChevronRight size={20} />
        </button>
      </div>
    </SectionWrapper>
  )
}
