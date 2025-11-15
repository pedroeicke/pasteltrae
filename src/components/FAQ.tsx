import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'Quanto tempo leva para entregar um projeto?',
      answer: 'Depende do tipo de projeto. Landing pages são entregues em até 5 dias, MVPs em até 7 dias, e projetos personalizados variam de 2-4 semanas. Sempre trabalhamos com prazos reais e cumprimos o que prometemos.'
    },
    {
      question: 'Como funciona o processo de desenvolvimento?',
      answer: 'Começamos com uma reunião de briefing para entender suas necessidades. Depois, criamos o projeto com atualizações constantes. Você acompanha todo o processo e pode solicitar ajustes. Após aprovação, fazemos o deploy.'
    },
    {
      question: 'Vocês oferecem suporte após a entrega?',
      answer: 'Sim! Todos os projetos incluem suporte pós-lançamento. Landing pages têm 30 dias de suporte, MVPs têm 60 dias, e projetos personalizados incluem 90 dias. Também oferecemos planos de manutenção contínua.'
    },
    {
      question: 'Posso parcelar o pagamento?',
      answer: 'Sim! Oferecemos parcelamento em até 12x para MVPs e projetos personalizados. Para landing pages, aceitamos parcelamento em até 6x. Entendemos que investimento em tecnologia precisa ser acessível.'
    },
    {
      question: 'Vocês fazem alterações após a entrega?',
      answer: 'Sim, incluímos ajustes finais em todos os projetos. Landing pages incluem até 3 rodadas de alterações, MVPs até 5 rodadas, e projetos personalizados têm ajustes ilimitados dentro do escopo inicial.'
    },
    {
      question: 'Como é feita a hospedagem?',
      answer: 'Para landing pages, incluímos 1 ano de hospedagem gratuita. Para MVPs e projetos maiores, ajudamos a configurar na hospedagem de sua escolha ou indicamos as melhores opções. Sempre priorizamos performance e segurança.'
    }
  ]

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-16 sm:py-20 bg-white dark:bg-gray-900 transition-colors duration-300 scroll-mt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-pastel-black dark:text-white mb-4 font-display">
            Perguntas frequentes
          </h2>
          <p className="text-lg text-pastel-black/70 dark:text-white/70">
            Tire suas dúvidas sobre nossos serviços
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border border-pastel-yellow/20 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-pastel-light-yellow/10 dark:hover:bg-gray-800 transition-colors"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-semibold text-pastel-black dark:text-white">{faq.question}</span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-pastel-yellow text-xl"
                >
                  ▼
                </motion.span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    id={`faq-answer-${index}`}
                  >
                    <div className="px-6 pb-4">
                      <p className="text-pastel-black/80 dark:text-white/80 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-pastel-black/70 dark:text-white mb-6">
            Ainda tem dúvidas? Fale diretamente com a gente.
          </p>
          <motion.a
            href="#contato"
            className="inline-block bg-pastel-yellow text-pastel-black px-8 py-4 rounded-lg font-semibold hover:bg-pastel-yellow/90 transition-all duration-300 hover:scale-105 btn-hover-effect"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Entrar em contato
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ