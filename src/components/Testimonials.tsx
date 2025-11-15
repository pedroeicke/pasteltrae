import { motion } from 'framer-motion'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Ana Silva',
      company: 'TechStart',
      avatar: '👩‍💼',
      testimonial: 'A Pastel entregou nosso MVP em 5 dias! Qualidade impressionante e equipe super atenciosa. Recomendo demais!',
      rating: 5
    },
    {
      name: 'Carlos Oliveira',
      company: 'E-commerce Plus',
      avatar: '👨‍💻',
      testimonial: 'Landing page que converteu 3x mais que a anterior. A equipe entendeu perfeitamente nossas necessidades.',
      rating: 5
    },
    {
      name: 'Mariana Santos',
      company: 'ServiceApp',
      avatar: '👩‍🚀',
      testimonial: 'O chatbot de IA revolucionou nosso atendimento. Suporte 24/7 e nossos clientes adoraram!',
      rating: 5
    },
    {
      name: 'Rafael Costa',
      company: 'DataDrive',
      avatar: '👨‍💼',
      testimonial: 'Sistema sob medida que superou expectativas. Entrega rápida, código limpo e excelente comunicação.',
      rating: 5
    },
  ]

  return (
    <section id="depoimentos" className="py-16 sm:py-20 bg-pastel-light-yellow/30 dark:bg-gray-800 transition-colors duration-300 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-pastel-black dark:text-white mb-4 font-display">
            Quem já provou, recomenda
          </h2>
          <p className="text-lg text-pastel-black/70 dark:text-white/70">
            Histórias reais de clientes que aceleraram seus negócios
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg card-hover-effect transition-colors"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-pastel-yellow rounded-full flex items-center justify-center text-xl mr-3">
                  {testimonial.avatar}
                </div>
                <div>
                  <h3 className="font-semibold text-pastel-black dark:text-white">{testimonial.name}</h3>
                  <p className="text-sm text-pastel-black/60 dark:text-white/60">{testimonial.company}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-pastel-yellow text-lg">⭐</span>
                ))}
              </div>
              
              <p className="text-pastel-black/80 dark:text-white/80 italic leading-relaxed">
                "{testimonial.testimonial}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials