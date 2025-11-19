import { motion } from 'framer-motion'

const Founders = () => {
  return (
    <section className="py-16 sm:py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-pastel-black dark:text-white mb-6 font-display">
              Quem cozinha seu código
            </h2>
            <p className="text-base sm:text-lg text-pastel-black/80 dark:text-white/80 mb-12 leading-relaxed">
              Geraldo e Pedro. Dois devs que cansaram de prazos impossíveis e promessas vazias. 
              Criamos a Pastel para entregar o que os outros só prometem: velocidade real com qualidade real.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {/* Founder 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center group card-hover-effect bg-pastel-light-yellow/30 dark:bg-gray-800 p-8 rounded-xl transition-colors"
            >
              <img
                src="/neto.png"
                alt="Geraldo"
                className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-pastel-yellow group-hover:scale-110 transition-transform duration-300"
              />
              <h3 className="text-xl font-bold text-pastel-black dark:text-white mb-2">Geraldo</h3>
              <p className="text-pastel-black/70 dark:text-white/70 mb-4">Full-Stack Developer</p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-pastel-black/60 dark:text-white/60 hover:text-pastel-yellow transition-colors" aria-label="LinkedIn Geraldo">
                  💼
                </a>
                <a href="#" className="text-pastel-black/60 dark:text-white/60 hover:text-pastel-yellow transition-colors" aria-label="GitHub Geraldo">
                  🐙
                </a>
              </div>
            </motion.div>

            {/* Founder 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center group card-hover-effect bg-pastel-light-yellow/30 dark:bg-gray-800 p-8 rounded-xl transition-colors"
            >
              <img
                src="/pedro.jpg.jpeg"
                alt="Pedro - Tech Lead"
                className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-pastel-yellow group-hover:scale-110 transition-transform duration-300"
              />
              <h3 className="text-xl font-bold text-pastel-black dark:text-white mb-2">Pedro</h3>
              <p className="text-pastel-black/70 dark:text-white/70 mb-4">Lead Product Designer</p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-pastel-black/60 dark:text-white/60 hover:text-pastel-yellow transition-colors" aria-label="LinkedIn Pedro">
                  💼
                </a>
                <a href="#" className="text-pastel-black/60 dark:text-white/60 hover:text-pastel-yellow transition-colors" aria-label="GitHub Pedro">
                  🐙
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Founders