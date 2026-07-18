import { motion } from 'framer-motion'
import { Factory, Car, FlaskRound, Cpu, UtensilsCrossed } from 'lucide-react'

const logos = [
  { name: 'Manufacturing', icon: Factory },
  { name: 'Automotive', icon: Car },
  { name: 'Pharmaceutical', icon: FlaskRound },
  { name: 'Electronics', icon: Cpu },
  { name: 'Food Processing', icon: UtensilsCrossed },
]

export default function TrustedBy() {
  return (
    <section className="trusted-by-section">
      <div className="container section-inner">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="trusted-label"
        >
          Built for the next generation of smart manufacturing
        </motion.p>

        <div className="trusted-logos">
          {logos.map((logo) => {
            console.log(logo.name, logo.icon);

            return (
              <div key={logo.name}>
                <logo.icon size={40} color="red" />
                <p>{logo.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}
