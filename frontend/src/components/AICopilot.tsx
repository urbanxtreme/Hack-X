import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import SectionWrapper, { SectionBadge, SectionTitle } from './SectionWrapper'
import { Bot, User, Send, Activity, TrendingUp, AlertTriangle, Wrench } from 'lucide-react'

const conversation = [
  {
    role: 'user' as const,
    content: 'Why did Production Line 2 stop?',
  },
  {
    role: 'ai' as const,
    content: 'Machine M-12 experienced abnormal vibration levels exceeding the safety threshold (4.2g vs 3.5g limit) for 18 minutes. The auto-shutdown was triggered at 14:32 IST. Root cause analysis suggests bearing wear in the primary motor. Maintenance is recommended within the next 24 hours.',
  },
]

function TypingIndicator() {
  return (
    <div className="typing-indicator">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="typing-dot"
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
        />
      ))}
    </div>
  )
}

export default function AICopilot() {
  const [visibleMessages, setVisibleMessages] = useState(0)
  const [isTyping, setIsTyping] = useState(false)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    if (!started) return
    const showNext = () => {
      if (visibleMessages < conversation.length) {
        setIsTyping(true)
        setTimeout(() => {
          setIsTyping(false)
          setVisibleMessages((prev) => prev + 1)
        }, 1200)
      }
    }
    const timer = setTimeout(showNext, visibleMessages === 0 ? 500 : 1500)
    return () => clearTimeout(timer)
  }, [visibleMessages, started])

  return (
    <SectionWrapper className="copilot-section">
      <div className="text-center section-header">
        <SectionBadge>AI Copilot</SectionBadge>
        <SectionTitle>
          Your Factory's <span className="gradient-text">Intelligent Assistant</span>
        </SectionTitle>
      </div>

      <motion.div
        onViewportEnter={() => setStarted(true)}
        className="copilot-grid"
      >
        {/* Chat Interface */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="copilot-chat-wrapper"
        >
          <div className="card copilot-chat">
            {/* Header */}
            <div className="copilot-chat-header">
              <div className="copilot-avatar">
                <Bot size={16} className="icon-white" />
              </div>
              <div>
                <h4 className="copilot-name">Optimus Copilot</h4>
                <div className="copilot-status">
                  <div className="status-dot online" />
                  <span>Online · Monitoring 52 machines</span>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="copilot-messages">
              {conversation.slice(0, visibleMessages).map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`message-row ${msg.role === 'user' ? 'message-user' : 'message-ai'}`}
                >
                  {msg.role === 'ai' && (
                    <div className="msg-avatar msg-avatar-ai">
                      <Bot size={14} />
                    </div>
                  )}
                  <div className={`message-bubble ${msg.role === 'user' ? 'bubble-user' : 'bubble-ai'}`}>
                    <p>{msg.content}</p>
                  </div>
                  {msg.role === 'user' && (
                    <div className="msg-avatar msg-avatar-user">
                      <User size={14} />
                    </div>
                  )}
                </motion.div>
              ))}
              {isTyping && (
                <div className="message-row message-ai">
                  <div className="msg-avatar msg-avatar-ai">
                    <Bot size={14} />
                  </div>
                  <div className="message-bubble bubble-ai">
                    <TypingIndicator />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="copilot-input-wrapper">
              <div className="copilot-input">
                <input
                  type="text"
                  placeholder="Ask about your factory..."
                  className="copilot-textfield"
                  readOnly
                />
                <button className="copilot-send">
                  <Send size={14} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Insights Panel */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="copilot-insights"
        >
          {/* Machine Status */}
          <div className="card insight-card">
            <div className="insight-header">
              <Activity size={16} style={{ color: 'var(--accent-primary)' }} />
              <h4>Machine M-12 Status</h4>
              <span className="status-badge danger">Critical</span>
            </div>
            <div className="metrics-list">
              {[
                { label: 'Vibration', value: 82, color: '#ef4444' },
                { label: 'Temperature', value: 65, color: '#f59e0b' },
                { label: 'RPM', value: 40, color: 'var(--accent-primary)' },
                { label: 'Efficiency', value: 28, color: '#ef4444' },
              ].map((metric) => (
                <div key={metric.label} className="metric-row">
                  <div className="metric-labels">
                    <span className="metric-name">{metric.label}</span>
                    <span style={{ color: metric.color }}>{metric.value}%</span>
                  </div>
                  <div className="metric-bar-bg">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${metric.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="metric-bar-fill"
                      style={{ backgroundColor: metric.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trend Chart */}
          <div className="card insight-card">
            <div className="insight-header">
              <TrendingUp size={16} style={{ color: '#06b6d4' }} />
              <h4>Vibration Trend (24h)</h4>
            </div>
            <div className="chart-bars chart-bars-tall">
              {[30, 32, 28, 35, 38, 42, 45, 50, 55, 60, 58, 65, 70, 72, 75, 80, 78, 82, 85, 90, 88, 92, 95, 82].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.03 }}
                  className={`chart-bar ${h > 70 ? 'chart-bar-danger' : ''}`}
                />
              ))}
            </div>
            <div className="chart-timestamps">
              <span>00:00</span>
              <span>12:00</span>
              <span>Now</span>
            </div>
          </div>

          {/* Recommendations */}
          <div className="card insight-card">
            <div className="insight-header">
              <Wrench size={16} style={{ color: '#f59e0b' }} />
              <h4>AI Recommendations</h4>
            </div>
            <div className="recommendations-list">
              {[
                'Schedule bearing replacement for M-12 within 24h',
                'Redistribute Line 2 load to Lines 3 & 5',
                'Order replacement parts: SKF 6205-2RS (Qty: 2)',
              ].map((rec, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="recommendation-item"
                >
                  <AlertTriangle size={12} style={{ color: '#f59e0b', flexShrink: 0, marginTop: '2px' }} />
                  <span>{rec}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  )
}
