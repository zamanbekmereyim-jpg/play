'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/lib/LanguageContext'
import AnimatedSection from './AnimatedSection'

const galleryItems = [
  { id: 1, category: 'tournaments', gradient: 'from-burgundy-600 to-burgundy-800', aspect: 'aspect-square' },
  { id: 2, category: 'interviews', gradient: 'from-charcoal to-burgundy-700', aspect: 'aspect-[4/5]' },
  { id: 3, category: 'events', gradient: 'from-burgundy-500 to-charcoal', aspect: 'aspect-square' },
  { id: 4, category: 'tournaments', gradient: 'from-burgundy-700 to-charcoal-dark', aspect: 'aspect-[4/5]' },
  { id: 5, category: 'interviews', gradient: 'from-charcoal-light to-burgundy-600', aspect: 'aspect-square' },
  { id: 6, category: 'events', gradient: 'from-burgundy-800 to-charcoal', aspect: 'aspect-[4/5]' },
]

export default function Gallery() {
  const { t } = useLanguage()
  const [activeFilter, setActiveFilter] = useState('all')

  const filters = [
    { key: 'all', label: t.gallery.all },
    { key: 'tournaments', label: t.gallery.tournaments },
    { key: 'interviews', label: t.gallery.interviews },
    { key: 'events', label: t.gallery.events },
  ]

  const filtered = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter)

  return (
    <section id="gallery" className="py-24 bg-cream-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <h2 className="section-title">{t.gallery.title}</h2>
          <p className="section-subtitle">{t.gallery.subtitle}</p>
        </AnimatedSection>

        {/* Filter tabs */}
        <AnimatedSection delay={0.2} className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.key
                  ? 'bg-burgundy-600 text-white shadow-lg shadow-burgundy-600/30'
                  : 'bg-white text-charcoal/60 hover:bg-burgundy-600/10 hover:text-burgundy-600'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </AnimatedSection>

        {/* Gallery grid */}
        <motion.div layout className="columns-2 md:columns-3 gap-4 space-y-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
                transition={{ duration: 0.5 }}
                className={`break-inside-avoid ${item.aspect} bg-gradient-to-br ${item.gradient} rounded-2xl overflow-hidden cursor-pointer group relative`}
              >
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-burgundy-600/0 group-hover:bg-burgundy-600/30 transition-all duration-300 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <span className="text-burgundy-600 text-xl">+</span>
                  </motion.div>
                </div>
                {/* Chess piece watermark */}
                <div className="absolute bottom-3 right-3 text-white/10 text-4xl">♟</div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <AnimatedSection delay={0.3} className="text-center mt-12">
          <p className="text-charcoal/40 text-sm italic">📸 Photos coming soon — stay tuned!</p>
        </AnimatedSection>
      </div>
    </section>
  )
}
