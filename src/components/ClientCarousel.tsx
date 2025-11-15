import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ClientProject {
  id: number
  title: string
  description: string
  category: string
  image: string
  results: string[]
  testimonial?: string
  clientName?: string
}

const ClientCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const clientProjects: ClientProject[] = [
    {
      id: 1,
      title: "E-commerce TechStore",
      description: "Loja online de eletrônicos com foco em conversão",
      category: "E-commerce",
      image: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Modern%20e-commerce%20website%20mockup%20with%20tech%20products%2C%20clean%20design%2C%20professional%20layout%2C%20high%20conversion%20focus&image_size=landscape_16_9",
      results: ["+180% conversão", "-45% bounce rate", "+220% vendas"],
      testimonial: "Resultado incrível! Nossa conversão dobrou em 2 meses.",
      clientName: "Carlos Silva - TechStore"
    },
    {
      id: 2,
      title: "Consultoria Financeira Pro",
      description: "Landing page para captura de leads qualificados",
      category: "Serviços",
      image: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Professional%20financial%20consulting%20landing%20page%20mockup%2C%20trustworthy%20design%2C%20lead%20generation%20focused%2C%20clean%20corporate%20style&image_size=landscape_16_9",
      results: ["+250% leads", "CPL -60%", "+95% qualificação"],
      testimonial: "Leads de alta qualidade e custo por lead reduzido pela metade!",
      clientName: "Marina Santos - Consultora Financeira"
    },
    {
      id: 3,
      title: "Academia FitPower",
      description: "Página de vendas para planos de academia",
      category: "Fitness",
      image: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Fitness%20gym%20landing%20page%20mockup%2C%20energetic%20design%2C%20subscription%20plans%2C%20motivational%20layout%2C%20modern%20fitness%20branding&image_size=landscape_16_9",
      results: ["+150% matrículas", "+80% retenção", "ROI 300%"],
      testimonial: "Nossa academia nunca teve tantas matrículas!",
      clientName: "João Pedro - FitPower Academy"
    },
    {
      id: 4,
      title: "Imobiliária CasaVerde",
      description: "Site de captura para corretores de imóveis",
      category: "Imobiliário",
      image: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Real%20estate%20landing%20page%20mockup%2C%20property%20showcase%2C%20professional%20real%20estate%20design%2C%20lead%20capture%20focused%2C%20trustworthy%20layout&image_size=landscape_16_9",
      results: ["+200% contatos", "+120% vendas", "Tempo -40%"],
      testimonial: "Vendemos propriedades 40% mais rápido!",
      clientName: "Ana Costa - CasaVerde Imóveis"
    },
    {
      id: 5,
      title: "Restaurante SaborChef",
      description: "Landing page para delivery e reservas",
      category: "Food & Beverage",
      image: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Restaurant%20landing%20page%20mockup%2C%20food%20delivery%20focused%2C%20appetizing%20design%2C%20online%20ordering%20system%2C%20modern%20culinary%20branding&image_size=landscape_16_9",
      results: ["+175% delivery", "+90% reservas", "+130% faturamento"],
      testimonial: "Nosso delivery explodiu! Melhor investimento do ano.",
      clientName: "Chef Roberto - SaborChef"
    }
  ]

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === clientProjects.length - 1 ? 0 : prevIndex + 1
        )
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isAutoPlaying, clientProjects.length])

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? clientProjects.length - 1 : currentIndex - 1)
  }

  const goToNext = () => {
    setCurrentIndex(currentIndex === clientProjects.length - 1 ? 0 : currentIndex + 1)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section className="py-16 sm:py-20 bg-white dark:bg-gray-900 transition-colors duration-300 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-pastel-black dark:text-white mb-4 font-display">
            Landing Pages que Transformam
          </h2>
          <p className="text-base sm:text-lg text-pastel-black/80 dark:text-white/80 max-w-3xl mx-auto">
            Conheça alguns dos nossos clientes e veja como suas landing pages revolucionaram seus resultados
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Main carousel container */}
          <div className="relative overflow-hidden rounded-2xl bg-gray-50 dark:bg-gray-800 shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="grid lg:grid-cols-2 gap-6 sm:gap-8 p-6 sm:p-8 lg:p-12"
              >
                {/* Project Image */}
                <div className="relative">
                  <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg">
                    <img
                      src={clientProjects[currentIndex].image}
                      alt={clientProjects[currentIndex].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-pastel-yellow text-pastel-black px-3 py-1 rounded-full text-sm font-semibold">
                        {clientProjects[currentIndex].category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Floating metrics */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="absolute -top-4 -right-4 bg-pastel-yellow rounded-lg shadow-lg p-4"
                  >
                    <div className="text-xs font-semibold text-pastel-black mb-1">Resultados</div>
                    <div className="text-2xl text-pastel-black">📈</div>
                  </motion.div>
                </div>

                {/* Project Details */}
                <div className="flex flex-col justify-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <h3 className="text-2xl lg:text-3xl font-bold text-pastel-black dark:text-white mb-3">
                      {clientProjects[currentIndex].title}
                    </h3>
                    <p className="text-pastel-black/80 dark:text-white/80 mb-6 leading-relaxed">
                      {clientProjects[currentIndex].description}
                    </p>
                  </motion.div>

                  {/* Results */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mb-6"
                  >
                    <h4 className="font-semibold text-pastel-black dark:text-white mb-3">Resultados Alcançados:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {clientProjects[currentIndex].results.map((result, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                          className="bg-pastel-yellow/10 dark:bg-pastel-yellow/20 rounded-lg p-3 text-center"
                        >
                          <div className="font-bold text-pastel-yellow text-lg">{result}</div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Testimonial */}
                  {clientProjects[currentIndex].testimonial && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-4"
                    >
                      <p className="text-sm text-pastel-black/80 dark:text-white/80 italic mb-2">
                        "{clientProjects[currentIndex].testimonial}"
                      </p>
                      <p className="text-xs font-semibold text-pastel-yellow">
                        {clientProjects[currentIndex].clientName}
                      </p>
                    </motion.div>
                  )}

                  {/* CTA */}
                  <motion.a
                    href="#contato"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="inline-flex items-center justify-center bg-pastel-yellow text-pastel-black px-6 py-3 rounded-lg font-semibold hover:bg-pastel-yellow/90 transition-all duration-300 hover:scale-105"
                  >
                    Quero resultados como esse
                  </motion.a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-900 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            aria-label="Projeto anterior"
          >
            <svg className="w-6 h-6 text-pastel-black dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-900 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            aria-label="Próximo projeto"
          >
            <svg className="w-6 h-6 text-pastel-black dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Auto-play toggle */}
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="absolute top-4 right-4 bg-white dark:bg-gray-900 rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300"
            aria-label={isAutoPlaying ? "Pausar autoplay" : "Iniciar autoplay"}
          >
            {isAutoPlaying ? (
              <svg className="w-4 h-4 text-pastel-black dark:text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
              </svg>
            ) : (
              <svg className="w-4 h-4 text-pastel-black dark:text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {clientProjects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-pastel-yellow scale-125'
                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
              }`}
              aria-label={`Ir para projeto ${index + 1}`}
            />
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-pastel-yellow mb-2">+500%</div>
              <div className="text-sm text-pastel-black/70 dark:text-white/70">Conversão média</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pastel-yellow mb-2">127</div>
              <div className="text-sm text-pastel-black/70 dark:text-white/70">Clientes satisfeitos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pastel-yellow mb-2">92</div>
              <div className="text-sm text-pastel-black/70 dark:text-white/70">NPS Score</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pastel-yellow mb-2">5.2</div>
              <div className="text-sm text-pastel-black/70 dark:text-white/70">Dias média de entrega</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ClientCarousel