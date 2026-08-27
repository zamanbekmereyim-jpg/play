'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/LanguageContext'
import AnimatedSection from './AnimatedSection'
import { Trophy, Clock, Users, Calendar, ExternalLink } from 'lucide-react'

export default function Tournaments() {
  const { t } = useLanguage()

  return (
    <section id="tournaments" className="py-24 bg-charcoal relative overflow-hidden">
      <div className="absolute inset-0 chess-pattern-dark" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-burgundy-600/10 rounded-full blur-[120px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">{t.tournaments.title}</h2>
          <p className="text-lg text-white/40 max-w-2xl mx-auto">{t.tournaments.subtitle}</p>
        </AnimatedSection>

        {/* Featured Tournament */}
        <AnimatedSection delay={0.2}>
          <div className="bg-gradient-to-br from-burgundy-600 to-burgundy-800 rounded-3xl p-8 md:p-12 mb-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 text-white/5 text-[200px] leading-none font-serif">♔</div>
            
            <div className="relative">
              <span className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                {t.tournaments.status.upcoming}
              </span>
              
              <h3 className="font-heading text-3xl md:text-4xl font-bold text-white mb-8">
                {t.tournaments.featured.name}
              </h3>

              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {[
                  { icon: ExternalLink, label: t.tournaments.platform, value: t.tournaments.featured.platform },
                  { icon: Clock, label: t.tournaments.timeControl, value: t.tournaments.featured.timeControl },
                  { icon: Trophy, label: t.tournaments.prizePool, value: t.tournaments.featured.prizePool },
                  { icon: Users, label: t.tournaments.participants, value: t.tournaments.featured.participants },
                ].map((item, i) => (
                  <div key={i} className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                    <item.icon size={20} className="text-burgundy-200 mb-2" />
                    <p className="text-white/50 text-sm">{item.label}</p>
                    <p className="text-white font-semibold text-lg">{item.value}</p>
                  </div>
                ))}
              </div>

              <a
                href="https://t.me/qplay_chess"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-burgundy-600 font-semibold py-3.5 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                {t.tournaments.register} →
              </a>
            </div>
          </div>
        </AnimatedSection>

        {/* Past Tournaments */}
        <AnimatedSection delay={0.4}>
          <h3 className="font-heading text-2xl font-bold text-white mb-6">{t.tournaments.past}</h3>
          <div className="space-y-4">
            {t.tournaments.pastEvents.map((event, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 8 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 hover:bg-white/10 transition-colors"
              >
                <div>
                  <h4 className="text-white font-semibold text-lg">{event.name}</h4>
                  <div className="flex flex-wrap gap-4 mt-2 text-sm text-white/40">
                    <span className="flex items-center gap-1.5"><Calendar size={14} /> {event.date}</span>
                    <span className="flex items-center gap-1.5"><Users size={14} /> {event.participants} participants</span>
                    <span className="flex items-center gap-1.5"><Trophy size={14} /> {event.prizePool}</span>
                  </div>
                </div>
                <span className="text-sm font-semibold text-burgundy-400 bg-burgundy-600/20 px-4 py-1.5 rounded-full self-start">
                  {t.tournaments.status.completed}
                </span>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
