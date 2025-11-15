import React, { useState } from 'react'
import { motion } from 'framer-motion'

const FinalCTA = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    tipoProjeto: '',
    mensagem: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        tipoProjeto: '',
        mensagem: ''
      })
    }, 3000)
  }

  const formatPhone = (value: string) => {
    const cleaned = value.replace(/\D/g, '')
    const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/)
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`
    }
    return value
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value)
    setFormData(prev => ({
      ...prev,
      telefone: formatted
    }))
  }

  return (
    <section id="contato" className="py-16 sm:py-20 bg-gradient-to-b from-pastel-yellow to-pastel-yellow/80 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-pastel-black mb-6 font-display">
            Pronto para fazer seu pedido?
          </h2>
          <p className="text-base sm:text-lg text-pastel-black/80 leading-relaxed">
            Não deixe sua ideia esfriar. Vamos transformar seu projeto em realidade ainda esta semana.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="rounded-3xl shadow-2xl overflow-hidden grid lg:grid-cols-2"
        >
          <div className="bg-pastel-black text-white p-6 sm:p-8 lg:p-10">
            <h3 className="text-2xl font-bold mb-6">Por que fazer seu pedido agora?</h3>
            <div className="space-y-5">
              <div className="flex items-start space-x-3">
                <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-pastel-black">⚡</div>
                <div>
                  <div className="font-semibold">Resposta em até 24h</div>
                  <div className="text-white/70 text-sm">Não deixamos você esperando. Resposta rápida e objetiva.</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-pastel-black">🤝</div>
                <div>
                  <div className="font-semibold">Orçamento sem compromisso</div>
                  <div className="text-white/70 text-sm">Receba uma proposta personalizada sem obrigação de contratar.</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-pastel-black">💡</div>
                <div>
                  <div className="font-semibold">Primeira consultoria grátis</div>
                  <div className="text-white/70 text-sm">Bate-papo de 30min para entender seu projeto e dar sugestões.</div>
                </div>
              </div>
            </div>
            <div className="my-8 border-t border-white/10"></div>
            <div>
              <div className="text-white/70 text-sm mb-3">Nossos clientes dizem:</div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-sm italic text-white/80">“Respondem super rápido e o atendimento é sensacional!”</div>
                <div className="text-xs mt-2 text-pastel-yellow">– Marina Costa, CEO FitTech</div>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 sm:p-8 lg:p-10 transition-colors">
          {isSubmitted ? (
            <div className="text-center py-12">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <span className="text-white text-3xl">✓</span>
              </motion.div>
              <h3 className="text-2xl font-bold text-pastel-black dark:text-white mb-2">Mensagem enviada!</h3>
              <p className="text-pastel-black/70 dark:text-white/70">Entraremos em contato em até 24 horas.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nome" className="block text-sm font-semibold text-pastel-black dark:text-white mb-2">
                    Nome completo *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pastel-yellow focus:border-transparent dark:bg-gray-800 dark:text-white"
                    placeholder="Seu nome"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-pastel-black dark:text-white mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pastel-yellow focus:border-transparent dark:bg-gray-800 dark:text-white"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="telefone" className="block text-sm font-semibold text-pastel-black dark:text-white mb-2">
                    Telefone com WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handlePhoneChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pastel-yellow focus:border-transparent dark:bg-gray-800 dark:text-white"
                    placeholder="(11) 99999-9999"
                    maxLength={15}
                  />
                </div>
                
                <div>
                  <label htmlFor="tipoProjeto" className="block text-sm font-semibold text-pastel-black dark:text-white mb-2">
                    Tipo de projeto *
                  </label>
                  <select
                    id="tipoProjeto"
                    name="tipoProjeto"
                    value={formData.tipoProjeto}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pastel-yellow focus:border-transparent dark:bg-gray-800 dark:text-white"
                  >
                    <option value="">Selecione...</option>
                    <option value="landing-page">Landing Page</option>
                    <option value="mvp">MVP</option>
                    <option value="ia-chatbot">IA/Chatbot</option>
                    <option value="software-sob-medida">Software sob medida</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="mensagem" className="block text-sm font-semibold text-pastel-black dark:text-white mb-2">
                  Conte um pouco sobre seu projeto
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pastel-yellow focus:border-transparent resize-none dark:bg-gray-800 dark:text-white"
                  placeholder="Descreva sua ideia, objetivos, prazo..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-pastel-yellow text-pastel-black py-4 rounded-lg font-semibold text-lg hover:bg-pastel-yellow/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed btn-hover-effect"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <span className="animate-spin mr-2">⏳</span>
                    Enviando...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">Quero meu orçamento agora <span className="ml-2">✈️</span></span>
                )}
              </motion.button>
            </form>
          )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FinalCTA