import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Fish, 
  Search, 
  Sparkles, 
  BookOpen,
  AlertTriangle,
  Zap,
  ChevronRight,
  X,
  Menu,
  Apple,
  Star,
  Check
} from 'lucide-react'

// ============================================
// COMPONENTS
// ============================================

const ReefScanLogo = ({ className }: { className?: string }) => (
  <img src="/rs-icon.png" alt="ReefScan" className={className} />
)

// Navigation
const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-xl shadow-sm border-b border-ocean-100' : ''
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#" className="flex items-center gap-3">
            <ReefScanLogo className="w-10 h-10 rounded-xl shadow-md" />
            <span className="font-display font-bold text-xl text-ocean-900">ReefScan</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-slate-600 hover:text-ocean-600 transition-colors">Features</a>
            <a href="#screenshots" className="text-sm text-slate-600 hover:text-ocean-600 transition-colors">Screenshots</a>
            <a href="#download" className="text-sm text-slate-600 hover:text-ocean-600 transition-colors">Download</a>
          </div>

          <a 
            href="#download"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-ocean-600 to-ocean-500 text-white font-semibold text-sm shadow-lg shadow-ocean-500/25 hover:shadow-ocean-500/40 transition-all hover:scale-105"
          >
            <Apple className="w-4 h-4" />
            Download
          </a>

          <button
            className="md:hidden p-2 text-slate-600 hover:text-ocean-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-ocean-100"
          >
            <div className="px-4 py-6 space-y-4">
              <a href="#features" className="block py-2 text-slate-700" onClick={() => setMobileMenuOpen(false)}>Features</a>
              <a href="#screenshots" className="block py-2 text-slate-700" onClick={() => setMobileMenuOpen(false)}>Screenshots</a>
              <a 
                href="#download" 
                className="block w-full text-center py-3 rounded-xl bg-gradient-to-r from-ocean-600 to-ocean-500 text-white font-semibold"
                onClick={() => setMobileMenuOpen(false)}
              >
                Download Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

// Hero Section
const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0)
  const images = ['/rs-home.jpg', '/rs-scan.jpg', '/rs-scan1.jpg', '/rs-tanks.jpg']

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden hero-gradient">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-ocean-200/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-ocean-100/40 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-grid opacity-50" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ocean-100 border border-ocean-200 text-ocean-700 text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4" />
              AI-Powered Reef Intelligence
            </motion.div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="block text-slate-900">Beyond the</span>
              <span className="text-gradient-ocean">Glass.</span>
            </h1>

            <p className="text-lg text-slate-600 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Instantly identify fish, corals, pests, and problems in your reef aquarium. 
              Get AI-powered solutions to keep your reef thriving.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <a 
                href="#download"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-ocean-600 to-ocean-500 text-white font-bold text-lg shadow-lg shadow-ocean-500/25 hover:shadow-ocean-500/40 transition-all hover:scale-105"
              >
                <Apple className="w-5 h-5" />
                Download Free
              </a>
              <a 
                href="#features"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-ocean-200 text-ocean-700 font-semibold hover:bg-ocean-50 transition-all"
              >
                Learn More
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            {/* Social Proof */}
            <div className="flex items-center justify-center lg:justify-start gap-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <span className="text-slate-500 text-sm">
                <span className="text-slate-800 font-semibold">4.9</span> • Loved by reefers
              </span>
            </div>
          </motion.div>

          {/* Phone Mockup */}
          <motion.div 
            className="hidden lg:flex justify-center"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="phone-mockup relative">
              <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-ocean-300/30 rounded-full blur-[80px]" />
              </div>
              
              <div className="phone-screen">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={images[currentImage]}
                    src={images[currentImage]}
                    alt="ReefScan Screenshot"
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-ocean-300 rounded-full flex justify-center pt-2">
          <motion.div 
            className="w-1.5 h-1.5 bg-ocean-500 rounded-full"
            animate={{ y: [0, 12, 0], opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}

// Features Section
const features = [
  {
    icon: Fish,
    title: 'Fish & Coral ID',
    description: 'Instantly identify species with our AI-powered scanner. Get care requirements and compatibility info.',
    color: 'text-ocean-600',
    bg: 'bg-ocean-100 border-ocean-200',
  },
  {
    icon: AlertTriangle,
    title: 'Pest Detection',
    description: 'Spot harmful pests and parasites before they damage your reef. Early detection saves lives.',
    color: 'text-rose-600',
    bg: 'bg-rose-100 border-rose-200',
  },
  {
    icon: BookOpen,
    title: 'Care Guides',
    description: 'Detailed care guides for every species. Feeding, lighting, flow, and compatibility all covered.',
    color: 'text-amber-600',
    bg: 'bg-amber-100 border-amber-200',
  },
  {
    icon: Zap,
    title: 'Problem Solver',
    description: 'Diagnose issues and get actionable solutions. From algae outbreaks to coral bleaching.',
    color: 'text-violet-600',
    bg: 'bg-violet-100 border-violet-200',
  },
]

const FeaturesSection = () => (
  <section id="features" className="py-20 lg:py-32 relative section-alt">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ocean-100 border border-ocean-200 text-ocean-700 text-sm font-medium mb-4">
          <Search className="w-4 h-4" />
          Powerful Features
        </span>
        <h2 className="font-display text-3xl lg:text-5xl font-bold mb-4 text-slate-900">
          Everything You Need to
          <br />
          <span className="text-gradient-ocean">Master Your Reef</span>
        </h2>
        <p className="text-slate-600 max-w-xl mx-auto text-lg">
          ReefScan puts marine biologist knowledge right in your pocket.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="feature-card glass rounded-2xl p-6 lg:p-8 h-full">
              <div className={`w-14 h-14 rounded-xl ${feature.bg} border flex items-center justify-center mb-5`}>
                <feature.icon className={`w-7 h-7 ${feature.color}`} />
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

// Screenshots Section
const ScreenshotsSection = () => {
  const screenshots = [
    { src: '/rs-home.jpg', label: 'My Tanks' },
    { src: '/rs-scan.jpg', label: 'Scan' },
    { src: '/rs-scan1.jpg', label: 'Results' },
    { src: '/rs-scan2.jpg', label: 'Details' },
    { src: '/rs-tanks.jpg', label: 'Gallery' },
  ]

  return (
    <section id="screenshots" className="py-20 lg:py-32 relative overflow-hidden bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4 text-slate-900">
            See It In <span className="text-gradient-ocean">Action</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {screenshots.map((shot, index) => (
            <motion.div
              key={shot.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="aspect-[9/19.5] rounded-2xl overflow-hidden border border-ocean-200 shadow-lg group-hover:border-ocean-400 group-hover:shadow-xl group-hover:shadow-ocean-500/10 transition-all">
                <img 
                  src={shot.src} 
                  alt={shot.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-center text-sm text-slate-500 mt-3 font-medium">{shot.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Download Section
const DownloadSection = () => (
  <section id="download" className="py-20 lg:py-32 section-alt">
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="glass rounded-3xl p-8 lg:p-16 text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-ocean-200/50 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10">
          <ReefScanLogo className="w-20 h-20 rounded-2xl mx-auto mb-6 shadow-xl" />
          
          <h2 className="font-display text-3xl lg:text-5xl font-bold mb-4 text-slate-900">
            Start Scanning <span className="text-gradient-ocean">Today</span>
          </h2>
          
          <p className="text-slate-600 text-lg mb-8 max-w-md mx-auto">
            Join thousands of reef enthusiasts who trust ReefScan for their aquarium care.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a 
              href="#"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-ocean-600 to-ocean-500 text-white font-bold text-lg shadow-lg shadow-ocean-500/25 hover:shadow-ocean-500/40 transition-all hover:scale-105"
            >
              <Apple className="w-6 h-6" />
              Download on App Store
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-ocean-500" />
              Free to download
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-ocean-500" />
              No account required
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-ocean-500" />
              Works offline
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
)

// Footer
const Footer = () => (
  <footer className="border-t border-ocean-100 py-12 bg-white">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <ReefScanLogo className="w-8 h-8 rounded-lg shadow-sm" />
          <span className="font-display font-bold text-ocean-900">ReefScan</span>
        </div>
        
        <div className="flex items-center gap-6 text-sm text-slate-500">
          <a href="#" className="hover:text-ocean-600 transition-colors">Privacy</a>
          <a href="#" className="hover:text-ocean-600 transition-colors">Terms</a>
          <a href="#" className="hover:text-ocean-600 transition-colors">Support</a>
        </div>
        
        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} BitCraft. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
)

// ============================================
// MAIN APP
// ============================================
export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <ScreenshotsSection />
      <DownloadSection />
      <Footer />
    </div>
  )
}
