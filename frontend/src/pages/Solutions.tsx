import Industries from '../components/Industries'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'
import PageTransition from '../components/PageTransition'

export default function Solutions() {
  return (
    <PageTransition>
      <div style={{ paddingTop: '5rem' }}>
        <Industries />
        <Testimonials />
        <CTA />
      </div>
    </PageTransition>
  )
}
