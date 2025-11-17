import { motion } from 'framer-motion'

const Partners = () => {
  const partners = [
    { name: 'CEAP Brasil', logo: '/logoceap.svg' },
    { name: 'Plataforma LegisAtivo', logo: '/logoplataformafontep.svg' },
    { name: 'licito.guru', logo: '/logolicito.svg' },
    { name: 'Villa das Alamandas', logo: '/logovilla.svg' },
    { name: 'Cavalos Marinhos RJ', logo: '/logocavalos.svg' },
    { name: 'SuperLista', logo: '/superlistalogo.png' },
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
            Confiam em nós
          </h2>
          <p className="text-lg text-pastel-black/70 dark:text-white/70">
            Empresas que já aceleraram seus projetos com a Pastel
          </p>
        </motion.div>

        <div className="relative overflow-hidden py-6">
          <div className="flex w-max animate-logos-marquee">
            {row.map((partner, idx) => {
              const isSuperLista = partner.name.toLowerCase().includes('superlista')
              const sizeBase = isSuperLista ? 'h-12 sm:h-16' : 'h-14 sm:h-18'
              const darkFilter = isSuperLista ? '' : 'dark:invert dark:brightness-0'
              const cls = `${sizeBase} w-auto object-contain ${darkFilter}`
              return (
                <div key={`${partner.name}-${idx}`} className="flex-shrink-0 px-6 flex items-center justify-center">
                  {isSuperLista ? (
                    <>
                      <img
                        src="/superlistalogo.png"
                        alt={partner.name}
                        className={`${sizeBase} w-auto object-contain block dark:hidden`}
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src = '/pastel-icon-1.png'
                        }}
                      />
                      <img
                        src="/superlistab.png"
                        alt={partner.name}
                        className={`${sizeBase} w-auto object-contain hidden dark:block`}
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src = '/pastel-icon-1.png'
                        }}
                      />
                    </>
                  ) : (
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className={cls}
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = '/pastel-icon-1.png'
                      }}
                    />
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Partners