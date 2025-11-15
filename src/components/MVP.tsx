import { motion } from 'framer-motion'

const MVP = () => {
  const highlights = [
    {
      icon: '🚀',
      title: 'Entrega em até 1 semana',
      description: 'MVP completo e funcional'
    },
    {
      icon: '💰',
      title: 'Parcelamento facilitado',
      description: 'Pagamento em até 12x'
    },
    {
      icon: '✅',
      title: 'Validação rápida de mercado',
      description: 'Teste sua ideia com usuários reais'
    },
    {
      icon: '🔄',
      title: 'Iterações ágeis',
      description: 'Ajustes rápidos baseados em feedback'
    },
  ]

  return (
    <section className="py-16 sm:py-20 bg-pastel-light-yellow/30 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative mx-auto w-full max-w-lg">
              {/* Phone mockup */}
            <div className="bg-pastel-black rounded-[2rem] p-4 shadow-2xl">
                <div className="bg-white dark:bg-gray-900 rounded-[1.5rem] h-96 flex items-center justify-center transition-colors">
                  <div className="text-center">
                    <div className="text-6xl mb-4 animate-bounce">🚀</div>
                    <div className="font-bold text-pastel-black dark:text-white text-xl mb-2">MVP</div>
                    <div className="text-sm text-pastel-black/60 dark:text-white/60">Pronto em 7 dias</div>
                    <div className="mt-4 flex space-x-2 justify-center">
                      <div className="w-2 h-2 bg-pastel-yellow rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-pastel-yellow/60 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-pastel-yellow/30 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="absolute -top-4 -right-4 bg-pastel-yellow rounded-lg shadow-lg p-3 animate-float"
              >
                <div className="text-xs font-semibold text-pastel-black">✅ Validado</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
                className="absolute -bottom-4 -left-4 bg-pastel-yellow rounded-lg shadow-lg p-3 animate-float"
                style={{ animationDelay: '1s' }}
              >
                <div className="text-xs font-semibold text-pastel-black">💰 12x</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-pastel-black dark:text-white mb-6 font-display">
              Da ideia ao mercado em 7 dias
            </h2>
            <p className="text-base sm:text-lg text-pastel-black/80 dark:text-white/80 mb-8 leading-relaxed">
              Tem uma ideia queimando na cabeça? A gente tira do papel antes que esfrie. MVP completo, testável e pronto para validar seu negócio. 
              Pagamento parcelado porque sabemos que startups precisam de fôlego.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="text-2xl">{highlight.icon}</div>
                  <div>
                    <h3 className="font-semibold text-pastel-black dark:text-white mb-1">{highlight.title}</h3>
                    <p className="text-sm text-pastel-black/70 dark:text-white/70">{highlight.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#contato"
              className="inline-block bg-pastel-yellow text-pastel-black px-8 py-4 rounded-lg font-semibold hover:bg-pastel-yellow/90 transition-all duration-300 hover:scale-105 btn-hover-effect"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Quero validar minha ideia
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default MVP