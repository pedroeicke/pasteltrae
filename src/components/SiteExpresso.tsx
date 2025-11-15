import { motion } from 'framer-motion'

const SiteExpresso = () => {
  const features = [
    {
      icon: '⚡',
      title: 'Entrega em 24 horas',
      description: 'Seu site online no mesmo dia'
    },
    {
      icon: '🎯',
      title: 'Pronto para converter',
      description: 'Otimizado para captar leads desde o lançamento'
    },
    {
      icon: '💰',
      title: 'Preço especial',
      description: 'Solução econômica para quem precisa sair rápido'
    },
    {
      icon: '📱',
      title: 'Totalmente responsivo',
      description: 'Perfeito em desktop, tablet e mobile'
    },
  ]

  return (
    <section className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-pastel-yellow/20 dark:bg-pastel-yellow/10 rounded-full mb-6">
              <span className="text-pastel-yellow font-semibold text-sm">🚀 Lançamento Expresso</span>
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-bold text-pastel-black dark:text-white mb-6 font-display">
              Site Expresso
            </h2>
            <p className="text-base sm:text-lg text-pastel-black/80 dark:text-white/80 mb-8 leading-relaxed">
              Precisa de um site urgente? O Site Expresso é a solução perfeita para quem precisa estar online em 24 horas. 
              Com design profissional, copy persuasivo e otimização para conversão, seu site estará pronto para captar leads 
              enquanto a concorrência ainda está pensando em como começar.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-900 p-6 rounded-xl card-hover-effect shadow-sm"
                >
                  <div className="text-3xl mb-3">{feature.icon}</div>
                  <h3 className="font-semibold text-pastel-black dark:text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-pastel-black/70 dark:text-white/70">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#contato"
                className="inline-block bg-pastel-yellow text-pastel-black px-8 py-4 rounded-lg font-semibold hover:bg-pastel-yellow/90 transition-all duration-300 hover:scale-105 btn-hover-effect"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Quero meu site expresso
              </motion.a>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex items-center justify-center sm:justify-start space-x-2 text-pastel-black/60 dark:text-white/60"
              >
                <span className="text-2xl">⏰</span>
                <span className="text-sm font-medium">Disponível apenas 5 vagas por mês</span>
              </motion.div>
            </div>
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
              {/* Speed delivery indicator */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="absolute -top-6 -right-6 bg-pastel-yellow rounded-full p-4 shadow-lg animate-bounce"
              >
                <span className="text-2xl">🚀</span>
              </motion.div>

              {/* Website mockup */}
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl overflow-hidden">
                {/* Header */}
                <div className="bg-pastel-yellow p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="text-pastel-black font-semibold text-sm">seusite.com</div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-pastel-yellow/20 dark:bg-pastel-yellow/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <h3 className="font-bold text-pastel-black dark:text-white text-lg mb-2">Seu Negócio</h3>
                    <p className="text-sm text-pastel-black/60 dark:text-white/60 mb-4">Transformando visitantes em clientes</p>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
                    <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-4/5"></div>
                    <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    viewport={{ once: true }}
                    className="bg-pastel-yellow text-pastel-black py-3 px-6 rounded-lg font-semibold text-center"
                  >
                    Comece Agora
                  </motion.div>
                </div>
              </div>

              {/* Success metrics */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
                className="absolute -bottom-4 -left-4 bg-white dark:bg-white rounded-lg shadow-lg p-3"
              >
                <div className="text-xs font-semibold text-pastel-black mb-1">24h</div>
                <div className="text-xl text-pastel-black">✅</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default SiteExpresso