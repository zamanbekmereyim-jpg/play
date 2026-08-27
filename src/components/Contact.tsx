'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/LanguageContext'
import AnimatedSection from './AnimatedSection'
import { Send, Instagram, MessageCircle } from 'lucide-react'

export default function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 chess-pattern" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedSection className="text-center mb-16">
          <h2 className="section-title">{t.contact.title}</h2>
          <p className="section-subtitle">{t.contact.subtitle}</p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Social Links */}
          <AnimatedSection direction="left">
            <div className="space-y-6">
              <h3 className="font-heading text-2xl font-bold text-charcoal">{t.contact.followUs}</h3>
              
              {/* Telegram */}
              <motion.a
                href="https://t.me/qplay_chess"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, x: 8 }}
                className="flex items-center gap-5 p-6 bg-cream-100 rounded-2xl hover:bg-burgundy-600 hover:text-white transition-colors duration-300 group"
              >
                <div className="w-14 h-14 bg-burgundy-600 group-hover:bg-white rounded-2xl flex items-center justify-center transition-colors">
                  <Send size={24} className="text-white group-hover:text-burgundy-600 transition-colors" />
                </div>
                <div>
                  <p className="font-semibold text-lg group-hover:text-white transition-colors">Telegram</p>
                  <p className="text-sm text-charcoal/50 group-hover:text-white/60 transition-colors">t.me/qplay_chess</p>
                </div>
              </motion.a>

              {/* Instagram */}
              <motion.a
                href="https://instagram.com/qplay.hq"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, x: 8 }}
                className="flex items-center gap-5 p-6 bg-cream-100 rounded-2xl hover:bg-burgundy-600 hover:text-white transition-colors duration-300 group"
              >
                <div className="w-14 h-14 bg-burgundy-600 group-hover:bg-white rounded-2xl flex items-center justify-center transition-colors">
                  <Instagram size={24} className="text-white group-hover:text-burgundy-600 transition-colors" />
                </div>
                <div>
                  <p className="font-semibold text-lg group-hover:text-white transition-colors">Instagram</p>
                  <p className="text-sm text-charcoal/50 group-hover:text-white/60 transition-colors">@qplay.hq</p>
                </div>
              </motion.a>

              {/* Fun fact */}
              <div className="p-6 bg-burgundy-600/5 rounded-2xl border border-burgundy-600/10">
                <p className="text-burgundy-600 font-heading text-lg font-semibold mb-1">♟ Fun fact</p>
                <p className="text-charcoal/60 text-sm">
                  {t.about.fact} {t.about.factHighlight}
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Right: Contact Form */}
          <AnimatedSection direction="right" delay={0.2}>
            <form className="bg-cream-100 rounded-3xl p-8 shadow-lg border border-burgundy-600/5">
              <div className="space-y-5">
                <div>
                  <label className="text-sm font-medium text-charcoal/60 mb-1.5 block">{t.contact.name}</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-charcoal/10 bg-white focus:border-burgundy-600 focus:ring-2 focus:ring-burgundy-600/20 outline-none transition-all"
                    placeholder={t.contact.name}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-charcoal/60 mb-1.5 block">{t.contact.email}</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-charcoal/10 bg-white focus:border-burgundy-600 focus:ring-2 focus:ring-burgundy-600/20 outline-none transition-all"
                    placeholder={t.contact.email}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-charcoal/60 mb-1.5 block">{t.contact.message}</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-charcoal/10 bg-white focus:border-burgundy-600 focus:ring-2 focus:ring-burgundy-600/20 outline-none transition-all resize-none"
                    placeholder={t.contact.message}
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary w-full flex items-center justify-center gap-2"
                >
                  <MessageCircle size={18} />
                  {t.contact.send}
                </motion.button>
              </div>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
