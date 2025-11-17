import { motion } from 'framer-motion'

const Partners = () => {
  const partners = [
    { name: 'CEAP Brasil', logo: '/logoceap.svg' },
    { name: 'Plataforma LegisAtivo', logo: '/logoplataformaafontep.svg' },
    { name: 'licito.guru', logo: '/logolicito.svg' },
    { name: 'Villa das Alamandas', logo: '/logovilla.svg' },
    { name: 'Cavalos Marinhos RJ', logo: '/logocavalos.svg' },
  ]

  const row = [...partners, ...partners]

  return (
    <section className="py-16 bg-pastel-light-yellow/30 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold text-pastel-black dark:text-white mb-4 font-display">
            Quem já é cliente
          </h2>
          <p className="text-lg text-pastel-black/70 dark:text-white/70">
            Logos serão adicionadas em breve
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex items-center gap-8 whitespace-nowrap"
            animate={{ x: ['0%', '-100%'] }}
            transition={{ ease: 'linear', duration: 20, repeat: Infinity }}
          >
            {row.map((partner, idx) => (
              <div key={`${partner.name}-${idx}`} className="px-3">
                <div className="h-12 w-12 rounded-lg bg-white dark:bg-gray-900 flex items-center justify-center shadow-sm">
                  {(() => {
                    const isSvg = partner.logo.toLowerCase().endsWith('.svg')
                    const cls = `h-10 w-10 object-contain ${isSvg ? 'dark:brightness-0 dark:invert' : ''}`
                    return (
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className={cls}
                        onError={(e) => {
                          const el = e.currentTarget
                          el.style.display = 'none'
                        }}
                      />
                    )
                  })()}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Partners