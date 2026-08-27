'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/lib/LanguageContext'
import { Menu, X, Globe } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { locale, setLocale, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '#home', label: t.nav.home },
    { href: '#about', label: t.nav.about },
    { href: '#interviews', label: t.nav.interviews },
    { href: '#tournaments', label: t.nav.tournaments },
    { href: '#gallery', label: t.nav.gallery },
    { href: '#contact', label: t.nav.contact },
  ]

  const toggleLang = () => setLocale(locale === 'en' ? 'ru' : 'en')

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/80 backdrop-blur-xl shadow-lg shadow-burgundy-600/5'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2">
              <span className={`font-heading text-2xl font-bold tracking-wider ${
                scrolled ? 'text-burgundy-600' : 'text-white'
              }`}>
                Q-PLAY
              </span>
              <span className={`hidden sm:inline text-xs font-body tracking-widest uppercase ${
                scrolled ? 'text-charcoal/50' : 'text-white/50'
              }`}>
                ♟
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors duration-300 hover:text-burgundy-500 ${
                    scrolled ? 'text-charcoal/70' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              ))}
              
              {/* Language Toggle */}
              <button
                onClick={toggleLang}
                className={`flex items-center gap-1.5 text-sm font-semibold px-3 py-1.5 rounded-full border transition-all duration-300 ${
                  scrolled
                    ? 'border-burgundy-600/30 text-burgundy-600 hover:bg-burgundy-600 hover:text-white'
                    : 'border-white/30 text-white hover:bg-white/20'
                }`}
              >
                <Globe size={14} />
                {locale === 'en' ? 'RU' : 'EN'}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-3">
              <button
                onClick={toggleLang}
                className={`text-sm font-semibold px-2 py-1 rounded-full border ${
                  scrolled
                    ? 'border-burgundy-600/30 text-burgundy-600'
                    : 'border-white/30 text-white'
                }`}
              >
                {locale === 'en' ? 'RU' : 'EN'}
              </button>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={scrolled ? 'text-charcoal' : 'text-white'}
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-charcoal/95 backdrop-blur-xl pt-20"
          >
            <div className="flex flex-col items-center gap-6 p-8">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setMobileOpen(false)}
                  className="text-white text-2xl font-heading hover:text-burgundy-400 transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
