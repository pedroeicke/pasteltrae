import { ThemeProvider } from './contexts/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Partners from './components/Partners'
import LandingPages from './components/LandingPages'
import SiteExpresso from './components/SiteExpresso'
import ClientCarousel from './components/ClientCarousel'
import MVP from './components/MVP'
import AIChatbots from './components/AIChatbots'
import CustomSoftware from './components/CustomSoftware'
import Founders from './components/Founders'
import Testimonials from './components/Testimonials'
import Process from './components/Process'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import Cursor from './components/Cursor'
import Particles from './components/Particles'

function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 overflow-x-hidden pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]">
        <Cursor />
        <Particles />
        <Navbar />
        <Hero />
        <Partners />
        <LandingPages />
        <SiteExpresso />
        <ClientCarousel />
        <MVP />
        <AIChatbots />
        <CustomSoftware />
        <Founders />
        <Testimonials />
        <Process />
        <Pricing />
        <FAQ />
        <FinalCTA />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App