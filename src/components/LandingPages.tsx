import { motion } from 'framer-motion'

const LandingPages = () => {
  const benefits = [
    {
      icon: '⚡',
      title: 'Carregamento ultrarrápido',
      description: 'Otimização extrema para performance máxima'
    },
    {
      icon: '🎯',
      title: 'Otimizada para conversão',
      description: 'Design estratégico para maximizar vendas'
    },
    {
      icon: '📱',
      title: 'Responsiva e mobile-first',
      description: 'Perfeita em qualquer dispositivo'
    },
    {
      icon: '🔍',
      title: 'SEO que coloca você no topo',
      description: 'Técnicas avançadas de otimização'
    },
  ]

  return (
    <section id="servicos" className="py-16 sm:py-20 bg-white dark:bg-gray-900 transition-colors duration-300 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-pastel-black dark:text-white mb-6 font-display">
              A vitrine que vende 24/7
            </h2>
            <p className="text-lg text-pastel-black/80 dark:text-white/80 mb-8 leading-relaxed">
              Enquanto você dorme, sua landing page trabalha. Design irresistível, copy persuasivo e otimização para conversão. 
              Não é só bonito, é uma máquina de vendas.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-pastel-light-yellow/30 dark:bg-gray-800 p-6 rounded-xl card-hover-effect transition-colors"
                >
                <div className="text-3xl mb-3">{benefit.icon}</div>
                <h3 className="font-semibold text-pastel-black dark:text-white mb-2">{benefit.title}</h3>
                <p className="text-sm text-pastel-black/70 dark:text-white/70">{benefit.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#contato"
              className="inline-block bg-pastel-yellow text-pastel-black px-8 py-4 rounded-lg font-semibold hover:bg-pastel-yellow/90 transition-all duration-300 hover:scale-105 btn-hover-effect"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Quero minha landing page
            </motion.a>
          </motion.div>

          {/* Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative mx-auto w-full max-w-md">
              {/* Device frames */}
              <div className="relative">
                {/* Laptop */}
              <div className="bg-pastel-black rounded-t-lg p-2">
                  <div className="bg-white dark:bg-gray-900 rounded h-48 flex items-center justify-center transition-colors">
                      <div className="text-center">
                      <div className="text-4xl mb-2">🚀</div>
                      <div className="font-bold text-pastel-black dark:text-white">Landing Page</div>
                      <div className="text-sm text-pastel-black/60 dark:text-white/60">Conversão: 42%</div>
                      </div>
                  </div>
                </div>
                <div className="bg-pastel-black h-4 rounded-b-lg"></div>
              </div>

              {/* Floating metrics */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="absolute -top-4 -right-4 bg-pastel-yellow rounded-lg shadow-lg p-3 animate-float"
              >
                <div className="text-xs font-semibold text-pastel-black">+127% conversão</div>
                <div className="text-2xl text-pastel-black">📈</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
                className="absolute -bottom-4 -left-4 bg-pastel-yellow rounded-lg shadow-lg p-3 animate-float"
                style={{ animationDelay: '1s' }}
              >
                <div className="text-xs font-semibold text-pastel-black">Tempo: 3s</div>
                <div className="text-2xl text-pastel-black">⚡</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default LandingPages