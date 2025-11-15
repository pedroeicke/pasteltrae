import { motion } from 'framer-motion'

const Pricing = () => {
  const plans = [
    {
      name: 'Landing Page',
      price: 'R$ 2.497',
      description: 'A vitrine que vende 24/7',
      features: [
        'Design responsivo',
        'Otimização SEO',
        'Copy persuasivo',
        'Formulário de captura',
        'Hospedagem 1 ano',
        'Entrega em 5 dias'
      ],
      popular: false
    },
    {
      name: 'MVP Rápido',
      price: 'R$ 4.997',
      description: 'Da ideia ao mercado em 7 dias',
      features: [
        'Aplicativo web completo',
        'Banco de dados',
        'Painel administrativo',
        'Autenticação de usuários',
        'Integração com pagamento',
        'Suporte 30 dias'
      ],
      popular: true
    },
    {
      name: 'IA & Chatbot',
      price: 'R$ 1.997',
      description: 'Atendimento 24/7 automático',
      features: [
        'Chatbot inteligente',
        'Treinamento personalizado',
        'Integração WhatsApp',
        'Análise de sentimentos',
        'Relatórios completos',
        'Atualizações mensais'
      ],
      popular: false
    },
    {
      name: 'Software Sob Medida',
      price: 'A partir de R$ 9.997',
      description: 'O sistema que você precisa',
      features: [
        'Reunião de briefing',
        'Arquitetura personalizada',
        'Desenvolvimento full-stack',
        'Integrações específicas',
        'Documentação completa',
        'Suporte dedicado'
      ],
      popular: false
    }
  ]

  return (
    <section id="precos" className="py-16 sm:py-20 bg-pastel-light-yellow/30 dark:bg-gray-800 transition-colors duration-300 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-pastel-black dark:text-white mb-4 font-display">
            Escolha seu sabor
          </h2>
          <p className="text-lg text-pastel-black/70 dark:text-white/70">
            Planos transparentes com entrega garantida
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg card-hover-effect transition-colors ${
                plan.popular ? 'ring-2 ring-pastel-yellow transform scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-pastel-yellow text-pastel-black px-3 py-1 rounded-full text-sm font-semibold">
                    Mais Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-pastel-black dark:text-white mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-pastel-yellow mb-1">{plan.price}</div>
                <p className="text-pastel-black/70 dark:text-white/70 text-sm">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2">
                    <span className="text-pastel-yellow">✓</span>
                    <span className="text-pastel-black/80 dark:text-white/80 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.a
                href="#contato"
                className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-pastel-yellow text-pastel-black hover:bg-pastel-yellow/90'
                    : 'border-2 border-pastel-yellow text-pastel-black dark:text-white hover:bg-pastel-yellow hover:text-pastel-black dark:hover:bg-pastel-yellow dark:hover:text-pastel-black'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Escolher este plano
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-pastel-black/70 dark:text-white/70 mb-6">
            Não encontrou o que procura? Vamos criar um plano personalizado para você.
          </p>
          <motion.a
            href="#contato"
            className="inline-block bg-pastel-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-pastel-black/90 transition-all duration-300 hover:scale-105 btn-hover-effect"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Falar com especialista
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing