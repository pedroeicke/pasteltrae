import { motion } from 'framer-motion'

const AIChatbots = () => {
  const metrics = [
    { value: '24/7', label: 'Atendimento' },
    { value: '3s', label: 'Tempo de resposta' },
    { value: '85%', label: 'Taxa de resolução' },
    { value: '+40%', label: 'Aumento conversão' },
  ]

  const successCases = [
    {
      company: 'TechStore',
      metric: '+127%',
      description: 'Aumento em vendas com IA'
    },
    {
      company: 'ServiceNow',
      metric: '92%',
      description: 'Satisfação do cliente'
    },
    {
      company: 'FoodDelivery',
      metric: '-60%',
      description: 'Redução em custos de suporte'
    },
  ]

  return (
    <section className="py-16 sm:py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
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
              IA que vende enquanto você escala
            </h2>
            <p className="text-base sm:text-lg text-pastel-black/80 dark:text-white/80 mb-8 leading-relaxed">
              Atendimento 24/7, respostas instantâneas, conversão automática. Seus concorrentes ainda deixam clientes esperando? 
              Você não. Cada segundo conta, e cada conversa pode virar venda.
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center bg-pastel-light-yellow/30 dark:bg-gray-800 p-4 rounded-lg transition-colors"
                >
                <div className="text-2xl font-bold text-pastel-yellow mb-1">{metric.value}</div>
                <div className="text-sm text-pastel-black/70 dark:text-white/70">{metric.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Success Cases */}
            <div className="space-y-4 mb-8">
              {successCases.map((case_, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-between bg-white dark:bg-gray-900 border border-pastel-yellow/20 p-4 rounded-lg card-hover-effect transition-colors"
                >
                  <div>
                    <div className="font-semibold text-pastel-black dark:text-white">{case_.company}</div>
                    <div className="text-sm text-pastel-black/70 dark:text-white/70">{case_.description}</div>
                  </div>
                  <div className="text-2xl font-bold text-pastel-yellow">{case_.metric}</div>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#contato"
              className="inline-block bg-pastel-yellow text-pastel-black px-8 py-4 rounded-lg font-semibold hover:bg-pastel-yellow/90 transition-all duration-300 hover:scale-105 btn-hover-effect"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Automatizar atendimento
            </motion.a>
          </motion.div>

          {/* Chat Demo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-6 border border-pastel-yellow/20 transition-colors">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-pastel-yellow rounded-full flex items-center justify-center mr-3">
                  <span className="text-pastel-black font-bold">🤖</span>
                </div>
                <div>
                  <div className="font-semibold text-pastel-black dark:text-white">Assistente IA</div>
                  <div className="text-sm text-green-500 flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                    Online
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="bg-pastel-light-yellow/30 dark:bg-gray-800 p-3 rounded-lg max-w-xs animate-fade-in">
                  <p className="text-sm text-pastel-black dark:text-white">Olá! Como posso ajudar você hoje?</p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg max-w-xs ml-auto animate-fade-in" style={{ animationDelay: '0.5s' }}>
                  <p className="text-sm text-pastel-black dark:text-white">Quero saber mais sobre os planos</p>
                </div>
                <div className="bg-pastel-light-yellow/30 dark:bg-gray-800 p-3 rounded-lg max-w-xs animate-fade-in" style={{ animationDelay: '1s' }}>
                  <p className="text-sm text-pastel-black dark:text-white">Ótimo! Temos planos a partir de R$ 97/mês. Posso te mostrar?</p>
                </div>
              </div>

              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Digite sua mensagem..."
                  className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pastel-yellow dark:bg-gray-800 dark:text-white"
                  disabled
                />
                <button className="bg-pastel-yellow text-pastel-black px-4 py-2 rounded-lg font-medium hover:bg-pastel-yellow/90 transition-colors">
                  Enviar
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AIChatbots