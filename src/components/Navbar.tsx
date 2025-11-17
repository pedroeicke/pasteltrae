import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  const navItems = [
    { href: '#servicos', label: 'Serviços' },
    { href: '#depoimentos', label: 'Depoimentos' },
    { href: '#como-funciona', label: 'Como funciona' },
    { href: '#precos', label: 'Planos' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contato', label: 'Contato' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Scroll spy para seções ativas (ordem conforme a página)
      const sections = ['hero', 'servicos', 'depoimentos', 'como-funciona', 'precos', 'faq', 'contato']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.substring(1)
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <nav className={`fixed ${isScrolled ? 'top-2' : 'top-0'} left-0 right-0 z-50 transition-all duration-300 bg-transparent`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`${isScrolled ? 'mx-auto max-w-5xl rounded-full bg-white/70 dark:bg-gray-900/70 backdrop-blur-md shadow-lg border border-black/5 dark:border-white/10 px-4 sm:px-6 overflow-hidden' : ''} transition-all duration-300`}>
          <div className={`flex justify-between items-center ${isScrolled ? 'h-14 lg:h-16' : 'h-16 lg:h-20'}`}>
            {/* Logo */}
            <a href="#hero" onClick={(e) => scrollToSection(e, '#hero')} className="flex items-center space-x-3">
              <img src="/pastel-icon-1.png" alt="Pastel" className="h-8 w-8 object-contain" />
              <span className={`font-bold text-xl font-brand transition-colors text-pastel-black dark:text-white`}>
                Pastel
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className={`hidden lg:flex items-center ${isScrolled ? 'space-x-6' : 'space-x-8'}`}>
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`font-medium ${isScrolled ? 'text-sm' : ''} transition-colors hover:text-pastel-yellow dark:hover:text-pastel-yellow ${
                    activeSection === item.href.substring(1)
                      ? 'text-pastel-yellow'
                      : 'text-pastel-black dark:text-white hover:text-pastel-yellow'
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center space-x-4">
                <ThemeToggle />
                <a
                  href="#contato"
                  onClick={(e) => scrollToSection(e, '#contato')}
                  className={`bg-pastel-yellow text-pastel-black ${isScrolled ? 'px-5 py-2.5 rounded-full text-sm' : 'px-6 py-3 rounded-lg'} font-semibold hover:bg-pastel-yellow/90 transition-all duration-300 hover:scale-105 hover:shadow-lg`}
                >
                  Fazer meu pedido
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors text-pastel-black dark:text-white hover:bg-pastel-light-yellow`}
              aria-label="Menu mobile"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <span className={`block h-0.5 w-full transition-all duration-300 bg-pastel-black dark:bg-white ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`block h-0.5 w-full transition-all duration-300 bg-pastel-black dark:bg-white ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block h-0.5 w-full transition-all duration-300 bg-pastel-black dark:bg-white ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
              </div>
            </button>
          </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed top-0 right-0 h-full w-80 bg-white dark:bg-gray-900 shadow-2xl z-40 lg:hidden"
          >
            <div className="pt-20 px-6 space-y-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`block font-medium text-lg py-2 transition-colors ${
                    activeSection === item.href.substring(1)
                      ? 'text-pastel-yellow'
                      : 'text-pastel-black dark:text-white hover:text-pastel-yellow'
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-8">
                <div className="flex items-center justify-center mb-4">
                  <ThemeToggle />
                </div>
                <a
                  href="#contato"
                  onClick={(e) => scrollToSection(e, '#contato')}
                  className="block bg-pastel-yellow text-pastel-black px-6 py-4 rounded-lg font-semibold text-center hover:bg-pastel-yellow/90 transition-all duration-300"
                >
                  Fazer meu pedido
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 z-30 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar