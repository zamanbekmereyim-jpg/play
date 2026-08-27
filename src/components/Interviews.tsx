'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/LanguageContext'
import AnimatedSection from './AnimatedSection'
import { Play, Eye } from 'lucide-react'

export default function Interviews() {
  const { t } = useLanguage()

  const gradients = [
    'from-burgundy-600 to-charcoal',
    'from-charcoal to-burgundy-800',
    'from-burgundy-500 to-burgundy-800',
  ]

  return (
    <section id="interviews" className="py-24 bg-white relative">
      <div className="absolute inset-0 chess-pattern" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedSection className="text-center mb-16">
          <h2 className="section-title">{t.interviews.title}</h2>
          <p className="section-subtitle">{t.interviews.subtitle}</p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.interviews.items.map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <motion.a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="card group cursor-pointer block"
              >
                {/* Image placeholder with gradient */}
                <div className={`relative h-64 bg-gradient-to-br ${gradients[i]} overflow-hidden`}>
                  {/* Exclusive tag */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-burgundy-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {t.interviews.tag}
                    </span>
                  </div>
                  
                  {/* Podcast icon */}
                  <div className="absolute top-4 right-4 z-10">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-burgundy-600 transition-colors">
                      <Play size={16} className="text-white group-hover:text-burgundy-600 ml-0.5 transition-colors" />
                    </div>
                  </div>

                  {/* Name overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-white font-heading text-xl font-bold">{item.name}</h3>
                    <p className="text-white/60 text-sm">{item.title}</p>
                  </div>

                  {/* Chess piece decorative */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/5 text-[150px] font-serif">
                    ♕
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-charcoal/60 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-charcoal/40 text-sm">
                      <Eye size={14} />
                      {item.views}
                    </div>
                    <span className="text-burgundy-600 text-sm font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      {t.interviews.watchNow} →
                    </span>
                  </div>
                </div>
              </motion.a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
