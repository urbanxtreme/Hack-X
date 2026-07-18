import { motion } from 'framer-motion'
import { ArrowRight, Play, Activity, Zap, Shield, BarChart3, Thermometer, Bell, Cpu, Gauge } from 'lucide-react'
import { Link } from 'react-router-dom'

function HeroBackground() {
  return (
    <div className="hero-background-wrapper">
      {/* Grid */}
      <div className="hero-grid-bg" />

      {/* Radial gradient */}
      <div className="hero-radial-glow" />

      {/* Floating orbs */}
      <motion.div
        animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="hero-orb orb-primary"
      />
      <motion.div
        animate={{ y: [20, -20, 20], x: [10, -10, 10] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        className="hero-orb orb-secondary"
      />

      {/* Animated connection lines */}
      <svg className="hero-svg-lines" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--accent-primary)" />
            <stop offset="100%" stopColor="var(--accent-brand)" />
          </linearGradient>
        </defs>
        {[...Array(6)].map((_, i) => (
          <motion.line
            key={i}
            x1={`${10 + i * 15}%`}
            y1="0%"
            x2={`${30 + i * 12}%`}
            y2="100%"
            stroke="url(#lineGrad)"
            strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, delay: i * 0.3, repeat: Infinity, repeatType: 'loop', repeatDelay: 2 }}
          />
        ))}
      </svg>

      {/* Floating data particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="hero-particle"
          style={{ left: `${5 + Math.random() * 90}%`, top: `${5 + Math.random() * 90}%` }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

function DashboardMockup() {
  const kpis = [
    { label: 'Active Machines', value: '47/52', icon: Cpu, colorClass: 'text-success', bgClass: 'bg-success-light' },
    { label: 'Production Rate', value: '94.7%', icon: Gauge, colorClass: 'text-primary', bgClass: 'bg-primary-light' },
    { label: 'Energy Usage', value: '847 kW', icon: Zap, colorClass: 'text-brand', bgClass: 'bg-brand-light' },
    { label: 'Safety Score', value: '98.2%', icon: Shield, colorClass: 'text-success', bgClass: 'bg-success-light' },
  ]

  const alerts = [
    { msg: 'Machine M-12 vibration threshold warning', type: 'warning', time: '2m ago' },
    { msg: 'Line 3 production target exceeded', type: 'success', time: '8m ago' },
    { msg: 'Energy spike detected in Zone B', type: 'danger', time: '15m ago' },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, x: 60, scale: 0.95 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="dashboard-mockup-container"
    >
      {/* Glow behind dashboard */}
      <div className="dashboard-glow" />

      <div className="dashboard-mockup glass">
        {/* Title bar */}
        <div className="dashboard-titlebar">
          <div className="window-controls">
            <div className="window-dot dot-danger" />
            <div className="window-dot dot-warning" />
            <div className="window-dot dot-success" />
          </div>
          <span className="window-title">Optimus Dashboard — Factory Overview</span>
        </div>

        <div className="dashboard-content">
          {/* KPIs */}
          <div className="dashboard-kpis">
            {kpis.map((kpi, i) => (
              <motion.div
                key={kpi.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="kpi-card glass hover-effect"
              >
                <div className="kpi-header">
                  <div className={`kpi-icon-wrapper ${kpi.bgClass}`}>
                    <kpi.icon className={`kpi-icon ${kpi.colorClass}`} size={14} />
                  </div>
                  <span className="kpi-label">{kpi.label}</span>
                </div>
                <span className={`kpi-value ${kpi.colorClass}`}>{kpi.value}</span>
              </motion.div>
            ))}
          </div>

          {/* Mini chart */}
          <div className="kpi-card glass">
            <div className="chart-header">
              <span className="chart-title">Machine Health Index</span>
              <span className="chart-stat text-success">↑ 2.3%</span>
            </div>
            <div className="chart-bars">
              {[65, 72, 58, 80, 75, 90, 85, 78, 92, 88, 95, 87, 91, 94, 89, 93, 96, 91, 88, 95].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: 0.8 + i * 0.03, duration: 0.5 }}
                  className="chart-bar"
                />
              ))}
            </div>
          </div>

          {/* Alerts */}
          <div className="kpi-card glass">
            <div className="alerts-header">
              <Bell size={12} className="text-muted" />
              <span className="alerts-title">AI Alerts</span>
            </div>
            <div className="alerts-list">
              {alerts.map((alert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + i * 0.15 }}
                  className="alert-item"
                >
                  <div className={`alert-dot dot-${alert.type}`} />
                  <div className="alert-content">
                    <p className="alert-msg">{alert.msg}</p>
                    <p className="alert-time">{alert.time}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <HeroBackground />

      <div className="container hero-container">
        <div className="hero-grid">
          {/* Left content */}
          <div className="hero-content">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="hero-badge glass"
            >
              <span className="badge-dot pulse-animation" />
              AI-Powered Industrial Intelligence
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="hero-title"
            >
              The AI Operating System for <br />
              <span className="gradient-text">Industrial Intelligence</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hero-subtitle"
            >
              Transform traditional factories into intelligent, connected, self-learning manufacturing ecosystems through AI-powered monitoring, predictive maintenance, worker safety, and operational analytics.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hero-actions"
            >
              <Link to="/auth" className="btn-primary hero-btn">
                Login / Sign Up
                <ArrowRight size={16} />
              </Link>
              <button className="btn-secondary hero-btn group">
                <Play size={16} className="play-icon transition-colors" />
                Watch Platform Demo
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="hero-stats"
            >
              {[
                { value: '99.7%', label: 'Uptime Accuracy' },
                { value: '45%', label: 'Cost Reduction' },
                { value: '3x', label: 'Faster Response' },
              ].map((stat) => (
                <div key={stat.label} className="stat-item">
                  <div className="stat-value gradient-text">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - Dashboard mockup */}
          <div className="desktop-only hero-mockup">
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  )
}
