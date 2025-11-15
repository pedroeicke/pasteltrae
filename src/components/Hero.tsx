import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {

    // Animação do texto hero
    const tl = gsap.timeline()
    tl.fromTo('.hero-headline', 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    )
    .fromTo('.hero-subtext', 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
      "-=0.4"
    )
    .fromTo('.hero-cta', 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
      "-=0.2"
    )

    // Animação do contador
    const counter = { value: 0 }
    gsap.to(counter, {
      value: 1000,
      duration: 2,
      ease: "power2.out",
      onUpdate: function() {
        const counterElement = document.querySelector('.counter-number')
        if (counterElement) {
          counterElement.textContent = `+${Math.floor(counter.value)}`
        }
      }
    })
  }, [])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.substring(1)
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pastel-yellow/20 via-white to-white dark:from-pastel-yellow/10 dark:via-gray-900 dark:to-gray-900 transition-colors duration-300 scroll-mt-24" ref={heroRef}>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-pastel-yellow rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="hero-headline text-3xl sm:text-5xl lg:text-7xl font-bold text-pastel-black dark:text-white mb-6 font-display">
            Seu app feito na hora.
            <span className="block text-pastel-yellow">De verdade.</span>
          </h1>

          {/* Subtext */}
          <p className="hero-subtext text-base sm:text-xl lg:text-2xl text-pastel-black/80 dark:text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Aqui não é pastel, aqui é Pastel. Desenvolvimento ágil, entrega rápida, qualidade quentinha.
          </p>

          {/* CTAs */}
          <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <motion.a
              href="#contato"
              onClick={(e) => scrollToSection(e, '#contato')}
              className="bg-pastel-yellow text-pastel-black px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-pastel-yellow/90 transition-all duration-300 hover:scale-105 hover:shadow-xl btn-hover-effect"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Fazer meu pedido
            </motion.a>
            <motion.a
              href="#servicos"
              onClick={(e) => scrollToSection(e, '#servicos')}
              className="border-2 border-pastel-black dark:border-white text-pastel-black dark:text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-pastel-black hover:text-white dark:hover:bg-white dark:hover:text-pastel-black transition-all duration-300 btn-hover-effect"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver o cardápio
            </motion.a>
          </div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-8 justify-center items-center text-pastel-black/70 dark:text-white/70"
          >
            <div className="text-center">
              <div className="counter-number text-2xl font-bold text-pastel-yellow">+1000</div>
              <div className="text-sm">usuários ativos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-pastel-yellow">92</div>
              <div className="text-sm">NPS Score</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-pastel-yellow">5.2</div>
              <div className="text-sm">dias média de entrega</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-pastel-black/30 dark:border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-pastel-black/50 dark:bg-white/50 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero