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
      title: "CEAP Brasil",
      description: "Página otimizada para apresentação de cursos, eventos e captação de inscritos.",
      category: "Institucional",
      image: "/bc26980ab4de0726dc4bb292f6fb3254.png",
      results: ["+300% inscritos nos eventos", "+90% leads qualificados", "Alta conversão da página"],
      testimonial: "O novo site elevou nossa taxa de conversão e deixou tudo muito mais profissional.",
      clientName: "Direção do CEAP Brasil"
    },
    {
      id: 2,
      title: "Projeto Cavalos-Marinhos",
      description: "Página informativa para apresentação do projeto, captação de apoiadores e divulgação científica.",
      category: "Projeto",
      image: "/c68e9dc1d220af2fb5358fe9bb30e787.png",
      results: ["+140% tráfego orgânico", "+280% novos interessados", "+95% engajamento"],
      testimonial: "A página trouxe muita visibilidade e credibilidade ao projeto. Ficou linda e funcional.",
      clientName: "Coordenação do Projeto Cavalos-Marinhos"
    },
    {
      id: 3,
      title: "Plataforma Legislativo",
      description: "Landing institucional focada na demonstração do sistema e captação de leads qualificados.",
      category: "SaaS",
      image: "/e9e225e8665a89311cc35fa071e62ab3.png",
      results: ["+210% solicitações de demo", "+85% conversão", "Leads mais qualificados"],
      testimonial: "A nova landing page trouxe muito mais leads qualificados e facilitou nossa prospecção.",
      clientName: "Coordenador da Plataforma Legislativo"
    },
    {
      id: 4,
      title: "Villa das Alamandas",
      description: "Landing para reservas diretas, apresentação do espaço e destaque da experiência premium.",
      category: "Hospedagem",
      image: "/9cb47ef2cd7d02cbd918ad9d8de8316a.png",
      results: ["+260% reservas diretas", "+92% consultas qualificadas", "Resposta mais rápida"],
      testimonial: "As reservas diretas aumentaram muito depois da nova página. Ficou exatamente como queríamos.",
      clientName: "Proprietária da Villa das Alamandas"
    },
    {
      id: 5,
      title: "Pregoeiros Summit",
      description: "Página de vendas para o maior evento de compras públicas do Brasil.",
      category: "Evento",
      image: "/eeeb53776dc7e8529526a32d8eea6ee2.png",
      results: ["+470% inscrições na pré-venda", "+90% conversão", "Mais previsibilidade"],
      testimonial: "O site ficou extremamente profissional e converteu muito acima da média. Entrega impecável.",
      clientName: "Organização do Pregoeiros Summit"
    },
    {
      id: 6,
      title: "SECOMP RJ",
      description: "Landing voltada para inscrições, programação e apresentação dos módulos do evento.",
      category: "Evento Acadêmico",
      image: "/Generated Image November 16, 2025 - 1_37PM.png",
      results: ["+310% inscrições", "+82% conversão", "Mais engajamento"],
      testimonial: "A página do SECOMP ficou incrível e ajudou muito na divulgação e nas inscrições.",
      clientName: "Equipe CEAP Brasil"
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
                      loading="lazy"
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
                      {clientProjects[currentIndex].results.map((result, index) => {
                        const m = /^([+\-]?\d+%?)(?:\s+(.*))?$/.exec(result)
                        const numberPart = m ? m[1] : ''
                        const textPart = m && m[2] ? m[2] : result
                        return (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                            className="bg-pastel-yellow/10 dark:bg-pastel-yellow/15 rounded-xl sm:rounded-2xl px-4 py-3 sm:px-5 sm:py-4 text-center flex flex-col items-center justify-center min-h-24 shadow-sm ring-1 ring-pastel-yellow/20"
                          >
                            {numberPart ? (
                              <>
                                <div className="text-pastel-yellow font-extrabold text-2xl sm:text-3xl leading-none mb-1">{numberPart}</div>
                                <div className="text-pastel-yellow/90 font-medium text-xs sm:text-sm">{textPart}</div>
                              </>
                            ) : (
                              <div className="text-pastel-yellow/90 font-medium text-sm">{textPart}</div>
                            )}
                          </motion.div>
                        )
                      })}
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