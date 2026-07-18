import Features from '../components/Features'
import AICopilot from '../components/AICopilot'
import DashboardPreview from '../components/DashboardPreview'
import Architecture from '../components/Architecture'
import CTA from '../components/CTA'
import PageTransition from '../components/PageTransition'

export default function Platform() {
  return (
    <PageTransition>
      <div style={{ paddingTop: '5rem' }}>
        <Features />
        <AICopilot />
        <DashboardPreview />
        <Architecture />
        <CTA />
      </div>
    </PageTransition>
  )
}
