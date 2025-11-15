const Footer = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.substring(1)
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-pastel-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-pastel-yellow rounded-lg flex items-center justify-center">
                <span className="text-pastel-black font-bold text-xl font-display">P</span>
              </div>
              <span className="font-bold text-xl font-display">Pastel</span>
            </div>
            <p className="text-white/70 mb-6 max-w-md">
              Seu app feito na hora. Desenvolvimento ágil, entrega rápida e qualidade quentinha.
            </p>
            <p className="text-white/60 text-sm">
              Feito com ❤️ (e muito café) pela Pastel
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Links rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#servicos" onClick={(e) => scrollToSection(e, '#servicos')} className="text-white/70 hover:text-pastel-yellow transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#como-funciona" onClick={(e) => scrollToSection(e, '#como-funciona')} className="text-white/70 hover:text-pastel-yellow transition-colors">
                  Como funciona
                </a>
              </li>
              <li>
                <a href="#depoimentos" onClick={(e) => scrollToSection(e, '#depoimentos')} className="text-white/70 hover:text-pastel-yellow transition-colors">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#faq" onClick={(e) => scrollToSection(e, '#faq')} className="text-white/70 hover:text-pastel-yellow transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#precos" onClick={(e) => scrollToSection(e, '#precos')} className="text-white/70 hover:text-pastel-yellow transition-colors">
                  Preços
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contato</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:ola@pastel.dev" className="text-white/70 hover:text-pastel-yellow transition-colors">
                  ola@pastel.dev
                </a>
              </li>
              <li>
                <a href="https://wa.me/5511999999999" className="text-white/70 hover:text-pastel-yellow transition-colors">
                  WhatsApp
                </a>
              </li>
            </ul>
            
            <div className="mt-6">
              <h4 className="font-medium mb-3">Redes sociais</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-white/70 hover:text-pastel-yellow transition-colors" aria-label="LinkedIn">
                  💼
                </a>
                <a href="#" className="text-white/70 hover:text-pastel-yellow transition-colors" aria-label="Instagram">
                  📸
                </a>
                <a href="#" className="text-white/70 hover:text-pastel-yellow transition-colors" aria-label="Twitter">
                  🐦
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            © 2024 Pastel. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-white/60 hover:text-pastel-yellow transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-white/60 hover:text-pastel-yellow transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer