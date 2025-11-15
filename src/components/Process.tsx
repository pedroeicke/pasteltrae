import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const Process = () => {
  const steps = [
    {
      icon: '🍽️',
      title: 'Você faz o pedido',
      description: 'Reunião de briefing para entender suas necessidades'
    },
    {
      icon: '👨‍🍳',
      title: 'A gente cozinha',
      description: 'Desenvolvimento ágil com atualizações constantes'
    },
    {
      icon: '🔥',
      title: 'Sai quentinho',
      description: 'Entrega e deploy com tudo funcionando perfeitamente'
    },
    {
      icon: '😋',
      title: 'Você aprova',
      description: 'Ajustes finais e satisfação garantida'
    },
  ]

  return (
    <section id="como-funciona" className="py-16 sm:py-20 bg-white dark:bg-gray-900 transition-colors duration-300 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-pastel-black dark:text-white mb-4 font-display">
            Do pedido ao prato: nosso processo
          </h2>
          <p className="text-base sm:text-lg text-pastel-black/70 dark:text-white/70">
            Simples, rápido e transparente
          </p>
        </motion.div>
        <ProcessTimeline steps={steps} />

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            href="#contato"
            className="inline-block bg-pastel-yellow text-pastel-black px-8 py-4 rounded-lg font-semibold hover:bg-pastel-yellow/90 transition-all duration-300 hover:scale-105 btn-hover-effect"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Começar meu projeto agora
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Process

const ProcessTimeline = ({ steps }: { steps: { icon: string; title: string; description: string }[] }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)
  const [activeIndex, setActiveIndex] = useState(0)
  const [visible, setVisible] = useState(false)
  const rafId = useRef<number | null>(null)
  const startRef = useRef<number | null>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting)
    }, { threshold: 0.3 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const duration = 5000
    const animate = (now: number) => {
      if (startRef.current === null) startRef.current = now
      const elapsed = (now - startRef.current) % duration
      const t = elapsed / duration
      setProgress(t)
      const idx = Math.min(steps.length - 1, Math.floor(t * steps.length))
      setActiveIndex(idx)
      rafId.current = requestAnimationFrame(animate)
    }
    if (visible) {
      startRef.current = null
      rafId.current = requestAnimationFrame(animate)
    } else if (rafId.current !== null) {
      cancelAnimationFrame(rafId.current)
      rafId.current = null
    }
    return () => {
      if (rafId.current !== null) cancelAnimationFrame(rafId.current)
    }
  }, [visible, steps.length])

  return (
    <div ref={containerRef} className="relative">
      <div className="hidden lg:block absolute top-10 left-0 right-0 h-0.5 bg-pastel-yellow/20"></div>
      <div
        className="hidden lg:block absolute top-10 left-0 h-0.5"
        style={{ width: `${progress * 100}%`, background: 'linear-gradient(to right, rgba(255,215,0,0), #FFD700)' }}
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {steps.map((step, index) => (
          <div key={index} className="text-center group">
            <div className="relative mb-6">
              <motion.div
                animate={{ scale: activeIndex === index ? 1.18 : 1, y: activeIndex === index ? -8 : 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="w-20 h-20 bg-pastel-yellow rounded-full mx-auto flex items-center justify-center text-3xl group-hover:shadow-lg"
              >
                {step.icon}
              </motion.div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-pastel-black text-white text-sm font-bold px-3 py-1 rounded-full">
                {index + 1}
              </div>
            </div>
            <h3 className="text-xl font-bold text-pastel-black dark:text-white mb-3 group-hover:text-pastel-yellow transition-colors">
              {step.title}
            </h3>
            <p className="text-pastel-black/70 dark:text-white/70 leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}