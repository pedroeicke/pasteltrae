import { motion } from 'framer-motion'

const Partners = () => {
  const partners = [
    { name: 'Mercado Livre', logo: '🛒' },
    { name: 'Nubank', logo: '💳' },
    { name: 'Rappi', logo: '📱' },
    { name: '99', logo: '🚗' },
    { name: 'iFood', logo: '🍔' },
    { name: 'PicPay', logo: '💰' },
  ]

  return (
    <section className="py-16 bg-pastel-light-yellow/30 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-pastel-black dark:text-white mb-4 font-display">
            Confiam em nós
          </h2>
          <p className="text-lg text-pastel-black/70 dark:text-white/70">
            Empresas que já aceleraram seus projetos com a Pastel
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group cursor-pointer"
            >
              <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                {partner.logo}
              </div>
              <p className="text-sm font-medium text-pastel-black/60 dark:text-white/60 group-hover:text-pastel-black dark:group-hover:text-white transition-colors">
                {partner.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partners