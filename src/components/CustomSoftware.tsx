import { motion } from 'framer-motion'

const CustomSoftware = () => {
  const projectTypes = [
    'Sistemas web personalizados',
    'Integrações e APIs',
    'Dashboards e painéis',
    'Automações de processos',
  ]

  return (
    <section className="py-20 bg-pastel-light-yellow/30 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-pastel-black dark:text-white mb-6 font-display">
              O sistema que você precisa, não o que existe
            </h2>
            <p className="text-lg text-pastel-black/80 dark:text-white/80 mb-8 leading-relaxed">
              Chega de adaptar seu negócio ao software. Desenvolvemos a solução exata para o seu problema. 
              Escalável, integrada e 100% sua.
            </p>

            <div className="space-y-4 mb-8">
              {projectTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-6 h-6 bg-pastel-yellow rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-pastel-black text-xs font-bold">✓</span>
                  </div>
                  <span className="text-pastel-black dark:text-white font-medium">{type}</span>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#contato"
              className="inline-block bg-pastel-yellow text-pastel-black px-8 py-4 rounded-lg font-semibold hover:bg-pastel-yellow/90 transition-all duration-300 hover:scale-105 btn-hover-effect"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Agendar reunião estratégica
            </motion.a>
          </motion.div>

          {/* Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-6 border border-pastel-yellow/20 transition-colors">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="text-sm font-semibold text-pastel-black">Dashboard Personalizado</div>
                <div className="w-8 h-8 bg-pastel-yellow rounded-lg"></div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-pastel-light-yellow/30 dark:bg-gray-800 p-4 rounded-lg transition-colors">
                  <div className="text-2xl font-bold text-pastel-black dark:text-white">2.847</div>
                  <div className="text-sm text-pastel-black/70 dark:text-white/70">Usuários Ativos</div>
                </div>
                <div className="bg-pastel-light-yellow/30 dark:bg-gray-800 p-4 rounded-lg transition-colors">
                  <div className="text-2xl font-bold text-pastel-black dark:text-white">R$ 125K</div>
                  <div className="text-sm text-pastel-black/70 dark:text-white/70">Receita Mensal</div>
                </div>
              </div>

              {/* Chart */}
              <div className="bg-gray-50 dark:bg-gray-800 h-32 rounded-lg flex items-end justify-center p-4 transition-colors">
                <div className="flex items-end space-x-2 h-full">
                  {[40, 65, 45, 80, 55, 90, 70].map((height, index) => (
                    <motion.div
                      key={index}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${height}%` }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-pastel-yellow w-6 rounded-t"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="absolute -top-4 -right-4 bg-white dark:bg-gray-900 rounded-lg shadow-lg p-3 animate-float transition-colors"
            >
              <div className="text-xs font-semibold text-pastel-black dark:text-white">100% Personalizado</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
              className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-900 rounded-lg shadow-lg p-3 animate-float transition-colors"
              style={{ animationDelay: '1s' }}
            >
              <div className="text-xs font-semibold text-pastel-black dark:text-white">Escalável</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CustomSoftware
