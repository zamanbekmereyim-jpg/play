'use client'

import { useLanguage } from '@/lib/LanguageContext'
import { Send, Instagram, Phone } from 'lucide-react'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-charcoal relative overflow-hidden">
      <div className="absolute inset-0 chess-pattern-dark" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo + tagline */}
          <div className="text-center md:text-left">
            <h3 className="font-heading text-3xl font-bold text-white mb-2">Q-PLAY</h3>
            <p className="text-white/40 text-sm">{t.footer.tagline}</p>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://t.me/qplay_chess"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="w-10 h-10 bg-white/10 hover:bg-burgundy-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <Send size={16} className="text-white" />
            </a>
            <a
              href="https://wa.me/77718511835"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-10 h-10 bg-white/10 hover:bg-emerald-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <Phone size={16} className="text-white" />
            </a>
            <a
              href="https://instagram.com/qplay.hq"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 bg-white/10 hover:bg-burgundy-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <Instagram size={16} className="text-white" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">{t.footer.rights}</p>
          <p className="text-white/30 text-sm">{t.footer.madeWith}</p>
        </div>
      </div>
    </footer>
  )
}
