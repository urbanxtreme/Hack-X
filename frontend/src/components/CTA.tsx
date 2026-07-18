import { motion } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function CTA() {
  return (
    <section id="demo" className="cta-section">
      <div className="container cta-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-badge"
        >
          <span className="badge-dot pulse-animation" />
          Get Started
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="cta-title"
        >
          Ready to Build the <br />
          <span className="gradient-text">Factory of Tomorrow?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="cta-subtitle"
        >
          Join the next generation of smart manufacturers. Deploy Optimus AI and transform your factory operations in weeks, not years.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="cta-actions"
        >
          <Link to="/dashboard" className="btn-primary hero-btn">
            Login / Sign Up
            <ArrowRight size={16} />
          </Link>
          <a href="#" className="btn-secondary hero-btn">
            <Mail size={16} />
            Contact Sales
          </a>
        </motion.div>

        {/* Trust signals */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="cta-trust"
        >
          <span className="trust-item">
            <span className="trust-dot" />
            SOC 2 Compliant
          </span>
          <span className="trust-item">
            <span className="trust-dot" />
            ISO 27001 Certified
          </span>
          <span className="trust-item">
            <span className="trust-dot" />
            99.9% Uptime SLA
          </span>
          <span className="trust-item">
            <span className="trust-dot" />
            Enterprise Support
          </span>
        </motion.div>
      </div>
    </section>
  )
}
