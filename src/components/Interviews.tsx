'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/LanguageContext'
import AnimatedSection from './AnimatedSection'
import { Play, Eye } from 'lucide-react'

import Image from 'next/image'

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
                whileHover={{ y: -10 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-burgundy-900/15 transition-all duration-300 border border-charcoal/5 group cursor-pointer block"
              >
                {/* Image container with high quality photo */}
                <div className={`relative h-80 bg-gradient-to-br ${gradients[i]} overflow-hidden`}>
                  {item.image && (
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                    />
                  )}
                  
                  {/* Elegant dark gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/30 to-transparent" />

                  {/* Top badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="bg-burgundy-600/90 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                      {t.interviews.tag}
                    </span>
                    <div className="w-9 h-9 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-burgundy-600 group-hover:scale-110 transition-all duration-300 shadow-lg">
                      <Play size={14} className="text-white ml-0.5" />
                    </div>
                  </div>

                  {/* Name and Title overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                    <h3 className="text-white font-heading text-2xl font-bold leading-tight group-hover:text-burgundy-200 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-white/70 text-sm mt-1 font-medium">
                      {item.title}
                    </p>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <p className="text-charcoal/70 text-sm leading-relaxed mb-5 line-clamp-3">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-charcoal/5">
                    <div className="flex items-center gap-1.5 text-charcoal/40 text-xs font-medium">
                      <Eye size={14} className="text-burgundy-500" />
                      <span>{item.views} views</span>
                    </div>
                    <span className="text-burgundy-600 text-sm font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1.5">
                      {t.interviews.watchNow}
                      <span className="text-base leading-none">→</span>
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
